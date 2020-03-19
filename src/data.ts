import {
  SelectOptionsWithIndex,
  ChartPoint,
  ChartSeries,
  AppState,
  JhuIntegratedData,
  JhuTimeSeries,
  JhuTimeSeriesHeader,
  JhuSet,
} from './interfaces';
import { totalString, worldString, usaString } from './constants';
import rawPopulationData from 'country-json/src/country-by-population.json';
import { Dictionary, objReduce } from '@ch1/utility';
import { mapJhuCountryToPop, manuallySourcePop, usStates } from './data-maps';
import { log } from './utility';

const populationDictionary: {
  [key: string]: number;
} = (rawPopulationData || []).reduce((p, node) => {
  p[node.country] = parseInt(node.population, 10);
  return p;
}, {});

const urls = [
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv',
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Deaths.csv',
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Recovered.csv',
];

export function fetchData() {
  return Promise.all(urls.map(url => fetch(url)))
    .then(unwrapResponses)
    .then(convertAllCsvToStructured)
    .then(sumAllRegions)
    .then(alphabetize)
    .then(generateActiveCases)
    .then(extractCountries)
    .then(csvToPoints);
}

function getPopulation(country: string): number {
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
  return 1;
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
  return {
    country,
    locale,
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

    if (ts.state) {
      if (ts.country === usaString) {
        const stateName = usStates[ts.state];
        if (stateName) {
          addTimeSeries(`${ts.country}.${stateName}`);
        } else {
          addTimeSeries(ts.country);
        }
      } else {
        addTimeSeries(ts.country);
      }
    }

    if (ts.locale) {
      if (ts.country === usaString) {
        const stateName = usStates[ts.state];
        if (stateName) {
          addTimeSeries(`${ts.country}.${stateName}`);
        } else {
          log('US state ', ts.state, `(${ts.locale}) not found in map`);
        }
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

function alphabetize(dataSets: JhuSet[]): JhuSet[] {
  return dataSets.map(([header, timeSeries]) => {
    return [
      header,
      timeSeries.sort((a, b) => {
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
      }),
    ];
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

function extractCountries(dataSets: JhuSet[]) {
  const countries = dataSets[0][1]
    .reduce((countryArr: SelectOptionsWithIndex[], row, i) => {
      if (row.locale) {
        return null;
      }
      const name = row.state ? row.country + ', ' + row.state : row.country;
      countryArr.push({ index: i, name });
      return countryArr;
    }, [])
    .filter(Boolean);

  return { countries, dataSets };
}

function csvToPoints({
  countries,
  dataSets,
}: {
  countries: SelectOptionsWithIndex[];
  dataSets: JhuSet[];
}): JhuIntegratedData {
  const points = dataSets.map(([header, dataSet], dataSetIndex) => {
    const chartType = getChartTypeFromIndex(dataSetIndex);
    const seriesValue: ChartSeries[] = [];
    const seriesPercent: ChartSeries[] = [];
    for (let i = 1; i < dataSet.length; i += 1) {
      let valuePoints: ChartPoint[] = [];
      let percentPoints: ChartPoint[] = [];
      let row = dataSet[i];
      let name =
        chartType + ' ' + row.country + (row.state ? `, ${row.state}` : '');

      for (let j = 0; j < row.timeSeries.length; j += 1) {
        const pop = getPopulation(row.country);
        valuePoints.push({
          index: j,
          x: new Date(header[j]),
          y: row.timeSeries[j],
        });
        percentPoints.push({
          index: j,
          x: new Date(header[j]),
          y: (row.timeSeries[j] / pop) * 100,
        });
      }
      seriesValue.push({
        name,
        points: valuePoints,
      });
      seriesPercent.push({
        name,
        points: percentPoints,
      });
    }
    return [seriesValue, seriesPercent];
  });
  return { countries, dataSets, points };
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

export function selectData(state: AppState) {
  const startDate = new Date(state.lineGraphState.startDate);
  return state.dataPromise.then(({ countries, dataSets, points }) => {
    const series = state.lineGraphState.dataSetIndexes.reduce(
      (s, dataSetIndex) => {
        return points[dataSetIndex][state.lineGraphState.byMetric].reduce(
          (si, country, i) => {
            const dp = selectDataPointByMode(
              state,
              country,
              i + 1,
              dataSets[0][1][i + 1],
              startDate
            );
            if (dp) {
              si.push(dp);
            }
            return si;
          },
          s
        );
      },
      []
    );
    return { countries, series };
  });
}

function selectDataPointByMode(
  state: AppState,
  country: ChartSeries,
  i: number,
  confirmed: JhuTimeSeries,
  startDate: Date
) {
  switch (state.lineGraphState.mode) {
    case 1:
      return selectDataPointByConfirmed(
        state,
        country,
        i,
        confirmed,
        startDate,
        1
      );
    case 2:
      return selectDataPointByConfirmed(
        state,
        country,
        i,
        confirmed,
        startDate,
        100
      );
    default:
      return selectDataPointByDate(state, country, startDate, i);
  }
}

function selectDataPointByDate(
  state: AppState,
  country: ChartSeries,
  startDate: Date,
  i: number
) {
  if (state.lineGraphState.countryIndexes.indexOf(i) > -1) {
    return {
      name: country.name,
      points: country.points
        .map(p => {
          if (p.x > startDate) {
            return p;
          }
          return null;
        })
        .filter(Boolean),
    };
  }
}

function selectDataPointByConfirmed(
  state: AppState,
  country: ChartSeries,
  i: number,
  confirmed: JhuTimeSeries,
  startDate: Date,
  min: number
) {
  if (state.lineGraphState.countryIndexes.indexOf(i) > -1) {
    let newX = 0;
    return {
      name: country.name,
      points: country.points
        .map((p, j) => {
          if (p.x > startDate) {
            const y = confirmed.timeSeries[p.index];

            if (y >= min) {
              const x = newX;
              newX += 1;
              return {
                x,
                y: p.y,
              };
            }
            return null;
          }
          return null;
        })
        .filter(Boolean),
    };
  }
}
