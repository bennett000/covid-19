import { ChartSelector } from './chart-selector';
import { TimeSeriesCollection } from '../time-series/time-series-collection';
import { CsvJhuTimeSeries } from '../csv/jhu-time-series';
import { basePalette } from '../../constants';

describe('chart selector', () => {
  it('converts a simplified state and time series to a chart series (confirmed vs recent)', () => {
    const state: any = {
      countryKeys: ['CA.ON'],
      timeVsCountsState: {},
    };

    const csv = CsvJhuTimeSeries.create(`s,c,l1,l2,2020-01-01,2020-01-02,2020-01-03,2020-01-04,2020-01-05,2020-01-06,2020-01-07,2020-01-08,2020-01-09
Ontario,Canada,0,0,5,10,15,20,25,30,35,40,45
`);
    const tsc = TimeSeriesCollection.from([csv]);
    const cs = ChartSelector.create(tsc);
    const series = cs.select(state);

    expect(series).toEqual([
      {
        color: basePalette[0],
        name: 'Canada, Ontario',
        points: [],
      },
    ]);
  });

  it('converts a simplified state and time series to a chart series (time vs count)', () => {
    const state: any = {
      countryKeys: ['CA.ON'],
      seirState: {},
      timeVsCountsState: {
        mode: 0,
        dataSetIndexes: [1],
      },
      routePath: '/',
    };

    const csv = CsvJhuTimeSeries.create(`s,c,l1,l2,2020-01-01,2020-01-02
Ontario,Canada,0,0,5,10
`);
    const tsc = TimeSeriesCollection.from([csv]);
    const cs = ChartSelector.create(tsc);
    const series = cs.select(state);

    expect(series.length).toBe(1);
    expect(series[0].line.color).toBe(basePalette[0]);
    expect(series[0].points.length).toBe(2);
  });
});
