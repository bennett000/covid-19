import {
  createFromJhuCsvs,
  nytRowsToDict,
  getRecoveryDays,
  TimeSeriesCollection,
} from './time-series-collection';
import { CsvJhuTimeSeries } from '../csv/jhu-time-series';
import { usaCode } from '../../constants';
import { CsvNytTimeSeries } from '../csv/nyt-time-series';

describe('time series collection', () => {
  describe('from', () => {
    it('throws on unknown formats', () => {
      expect(() => TimeSeriesCollection.from([null as any] as any)).toThrow();
    });
  });

  describe('merge', () => {
    it('merges two time series, in collision, last key wins', () => {
      const ts1 = TimeSeriesCollection.from([
        CsvJhuTimeSeries.create(`s,c,l1,l2,2020-01-01
,China,0,0,15
,US,0,0,10
`),
      ]);
      const ts2 = TimeSeriesCollection.from([
        CsvJhuTimeSeries.create(`s,c,l1,l2,2020-01-01
,China,0,0,25
,Italy,0,0,30
`),
      ]);
      const ts = TimeSeriesCollection.merge([ts1, ts2]);
      expect(ts.select('CN').counts()[0].confirmed).toBe(25);
      expect(ts.select('US').counts()[0].confirmed).toBe(10);
      expect(ts.select('IT').counts()[0].confirmed).toBe(30);
    });
  });

  describe('reduce', () => {
    it('provides a reducer interface', () => {
      const ts = TimeSeriesCollection.from([
        CsvJhuTimeSeries.create(`s,c,l1,l2,2020-01-01
,China,0,0,15
,US,0,0,10
`),
      ]);
      const reduction = ts.reduce((total, next) => {
        return total + next.counts()[0].confirmed;
      }, 0);

      expect(reduction).toBe(25);
    });
  });

  describe('sumWorld', () => {
    it('adds up everything without a state', () => {
      const csv = `s,c,l1,l2
,China,0,0,25
,US,0,0,10
,Italy,0,0,15
`;
      const tsc = TimeSeriesCollection.from([CsvJhuTimeSeries.create(csv)]);
      tsc.sumWorld();
      expect(
        tsc.select((TimeSeriesCollection as any).worldString)
      ).toBeTruthy();
      expect(
        tsc.select((TimeSeriesCollection as any).worldString).counts()[0]
          .confirmed
      ).toBe(50);
    });
  });
  describe('countries', () => {
    it('produces a list of countries', () => {
      const csv = `s,c,l1,l2,2020-01-01,2020-01-02
Alberta,Canada,0,0,10,11
Ontario,Canada,0,0,10,11
,China,0,0,20,21
,France,0,0,20,21
,US,0,0,20,21
`;
      const tsc = TimeSeriesCollection.from([CsvJhuTimeSeries.create(csv)]);
      expect(tsc.countries()).toEqual([
        { index: 'CA.AB', name: 'Canada, Alberta' },
        { index: 'CA.ON', name: 'Canada, Ontario' },
        { index: 'CN', name: 'China' },
        { index: 'FR', name: 'France' },
        { index: 'US', name: 'US' },
      ]);
    });
  });

  describe('sumAllRegions', () => {
    it('ignores regions that have an existing total case', () => {
      const csv = `s,c,l1,l2,2020-01-01,2020-01-02
Ontario,Canada,0,0,10,11
,Canada,0,0,20,21`;
      const tsc = TimeSeriesCollection.from([CsvJhuTimeSeries.create(csv)]);
      tsc.sumRegions();
      expect(Object.keys((tsc as any).dictionary).length).toBe(2);
      expect(tsc.select('CA.ON').counts()[0].confirmed).toBe(10);
    });

    it('augments regions that have in progress sums', () => {
      const totalsString = (TimeSeriesCollection as any).totalsString;
      const csv = `s,c,l1,l2,2020-01-01,2020-01-02
Ontario,Canada,0,0,20,11
Alberta,Canada,0,0,10,21`;
      const tsc = TimeSeriesCollection.from([CsvJhuTimeSeries.create(csv)]);
      tsc.sumRegions();
      expect(tsc.select(`CA.${totalsString}`).counts()[0].confirmed).toBe(30);
    });

    describe('getRecoveryDays', () => {
      it('returns the days if they are non zero', () => {
        const data = [
          {
            active: 0,
            confirmed: 5,
            deaths: 0,
            newConfirmed: 0,
            newDeaths: 0,
            projectionReverseDeath: 0,
            recoveries: 3,
          },
        ];
        expect(getRecoveryDays(data[data.length - 1], 0, data, 25)).toBe(3);
      });

      it("returns the delta of rdays ago and rdays ago - 1's confirmed cases", () => {
        const data = [
          {
            active: 0,
            confirmed: 2,
            deaths: 0,
            newConfirmed: 0,
            newDeaths: 0,
            projectionReverseDeath: 0,
            recoveries: 0,
          },
          {
            active: 0,
            confirmed: 5,
            deaths: 0,
            newConfirmed: 0,
            newDeaths: 0,
            projectionReverseDeath: 0,
            recoveries: 0,
          },
          null,
          null,
          null,
          null,
          null,
          {
            active: 0,
            confirmed: 5,
            deaths: 0,
            newConfirmed: 0,
            newDeaths: 0,
            projectionReverseDeath: 0,
            recoveries: 0,
          },
        ];
        expect(
          getRecoveryDays(data[data.length - 1], data.length - 1, data, 6)
        ).toBe(3);
      });

      it(
        "returns the delta of rdays ago and rdays ago - 1's confirmed cases " +
          "and adds the day before's recoveries if they exist",
        () => {
          const data = [
            {
              active: 0,
              confirmed: 2,
              deaths: 0,
              newConfirmed: 0,
              newDeaths: 0,
              projectionReverseDeath: 0,
              recoveries: 0,
            },
            {
              active: 0,
              confirmed: 5,
              deaths: 0,
              newConfirmed: 0,
              newDeaths: 0,
              projectionReverseDeath: 0,
              recoveries: 0,
            },
            null,
            null,
            null,
            null,
            {
              active: 0,
              confirmed: 5,
              deaths: 0,
              newConfirmed: 0,
              newDeaths: 0,
              projectionReverseDeath: 0,
              recoveries: 22,
            },
            {
              active: 0,
              confirmed: 5,
              deaths: 0,
              newConfirmed: 0,
              newDeaths: 0,
              projectionReverseDeath: 0,
              recoveries: 0,
            },
          ];
          expect(
            getRecoveryDays(data[data.length - 1], data.length - 1, data, 6)
          ).toBe(25);
        }
      );

      it("returns 0 if rdays ago - 1's does not exist", () => {
        const data = [
          {
            active: 0,
            confirmed: 5,
            deaths: 0,
            newConfirmed: 0,
            newDeaths: 0,
            projectionReverseDeath: 0,
            recoveries: 0,
          },
          null,
          null,
          null,
          null,
          null,
          {
            active: 0,
            confirmed: 5,
            deaths: 0,
            newConfirmed: 0,
            newDeaths: 0,
            projectionReverseDeath: 0,
            recoveries: 0,
          },
        ];
        expect(
          getRecoveryDays(data[data.length - 1], data.length - 1, data, 6)
        ).toBe(0);
      });

      it('returns 0 if rdays ago does not exist', () => {
        const data = [
          null,
          null,
          null,
          null,
          null,
          {
            active: 0,
            confirmed: 5,
            deaths: 0,
            newConfirmed: 0,
            newDeaths: 0,
            projectionReverseDeath: 0,
            recoveries: 0,
          },
        ];
        expect(
          getRecoveryDays(data[data.length - 1], data.length - 1, data, 6)
        ).toBe(0);
      });

      it('returns 0 if there are no confirmed cases', () => {
        const data = [
          {
            active: 0,
            confirmed: 0,
            deaths: 0,
            newConfirmed: 0,
            newDeaths: 0,
            projectionReverseDeath: 0,
            recoveries: 0,
          },
        ];
        expect(
          getRecoveryDays(data[data.length - 1], data.length - 1, data, 6)
        ).toBe(0);
      });
    });
  });

  describe('interpolateRecoveriesAndActiveCases', () => {
    it('adds active cases `confirmed` - `deaths` - `recoveries` = `active`', () => {
      const confirmedString = `s,c,l1,l2,2020-01-01,2020-01-02
,China,0,0,10,13
,US,0,0,0,0`;
      const deathsString = `s,c,l1,l2,2020-01-01,2020-01-02
,China,0,0,1,3
,US,0,0,0,0`;
      const recoveriesString = `s,c,l1,l2,2020-01-01,2020-01-02
,China,0,0,3,5
,US,0,0,0,0`;

      const tsc = TimeSeriesCollection.from([
        CsvJhuTimeSeries.create(confirmedString),
        CsvJhuTimeSeries.create(deathsString),
        CsvJhuTimeSeries.create(recoveriesString),
      ]);

      tsc.interpolateRecoveriesActiveCasesAndNewProps();

      expect(tsc.select('CN').counts()[0].active).toBe(6);
      expect(tsc.select('CN').counts()[1].active).toBe(5);
      expect(tsc.select('US').counts()[0].active).toBe(0);
      expect(tsc.select('US').counts()[1].active).toBe(0);
    });

    it('diffs confirmed and deaths into newConfirmed and newDeaths', () => {
      const confirmedString = `s,c,l1,l2,2020-01-01,2020-01-02
,China,0,0,10,13
,US,0,0,0,0`;
      const deathsString = `s,c,l1,l2,2020-01-01,2020-01-02
,China,0,0,1,3
,US,0,0,0,0`;
      const recoveriesString = `s,c,l1,l2,2020-01-01,2020-01-02
,China,0,0,3,5
,US,0,0,0,0`;

      const tsc = TimeSeriesCollection.from([
        CsvJhuTimeSeries.create(confirmedString),
        CsvJhuTimeSeries.create(deathsString),
        CsvJhuTimeSeries.create(recoveriesString),
      ]);

      tsc.interpolateRecoveriesActiveCasesAndNewProps();

      expect(tsc.select('CN').counts()[0].newConfirmed).toBe(10);
      expect(tsc.select('CN').counts()[1].newConfirmed).toBe(3);
      expect(tsc.select('CN').counts()[0].newDeaths).toBe(1);
      expect(tsc.select('CN').counts()[1].newDeaths).toBe(2);
    });
  });
});

