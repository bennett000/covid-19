import { TimeSeries, createTimeSeriesCount } from './time-series';

describe('time series', () => {
  describe('lastValue', () => {
    it('returns the last counts value for a given prop', () => {
      const ts = TimeSeries.create({
        country: 'Canada',
        countryCode: 'CA',
        counts: [
          null,
          null,
          {
            active: 0,
            confirmed: 1,
            deaths: 0,
            recoveries: 3,
            projectionReverseDeath: 2,
            newConfirmed: 0,
            newDeaths: 1,
          },
        ],
        dates: [],
        key: 'CA.ON',
        population: 0,
        populationDensity: 0,
        state: 'Ontario',
        stateCode: 'ON',
      });
      expect((ts as any).lastValue('confirmed')).toBe(1);
      expect((ts as any).lastValue('recoveries')).toBe(3);
    });

    it('returns zero if there are no counts', () => {
      const ts = TimeSeries.create({
        country: 'Canada',
        countryCode: 'CA',
        counts: [],
        dates: [],
        key: 'CA.ON',
        population: 0,
        populationDensity: 0,
        state: 'Ontario',
        stateCode: 'ON',
      });
      expect((ts as any).lastValue('confirmed')).toBe(0);
      expect((ts as any).lastValue('recoveries')).toBe(0);
    });
  });

  describe('lastPercent', () => {
    it('returns the last counts percent of population for a given prop', () => {
      const ts = TimeSeries.create({
        country: 'Canada',
        countryCode: 'CA',
        counts: [
          null,
          null,
          {
            active: 0,
            confirmed: 1,
            deaths: 0,
            recoveries: 3,
            projectionReverseDeath: 2,
            newConfirmed: 0,
            newDeaths: 1,
          },
        ],
        dates: [],
        key: 'CA.ON',
        population: 10,
        populationDensity: 0,
        state: 'Ontario',
        stateCode: 'ON',
      });
      expect((ts as any).lastPercent('confirmed')).toBe(10.0);
      expect((ts as any).lastPercent('recoveries')).toBe(30.0);
    });

    it('avoids division by zero if population data not found/set', () => {
      const ts = TimeSeries.create({
        country: 'Canada',
        countryCode: 'CA',
        counts: [
          null,
          null,
          {
            active: 0,
            confirmed: 1,
            deaths: 0,
            recoveries: 3,
            projectionReverseDeath: 2,
            newConfirmed: 0,
            newDeaths: 1,
          },
        ],
        dates: [],
        key: 'CA.ON',
        population: 0,
        populationDensity: 0,
        state: 'Ontario',
        stateCode: 'ON',
      });
      expect((ts as any).lastPercent('confirmed')).toBe(0);
      expect((ts as any).lastPercent('recoveries')).toBe(0);
    });

    it('returns zero if there are no counts', () => {
      const ts = TimeSeries.create({
        country: 'Canada',
        countryCode: 'CA',
        counts: [],
        dates: [],
        key: 'CA.ON',
        population: 0,
        populationDensity: 0,
        state: 'Ontario',
        stateCode: 'ON',
      });
      expect((ts as any).lastPercent('confirmed')).toBe(0);
      expect((ts as any).lastPercent('recoveries')).toBe(0);
    });
  });

  describe('peakValue', () => {
    it('returns the peak value for a given prop', () => {
      const ts = TimeSeries.create({
        country: 'Canada',
        countryCode: 'CA',
        counts: [
          {
            active: 0,
            confirmed: 0,
            deaths: 0,
            recoveries: 2,
            projectionReverseDeath: 1,
            newConfirmed: 0,
            newDeaths: 0,
          },
          {
            active: 0,
            confirmed: 1,
            deaths: 0,
            recoveries: 3,
            projectionReverseDeath: 2,
            newConfirmed: 0,
            newDeaths: 1,
          },
          {
            active: 0,
            confirmed: 0,
            deaths: 0,
            recoveries: 2,
            projectionReverseDeath: 1,
            newConfirmed: 0,
            newDeaths: 0,
          },
        ],
        dates: [],
        key: 'CA.ON',
        population: 0,
        populationDensity: 0,
        state: 'Ontario',
        stateCode: 'ON',
      });
      expect((ts as any).peakValue('confirmed')).toBe(1);
      expect((ts as any).peakValue('recoveries')).toBe(3);
    });

    it('returns zero if there are no counts', () => {
      const ts = TimeSeries.create({
        country: 'Canada',
        countryCode: 'CA',
        counts: [],
        dates: [],
        key: 'CA.ON',
        population: 0,
        populationDensity: 0,
        state: 'Ontario',
        stateCode: 'ON',
      });
      expect((ts as any).peakValue('confirmed')).toBe(0);
      expect((ts as any).peakValue('recoveries')).toBe(0);
    });
  });

  describe('peakPercent', () => {
    it('returns the peak counts percent of population for a given prop', () => {
      const ts = TimeSeries.create({
        country: 'Canada',
        countryCode: 'CA',
        counts: [
          {
            active: 0,
            confirmed: 1,
            deaths: 0,
            recoveries: 3,
            projectionReverseDeath: 2,
            newConfirmed: 0,
            newDeaths: 1,
          },
          {
            active: 0,
            confirmed: 10,
            deaths: 0,
            recoveries: 6,
            projectionReverseDeath: 2,
            newConfirmed: 0,
            newDeaths: 1,
          },
          {
            active: 0,
            confirmed: 0,
            deaths: 0,
            recoveries: 3,
            projectionReverseDeath: 2,
            newConfirmed: 0,
            newDeaths: 1,
          },
          {
            active: 0,
            confirmed: 1,
            deaths: 0,
            recoveries: 3,
            projectionReverseDeath: 2,
            newConfirmed: 0,
            newDeaths: 1,
          },
        ],
        dates: [],
        key: 'CA.ON',
        population: 10,
        populationDensity: 0,
        state: 'Ontario',
        stateCode: 'ON',
      });
      expect((ts as any).peakPercent('confirmed')).toBe(100.0);
      expect((ts as any).peakPercent('recoveries')).toBe(60.0);
    });

    it('avoids division by zero if population data not found/set', () => {
      const ts = TimeSeries.create({
        country: 'Canada',
        countryCode: 'CA',
        counts: [
          null,
          null,
          {
            active: 0,
            confirmed: 1,
            deaths: 0,
            recoveries: 3,
            projectionReverseDeath: 2,
            newConfirmed: 0,
            newDeaths: 1,
          },
          null,
          null,
        ],
        dates: [],
        key: 'CA.ON',
        population: 0,
        populationDensity: 0,
        state: 'Ontario',
        stateCode: 'ON',
      });
      expect((ts as any).peakPercent('confirmed')).toBe(0);
      expect((ts as any).peakPercent('recoveries')).toBe(0);
    });

    it('returns zero if there are no counts', () => {
      const ts = TimeSeries.create({
        country: 'Canada',
        countryCode: 'CA',
        counts: [],
        dates: [],
        key: 'CA.ON',
        population: 0,
        populationDensity: 0,
        state: 'Ontario',
        stateCode: 'ON',
      });
      expect((ts as any).peakPercent('confirmed')).toBe(0);
      expect((ts as any).peakPercent('recoveries')).toBe(0);
    });
  });

  describe('clone', () => {
    it('makes a deep clone of itself', () => {
      const dates = [new Date()];
      const counts = [createTimeSeriesCount()];
      const ts = TimeSeries.create({
        country: 'Canada',
        countryCode: 'CA',
        counts,
        dates,
        key: 'CA.ON',
        population: 0,
        populationDensity: 0,
        state: 'Ontario',
        stateCode: 'ON',
      });
      const clone = ts.clone();
      expect((clone as any).lsData).toEqual((ts as any).lsData);
      expect((clone as any).lsData).not.toBe(undefined);
      expect(clone).not.toBe(ts);
      expect(clone.dates()).not.toBe(dates);
      expect(clone.counts()).not.toBe(counts);
      expect(clone.counts()[0] === counts[0]).toBe(false);
      // note dates are not deep cloned
      expect(clone.dates()[0]).toBe(dates[0]);
    });
  });

  describe('cloneAndAppend', () => {
    it('adds dates and counts', () => {
      const ts = TimeSeries.create({
        country: 'Canada',
        countryCode: 'CA',
        counts: [],
        dates: [],
        key: 'CA.ON',
        population: 0,
        populationDensity: 0,
        state: 'Ontario',
        stateCode: 'ON',
      });
      const tsc = createTimeSeriesCount();
      const newTs = ts.cloneAndAppend([tsc], [new Date()]);
      expect(newTs.counts()[0]).toBe(tsc);
      expect(newTs.dates().length).toBe(1);
    });
  });

  describe('lastMortality', () => {
    it('divides last deaths by last confirmed and multiplies by 100', () => {
      const ts = TimeSeries.create({
        country: 'Canada',
        countryCode: 'CA',
        counts: [
          {
            active: 0,
            confirmed: 100,
            deaths: 10,
            recoveries: 0,
            projectionReverseDeath: 0,
            newConfirmed: 0,
            newDeaths: 0,
          },
        ],
        dates: [new Date()],
        key: 'CA.ON',
        population: 0,
        populationDensity: 0,
        state: 'Ontario',
        stateCode: 'ON',
      });

      expect(ts.lastMortality()).toBe(10);
    });

    it('avoids divide by zero', () => {
      const ts = TimeSeries.create({
        country: 'Canada',
        countryCode: 'CA',
        counts: [
          {
            active: 0,
            confirmed: 0,
            deaths: 10,
            recoveries: 0,
            projectionReverseDeath: 0,
            newConfirmed: 0,
            newDeaths: 0,
          },
        ],
        dates: [new Date()],
        key: 'CA.ON',
        population: 0,
        populationDensity: 0,
        state: 'Ontario',
        stateCode: 'ON',
      });

      expect(ts.lastMortality()).toBe(0);
    });
  });

  describe('peakMortality', () => {
    it('divides peak deaths by peak confirmed and multiplies by 100', () => {
      const ts = TimeSeries.create({
        country: 'Canada',
        countryCode: 'CA',
        counts: [
          {
            active: 0,
            confirmed: 100,
            deaths: 10,
            recoveries: 0,
            projectionReverseDeath: 0,
            newConfirmed: 0,
            newDeaths: 0,
          },
          {
            active: 0,
            confirmed: 100,
            deaths: 1,
            recoveries: 0,
            projectionReverseDeath: 0,
            newConfirmed: 0,
            newDeaths: 0,
          },
        ],
        dates: [new Date()],
        key: 'CA.ON',
        population: 0,
        populationDensity: 0,
        state: 'Ontario',
        stateCode: 'ON',
      });

      expect(ts.peakMortality()).toBe(10);
    });

    it('avoids divide by zero', () => {
      const ts = TimeSeries.create({
        country: 'Canada',
        countryCode: 'CA',
        counts: [
          {
            active: 0,
            confirmed: 0,
            deaths: 10,
            recoveries: 0,
            projectionReverseDeath: 0,
            newConfirmed: 0,
            newDeaths: 0,
          },
        ],
        dates: [new Date()],
        key: 'CA.ON',
        population: 0,
        populationDensity: 0,
        state: 'Ontario',
        stateCode: 'ON',
      });

      expect(ts.peakMortality()).toBe(0);
    });
  });

  describe('formatName', () => {
    it('returns countries without states', () => {
      const canada = 'Canada';
      const ts = TimeSeries.create({
        country: canada,
        countryCode: 'CA',
        counts: [],
        dates: [],
        key: 'CA',
        population: 0,
        populationDensity: 0,
        state: '',
        stateCode: '',
      });
      expect(ts.formatName()).toBe(canada);
    });

    it('returns countries with states', () => {
      const ts = TimeSeries.create({
        country: 'Canada',
        countryCode: 'CA',
        counts: [],
        dates: [],
        key: 'CA',
        population: 0,
        populationDensity: 0,
        state: 'Ontario',
        stateCode: 'ON',
      });
      expect(ts.formatName()).toBe('Canada, Ontario');
    });
  });

  describe('forEachDayWhere', () => {
    it('iterates through the time series calling back when a count matches the predicate', () => {
      const ts = TimeSeries.create({
        country: 'Canada',
        countryCode: 'CA',
        counts: [
          createTimeSeriesCount(1),
          createTimeSeriesCount(2),
          createTimeSeriesCount(3),
          createTimeSeriesCount(4),
          createTimeSeriesCount(5),
        ],
        dates: [],
        key: 'CA',
        population: 0,
        populationDensity: 0,
        state: 'Ontario',
        stateCode: 'ON',
      });
      let count = 0;
      ts.forEachDayWhere(
        tsc => tsc.confirmed > 2,
        () => (count += 1)
      );
      expect(count).toBe(3);
    });
  });
});
