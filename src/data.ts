import {
  SelectOptionsWithIndex,
  ChartSeries,
  AppState,
  JhuTimeSeries,
  JhuTimeSeriesHeader,
  JhuSet,
  ITimeSeries,
  TimeSeriesType,
  ITimeSeriesArray,
  LocationSeries,
  TimeSeriesCount,
  ChartPoint,
  InputSeirState,
} from './interfaces';
import {
  reverseDeathProjectionDefaults,
  projectionPalette,
  basePalette,
  recoveryDays,
  jhuStartDay,
  twentyFourSeven,
  usaCode,
} from './constants';
import rawPopulationData from 'country-json/src/country-by-population.json';
import rawPopulationDensityData from 'country-json/src/country-by-population-density.json';
import { Dictionary, objReduce, objEach } from '@ch1/utility';
import {
  mapJhuCountryToPop,
  manuallySourcePop,
  usStateCodeByName,
  manuallySourceStatePop,
  countriesToCodes,
  statesToCodes,
} from './data-maps';
import { log } from './utility';
import {
  createTimeSeriesCount,
  TimeSeries,
  TimeSeriesArray,
} from './time-series';
import { Strings } from './i18n';
import { Seir } from './seir';

const populationDictionary: {
  [key: string]: number;
} = (rawPopulationData || []).reduce((p, node) => {
  p[node.country] = parseInt(node.population, 10);
  return p;
}, {});

const populationDensityDictionary: {
  [key: string]: number;
} = (rawPopulationDensityData || []).reduce((p, node) => {
  p[node.country] = node.density === null ? null : parseInt(node.density, 10);
  return p;
}, {});

const jhuUrls = [
  // updated from previous deprecated files (https://github.com/CSSEGISandData/COVID-19/commit/203881b83c3820521f5af7cafb0d15367e415652)
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv',
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv',
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv',
];

const nytUrl =
  'https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-states.csv';

export function fetchData(
  strings: Strings
): Promise<{
  countries: SelectOptionsWithIndex[];
  dictionary: Dictionary<ITimeSeries>;
  timeSeries: ITimeSeriesArray;
}> {
  return Promise.all([
    Promise.all(jhuUrls.map(url => fetch(url)))
      .then(unwrapResponses)
      .then(convertAllJhuCsvToStructured(strings))
      .then(convertToCountryDictionary(strings))
      .then(manuallyAdjust),
    fetch(nytUrl)
      .then(unwrapResponse)
      .then(convertNytCsvToStructured),
  ])
    .then(mergeNytIntoJhu)
    .then(interpolateRecoveriesActiveCasesAndNewProps(strings))
    .then(sumAllRegions(strings))
    .then(sumWorld(strings))
    .then(toITimeSeries)
    .then(extractCountries);
}

function manuallyAdjust(dict: Dictionary<LocationSeries>) {
  // there will be some initial data that needs correction to keep things organized

  // there is no top level entry for Canadian confirmed cases or deaths, this minimal recovery data
  delete dict.CA;

  return dict;
}

function mergeNytIntoJhu([jhu, nyt]: [
  Dictionary<LocationSeries>,
  Dictionary<LocationSeries>
]): Dictionary<LocationSeries> {
  objEach(nyt, (el, key) => {
    if (jhu[key] === undefined) {
      jhu[key] = el;
    }
  });
  return jhu;
}

export function toITimeSeries(dict: Dictionary<LocationSeries>) {
  const dictionary: Dictionary<ITimeSeries> = {};
  const timeSeries = objReduce(
    dict,
    (arr, location, key) => {
      if (location.locale) {
        return arr;
      }
      const ts = TimeSeries.create(location);
      arr.push(ts);
      dictionary[key] = ts;
      return arr;
    },
    TimeSeriesArray.create()
  );
  return { dictionary, timeSeries };
}