describe('from CsvNytTimeSeries to TimeSeries', () => {
  describe('nytRowsToDict', () => {
    it('ignores rows that have no date', () => {
      expect(nytRowsToDict([['', 'Washington']])).toEqual({});
    });

    it('ignores rows that have invalid US states', () => {
      expect(nytRowsToDict([['2020-01-01', 'Washingtonia']])).toEqual({});
    });

    it('gives states zero confirmed if the column is absent', () => {
      expect(
        nytRowsToDict([
          ['2020-01-01', 'Washington'],
          ['2020-01-01', 'Utah'],
        ])
      ).toEqual({
        '2020-01-01': {
          [`${usaCode}.UT`]: {
            active: 0,
            confirmed: 0,
            deaths: 0,
            newConfirmed: 0,
            newDeaths: 0,
            recoveries: 0,
            projectionReverseDeath: 0,
          },
          [`${usaCode}.WA`]: {
            active: 0,
            confirmed: 0,
            deaths: 0,
            newConfirmed: 0,
            newDeaths: 0,
            recoveries: 0,
            projectionReverseDeath: 0,
          },
        },
      });
    });

    it('gives states zero deaths if the column is absent', () => {
      expect(
        nytRowsToDict([
          ['2020-01-01', 'Washington', '0', '5'],
          ['2020-01-01', 'Utah', '0', '25'],
        ])
      ).toEqual({
        '2020-01-01': {
          [`${usaCode}.UT`]: {
            active: 0,
            confirmed: 25,
            deaths: 0,
            newConfirmed: 0,
            newDeaths: 0,
            recoveries: 0,
            projectionReverseDeath: 0,
          },
          [`${usaCode}.WA`]: {
            active: 0,
            confirmed: 5,
            deaths: 0,
            newConfirmed: 0,
            newDeaths: 0,
            recoveries: 0,
            projectionReverseDeath: 0,
          },
        },
      });
    });

    it("includes deaths and recoveries if they're present", () => {
      expect(
        nytRowsToDict([
          ['2020-01-01', 'Washington', '0', '5', '11'],
          ['2020-01-01', 'Utah', '0', '25', '3'],
          ['2020-01-02', 'Washington', '0', '7', '2'],
        ])
      ).toEqual({
        '2020-01-01': {
          [`${usaCode}.UT`]: {
            active: 0,
            confirmed: 25,
            deaths: 3,
            newConfirmed: 0,
            newDeaths: 0,
            recoveries: 0,
            projectionReverseDeath: 0,
          },
          [`${usaCode}.WA`]: {
            active: 0,
            confirmed: 5,
            deaths: 11,
            newConfirmed: 0,
            newDeaths: 0,
            recoveries: 0,
            projectionReverseDeath: 0,
          },
        },
        '2020-01-02': {
          [`${usaCode}.WA`]: {
            active: 0,
            confirmed: 7,
            deaths: 2,
            newConfirmed: 0,
            newDeaths: 0,
            recoveries: 0,
            projectionReverseDeath: 0,
          },
        },
      });
    });
  });

  it('converts nyt data as expected', () => {
    const csv = CsvNytTimeSeries.create(`d,s,f,c,d
2020-01-22,Washington,0,1,2
2020-01-23,Washington,0,2,5
2020-01-24,Washington,0,3,7
2020-01-22,California,0,4,1
2020-01-23,California,0,5,3
2020-01-24,California,0,6,5
`);
    const tsc = TimeSeriesCollection.from(csv);
    expect(tsc.select('US.WA')).toBeTruthy();
    expect(tsc.select('US.CA')).toBeTruthy();
    expect(tsc.select('US.WA').counts()[0].confirmed).toBe(1);
    expect(tsc.select('US.CA').counts()[0].confirmed).toBe(4);
  });
});

