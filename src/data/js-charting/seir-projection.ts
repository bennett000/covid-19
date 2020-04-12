import { JsChartingSeriesPoint } from './js-charting-series';
import { createToolTip } from './tooltip';
import { ITimeSeries, TimeSeriesCount } from '../data.interfaces';
import { InputSeirState } from '../../interfaces';
import { Seir } from '../../seir';
import { jhuStartDay, twentyFourSeven } from '../../constants';
import { historicalEventsByCountry } from '../country-data';
import { createTimeSeriesCount } from '../time-series/time-series';
import { createYmdString } from '../../utility';

export function getSeirSeries(
  projections: {
    active: JsChartingSeriesPoint[];
    deaths: JsChartingSeriesPoint[];
    recoveries: JsChartingSeriesPoint[];
  },
  dataSetIndex: number
): JsChartingSeriesPoint[] | void {
  if (dataSetIndex === 7) {
    return projections.active;
  }
  if (dataSetIndex === 8) {
    return projections.deaths;
  }
  if (dataSetIndex === 9) {
    return projections.recoveries;
  }
}

export function createSeirPoints(
  state: InputSeirState,
  ts: ITimeSeries,
  fromDay0: number,
  usePerCapita: boolean
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
  const active: JsChartingSeriesPoint[] = [];
  const deaths: JsChartingSeriesPoint[] = [];
  const recoveries: JsChartingSeriesPoint[] = [];
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
      y:
        usePerCapita === false
          ? count.active
          : (count.active / ts.population()) * 100,
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
      y:
        usePerCapita === false
          ? count.deaths
          : (count.deaths / ts.population()) * 100,
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
        usePerCapita === false
          ? count.recoveries
          : (count.recoveries / ts.population()) * 100,
    });
  }

  return { active, deaths, recoveries };
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
