import {
  SelectOptionsWithIndex,
  ChartPoint,
  ChartSeries,
  AppState,
  JhuIntegratedData,
  JhuTimeSeries,
  JhuTimeSeriesHeader,
  JhuSet,
  TimeSeries,
} from './interfaces';
import { totalString, worldString, usaString } from './constants';
import rawPopulationData from 'country-json/src/country-by-population.json';
import rawPopulationDensityData from 'country-json/src/country-by-population-density.json';
import { Dictionary, objReduce } from '@ch1/utility';
import { mapJhuCountryToPop, manuallySourcePop, usStates } from './data-maps';
import { log } from './utility';

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
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv',
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Deaths.csv',
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Recovered.csv',
];

export function fetchData(): Promise<{
  countries: SelectOptionsWithIndex[];
  timeSeries: TimeSeries[];
}> {
  return Promise.all(urls.map(url => fetch(url)))
    .then(unwrapResponses)
    .then(convertAllCsvToStructured)
    .then(sumAllRegions)
    .then(generateActiveCases)
    .then(mergeDataSets)
    .then(alphabetize)
    .then(extractCountries);
}

function getPopulation(
  country: string,
  state?: string,
  locale?: string
): number {
  if (state || locale) {
    return 0;
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
  populationDensity = manuallySourcePop[country];
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
      .map(convertRowToTimeSeries),
  ];
}

function convertAllCsvToStructured(strings: string[]) {
  return strings.map(convertStringArrayToStructured);
}

export function sumRegion(dictionary: Dictionary<number[]>) {
  return (ts: JhuTimeSeries) => {
    const addTimeSeries = (key: string) => {
      const currentTs =
        dictionary[key] || new Array(ts.timeSeries.length).fill(0);
      ts.timeSeries.forEach((cell, i) => {
        currentTs[i] += cell;
      });
      dictionary[key] = currentTs;
    };

    addTimeSeries(worldString);

    if (ts.state && !ts.locale) {
      if (ts.country === usaString) {
        addTimeSeries(`${ts.country}.${ts.state}`);
        addTimeSeries(ts.country);
      } else {
        addTimeSeries(ts.country);
      }
    }

    if (ts.locale) {
      if (ts.country === usaString) {
        const stateName = usStates[ts.state];
        if (stateName) {
          addTimeSeries(`${ts.country}.${stateName}`);
          addTimeSeries(ts.country);
        } else {
          log('US state ', ts.state, `(${ts.locale}) not found in map`);
        }
      } else {
        log('Non US locale', ts.country, ts.state, ts.locale);
      }
    }
  };
}

export function sumDataSetRegions(
  timeSeries: JhuTimeSeries[]
): JhuTimeSeries[] {
  const dictionary: Dictionary<number[]> = {};
  timeSeries.forEach(sumRegion(dictionary));

  return totalsDictionaryToTimeSeries(dictionary, timeSeries);
}

export function totalsDictionaryToTimeSeries(
  dictionary: Dictionary<number[]>,
  timeSeries: JhuTimeSeries[]
) {
  return objReduce(
    dictionary,
    (s: JhuTimeSeries[], totalSeries, key) => {
      const parts = key.split('.').filter(Boolean);
      if (parts.length < 1) {
        return s;
      }
      s.push({
        country: parts[0],
        locale: '',
        population: getPopulation(parts[0], parts[1]),
        populationDensity: getPopulationDensity(parts[0], parts[1]),
        state: parts[1] || totalString,
        timeSeries: totalSeries,
      });
      return s;
    },
    []
  ).concat(
    timeSeries.filter(el => {
      if (el.country === usaString) {
        if (el.state || el.locale) {
          return false;
        }
      }
      return true;
    })
  );
}

export function sumAllRegions(dataSets: JhuSet[]): JhuSet[] {
  // must be used after alphabetizing
  return dataSets.map(ds => {
    const [header, dataSet] = ds;
    return [header, sumDataSetRegions(dataSet)];
  });
}

function alphabetize(timeSeries: TimeSeries[]): TimeSeries[] {
  return timeSeries.sort((a, b) => {
    if (a.country < b.country) {
      return -1;
    }
    if (a.country > b.country) {
      return 1;
    }
    if (a.state < b.state) {
      return -1;
    }
    if (a.state > b.state) {
      return 1;
    }
    if (a.locale < b.locale) {
      return -1;
    }
    if (a.locale > b.locale) {
      return 1;
    }
    return 0;
  });
}

export function generateActiveCases(dataSets: JhuSet[]): JhuSet[] {
  const activeSet: JhuSet[] = [
    [
      dataSets[0][0],
      dataSets[0][1].map((ts, i) => {
        return {
          country: ts.country,
          locale: ts.locale,
          population: ts.population,
          populationDensity: ts.populationDensity,
          state: ts.state,
          timeSeries: ts.timeSeries.map((confirmed, j) => {
            return (
              confirmed -
              dataSets[1][1][i].timeSeries[j] -
              dataSets[2][1][i].timeSeries[j]
            );
          }),
        };
      }),
    ],
  ];
  return activeSet.concat(dataSets);
}

export function mergeDataSets(dataSets: JhuSet[]): TimeSeries[] {
  const dates = dataSets[0][0];
  return dataSets[0][1].map((row, rowIndex) => {
    return {
      country: row.country,
      dates,
      locale: row.locale,
      population: row.population,
      populationDensity: row.populationDensity,
      state: row.state,
      counts: row.timeSeries.map((number, timeSeriesIndex) => {
        return {
          active: dataSets[0][1][rowIndex].timeSeries[timeSeriesIndex],
          confirmed: dataSets[1][1][rowIndex].timeSeries[timeSeriesIndex],
          deaths: dataSets[2][1][rowIndex].timeSeries[timeSeriesIndex],
          recoveries: dataSets[3][1][rowIndex].timeSeries[timeSeriesIndex],
        };
      }),
    };
  });
}