describe('from CsvJhuTimeSeries to TimeSeries', () => {
  describe('createFromJhuCsvs', () => {
    it('ignores countries that do not have a code', () => {
      const csv = CsvJhuTimeSeries.create(
        'state,country,long,lat,2020-01-01,2020-01-02\n' + ',foo,1,2,10,11\n'
      );

      const dict = createFromJhuCsvs([csv]);
      expect(Object.keys(dict).length).toBe(0);
    });

    it('adds countries that have a code', () => {
      const csv = CsvJhuTimeSeries.create(
        'state,country,long,lat,2020-01-01,2020-01-02\n' +
          ',Canada,1,2,10,11\n' +
          ',China,1,2,10,11\n'
      );
      const dict = createFromJhuCsvs([csv]);

      expect(Object.keys(dict).length).toBe(2);
    });

    it('aggregates timeSeries data in any order', () => {
      const confirmed = CsvJhuTimeSeries.create(
        'state,country,long,lat,2020-01-01,2020-01-02\n' +
          ',Canada,1,2,10,11,12,13\n' +
          ',China,1,2,10,11,12,13\n'
      );
      const deaths = CsvJhuTimeSeries.create(
        'state,country,long,lat,2020-01-01,2020-01-02\n' +
          ',Canada,1,2,1,1\n' +
          ',China,1,2,1,1\n'
      );
      const recovered = CsvJhuTimeSeries.create(
        'state,country,long,lat,2020-01-01,2020-01-02\n' +
          ',Canada,1,2,10,11,12,13,14,15\n' +
          ',China,1,2,10,11,12,13,14,15\n'
      );
      const dict = createFromJhuCsvs([confirmed, deaths, recovered]);

      expect(dict.CN.counts[5].recoveries).toBe(15);
    });

    it('ignores state/provinces that do not exist', () => {
      const csv = CsvJhuTimeSeries.create(
        'state,country,long,lat,2020-01-01,2020-01-02\n' +
          'Fictional Province,Canada,1,2,10,11\n'
      );
      const dict = createFromJhuCsvs([csv]);

      expect(Object.keys(dict).length).toBe(0);
    });

    it('adds state/provinces that  exist', () => {
      const csv = CsvJhuTimeSeries.create(
        'state,country,long,lat,2020-01-01,2020-01-02\n' +
          'Ontario,Canada,1,2,10,11\n'
      );
      const dict = createFromJhuCsvs([csv]);

      expect(Object.keys(dict).length).toBe(1);
      expect(dict['CA.ON']).toBeTruthy();
    });
  });
});