export function convertToCountryDictionary(
  strings: Strings
): (dataSets: JhuSet[]) => Dictionary<LocationSeries> {
  return (dataSets: JhuSet[]) => {
    const dict: Dictionary<LocationSeries> = {};
    const createOnEach = (prop: TimeSeriesType) => c => {
      const countryCode = countriesToCodes[c.country];
      if (!countryCode) {
        log(strings.data.log.countryNotFound, c.country);
        return;
      }
      let code = countryCode;
      let stateCode = '';
      if (c.state) {
        const states = statesToCodes[c.country];
        if (!states) {
          // don't bother logging these
          return;
        }
        stateCode = states[c.state];
        if (!stateCode) {
          log(strings.data.log.stateNotFound, c.country + ',', c.state);
          return;
        }
        code = code + '.' + stateCode;
      }
      if (c.locale) {
        code = code + '.' + c.locale;
      }
      if (dict[code]) {
        c.timeSeries.map((value, i) => {
          if (dict[code].counts[i] === undefined) {
            log(strings.data.log.unexpectedLength, prop);
            dict[code].counts[i] = createTimeSeriesCount();
          }
          dict[code].counts[i][prop] = value;
        });
      } else {
        dict[code] = {
          country: c.country,
          countryCode,
          counts: c.timeSeries.map(value => {
            const tsc = createTimeSeriesCount();
            tsc[prop] = value;
            return tsc;
          }),
          dates: dataSets[0][0],
          key: code,
          locale: c.locale,
          population: c.population,
          populationDensity: c.populationDensity,
          state: c.state,
          stateCode,
        };
      }
    };

    dataSets[0][1].forEach(createOnEach('confirmed'));
    dataSets[1][1].forEach(createOnEach('deaths'));
    dataSets[2][1].forEach(createOnEach('recoveries'));

    return dict;
  };
}

export function getRecoveryDays(strings: Strings) {
  return (count: TimeSeriesCount, i: number, arr: TimeSeriesCount[], rdays) => {
    if (count.confirmed) {
      if (count.recoveries < 1) {
        if (arr[i - rdays]) {
          if (arr[i - rdays - 1]) {
            const rprev = arr[i - rdays - 1].confirmed;
            const rcurr = arr[i - rdays].confirmed;
            const diff = rcurr - rprev;

            if (arr[i - 1]) {
              return diff + arr[i - 1].recoveries;
            } else {
              return diff;
            }
          }
        }
      } else {
        return count.recoveries;
      }
    } else {
      if (count.deaths) {
        log(strings.data.log.deathNoConfirmed);
      }
      if (count.recoveries) {
        log(strings.data.log.recoveryNoConfirmed);
      }
    }
    return 0;
  };
}

export function interpolateRecoveriesActiveCasesAndNewProps(
  strings: Strings
): (d: Dictionary<LocationSeries>) => Dictionary<LocationSeries> {
  return (dict: Dictionary<LocationSeries>) => {
    objEach(dict, c => {
      c.counts.forEach((count, i, arr) => {
        count.recoveries = getRecoveryDays(strings)(
          count,
          i,
          arr,
          recoveryDays
        );
        count.active = count.confirmed - count.deaths - count.recoveries;
        count.projectionReverseDeath = reverseDeathProjection(count);
        count.newConfirmed =
          count.confirmed - (arr[i - 1] ? arr[i - 1].confirmed || 0 : 0);
        count.newDeaths =
          count.deaths - (arr[i - 1] ? arr[i - 1].deaths || 0 : 0);
      });
    });
    return dict;
  };
}

export function reverseDeathProjection(day: TimeSeriesCount) {
  // projection is based on https://medium.com/@tomaspueyo/coronavirus-act-today-or-people-will-die-f4d3d9cd99ca
  // https://docs.google.com/spreadsheets/d/1R25ygRLahhSNP2N-lnas_9a9aRWGCtAt3_sCYDoRyAU/edit#gid=0
  const deaths = day.deaths;
  const numberOfCasesCausingDeath =
    deaths / reverseDeathProjectionDefaults.fatalityRate;
  const numberOfDoubles =
    reverseDeathProjectionDefaults.daysFromInfectionToDeath /
    reverseDeathProjectionDefaults.doublingTime;

  return numberOfCasesCausingDeath * Math.pow(2, numberOfDoubles);
}

export function addCounts(
  a: TimeSeriesCount,
  b: TimeSeriesCount
): TimeSeriesCount {
  return {
    active: a.active + b.active,
    confirmed: a.confirmed + b.confirmed,
    deaths: a.deaths + b.deaths,
    newConfirmed: a.newConfirmed + b.newConfirmed,
    newDeaths: a.newDeaths + b.newDeaths,
    recoveries: a.recoveries + b.recoveries,
    projectionReverseDeath: a.projectionReverseDeath + b.projectionReverseDeath,
  };
}

