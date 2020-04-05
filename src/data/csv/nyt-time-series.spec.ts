import { CsvNytTimeSeries } from './nyt-time-series';
import { Csv } from './csv';

describe('nyt time series', () => {
  it('provides an implementation of Csv', () => {
    expect(CsvNytTimeSeries.create('foo,bar') instanceof Csv).toBe(true);
  });

  it('provides a static is funcction', () => {
    expect(CsvNytTimeSeries.is({})).toBe(false);
  });
});
