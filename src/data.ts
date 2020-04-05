import {
  SelectOptionsWithIndex,
  ChartSeries,
  AppState,
  TimeSeriesType,
  ChartPoint,
  InputSeirState,
} from './interfaces';
import {
  reverseDeathProjectionDefaults,
  projectionPalette,
  basePalette,
  jhuStartDay,
  twentyFourSeven,
  usaCode,
} from './constants';
import { Dictionary } from '@ch1/utility';
import { createYmdString } from './utility';
import { createTimeSeriesCount } from './data/time-series';
import { Strings } from './i18n';
import { Seir } from './seir';
import historicalEventsByCountry from '../data/timeline-historical-events.json';
import { CsvNytTimeSeries } from './data/csv/nyt-time-series';
import { TimeSeriesCollection } from './data/time-series-collection';
import { CsvJhuTimeSeries } from './data/csv/jhu-time-series';
import { TimeSeriesArray } from './data/time-series-array';
import {
  ITimeSeriesArray,
  TimeSeriesCount,
  ITimeSeries,
} from './data/data.interfaces';

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
  dictionary: TimeSeriesCollection;
  timeSeries: ITimeSeriesArray;
}> {
  return Promise.all([
    Promise.all(jhuUrls.map(url => fetch(url)))
      .then(unwrapResponses)
      .then(jhuStringsToCsvs)
      .then(TimeSeriesCollection.from),
    fetch(nytUrl)
      .then(unwrapResponse)
      .then(CsvNytTimeSeries.create)
      .then(TimeSeriesCollection.from),
  ])
    .then(TimeSeriesCollection.merge)
    .then(value => value.interpolateRecoveriesActiveCasesAndNewProps())
    .then(value => value.sumRegions())
    .then(value => value.sumWorld())
    .then(extractCountries);
}

function jhuStringsToCsvs(strings: string[]) {
  return strings.map(string => CsvJhuTimeSeries.create(string));
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

function extractCountries(collection: TimeSeriesCollection) {
  const countries: SelectOptionsWithIndex[] = collection
    .reduce((arr, location) => {
      const name = location.formatName();
      arr.push({ index: location.key(), name });
      return arr;
    }, [])
    .sort(sortByProp('name'));

  const tsa = TimeSeriesArray.create();
  collection.forEach(tsc => tsa.push(tsc));

  return { countries, dictionary: collection, timeSeries: tsa };
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

function getEventFrom(ts: ITimeSeries, day: number) {
  const historicalEvents =
    historicalEventsByCountry[ts.countryCode().toUpperCase()];
  if (historicalEvents === undefined) {
    return;
  }
  const ymdString = createYmdString(ts.dates()[day]);
  const event = historicalEvents[ymdString];
  ``;
  if (event === undefined) {
    return;
  }
  return event;
}

function getEventTooltip(ts: ITimeSeries, day: number): string {
  const event = getEventFrom(ts, day);
  if (event === undefined) {
    return '';
  }
  return `<br/><br/>Event: ${event.description}`;
}

function getEventMarker(ts: ITimeSeries, day: number) {
  const event = getEventFrom(ts, day);
  if (event === undefined) {
    return event;
  }
  return {
    color: event.colour,
    marker: event.size ? { size: event.size } : undefined,
  };
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
    name: ts.formatName(),
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
    const events = getEventMarker(ts, i) || {};
    chart.points.push({
      ...events,
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
    name: getChartTypeFromIndex(dataSetIndex) + ' ' + ts.formatName(),
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

  const footer = getEventTooltip(ts, day);

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
    ].join('<br/>') +
    footer
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
        const events = getEventMarker(ts, i) || {};
        ps.push({
          ...events,
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
        const events = getEventMarker(ts, i) || {};
        ps.push({
          ...events,
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

    const projectionTs = ts.cloneAndAppend(newCounts, newDates);
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

/**
 * "Data"
 *
 * Types of Data
 *   ACDR time series
 *   population json
 *   population density json
 *   country and sub jurisdiction codes
 *   ?testing data?
 *   ?hospital bed and icu data?
 *
 * RemoteData
 *   Functions
 *     fetch JHU data
 *       parse JHU data
 *     fetch NYT data
 *       parse NYT data
 *
 * Data Formats
 *   JHU CSV
 *   NYT CSV
 *   Key Value JSON
 *   JSCharting Series
 *   ITimeSeries (this software)
 */