export function sumWorld(
  strings: Strings
): (d: Dictionary<LocationSeries>) => Dictionary<LocationSeries> {
  return (dict: Dictionary<LocationSeries>) => {
    const world = {
      country: strings.countries.world,
      countryCode: strings.countries.world,
      dates: Object.keys(generateDateDictionary()).map(ds => new Date(ds)),
      key: strings.countries.world,
      locale: '',
      population: 0,
      populationDensity: 0,
      state: '',
      stateCode: '',
      counts: [],
    };
    objEach(dict, location => {
      if (location.locale) {
        return;
      }
      if (location.state && location.state !== strings.countries.total) {
        return;
      }
      world.population += location.population;
      location.counts.forEach((count, i) => {
        if (world.counts[i]) {
          world.counts[i] = addCounts(world.counts[i], count);
        } else {
          world.counts[i] = {
            ...count,
          };
        }
      });
    });
    dict[strings.countries.world] = world;
    return dict;
  };
}

export function sumAllRegions(
  strings: Strings
): (d: Dictionary<LocationSeries>) => Dictionary<LocationSeries> {
  return (dict: Dictionary<LocationSeries>) => {
    objEach(dict, location => {
      if (location.state === strings.countries.total) {
        // skip totals
        return;
      }
      if (location.state) {
        if (location.locale) {
          // re-implement US addition?
          return;
        }
        if (dict[location.countryCode]) {
          // skip if there's already a total like in UK's case
          return;
        }
        const totalKey = location.countryCode + '.' + strings.countries.total;
        if (dict[totalKey] === undefined) {
          dict[totalKey] = {
            ...location,
            key: totalKey,
            locale: '',
            population: getPopulation(strings)(location.country),
            populationDensity: getPopulationDensity(location.country),
            state: strings.countries.total,
            counts: [],
          };
        }
        location.counts.forEach((count, i) => {
          if (dict[totalKey].counts[i]) {
            dict[totalKey].counts[i] = addCounts(
              dict[totalKey].counts[i],
              count
            );
          } else {
            dict[totalKey].counts[i] = count;
          }
        });
      }
    });
    return dict;
  };
}

function getPopulation(
  strings: Strings
): (country: string, state?: string, locale?: string) => number {
  return (country: string, state?: string, locale?: string) => {
    if (locale) {
      return 0;
    }
    if (state) {
      return getStatePopulation(country, state, locale);
    }
    let population = populationDictionary[country];
    if (population) {
      return population;
    }
    population = populationDictionary[mapJhuCountryToPop[country]];
    if (population) {
      return population;
    }
    population = manuallySourcePop[country];
    if (population) {
      return population;
    }
    log(strings.data.log.populationNotFound, country, state, locale);
    return 0;
  };
}

function getStatePopulation(country: string, state?: string, locale?: string) {
  if (locale) {
    return 0;
  }
  if (manuallySourceStatePop[country]) {
    if (country === usaCode) {
      const rawStateCode = usStateCodeByName[state];
      if (rawStateCode) {
        const stateCode = rawStateCode === 'D.C.' ? 'DC' : rawStateCode;
        if (manuallySourceStatePop[country][stateCode]) {
          return manuallySourceStatePop[country][stateCode];
        }
      }
    } else {
      if (manuallySourceStatePop[country][state]) {
        return manuallySourceStatePop[country][state];
      }
    }
  }
  return 0;
}

function getPopulationDensity(
  country: string,
  state?: string,
  locale?: string
): number {
  if (state || locale) {
    return 0;
  }
  let populationDensity = populationDensityDictionary[country];
  if (populationDensity) {
    return populationDensity;
  }
  populationDensity = populationDensityDictionary[mapJhuCountryToPop[country]];
  if (populationDensity) {
    return populationDensity;
  }
  return 0;
}

function unwrapResponse(response: Response) {
  return response.text();
}

function unwrapResponses(responses: Response[]) {
  return Promise.all(responses.map(unwrapResponse));
}

export function csvRowStringToArray(csvRow: string): string[] {
  const chars = csvRow.split('');

  const state = {
    buffer: '',
    isEscape: false,
    isInQuote: false,
  };

  const toggleQuoteState = () => {
    if (state.isInQuote) {
      state.isInQuote = false;
    } else {
      state.isInQuote = true;
    }
  };

  const toggleEscape = () => {
    if (state.isEscape) {
      state.isEscape = false;
    } else {
      state.isEscape = true;
    }
  };

  return chars.reduce((arr: any[], el: string, i: number, c: string[]) => {
    if (el === '"') {
      if (state.isEscape) {
        state.buffer += el;
        toggleEscape();
      } else {
        toggleQuoteState();
      }
      return arr;
    }
    if (el === '\\') {
      if (state.isEscape) {
        state.buffer += el;
        toggleEscape();
      } else {
        toggleEscape();
      }
      return arr;
    }
    if (el === ',') {
      if (state.isInQuote) {
        state.buffer += el;
      } else {
        arr.push(state.buffer);
        state.buffer = '';
      }
      return arr;
    }
    state.buffer += el;
    if (i === c.length - 1) {
      arr.push(state.buffer);
      state.buffer = '';
    }
    return arr;
  }, []);
}

