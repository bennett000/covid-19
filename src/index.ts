import { render } from './app';

declare const JSC: any;
const fullSize = 'width: 100%; height: 400px;';
const defaultDataset = 0;
const defaultCountries = [1, 43, 119, 414, 426];
const defaultMode = 2;
const defaultStart = '2019-12-26';
const modes = ['By date', 'By first confirmed', 'By first 100 confirmed'];
const totalString = 'Total';
const urls = [
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv',
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Deaths.csv',
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Recovered.csv',
];

main();

function main() {
  const element = window.document.createElement('section');
  if (!element) {
    throw new Error('Could not bootstrap the application');
  }
  window.document.body.appendChild(element);
  render(element);
}

function createState(html) {
  return {
    dataPromise: fetchData().then(setCountryOptions(html)),
    dataSetIndexes: [defaultDataset],
    countryIndexes: defaultCountries,
    html,
    mode: defaultMode,
    startDate: defaultStart,
  };
}

function saveState(state) {
  if (window.localStorage) {
    window.localStorage.setItem(
      'state',
      JSON.stringify({
        ...state,
        dataPromise: undefined,
        html: undefined,
      })
    );
  }
}

function loadState(html) {
  if (window.localStorage) {
    const item = window.localStorage.getItem('state');
    if (item) {
      try {
        return {
          ...JSON.parse(item),
          dataPromise: fetchData().then(setCountryOptions(html)),
          html,
        };
      } catch (e) {
        // fail over
      }
    }
  }
  return null;
}

function main1() {
  const html = createHtml();
  let state = loadState(html);
  if (!state) {
    state = createState(html);
  }

  bindControls(state);
  selectData(state);
}

function bindControls(state) {
  state.html.reloadData.addEventListener('click', () => {
    state.dataPromise = fetchData().then(setCountryOptions(state.html));
    selectData(state);
    saveState(state);
  });

  const changeCountry = e => {
    state.countryIndexes = selectedOptionsToArray(e.target.options);
    selectData(state);
    saveState(state);
  };

  const changeData = e => {
    state.dataSetIndexes = selectedOptionsToArray(e.target.options);
    selectData(state);
    saveState(state);
  };

  const changeDate = e => {
    state.startDate = e.target.value;
    selectData(state);
    saveState(state);
  };

  const changeMode = e => {
    state.mode = parseInt(e.target.value, 10);
    selectData(state);
    saveState(state);
  };

  state.html.inputStart.addEventListener('change', changeDate);
  state.html.selectCountry.addEventListener('change', changeCountry);
  state.html.selectData.addEventListener('change', changeData);
  state.html.selectMode.addEventListener('change', changeMode);
}

function selectData(state) {
  state.startDate = new Date(state.startDate);
  state.dataPromise
    .then(({ dataSets, points }) => {
      const series = state.dataSetIndexes.reduce((s, dataSetIndex) => {
        return points[dataSetIndex].reduce((si, country, i) => {
          const dp = selectDataPointByMode(
            state,
            country,
            i + 1,
            dataSets[0][i + 1]
          );
          if (dp) {
            si.push(dp);
          }
          return si;
        }, s);
      }, []);
      drawCurve(series, state.html, state.mode === 0 ? false : true);
    })
    .catch(console.log.bind(console));
}

function selectDataPointByMode(state, country, i, confirmed) {
  switch (state.mode) {
    case 1:
      return selectDataPointByConfirmed(state, country, i, confirmed, 1);
    case 2:
      return selectDataPointByConfirmed(state, country, i, confirmed, 100);
    default:
      return selectDataPointByDate(state, country, i);
  }
}

function selectDataPointByDate(state, country, i) {
  if (state.countryIndexes.indexOf(i) > -1) {
    return {
      name: country.name,
      points: country.points
        .map(p => {
          if (p.x > state.startDate) {
            return p;
          }
          return null;
        })
        .filter(Boolean),
    };
  }
}

