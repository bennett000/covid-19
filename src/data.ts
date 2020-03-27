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
} from './interfaces';
import {
  reverseDeathProjectionDefaults,
  projectionPalette,
  basePalette,
  totalString,
  worldString,
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

const recoveryDays = 25;

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

const urls = [
  // updated from previous deprecated files (https://github.com/CSSEGISandData/COVID-19/commit/203881b83c3820521f5af7cafb0d15367e415652)
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv',
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv',
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv',
];

export function fetchData(): Promise<{
  countries: SelectOptionsWithIndex[];
  dictionary: Dictionary<ITimeSeries>;
  timeSeries: ITimeSeriesArray;
}> {
  return Promise.all(urls.map(url => fetch(url)))
    .then(unwrapResponses)
    .then(convertAllCsvToStructured)
    .then(convertToCountryDictionary)
    .then(manuallyAdjust)
    .then(interpolateRecoveriesAndActiveCases)
    .then(sumAllRegions)
    .then(sumWorld)
    .then(toITimeSeries)
    .then(extractCountries);
}

function manuallyAdjust(dict: Dictionary<LocationSeries>) {
  // there will be some initial data that needs correction to keep things organized

  // there is no top level entry for Canadian confirmed cases or deaths, this minimal recovery data
  delete dict.CA;

  return dict;
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
  dataSets: JhuSet[]
): Dictionary<LocationSeries> {
  const dict: Dictionary<LocationSeries> = {};
  const createOnEach = (prop: TimeSeriesType) => c => {
    const countryCode = countriesToCodes[c.country];
    if (!countryCode) {
      log('country not found', c.country);
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
        log('state not found', c.coutry + ',', c.state);
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
          log('Warning: unexpected length:', prop);
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
}

export function getRecoveryDays(
  count: TimeSeriesCount,
  i: number,
  arr: TimeSeriesCount[],
  rdays
) {
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
      log('Warning: data seems odd, there are deaths but no confirmed cases');
    }
    if (count.recoveries) {
      log(
        'Warning: data seems odd, there are recoveries but no confirmed cases'
      );
    }
  }
  return 0;
}

export function interpolateRecoveriesAndActiveCases(
  dict: Dictionary<LocationSeries>
): Dictionary<LocationSeries> {
  objEach(dict, c => {
    c.counts.forEach((count, i, arr) => {
      count.recoveries = getRecoveryDays(count, i, arr, recoveryDays);
      count.active = count.confirmed - count.deaths - count.recoveries;
      count.projectionReverseDeath = reverseDeathProjection(count);
    });
  });
  return dict;
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

export function addCounts(a: TimeSeriesCount, b: TimeSeriesCount) {
  return {
    active: a.active + b.active,
    confirmed: a.confirmed + b.confirmed,
    deaths: a.deaths + b.deaths,
    recoveries: a.recoveries + b.recoveries,
    projectionReverseDeath: a.projectionReverseDeath + b.projectionReverseDeath,
  };
}

export function sumWorld(
  dict: Dictionary<LocationSeries>
): Dictionary<LocationSeries> {
  const world = {
    country: worldString,
    countryCode: worldString,
    dates: [],
    key: worldString,
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
    if (location.state && location.state !== totalString) {
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
  dict[worldString] = world;
  return dict;
}

export function sumAllRegions(
  dict: Dictionary<LocationSeries>
): Dictionary<LocationSeries> {
  objEach(dict, location => {
    if (location.state === totalString) {
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
      const totalKey = location.countryCode + '.' + totalString;
      if (dict[totalKey] === undefined) {
        dict[totalKey] = {
          ...location,
          key: totalKey,
          locale: '',
          population: getPopulation(location.country),
          populationDensity: getPopulationDensity(location.country),
          state: totalString,
          counts: [],
        };
      }
      location.counts.forEach((count, i) => {
        if (dict[totalKey].counts[i]) {
          dict[totalKey].counts[i] = addCounts(dict[totalKey].counts[i], count);
        } else {
          dict[totalKey].counts[i] = count;
        }
      });
    }
  });
  return dict;
}

function getPopulation(
  country: string,
  state?: string,
  locale?: string
): number {
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
  log('population not found for', country, state, locale);
  return 0;
}

function getStatePopulation(country: string, state?: string, locale?: string) {
  if (locale) {
    return 0;
  }
  if (manuallySourceStatePop[country]) {
    if (country === 'US') {
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

function unwrapResponses(responses: Response[]) {
  return Promise.all(responses.map(response => response.text()));
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

export function csvRowStringToJhuTimeSeriesHeadaer(
  rowString: string
): JhuTimeSeriesHeader {
  const cells = rowString.split(',');
  return cells.slice(4).map(item => new Date(item));
}

export function convertRowToTimeSeries(row: string[]): JhuTimeSeries {
  const country = row[1];
  const [locale, state] = stateToLocaleState(row[0]);
  const population = getPopulation(country, state, locale);
  const populationDensity = getPopulationDensity(country, state, locale);
  return {
    country,
    locale,
    population,
    populationDensity,
    state,
    timeSeries: row.slice(4).map(item => parseInt(item, 10)),
  };
}

export function convertStringArrayToStructured(rowString: string): JhuSet {
  const rows = rowString.split('\n');
  const header = csvRowStringToJhuTimeSeriesHeadaer(rows[0]);
  return [
    header,
    rows
      .slice(1)
      .map(csvRowStringToArray)
      .filter(row => row.length)
      .map(convertRowToTimeSeries),
  ];
}

function convertAllCsvToStructured(strings: string[]) {
  return strings.map(convertStringArrayToStructured);
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
      return '🤔 (Estimate)';
    default:
      return '😊 (Recovery)';
  }
}

export function selectData(cache: Dictionary<ChartSeries>, state: AppState) {
  return state.dataPromise.then(({ countries, timeSeries }) => {
    let selectedIndex = 0;
    return {
      countries,
      series: timeSeries.reduce((cs: ChartSeries[], ts) => {
        if (state.countryKeys.indexOf(ts.key()) > -1) {
          return selectDataByMode(cache, state, cs, ts, selectedIndex++);
        }
        return cs;
      }, []),
    };
  });
}

function selectDataByMode(
  cache: Dictionary<ChartSeries>,
  state: AppState,
  cs: ChartSeries[],
  ts: ITimeSeries,
  index: number
): ChartSeries[] {
  switch (state.lineGraphState.mode) {
    case 1:
      return selectDataByConfirmed(cache, state, cs, ts, index, 1);
    case 2:
      return selectDataByConfirmed(cache, state, cs, ts, index, 100);
    default:
      return selectDataByDate(cache, state, cs, ts, index);
  }
}

function selectDataByConfirmed(
  cache: Dictionary<ChartSeries>,
  state: AppState,
  cs: ChartSeries[],
  ts: ITimeSeries,
  index: number,
  count: number
) {
  const startDate = new Date(state.lineGraphState.startDate);

  state.lineGraphState.dataSetIndexes.forEach(dataSetIndex => {
    const field = getFieldFromIndex(dataSetIndex);
    const colour =
      dataSetIndex > 3
        ? projectionPalette[index % projectionPalette.length]
        : basePalette[index % basePalette.length];
    const line = { color: colour };
    const chart = {
      color: colour,
      line,
      name: getChartTypeFromIndex(dataSetIndex) + ' ' + ts.countryName(),
      points: [],
    };
    let fromDay0 = 0;
    chart.points = ts.counts().reduce((ps, c, i) => {
      if (ts.dates()[i] && ts.dates()[i] > startDate && c.confirmed >= count) {
        const y = getY(
          state.lineGraphState.byMetric,
          c[field],
          ts.population()
        );
        if (y) {
          ps.push({
            x: fromDay0,
            y,
          });
        }
        fromDay0 += 1;
      }
      return ps;
    }, []);
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
      return 'projectionReverseDeath';
    default:
      return 'recoveries';
  }
}

function selectDataByDate(
  cache: Dictionary<ChartSeries>,
  state: AppState,
  cs: ChartSeries[],
  ts: ITimeSeries,
  index: number
) {
  const startDate = new Date(state.lineGraphState.startDate);

  state.lineGraphState.dataSetIndexes.forEach(dataSetIndex => {
    const colour =
      dataSetIndex > 3
        ? projectionPalette[index % projectionPalette.length]
        : basePalette[index % basePalette.length];

    const field = getFieldFromIndex(dataSetIndex);
    const chart = {
      color: colour,
      line: { color: colour },
      name: getChartTypeFromIndex(dataSetIndex) + ' ' + ts.countryName(),
      points: [],
    };
    chart.points = ts.counts().reduce((ps, c, i) => {
      if (ts.dates()[i] && ts.dates()[i] > startDate) {
        const y = getY(
          state.lineGraphState.byMetric,
          c[field],
          ts.population()
        );
        if (y) {
          ps.push({
            x: ts.dates()[i],
            y,
          });
        }
      }
      return ps;
    }, []);
    cs.push(chart);
  });

  return cs;
}

function getY(byMetric: number, value: number, population: number): number {
  if (byMetric === 0) {
    return value;
  } else {
    if (population) {
      return value / population;
    } else {
      return 0;
    }
  }
}