export function stateToLocaleState(string: string) {
  if (string.indexOf(',') > -1) {
    const split = string.split(',').filter(Boolean);
    return [split[0].trim(), split[1].trim()];
  } else {
    return ['', string];
  }
}

export function csvRowStringToJhuTimeSeriesHeader(
  rowString: string
): JhuTimeSeriesHeader {
  const cells = rowString.split(',');
  return cells.slice(4).map(item => new Date(item));
}

export function convertRowToTimeSeries(
  strings: Strings
): (row: string[]) => JhuTimeSeries {
  return (row: string[]) => {
    const country = row[1];
    const [locale, state] = stateToLocaleState(row[0]);
    const population = getPopulation(strings)(country, state, locale);
    const populationDensity = getPopulationDensity(country, state, locale);
    return {
      country,
      locale,
      population,
      populationDensity,
      state,
      timeSeries: row.slice(4).map(item => parseInt(item, 10)),
    };
  };
}

export function convertStringArrayToStructured(
  strings: Strings
): (rowString: string) => JhuSet {
  return (rowString: string) => {
    const rows = rowString.split('\n');
    const header = csvRowStringToJhuTimeSeriesHeader(rows[0]);
    return [
      header,
      rows
        .slice(1)
        .map(csvRowStringToArray)
        .filter(row => row.length)
        .map(convertRowToTimeSeries(strings)),
    ];
  };
}

function convertAllJhuCsvToStructured(strings: Strings) {
  return (csvStrings: string[]) => {
    return csvStrings.map(convertStringArrayToStructured(strings));
  };
}

function sortNytRows(rows: string[][]) {
  rows.sort((a, b) => {
    if (a[0] < b[0]) {
      return -1;
    }
    if (a[0] > b[0]) {
      return 1;
    }
    return 0;
  });
  return rows;
}

function simplePad(number: number): string {
  if (number < 10) {
    return '0' + number;
  }
  return number + '';
}

export function generateDateDictionary(): Dictionary<number> {
  const day0 = new Date(jhuStartDay).getTime();
  const now = Date.now() - twentyFourSeven;
  const days = Math.floor((now - day0) / 1000 / 60 / 60 / 24);
  const dict: Dictionary<number> = {};

  for (let i = 0; i < days; i += 1) {
    const today = new Date(day0 + i * twentyFourSeven);
    const year = today.getUTCFullYear();
    const month = simplePad(today.getUTCMonth() + 1);
    const date = simplePad(today.getUTCDate());
    const todayString = `${year}-${month}-${date}`;
    dict[todayString] = i;
  }

  return dict;
}

export function nytRowsToDict(
  rows: string[][]
): Dictionary<Dictionary<TimeSeriesCount>> {
  const dict: Dictionary<Dictionary<TimeSeriesCount>> = {};
  rows.forEach(row => {
    if (!row[0] || !row[1]) {
      return;
    }

    const stateCode = usStateCodeByName[row[1]];
    if (!stateCode) {
      return;
    }
    const key = keyFromUsState(stateCode);

    if (dict[row[0]] === undefined) {
      dict[row[0]] = {};
    }

    if (dict[row[0]][key] === undefined) {
      dict[row[0]][key] = createTimeSeriesCount();
    }

    if (row[3]) {
      dict[row[0]][key].confirmed = parseInt(row[3], 10);
    }

    if (row[4]) {
      dict[row[0]][key].deaths = parseInt(row[4], 10);
    }
  });
  return dict;
}

function convertNytTimeSeriesDictToStateDict(
  byTime: Dictionary<Dictionary<TimeSeriesCount>>
): [Date[], Dictionary<TimeSeriesCount[]>] {
  const byState: Dictionary<TimeSeriesCount[]> = {};

  // account for JHU D.C. code
  const states = Object.keys(statesToCodes.US).filter(code => {
    if (code === 'D.C.') {
      return false;
    }
    return true;
  });
  const dateDict = generateDateDictionary();
  const dates: Date[] = [];
  objEach(dateDict, (timeSeriesIndex, dateString) => {
    dates.push(new Date(dateString));
    states.forEach(stateCode => {
      const key = keyFromUsState(stateCode);

      if (byState[key] === undefined) {
        byState[key] = [];
      }

      if (byTime[dateString] && byTime[dateString][key]) {
        byState[key][timeSeriesIndex] = byTime[dateString][key];
      } else {
        const last = byState[key][timeSeriesIndex - 1];
        if (last) {
          byState[key][timeSeriesIndex] = {
            ...last,
          };
        } else {
          byState[key][timeSeriesIndex] = createTimeSeriesCount();
        }
      }
    });
  });
  return [dates, byState];
}

