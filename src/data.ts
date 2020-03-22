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
} from './interfaces';
import { totalString, worldString, usaString } from './constants';
import rawPopulationData from 'country-json/src/country-by-population.json';
import rawPopulationDensityData from 'country-json/src/country-by-population-density.json';
import { Dictionary, objReduce } from '@ch1/utility';
import { mapJhuCountryToPop, manuallySourcePop, usStates } from './data-maps';
import { log } from './utility';
import { TimeSeries, TimeSeriesArray } from './time-series';

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
  timeSeries: ITimeSeriesArray;
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
  return dataSets.map(ds => {
    const [header, dataSet] = ds;
    return [header, sumDataSetRegions(dataSet)];
  });
}

function alphabetize(timeSeries: ITimeSeriesArray): ITimeSeriesArray {
  timeSeries.sortByCountry();
  return timeSeries;
}

export function generateActiveCases(dataSets: JhuSet[]): JhuSet[] {
  const activeSet: JhuSet[] = [
    [
      dataSets[0][0],
      dataSets[0][1].map((ts, i) => {
        return {
          country: ts.country,
          locale: ts.locale,
          population:
            ts.country === worldString ? worldPopulation() : ts.population,
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

export function mergeDataSets(dataSets: JhuSet[]): ITimeSeriesArray {
  const dates = dataSets[0][0];
  const its = TimeSeriesArray.create();
  dataSets[0][1].forEach((row, rowIndex) => {
    its.push(
      TimeSeries.create({
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
      })
    );
  });
  return its;
}

function extractCountries(timeSeries: ITimeSeriesArray) {
  const countries = timeSeries
    .reduce((countryArr: SelectOptionsWithIndex[], row, i) => {
      if (row.locale()) {
        return countryArr;
      }
      const name = row.countryName();
      countryArr.push({ index: i, name });
      return countryArr;
    }, [])
    .filter(Boolean);

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
  ts: ITimeSeries
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
  ts: ITimeSeries,
  count: number
) {
  const startDate = new Date(state.lineGraphState.startDate);

  state.lineGraphState.dataSetIndexes.forEach(index => {
    const field = getFieldFromIndex(index);
    const chart = {
      name: getChartTypeFromIndex(index) + ' ' + ts.countryName(),
      points: [],
    };
    let fromDay0 = 0;
    chart.points = ts.counts().reduce((ps, c, i) => {
      if (ts.dates()[i] && ts.dates()[i] > startDate && c.confirmed >= count) {
        ps.push({
          x: fromDay0++,
          y:
            state.lineGraphState.byMetric === 0
              ? c[field]
              : c[field] / ts.population(),
        });
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
    default:
      return 'recoveries';
  }
}

function selectDataByDate(
  cache: Dictionary<ChartSeries>,
  state: AppState,
  cs: ChartSeries[],
  ts: ITimeSeries
) {
  const startDate = new Date(state.lineGraphState.startDate);

  state.lineGraphState.dataSetIndexes.forEach(index => {
    const field = getFieldFromIndex(index);
    const chart = {
      name: getChartTypeFromIndex(index) + ' ' + ts.countryName(),
      points: [],
    };
    chart.points = ts.counts().reduce((ps, c, i) => {
      if (ts.dates()[i] && ts.dates()[i] > startDate) {
        ps.push({
          x: ts.dates()[i],
          y:
            state.lineGraphState.byMetric === 0
              ? c[field]
              : c[field] / ts.population(),
        });
      }
      return ps;
    }, []);
    cs.push(chart);
  });

  return cs;
}

function worldPopulation(): number {
  return objReduce(
    populationDictionary,
    (total, next) => {
      if (next !== next) {
        return total;
      }
      return total + next;
    },
    0
  );
}
