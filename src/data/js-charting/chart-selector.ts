import { getEventMarker } from './chart-events';
import { JsChartingSeries } from './js-charting.interfaces';
import { buildJsChartingSeries } from './js-charting-series';
import { createSeirPoints, getSeirSeries } from './seir-projection';
import {
  ITimeSeries,
  ITimeSeriesCollection,
  TimeSeriesType,
} from '../data.interfaces';
import { AppState } from '../../interfaces';
import { basePalette, projectionPalette } from '../../constants';
import { createTimeSeriesCount } from '../time-series/time-series';

export type IChartSelector = ChartSelector;
export class ChartSelector {
  static create(timeSeriesCollection: ITimeSeriesCollection) {
    return new ChartSelector(timeSeriesCollection);
  }

  private constructor(private tsc: ITimeSeriesCollection) {}

  private selectConfirmedVsRecent(countries: string[]) {
    return this.tsc.select(countries).map(selectConfirmedVsRecentCountry);
  }

  private createSeirPoints(state: AppState, ts: ITimeSeries) {
    const findStart = (c: number) => (index, el, i, arr) => {
      if (index !== -1) {
        return index;
      }
      if (el.confirmed >= c) {
        return arr.length - i - 1;
      }
      return index;
    };

    let count =
      state.timeVsCountsState.mode === 0
        ? -1
        : state.timeVsCountsState.mode === 1
        ? ts.counts().reduce(findStart(1), -1)
        : ts.counts().reduce(findStart(100), -1);

    return createSeirPoints(
      state.seirState,
      ts,
      count,
      state.timeVsCountsState.byMetric
    );
  }

  private createSelectTimeVsCountsChart(
    ts: ITimeSeries,
    dataSetIndex: number,
    index: number
  ) {
    const field = getFieldFromIndex(dataSetIndex);
    const colour =
      dataSetIndex > 5
        ? projectionPalette[index % projectionPalette.length]
        : basePalette[index % basePalette.length];
    const type =
      dataSetIndex === 4 || dataSetIndex === 5 ? 'column' : undefined;
    const chartBuilder = buildJsChartingSeries(
      getChartTypeFromIndex(dataSetIndex) + ' ' + ts.formatName()
    )
      .colour(colour)
      .lineColour(colour)
      .type(type);

    return { chartBuilder, field };
  }

  private createSelectTimeVsCountsCountryMapper(state: AppState) {
    let count = 0;
    const modeCount =
      state.timeVsCountsState.mode === 0
        ? -1
        : state.timeVsCountsState.mode === 1
        ? 1
        : 100;
    return (ts: ITimeSeries) => {
      const seirPoints = this.createSeirPoints(state, ts);

      return state.timeVsCountsState.dataSetIndexes.map(dataSetIndex => {
        const seirSeries = getSeirSeries(seirPoints, dataSetIndex);
        const { chartBuilder, field } = this.createSelectTimeVsCountsChart(
          ts,
          dataSetIndex,
          count++
        );
        if (seirSeries) {
          const chart = chartBuilder.collect();
          chart.points = seirSeries;
          return chart;
        }

        if (modeCount < 0) {
          ts.forEachDay((tsc, date) => {
            chartBuilder.addPoint(
              date,
              getY(
                state.timeVsCountsState.byMetric,
                tsc[field],
                ts.population()
              )
            );
          });
        } else {
          let dayCount = 0;
          ts.forEachDayWhere(
            tsc => tsc.confirmed > modeCount,
            tsc => {
              chartBuilder.addPoint(
                dayCount++,
                getY(
                  state.timeVsCountsState.byMetric,
                  tsc[field],
                  ts.population()
                )
              );
            }
          );
        }

        return chartBuilder.collect();
      });
    };
  }

  private selectTimeVsCounts(state: AppState) {
    return this.tsc
      .select(state.countryKeys)
      .map(this.createSelectTimeVsCountsCountryMapper(state))
      .reduce(flatten);
  }

  select(state: AppState): JsChartingSeries[] {
    if (state.routePath === '/') {
      return this.selectTimeVsCounts(state);
    } else {
      // confirmed vs recent
      return this.selectConfirmedVsRecent(state.countryKeys);
    }
  }
}

function selectConfirmedVsRecentCountry(
  ts: ITimeSeries,
  index: number
): JsChartingSeries {
  const recent = 7;
  const chart = buildJsChartingSeries(ts.formatName()).colour(
    basePalette[index % basePalette.length]
  );
  const yMin = 1;
  const xMin = 100;

  for (let i = ts.counts().length - 1; i > recent; i -= 1) {
    const count = ts.counts()[i];
    const recentDaysAgo = ts.counts()[i - recent] || createTimeSeriesCount();
    const y = count.confirmed - recentDaysAgo.confirmed || yMin;
    if (count.confirmed < xMin) {
      continue;
    }
    chart.addPoint(count.confirmed, y, getEventMarker(ts, i));
  }

  return chart.collect();
}

function flatten<T>(arr: T[], el: T[]): T[] {
  return [...arr, ...el];
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