function convertNytCsvToStructured(string: string): Dictionary<LocationSeries> {
  const rows = sortNytRows(
    string
      .split('\n')
      .slice(1)
      .map(csvRowStringToArray)
  );

  const timeSeriesDict = nytRowsToDict(rows);
  const [dates, byState] = convertNytTimeSeriesDictToStateDict(timeSeriesDict);
  const dict: Dictionary<LocationSeries> = {};

  objEach(byState, (counts, key) => {
    const stateCode = key.split('.')[1];
    const state = statesToCodes.US[stateCode];
    dict[key] = {
      country: usaCode,
      countryCode: usaCode,
      dates,
      key,
      locale: '',
      population: getStatePopulation(usaCode, state),
      populationDensity: getPopulationDensity(usaCode, state),
      state,
      stateCode,
      counts,
    };
  });

  return dict;
}

function extractCountries({
  dictionary,
  timeSeries,
}: {
  dictionary: Dictionary<ITimeSeries>;
  timeSeries: ITimeSeriesArray;
}) {
  const countries = objReduce(
    dictionary,
    (arr, location, key) => {
      if (location.locale()) {
        return arr;
      }
      const name = location.countryName();
      arr.push({ index: key, name });
      return arr;
    },
    []
  ).sort(sortByProp('name'));

  return { countries, dictionary, timeSeries };
}

function sortByProp(prop: string) {
  return (a: any, b: any) => {
    if (a[prop] < b[prop]) {
      return -1;
    }
    if (a[prop] > b[prop]) {
      return 1;
    }
    return 0;
  };
}

/** @todo i18n string data */
function getChartTypeFromIndex(index: number) {
  switch (index) {
    case 0:
      return '😷 (Active)';
    case 1:
      return '✔ (Confirmed)';
    case 2:
      return '☠ (Deaths)';
    case 3:
      return '😊 (Recoveries)';
    case 4:
      return '😷 (New Active)';
    case 5:
      return '☠ (New Deaths)';
    case 6:
      return '🤔 (Estimate)';
    case 7:
      return '😷 (SEIR Active)';
    case 8:
      return '☠ (SEIR Deaths)';
    case 9:
      return '😊 (SEIR Recoveries)';
    default:
      return '😊 (Recovery)';
  }
}

function getTimeVsCountsSeries(
  cache: Dictionary<ChartSeries>,
  state: AppState,
  timeSeries: ITimeSeriesArray
) {
  let selectedIndex = 0;
  return timeSeries.reduce((cs: ChartSeries[], ts) => {
    if (state.countryKeys.indexOf(ts.key()) > -1) {
      return selectTimeVsCountsDataByMode(
        cache,
        state,
        cs,
        ts,
        selectedIndex++
      );
    }
    return cs;
  }, []);
}

function getConfirmedVsRecentSeries(
  cache: Dictionary<ChartSeries>,
  state: AppState,
  timeSeries: ITimeSeriesArray
) {
  let selectedIndex = 0;
  return timeSeries.reduce((cs: ChartSeries[], ts) => {
    if (state.countryKeys.indexOf(ts.key()) > -1) {
      return selectConfirmedVsRecentData(cache, state, cs, ts, selectedIndex++);
    }
    return cs;
  }, []);
}

export function selectData(cache: Dictionary<ChartSeries>, state: AppState) {
  return state.dataPromise.then(({ countries, timeSeries }) => {
    let series: ChartSeries[];
    if (state.routePath === '/') {
      series = getTimeVsCountsSeries(cache, state, timeSeries);
    } else {
      series = getConfirmedVsRecentSeries(cache, state, timeSeries);
    }
    return {
      countries,
      series,
    };
  });
}

function selectConfirmedVsRecentData(
  cache: Dictionary<ChartSeries>,
  state: AppState,
  cs: ChartSeries[],
  ts: ITimeSeries,
  index: number
) {
  const recent = 7;
  const colour = basePalette[index % basePalette.length];
  const chart = {
    color: colour,
    line: { color: colour },
    name: ts.countryName(),
    points: [],
  };
  const yMin = 1;
  const xMin = 100;

  for (let i = ts.counts().length - 1; i > recent; i -= 1) {
    const count = ts.counts()[i];
    const recentDaysAgo = ts.counts()[i - recent] || createTimeSeriesCount();
    const y = count.confirmed - recentDaysAgo.confirmed || yMin;
    if (count.confirmed < xMin) {
      continue;
    }
    chart.points.push({
      x: count.confirmed,
      y,
    });
  }
  chart.points = chart.points.reverse();

  cs.push(chart);

  return cs;
}