function extractCountries(timeSeries: TimeSeries[]) {
  const countries = timeSeries
    .reduce((countryArr: SelectOptionsWithIndex[], row, i) => {
      if (row.locale) {
        return null;
      }
      const name = row.state ? row.country + ', ' + row.state : row.country;
      countryArr.push({ index: i, name });
      return countryArr;
    }, [])
    .filter(Boolean);

  return { countries, timeSeries };
}

function csvToPoints({
  countries,
  timeSeries,
}: {
  countries: SelectOptionsWithIndex[];
  timeSeries: TimeSeries[];
}): JhuIntegratedData {
  const points = timeSeries.reduce(
    (ps: ChartSeries[][][], row) => {
      const baseName = row.country + (row.state ? `, ${row.state}` : '');
      const aName = `${getChartTypeFromIndex(0)} ${baseName}`;
      const cName = `${getChartTypeFromIndex(1)} ${baseName}`;
      const dName = `${getChartTypeFromIndex(2)} ${baseName}`;
      const rName = `${getChartTypeFromIndex(3)} ${baseName}`;

      const cells = row.counts.reduce(
        (cs, count, i) => {
          cs[0].push([count.active, count.active / row.population]);
          cs[1].push([count.confirmed, count.confirmed / row.population]);
          cs[2].push([count.deaths, count.deaths / row.population]);
          cs[3].push([count.recoveries, count.recoveries / row.population]);
          return ps;
        },
        [[], [], [], []]
      );

      ps[0].push([
        { name: aName, points: cells[0][0] },
        { name: aName, points: cells[0][1] },
      ]);
      ps[1].push([
        { name: cName, points: cells[1][0] },
        { name: cName, points: cells[1][1] },
      ]);
      ps[2].push([
        { name: dName, points: cells[2][0] },
        { name: dName, points: cells[2][1] },
      ]);
      ps[3].push([
        { name: rName, points: cells[3][0] },
        { name: rName, points: cells[3][1] },
      ]);
      return ps;
    },
    [[], [], [], []]
  );

  return { countries, timeSeries };
}

function getChartTypeFromIndex(index: number) {
  switch (index) {
    case 0:
      return '😷';
    case 1:
      return '✔';
    case 2:
      return '☠';
    default:
      return '😊';
  }
}

export function selectData(cache: Dictionary<ChartSeries>, state: AppState) {
  return state.dataPromise.then(({ countries, timeSeries }) => {
    return {
      countries,
      series: timeSeries.reduce((cs: ChartSeries[], ts, countryIndex) => {
        if (state.lineGraphState.countryIndexes.indexOf(countryIndex) > -1) {
          return selectDataByMode(cache, state, cs, ts);
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
  ts: TimeSeries
): ChartSeries[] {
  switch (state.lineGraphState.mode) {
    case 1:
      return selectDataByConfirmed(cache, state, cs, ts, 1);
    case 2:
      return selectDataByConfirmed(cache, state, cs, ts, 100);
    default:
      return selectDataByDate(cache, state, cs, ts);
  }
}

function selectDataByConfirmed(
  cache: Dictionary<ChartSeries>,
  state: AppState,
  cs: ChartSeries[],
  ts: TimeSeries,
  count: number
) {
  const startDate = new Date(state.lineGraphState.startDate);

  state.lineGraphState.dataSetIndexes.forEach(index => {
    const field = getFieldFromIndex(index);
    const chart = {
      name:
        getChartTypeFromIndex(index) +
        ' ' +
        (ts.state ? ts.country + ', ' + ts.state : ts.country),
      points: [],
    };
    let fromDay0 = 0;
    chart.points = ts.counts.reduce((ps, c, i) => {
      if (ts.dates[i] && ts.dates[i] > startDate && c.confirmed >= count) {
        ps.push({
          x: fromDay0++,
          y:
            state.lineGraphState.byMetric === 0
              ? c[field]
              : c[field] / ts.population,
        });
      }
      return ps;
    }, []);
    cs.push(chart);
  });

  return cs;
}

function getFieldFromIndex(
  index: number
): 'active' | 'confirmed' | 'deaths' | 'recoveries' {
  switch (index) {
    case 0:
      return 'active';
    case 1:
      return 'confirmed';
    case 2:
      return 'deaths';
    default:
      return 'recoveries';
  }
}

function selectDataByDate(
  cache: Dictionary<ChartSeries>,
  state: AppState,
  cs: ChartSeries[],
  ts: TimeSeries
) {
  const startDate = new Date(state.lineGraphState.startDate);

  state.lineGraphState.dataSetIndexes.forEach(index => {
    const field = getFieldFromIndex(index);
    const chart = {
      name:
        getChartTypeFromIndex(index) +
        ' ' +
        (ts.state ? ts.country + ', ' + ts.state : ts.country),
      points: [],
    };
    chart.points = ts.counts.reduce((ps, c, i) => {
      if (ts.dates[i] && ts.dates[i] > startDate) {
        ps.push({
          x: ts.dates[i],
          y:
            state.lineGraphState.byMetric === 0
              ? c[field]
              : c[field] / ts.population,
        });
      }
      return ps;
    }, []);
    cs.push(chart);
  });

  return cs;
}
