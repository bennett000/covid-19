import {
  JhuCsv,
  JhuCsvRow,
  SelectOptionsWithIndex,
  ChartPoint,
  ChartSeries,
  AppState,
  JhuIntegratedData,
} from './interfaces';
import { totalString } from './constants';
import rawPopulationData from 'country-json/src/country-by-population.json';

const populationDictionary: {
  [key: string]: number;
} = rawPopulationData.reduce((p, node) => {
  p[node.country] = parseInt(node.population, 10);
  return p;
}, {});

const urls = [
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv',
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Deaths.csv',
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Recovered.csv',
];

export function fetchData() {
  return (
    Promise.all(urls.map(url => fetch(url)))
      .then(unwrapResponses)
      .then(convertToCsv)
      .then(alphabetize)
      .then(tap)
      .then(sumRegions)
      // re alphabetize to integrate countries
      .then(alphabetize)
      .then(generateActiveCases)
      .then(extractCountries)
      .then(csvToPoints)
  );
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

function tap(thing) {
  const jhuCountries = thing[0].map(row => row[1] as string);
  (window as any).compareNations = (
    json: { country: string; population: string }[]
  ) => {
    const popCountries = json.map(p => p.country);

    console.log(
      '{\n' +
        jhuCountries
          .map(jc => {
            const country = mapJhuCountryToPop[jc]
              ? mapJhuCountryToPop[jc]
              : jc;
            let popIndex = popCountries.indexOf(country);
            if (popIndex === -1) {
              const fallback = manuallySourcePop[jc];
              if (fallback) {
                return null;
              }
            }
            if (popIndex === -1) {
              return `'${jc}'`;
            }
            // console.log(jc, json[popIndex].population);
            return null;
          })
          .filter(Boolean)
          .reduce((deDuped, el) => {
            if (deDuped.indexOf(el) === -1) {
              deDuped.push(el);
            }
            return deDuped;
          }, [])
          .join(",\n'': ") +
        '}'
    );
  };
  (window as any).dataSet = thing[0];

  return thing;
}

function unwrapResponses(responses: Response[]) {
  return Promise.all(responses.map(response => response.text()));
}

function convertToCsv(strings: string[]): JhuCsv[] {
  return strings.map(s =>
    s.split('\n').map((row, rowIndex) =>
      replaceCommasInQuotes(row)
        .split(',')
        .map((el: string, i: number) => {
          if (i === 0) {
            return el;
          }
          if (i === 1) {
            if (el === '"Korea; South"') {
              return 'South Korea';
            }
            return el;
          }
          if (rowIndex === 0) {
            if (i > 3) {
              return new Date(el);
            }
            return el;
          }
          if (i > 3) {
            return parseInt(el, 10);
          }
          return el;
        })
    )
  );
}

function sumRegions(dataSets: JhuCsv[]): JhuCsv[] {
  // must be used after alphabetizing
  return dataSets.map((dataSet: JhuCsv) => {
    let world: JhuCsvRow = [totalString, 'World', 0, 0];
    let sum: JhuCsvRow = [];
    let count = 0;
    const resetSum = (row: JhuCsvRow) => {
      sum = row.slice(0);
      sum[0] = totalString;
    };

    const incrementSum = (row: JhuCsvRow) => {
      for (let i = 4; i < row.length; i += 1) {
        (sum as number[])[i] += (row as number[])[i];
      }
    };

    const incrementWorld = (row: JhuCsvRow) => {
      for (let i = 4; i < row.length; i += 1) {
        if ((world as number[])[i] === undefined) {
          world.push(0);
        }
        (world as number[])[i] += (row as number[])[i];
      }
    };

    return dataSet.concat(
      dataSet
        .reduce((totals: JhuCsv, row, i, arr) => {
          if (i === 0) {
            return totals;
          }
          incrementWorld(row);
          if (i === 1) {
            resetSum(row);
            return totals;
          }
          if (arr[i - 1][1] === row[1]) {
            count += 1;
            incrementSum(row);
            return totals;
          }
          if (count > 1) {
            totals.push(sum);
          }
          count = 0;
          resetSum(row);
          return totals;
        }, [])
        .concat([world])
    );
  });
}

function replaceCommasInQuotes(input: string) {
  if (/"[A-Za-z0-9\s\.']+(,)/.test(input)) {
    if (input.charAt(0) === ',') {
      const index = input.indexOf(',', 1);
      return input.substr(0, index) + ';' + input.substr(index + 1);
    }
    return replaceCommasInQuotes(input.replace(',', ';'));
  }
  return input;
}

function alphabetize(dataSets: JhuCsv[]): JhuCsv[] {
  return dataSets.map(dataSet => {
    const titles = dataSet.shift();
    dataSet.sort((a, b) => {
      if (a[1] < b[1]) {
        return -1;
      }
      if (a[1] > b[1]) {
        return 1;
      }
      if (a[0] < b[0]) {
        return -1;
      }
      if (a[0] > b[0]) {
        return 1;
      }
      return 0;
    });

    return [titles].concat(dataSet);
  });
}

function generateActiveCases(dataSets: JhuCsv[]): JhuCsv[] {
  return [
    dataSets[0].map(
      (row, i) =>
        row.map((cell, j) => {
          if (i === 0) {
            return cell;
          }
          if (j < 4) {
            return cell;
          }
          return (
            (dataSets[0][i][j] as number) -
            (dataSets[1][i][j] as number) -
            (dataSets[2][i][j] as number)
          );
        }) as JhuCsvRow
    ),
  ].concat(dataSets);
}

function extractCountries(dataSets: JhuCsv[]) {
  const countries = dataSets[0].reduce(
    (countryArr: SelectOptionsWithIndex[], row, i) => {
      if (i === 0) {
        return countryArr;
      }
      if (row.length < 5) {
        return countryArr;
      }
      let state = (row as string[])[0];
      if (state && (row as string[])[1] === 'US') {
        if (state.indexOf(';') === -1) {
          const name = state
            ? (row as string[])[1] + ', ' + (row as string[])[0]
            : (row as string[])[1];
          countryArr.push({ index: i, name });
        }
      } else {
        const name = state
          ? (row as string[])[1] + ', ' + (row as string[])[0]
          : (row as string[])[1];
        countryArr.push({ index: i, name });
      }
      return countryArr;
    },
    []
  );

  return { countries, dataSets };
}

function csvToPoints({
  countries,
  dataSets,
}: {
  countries: SelectOptionsWithIndex[];
  dataSets: JhuCsv[];
}): JhuIntegratedData {
  const points = dataSets.map((dataSet, dataSetIndex) => {
    const chartType = getChartTypeFromIndex(dataSetIndex);
    const seriesValue: ChartSeries[] = [];
    const seriesPercent: ChartSeries[] = [];
    for (let i = 1; i < dataSet.length; i += 1) {
      let name = '';
      let valuePoints: ChartPoint[] = [];
      let percentPoints: ChartPoint[] = [];
      let row = dataSet[i];

      for (let j = 0; j < row.length; j += 1) {
        const pop = getPopulation((row as string[])[1]);
        if (j === 1) {
          name = chartType + ' ' + row[1] + ', ' + row[0];
        }
        if (j > 3) {
          if (!row[j] || row[j] !== row[j]) {
            continue;
          }
          valuePoints.push({
            index: j,
            x: new Date(dataSet[0][j]),
            y: (row as number[])[j],
          });
          percentPoints.push({
            index: j,
            x: new Date(dataSet[0][j]),
            y: ((row as number[])[j] / pop) * 100,
          });
        }
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
              dataSets[0][i + 1],
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
  confirmed: JhuCsvRow,
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
  confirmed: JhuCsvRow,
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
            const y = confirmed[p.index];

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

const mapJhuCountryToPop = Object.freeze({
  'Congo (Kinshasa)': 'The Democratic Republic of Congo',
  "Cote d'Ivoire": 'Ivory Coast',
  Czechia: 'Czech Republic',
  Eswatini: 'Swaziland',
  'Holy See': 'Holy See (Vatican City State)',
  'Republic of the Congo': 'Congo',
  Russia: 'Russian Federation',
  'Sri Lanka': 'SriLanka',
  'The Bahamas': 'Bahamas',
  'The Gambia': 'Gambia',
  US: 'United States',
});

// manually source via internet march 17 2020
const manuallySourcePop = Object.freeze({
  'Congo (Brazzaville)': 1800000,
  'Cruise Ship': 700,
  Guernsey: 67052,
  Jersey: 97857,
  Kosovo: 1831000,
  Montenegro: 613219,
  Serbia: 7022000,
  'Taiwan*': 23780000,
});