function selectTimeVsCountsDataByMode(
  cache: Dictionary<ChartSeries>,
  state: AppState,
  cs: ChartSeries[],
  ts: ITimeSeries,
  index: number
): ChartSeries[] {
  switch (state.timeVsCountsState.mode) {
    case 1:
      return selectTimeVsCountsDataByConfirmed(cache, state, cs, ts, index, 1);
    case 2:
      return selectTimeVsCountsDataByConfirmed(
        cache,
        state,
        cs,
        ts,
        index,
        100
      );
    default:
      return selectTimeVsCountsDataByDate(cache, state, cs, ts, index);
  }
}

function createSelectTimeVsCountsChart(
  dataSetIndex: number,
  index: number,
  ts: ITimeSeries
) {
  const field = getFieldFromIndex(dataSetIndex);
  const colour =
    dataSetIndex > 5
      ? projectionPalette[index % projectionPalette.length]
      : basePalette[index % basePalette.length];
  const line = { color: colour };
  const type = dataSetIndex === 4 || dataSetIndex === 5 ? 'column' : undefined;
  const chart = {
    color: colour,
    line,
    name: getChartTypeFromIndex(dataSetIndex) + ' ' + ts.countryName(),
    points: [],
    type,
  };

  return { chart, field };
}

export function createToolTip(
  ts: ITimeSeries,
  dataSetIndex: number,
  day: number,
  fromDay0 = -1,
  isProjection = false
) {
  const fp = (num: number) =>
    (num < 0.01 ? num.toFixed(6) : num.toFixed(2)).toLocaleString();
  const header =
    (isProjection ? '<b><i>*** PROJECTION ***</i><br/>' : '') +
    (fromDay0 < 0
      ? `<b>${ts.formatName()}</b> ` + ts.dates()[day].toLocaleDateString()
      : `<b>${ts.formatName()} Day ` +
        fromDay0 +
        '</b> (' +
        ts.dates()[day].toLocaleDateString() +
        ')') +
    '<br/> Population ' +
    ts.population().toLocaleString() +
    (ts.populationDensity() ? ` (${ts.populationDensity()}/km2)` : '');

  return (
    header +
    '<br/><br/>' +
    [
      {
        index: 0,
        label: `Active ${ts.counts()[day].active.toLocaleString()} (${fp(
          (ts.counts()[day].active / ts.population()) * 100
        )} %)`,
      },
      {
        index: 1,
        label: `Confirmed ${ts.counts()[day].confirmed.toLocaleString()} (${fp(
          (ts.counts()[day].confirmed / ts.population()) * 100
        )} %)`,
      },
      {
        index: 2,
        label: `Deaths ${ts.counts()[day].deaths.toLocaleString()} (${fp(
          (ts.counts()[day].deaths / ts.population()) * 100
        )} %)`,
      },
      {
        index: 3,
        label: `Recoveries ${ts
          .counts()
          [day].recoveries.toLocaleString()} (${fp(
          (ts.counts()[day].recoveries / ts.population()) * 100
        )} %)`,
      },
    ]
      .sort((a, b) => {
        if (a.index === dataSetIndex) {
          return -1;
        }
        if (b.index === dataSetIndex) {
          return 1;
        }
        if (a.label < b.label) {
          return -1;
        }
        if (a.label > b.label) {
          return 1;
        }
        return 0;
      })
      .map(({ label }, i) => (i === 0 ? `<b>${label}</b>` : label))
      .join('<br/>') +
    '<br/><br/>' +
    [
      `New Cases: <b>${ts.counts()[day].newConfirmed.toLocaleString()}</b>`,
      `New Deaths: <b>${ts.counts()[day].newDeaths.toLocaleString()}</b>`,
    ].join('<br/>')
  );
}

function createSelectTimeVsCountsByConfirmedReducer(
  ts: ITimeSeries,
  state: AppState,
  field: string,
  startDate: Date,
  count: number,
  dataSetIndex: number
) {
  let fromDay0 = 0;
  return (ps, c, i) => {
    if (ts.dates()[i] && ts.dates()[i] > startDate && c.confirmed >= count) {
      const y = getY(
        state.timeVsCountsState.byMetric,
        c[field],
        ts.population()
      );
      if (y) {
        ps.push({
          tooltip: createToolTip(ts, dataSetIndex, i, fromDay0),
          x: fromDay0,
          y,
        });
      }
      fromDay0 += 1;
    }
    return ps;
  };
}