function selectDataPointByConfirmed(state, country, i, confirmed, min) {
  if (state.countryIndexes.indexOf(i) > -1) {
    let newX = 0;
    return {
      name: country.name,
      points: country.points
        .map((p, j) => {
          if (p.x > state.startDate) {
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

function fetchData() {
  return (
    Promise.all(urls.map(url => JSC.fetch(url)))
      .then(unboxResponses)
      .then(convertToCsv)
      .then(alphabetize)
      .then(sumRegions)
      // re alphabetize to integrate countries
      .then(alphabetize)
      .then(extractCountries)
      .then(csvToPoints)
  );
}

function createHtml() {
  const container = window.document.createElement('div');

  const controls = window.document.createElement('section');
  controls.className = 'controls';
  container.appendChild(controls);

  const selectMode = createSelectModeComponent(controls);

  const inputStart = window.document.createElement('input');
  inputStart.type = 'date';
  inputStart.value = defaultStart;
  controls.appendChild(inputStart);

  const selectData = createSelectDataComponent(controls);

  const selectCountry = window.document.createElement('select');
  selectCountry.multiple = true;
  selectCountry.className = 'select-country';
  controls.appendChild(selectCountry);

  const reloadData = window.document.createElement('button');
  reloadData.innerHTML = 'Reload Data';
  reloadData.className = 'green';
  controls.appendChild(reloadData);

  const chart = createChartComponent(container, controls);

  window.document.body.appendChild(container);

  return {
    chart,
    container,
    controls,
    inputStart,
    selectCountry,
    selectData,
    selectMode,
    reloadData,
  };
}

function setCountryOptions(html) {
  return data => {
    const { countries } = data;
    html.selectCountry.innerHTML = '';
    const opts = createHtmlOptions(countries, defaultCountries).forEach(
      node => {
        html.selectCountry.appendChild(node);
      }
    );

    return data;
  };
}

function createSelectDataComponent(container) {
  const selectData = window.document.createElement('select');
  selectData.multiple = true;
  selectData.className = 'select-data';
  createHtmlOptions(
    ['Confirmed Cases', 'Deaths', 'Recoveries'],
    defaultDataset
  ).forEach(node => {
    selectData.appendChild(node);
  });
  container.appendChild(selectData);
  return selectData;
}

function createSelectModeComponent(controls) {
  const selectMode = window.document.createElement('select');
  createHtmlOptions(modes, defaultMode).forEach(node => {
    selectMode.appendChild(node);
  });
  controls.appendChild(selectMode);
  return selectMode;
}

function createChartComponent(container, sibling) {
  const chart = window.document.createElement('div');
  chart.id = 'chartDiv';
  container.insertBefore(chart, sibling);
  return chart;
}

function createHtmlOptions(arr, selected) {
  return arr.map((el, i) => {
    const opt = window.document.createElement('option');
    if (typeof el === 'object') {
      opt.value = el.index;
      opt.innerHTML = el.name;
      if (Array.isArray(selected)) {
        if (selected.indexOf(el.index) > -1) {
          opt.selected = true;
        }
      } else {
        if (el.index === selected) {
          opt.selected = true;
        }
      }
    } else {
      opt.value = i;
      opt.innerHTML = el;
      if (Array.isArray(selected)) {
        if (selected.indexOf(i) > -1) {
          opt.selected = true;
        }
      } else {
        if (i === selected) {
          opt.selected = true;
        }
      }
    }
    return opt;
  });
}

function selectedOptionsToArray(options) {
  let results = [];
  for (let i = 0; i < options.length; i += 1) {
    const opt = options[i];
    if (opt.selected) {
      results.push(parseInt(opt.value, 10));
    }
  }
  return results;
}

function sumRegions(dataSets) {
  // must be used after alphabetizing
  return dataSets.map(dataSet => {
    let sum = [];
    let count = 0;
    const resetSum = row => {
      sum = row.slice(0);
      sum[0] = totalString;
    };
    const incrementSum = row => {
      for (let i = 4; i < row.length; i += 1) {
        sum[i] += row[i];
      }
    };
    return dataSet.concat(
      dataSet.reduce((totals, row, i, arr) => {
        if (i === 0) {
          return totals;
        }
        if (i === 1) {
          resetSum(row);
          return totals;
        }
        if (arr[i - 1][1] === row[1]) {
          count += 1;
          incrementSum(row);
          return totals;
        } else {
          if (count > 1) {
            totals.push(sum);
          }
          count = 0;
          resetSum(row);
          return totals;
        }
      }, [])
    );
  });
}

function unboxResponses(responses) {
  return Promise.all(responses.map(r => r.text()));
}

function replaceCommasInQuotes(input) {
  if (/"[A-Za-z0-9\s\.']+(,)/.test(input)) {
    if (input.charAt(0) === ',') {
      const index = input.indexOf(',', 1);
      return input.substr(0, index) + ';' + input.substr(index + 1);
    }
    return replaceCommasInQuotes(input.replace(',', ';'));
  }
  return input;
}

function convertToCsv(strings) {
  return strings.map(s =>
    s.split('\n').map((row, rowIndex) =>
      replaceCommasInQuotes(row)
        .split(',')
        .map((el, i) => {
          if (i === 0) {
            return el;
          }
          if (i === 1) {
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

function alphabetize(dataSets) {
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

function extractCountries(dataSets) {
  const countries = dataSets[0].reduce((countryArr, row, i) => {
    if (i === 0) {
      return countryArr;
    }
    if (row.length < 5) {
      return countryArr;
    }
    if (row[0] === totalString) {
      countryArr.push({ index: i, name: row[1] });
      return countryArr;
    }
    if (!row[0]) {
      countryArr.push({ index: i, name: row[1] });
    }
    return countryArr;
  }, []);

  return { countries, dataSets };
}

function getChartTypeFromIndex(index) {
  switch (index) {
    case 0:
      return '😷';
    case 1:
      return '☠';
    default:
      return '😊';
  }
}

function csvToPoints({ countries, dataSets }) {
  const points = dataSets.map((dataSet, dataSetIndex) => {
    const chartType = getChartTypeFromIndex(dataSetIndex);
    const series = [];
    for (let i = 1; i < dataSet.length; i += 1) {
      let name = '';
      let points = [];
      let row = dataSet[i];

      for (let j = 0; j < row.length; j += 1) {
        if (j === 1) {
          name = chartType + ' ' + row[1] + ', ' + row[0];
        }
        if (j > 3) {
          if (!row[j] || row[j] !== row[j]) {
            continue;
          }
          points.push({
            index: j,
            x: new Date(dataSet[0][j]),
            y: row[j],
          });
        }
      }
      series.push({
        name,
        points,
      });
    }
    return series;
  });
  return { countries, dataSets, points };
}

function drawCurve(series, html, useDays) {
  JSC.Chart('chartDiv', {
    xAxis_label_text: useDays ? 'Day' : undefined,
    xAxis: {
      scaleType: 'time',
      customTicks: [
        {
          // A tick for every month.
          value: {
            month: '*',
          },
          label_text: '%min',
        },
        {
          // every month
          value: { week: '*' },
          label_text: '%min',
        },
      ],
    },
    legend: {
      template: '%icon %name',
    },
    series,
  });
}

function logp(i) {
  console.log(i.map(n => n.text()));
  return i;
}