function projectPoints(
  projections: {
    active: ChartPoint[];
    deaths: ChartPoint[];
    recoveries: ChartPoint[];
  },
  dataSetIndex: number,
  chart: any
): boolean {
  if (dataSetIndex === 7) {
    chart.points = projections.active;
    return true;
  }
  if (dataSetIndex === 8) {
    chart.points = projections.deaths;
    return true;
  }
  if (dataSetIndex === 9) {
    chart.points = projections.recoveries;
    return true;
  }
  return false;
}

function selectTimeVsCountsDataByConfirmed(
  cache: Dictionary<ChartSeries>,
  state: AppState,
  cs: ChartSeries[],
  ts: ITimeSeries,
  index: number,
  count: number
) {
  const startDate = new Date(state.timeVsCountsState.startDate);

  const projectionsSeir = createSeirPoints(
    state.seirState,
    ts,
    ts.counts().reduce((index, el, i, arr) => {
      if (index !== -1) {
        return index;
      }
      if (el.confirmed >= count) {
        return arr.length - i - 1;
      }
      return index;
    }, -1),
    state.timeVsCountsState.byMetric
  );

  state.timeVsCountsState.dataSetIndexes.forEach(dataSetIndex => {
    const { chart, field } = createSelectTimeVsCountsChart(
      dataSetIndex,
      index,
      ts
    );
    if (projectPoints(projectionsSeir, dataSetIndex, chart)) {
      cs.push(chart);
      return;
    }
    chart.points = ts
      .counts()
      .reduce(
        createSelectTimeVsCountsByConfirmedReducer(
          ts,
          state,
          field,
          startDate,
          count,
          dataSetIndex
        ),
        []
      );
    cs.push(chart);
  });

  return cs;
}

function getFieldFromIndex(index: number): TimeSeriesType {
  switch (index) {
    case 0:
      return 'active';
    case 1:
      return 'confirmed';
    case 2:
      return 'deaths';
    case 3:
      return 'recoveries';
    case 4:
      return 'newConfirmed';
    case 5:
      return 'newDeaths';
    case 6:
      return 'projectionReverseDeath';
    default:
      return 'recoveries';
  }
}

function createSelectTimeVsCountsByDateReducer(
  ts: ITimeSeries,
  state: AppState,
  field: string,
  startDate: Date,
  dataSetIndex: number
) {
  return (ps, c, i) => {
    if (ts.dates()[i] && ts.dates()[i] > startDate) {
      const y = getY(
        state.timeVsCountsState.byMetric,
        c[field],
        ts.population()
      );
      if (y) {
        ps.push({
          tooltip: createToolTip(ts, dataSetIndex, i),
          x: ts.dates()[i],
          y,
        });
      }
    }
    return ps;
  };
}

function deduceLastR0(timeSeries: ITimeSeries, depth = 3) {
  const activeTolerance = 50;
  if (timeSeries.counts().length < 2 + depth) {
    return Seir.r0;
  }
  const last = timeSeries.counts()[timeSeries.counts().length - 1 - depth];
  const secondLast = timeSeries.counts()[
    timeSeries.counts().length - 2 - depth
  ];
  const seir = Seir.create(
    timeSeries.population(),
    secondLast.active,
    secondLast.deaths
  );

  const step = 0.1;
  let delta = Infinity;
  seir.R0 = 3.5;

  while (Math.abs(delta) > activeTolerance) {
    const [_, __, ___, ____, active] = seir.getSolution(3).P[2];
    if (active > last.active + activeTolerance) {
      seir.R0 -= step;
      continue;
    }
    if (active < last.active - activeTolerance) {
      break;
    }
    if (active < last.active) {
      break;
    }
    seir.R0 -= step;
  }

  if (depth <= 1) {
    return seir.R0;
  }

  return (seir.R0 + deduceLastR0(timeSeries, depth - 1)) / 2;
}

function createSeirPoints(
  state: InputSeirState,
  ts: ITimeSeries,
  fromDay0: number,
  byMetric: number
) {
  const seir = Seir.create(ts.population(), ts.lastActive(), ts.lastDeaths());

  seir.R0 = state.r0;
  seir.incubationPeriod = state.incubationPeriod;
  seir.durationOfInfection = state.durationOfInfection;
  seir.fatalityRate = state.fatalityRate;
  seir.timeFromIncubationToDeath = state.timeFromIncubationToDeath;
  seir.lengthOfSevereHospitalStay = state.lengthOfSevereHospitalStay;
  seir.recoveryTimeForMildCases = state.recoveryTimeForMildCases;
  seir.hospitalizationRate = state.hospitalizationRate;
  seir.timeFromIncubationToHospital = state.timeFromIncubationToHospital;

  const dates = ts.dates();
  const start = dates[dates.length - 1]
    ? dates[dates.length - 1].getTime()
    : new Date(jhuStartDay).getTime();

  const solution = seir.getSolution(state.daysToProject, (s, r, i) => {
    if (i > 0 && i < 2) {
      const lastR0 = deduceLastR0(ts);
      if (lastR0 > 1.6) {
        s.R0 = lastR0 - 0.01;
      } else {
        s.R0 = lastR0 - 0.55;
      }
    }
    if (i > 1) {
      if (s.R0 > 0.5) {
        if (s.R0 > 1.6) {
          s.R0 -= 0.3;
        } else {
          s.R0 -= 0.01;
        }
      }
    }
  });
  const max = solution.P.length < 35 ? solution.P.length : 35;
  const active: ChartPoint[] = [];
  const deaths: ChartPoint[] = [];
  const recoveries: ChartPoint[] = [];
  const newCounts: TimeSeriesCount[] = [];
  const newDates: Date[] = [];

  for (let i = 1; i < max; i += 1) {
    const lastCount =
      newCounts[newCounts.length - 1] ||
      ts.counts()[ts.counts().length - 1] ||
      createTimeSeriesCount();
    const count = createTimeSeriesCount();

    count.active = solution.P[i][4];
    count.newConfirmed = count.active - lastCount.active;
    count.confirmed = lastCount.confirmed + count.active - lastCount.active;
    count.deaths = solution.P[i][0];
    count.newDeaths = count.deaths - lastCount.deaths;
    count.recoveries = solution.P[i][2];
    newCounts.push(count);

    const lastDate =
      newDates[newDates.length - 1] || dates[dates.length - 1] || new Date();
    newDates.push(new Date(lastDate.getTime() + (i > 1 ? twentyFourSeven : 0)));

    const projectionTs = ts.cloneAndAdd(newCounts, newDates);
    const x =
      fromDay0 === -1
        ? new Date(start + (i - 1) * twentyFourSeven)
        : fromDay0 + i - 1;
    active.push({
      tooltip: createToolTip(
        projectionTs,
        0,
        projectionTs.counts().length - 1,
        fromDay0 === -1 ? -1 : fromDay0 + i - 1,
        true
      ),
      x,
      y: byMetric === 0 ? count.active : (count.active / ts.population()) * 100,
    });
    deaths.push({
      tooltip: createToolTip(
        projectionTs,
        2,
        projectionTs.counts().length - 1,
        fromDay0,
        true
      ),
      x,
      y: byMetric === 0 ? count.deaths : (count.deaths / ts.population()) * 100,
    });
    recoveries.push({
      tooltip: createToolTip(
        projectionTs,
        3,
        projectionTs.counts().length - 1,
        fromDay0,
        true
      ),
      x,
      y:
        byMetric === 0
          ? count.recoveries
          : (count.recoveries / ts.population()) * 100,
    });
  }

  return { active, deaths, recoveries };
}

function selectTimeVsCountsDataByDate(
  cache: Dictionary<ChartSeries>,
  state: AppState,
  cs: ChartSeries[],
  ts: ITimeSeries,
  index: number
) {
  const startDate = new Date(state.timeVsCountsState.startDate);

  const projectionsSeir = createSeirPoints(
    state.seirState,
    ts,
    -1,
    state.timeVsCountsState.byMetric
  );

  state.timeVsCountsState.dataSetIndexes.forEach(dataSetIndex => {
    const { chart, field } = createSelectTimeVsCountsChart(
      dataSetIndex,
      index,
      ts
    );
    if (projectPoints(projectionsSeir, dataSetIndex, chart)) {
      cs.push(chart);
      return;
    }
    chart.points = ts
      .counts()
      .reduce(
        createSelectTimeVsCountsByDateReducer(
          ts,
          state,
          field,
          startDate,
          dataSetIndex
        ),
        []
      );
    cs.push(chart);
  });

  return cs;
}

function getY(byMetric: number, value: number, population: number): number {
  if (byMetric === 0) {
    return value;
  } else {
    if (population) {
      return (value / population) * 100;
    } else {
      return 0;
    }
  }
}

function keyFromUsState(code: string) {
  return usaCode + '.' + code;
}
