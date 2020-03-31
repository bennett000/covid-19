import {
  convertToCountryDictionary,
  csvRowStringToArray,
  csvRowStringToJhuTimeSeriesHeader,
  stateToLocaleState,
  convertRowToTimeSeries,
  getRecoveryDays,
  interpolateRecoveriesActiveCasesAndNewProps,
  sumAllRegions,
  nytRowsToDict,
} from './data';
import { usaCode } from './constants';

const strings: any = {
  countries: {},
  data: {
    log: {},
  },
};

describe('data functions', () => {
  describe('stateToLocaleState', () => {
    it('provides no locale without a comma,', () => {
      expect(stateToLocaleState('foo')).toEqual(['', 'foo']);
    });

    it('uses the left side for the locale', () => {
      expect(stateToLocaleState('foo, bar')).toEqual(['foo', 'bar']);
    });
  });

  describe('csvRowStringToJhuTimeSeriesHeadaer', () => {
    it('slices from 4 on and converts to dates', () => {
      const test = csvRowStringToJhuTimeSeriesHeader('foo,bar,1,2,2020-06-04');
      expect(test[0] instanceof Date).toBe(true);
      expect(test[1]).toBe(undefined);
    });
  });

  describe('csvRowStringToArray', () => {
    it('converts "foo,bar" to "["foo", "bar"]"', () => {
      expect(csvRowStringToArray('foo,bar')).toEqual(['foo', 'bar']);
    });

    it('converts ""foo",bar" to "["foo", "bar"]"', () => {
      expect(csvRowStringToArray('"foo",bar')).toEqual(['foo', 'bar']);
    });

    it('converts ""foo, are you",bar" to "["foo, are you", "bar"]"', () => {
      expect(csvRowStringToArray('"foo, are you",bar')).toEqual([
        'foo, are you',
        'bar',
      ]);
    });

    it('converts ""foo, \\"are\\" you",bar" to "["foo, "are" you", "bar"]"', () => {
      expect(csvRowStringToArray('"foo, \\"are\\" you",bar')).toEqual([
        'foo, "are" you',
        'bar',
      ]);
    });

    it('converts ""foo, you\\me?",bar" to "["foo, you\\me?", "bar"]"', () => {
      expect(csvRowStringToArray('"foo, you\\\\me?",bar')).toEqual([
        'foo, you\\me?',
        'bar',
      ]);
    });
  });

  describe('convertRowToTimeSeries', () => {
    it('converts ["foo", "bar", "1", "2", "35", "40"] to a structured object', () => {
      expect(
        convertRowToTimeSeries(strings)(['foo', 'bar', '1', '2', '35', '40'])
      ).toEqual({
        country: 'bar',
        locale: '',
        population: 0,
        populationDensity: 0,
        state: 'foo',
        timeSeries: [35, 40],
      });
    });

    it('converts [""foo, ON"", "bar", "1", "2", "35", "40"] to a structured object', () => {
      expect(
        convertRowToTimeSeries(strings)([
          'foo, ON',
          'bar',
          '1',
          '2',
          '35',
          '40',
        ])
      ).toEqual({
        country: 'bar',
        locale: 'foo',
        population: 0,
        populationDensity: 0,
        state: 'ON',
        timeSeries: [35, 40],
      });
    });

    it('converts [""foo\'s county, ON"", "bar", "1", "2", "35", "40"] to a structured object', () => {
      expect(
        convertRowToTimeSeries(strings)([
          "foo's county, ON",
          'bar',
          '1',
          '2',
          '35',
          '40',
        ])
      ).toEqual({
        country: 'bar',
        locale: "foo's county",
        population: 0,
        populationDensity: 0,
        state: 'ON',
        timeSeries: [35, 40],
      });
    });
  });

  describe('convertToCountryDictionary', () => {
    it('ignores countries that do not have a code', () => {
      const dict = convertToCountryDictionary(strings)([
        [
          [],
          [
            {
              country: 'foo',
              locale: '',
              population: 0,
              populationDensity: 0,
              state: '',
              timeSeries: [],
            },
          ],
        ],
        [
          [],
          [
            {
              country: 'foo',
              locale: '',
              population: 0,
              populationDensity: 0,
              state: '',
              timeSeries: [],
            },
          ],
        ],
        [
          [],
          [
            {
              country: 'foo',
              locale: '',
              population: 0,
              populationDensity: 0,
              state: '',
              timeSeries: [],
            },
          ],
        ],
      ]);

      expect(Object.keys(dict).length).toBe(0);
    });

    it('adds countries that have a code', () => {
      const dict = convertToCountryDictionary(strings)([
        [
          [],
          [
            {
              country: 'Canada',
              locale: '',
              population: 0,
              populationDensity: 0,
              state: '',
              timeSeries: [],
            },
            {
              country: 'China',
              locale: '',
              population: 0,
              populationDensity: 0,
              state: '',
              timeSeries: [],
            },
          ],
        ],
        [
          [],
          [
            {
              country: 'Canada',
              locale: '',
              population: 0,
              populationDensity: 0,
              state: '',
              timeSeries: [],
            },
            {
              country: 'China',
              locale: '',
              population: 0,
              populationDensity: 0,
              state: '',
              timeSeries: [],
            },
          ],
        ],
        [
          [],
          [
            {
              country: 'Canada',
              locale: '',
              population: 0,
              populationDensity: 0,
              state: '',
              timeSeries: [],
            },
            {
              country: 'China',
              locale: '',
              population: 0,
              populationDensity: 0,
              state: '',
              timeSeries: [],
            },
          ],
        ],
      ]);

      expect(Object.keys(dict).length).toBe(2);
    });

    it('aggregates timeSeries data in any order', () => {
      const dict = convertToCountryDictionary(strings)([
        [
          [],
          [
            {
              country: 'Canada',
              locale: '',
              population: 0,
              populationDensity: 0,
              state: '',
              timeSeries: [],
            },
            {
              country: 'China',
              locale: '',
              population: 0,
              populationDensity: 0,
              state: '',
              timeSeries: [0],
            },
          ],
        ],
        [
          [],
          [
            {
              country: 'Canada',
              locale: '',
              population: 0,
              populationDensity: 0,
              state: '',
              timeSeries: [],
            },
            {
              country: 'China',
              locale: '',
              population: 0,
              populationDensity: 0,
              state: '',
              timeSeries: [0, 1],
            },
          ],
        ],
        [
          [],
          [
            {
              country: 'Canada',
              locale: '',
              population: 0,
              populationDensity: 0,
              state: '',
              timeSeries: [],
            },
            {
              country: 'China',
              locale: '',
              population: 0,
              populationDensity: 0,
              state: '',
              timeSeries: [1, 2, 3],
            },
          ],
        ],
      ]);

      expect(dict.CN.counts[2].recoveries).toBe(3);
    });

    it('ignores state/provinces that do not exist', () => {
      const dict = convertToCountryDictionary(strings)([
        [
          [],
          [
            {
              country: 'Canada',
              locale: '',
              population: 0,
              populationDensity: 0,
              state: '',
              timeSeries: [],
            },
            {
              country: 'China',
              locale: '',
              population: 0,
              populationDensity: 0,
              state: 'fictional',
              timeSeries: [],
            },
          ],
        ],
        [
          [],
          [
            {
              country: 'Canada',
              locale: '',
              population: 0,
              populationDensity: 0,
              state: '',
              timeSeries: [],
            },
            {
              country: 'China',
              locale: '',
              population: 0,
              populationDensity: 0,
              state: 'fictional',
              timeSeries: [],
            },
          ],
        ],
        [
          [],
          [
            {
              country: 'Canada',
              locale: '',
              population: 0,
              populationDensity: 0,
              state: '',
              timeSeries: [],
            },
            {
              country: 'China',
              locale: '',
              population: 0,
              populationDensity: 0,
              state: 'fictional',
              timeSeries: [],
            },
          ],
        ],
      ]);

      expect(Object.keys(dict).length).toBe(1);
    });

    it('adds state/provinces that  exist', () => {
      const dict = convertToCountryDictionary(strings)([
        [
          [],
          [
            {
              country: 'Canada',
              locale: '',
              population: 0,
              populationDensity: 0,
              state: 'Ontario',
              timeSeries: [],
            },
            {
              country: 'China',
              locale: '',
              population: 0,
              populationDensity: 0,
              state: '',
              timeSeries: [],
            },
          ],
        ],
        [
          [],
          [
            {
              country: 'Canada',
              locale: '',
              population: 0,
              populationDensity: 0,
              state: 'Ontario',
              timeSeries: [],
            },
            {
              country: 'China',
              locale: '',
              population: 0,
              populationDensity: 0,
              state: '',
              timeSeries: [],
            },
          ],
        ],
        [
          [],
          [
            {
              country: 'Canada',
              locale: '',
              population: 0,
              populationDensity: 0,
              state: 'Ontario',
              timeSeries: [],
            },
            {
              country: 'China',
              locale: '',
              population: 0,
              populationDensity: 0,
              state: '',
              timeSeries: [],
            },
          ],
        ],
      ]);

      expect(Object.keys(dict).length).toBe(2);
      expect(dict['CA.ON']).toBeTruthy();
    });

    it('adds locales regardless of if they exist or make sense', () => {
      const dict = convertToCountryDictionary(strings)([
        [
          [],
          [
            {
              country: 'Canada',
              locale: 'foo',
              population: 0,
              populationDensity: 0,
              state: 'Ontario',
              timeSeries: [],
            },
            {
              country: 'China',
              locale: 'bar',
              population: 0,
              populationDensity: 0,
              state: '',
              timeSeries: [],
            },
          ],
        ],
        [
          [],
          [
            {
              country: 'Canada',
              locale: 'foo',
              population: 0,
              populationDensity: 0,
              state: 'Ontario',
              timeSeries: [],
            },
            {
              country: 'China',
              locale: 'bar',
              population: 0,
              populationDensity: 0,
              state: '',
              timeSeries: [],
            },
          ],
        ],
        [
          [],
          [
            {
              country: 'Canada',
              locale: 'foo',
              population: 0,
              populationDensity: 0,
              state: 'Ontario',
              timeSeries: [],
            },
            {
              country: 'China',
              locale: 'bar',
              population: 0,
              populationDensity: 0,
              state: '',
              timeSeries: [],
            },
          ],
        ],
      ]);

      expect(dict['CA.ON.foo']).toBeTruthy();
      expect(dict['CN.bar']).toBeTruthy();
    });
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
      expect(getRecoveryDays(strings)(data[data.length - 1], 0, data, 25)).toBe(
        3
      );
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
        getRecoveryDays(strings)(
          data[data.length - 1],
          data.length - 1,
          data,
          6
        )
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
          getRecoveryDays(strings)(
            data[data.length - 1],
            data.length - 1,
            data,
            6
          )
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
        getRecoveryDays(strings)(
          data[data.length - 1],
          data.length - 1,
          data,
          6
        )
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
        getRecoveryDays(strings)(
          data[data.length - 1],
          data.length - 1,
          data,
          6
        )
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
        getRecoveryDays(strings)(
          data[data.length - 1],
          data.length - 1,
          data,
          6
        )
      ).toBe(0);
    });
  });

  describe('interpolateRecoveriesAndActiveCases', () => {
    it('adds active cases `confirmed` - `deaths` - `recoveries` = `active`', () => {
      const complete = interpolateRecoveriesActiveCasesAndNewProps(strings)({
        CA: {
          country: 'Canada',
          countryCode: 'CA',
          dates: [],
          key: 'CA',
          locale: '',
          population: 0,
          populationDensity: 0,
          state: '',
          stateCode: '',
          counts: [
            {
              active: 0,
              confirmed: 5,
              deaths: 2,
              recoveries: 0,
              newConfirmed: 0,
              newDeaths: 0,
              projectionReverseDeath: 0,
            },
          ],
        },
        US: {
          country: usaCode,
          countryCode: usaCode,
          dates: [],
          key: usaCode,
          locale: '',
          population: 0,
          populationDensity: 0,
          state: '',
          stateCode: usaCode,
          counts: [
            {
              active: 0,
              confirmed: 50,
              deaths: 20,
              newConfirmed: 0,
              newDeaths: 0,
              recoveries: 30,
              projectionReverseDeath: 0,
            },
          ],
        },
      });
      expect(complete.CA.counts[0].active).toBe(3);
      expect(complete.US.counts[0].active).toBe(0);
    });

    it('diffs confirmed and deaths into newConfirmed and newDeaths', () => {
      const complete = interpolateRecoveriesActiveCasesAndNewProps(strings)({
        CA: {
          country: 'Canada',
          countryCode: 'CA',
          dates: [],
          key: 'CA',
          locale: '',
          population: 0,
          populationDensity: 0,
          state: '',
          stateCode: '',
          counts: [
            {
              active: 0,
              confirmed: 5,
              deaths: 2,
              recoveries: 0,
              newConfirmed: 0,
              newDeaths: 0,
              projectionReverseDeath: 0,
            },
            {
              active: 0,
              confirmed: 11,
              deaths: 5,
              recoveries: 0,
              newConfirmed: 0,
              newDeaths: 0,
              projectionReverseDeath: 0,
            },
          ],
        },
        US: {
          country: usaCode,
          countryCode: usaCode,
          dates: [],
          key: usaCode,
          locale: '',
          population: 0,
          populationDensity: 0,
          state: '',
          stateCode: usaCode,
          counts: [
            {
              active: 0,
              confirmed: 50,
              deaths: 20,
              newConfirmed: 0,
              newDeaths: 0,
              recoveries: 30,
              projectionReverseDeath: 0,
            },
          ],
        },
      });
      expect(complete.CA.counts[0].newConfirmed).toBe(5);
      expect(complete.CA.counts[1].newConfirmed).toBe(6);
      expect(complete.CA.counts[0].newDeaths).toBe(2);
      expect(complete.CA.counts[1].newDeaths).toBe(3);
    });
  });

  describe('sumAllRegions', () => {
    it('ignores regions with locales', () => {
      const inputDict = {
        CA: {
          country: 'Canada',
          countryCode: 'CA',
          dates: [],
          key: 'CA',
          locale: 'foo',
          population: 0,
          populationDensity: 0,
          state: 'Ontario',
          stateCode: 'ON',
          counts: [
            {
              active: 5,
              confirmed: 10,
              deaths: 3,
              newConfirmed: 0,
              newDeaths: 0,
              recoveries: 2,
              projectionReverseDeath: 20,
            },
          ],
        },
      };
      const outputDict = sumAllRegions(strings)(inputDict);
      expect(outputDict).toEqual(inputDict);
    });

    it('ignores regions that have a total case', () => {
      const inputDict = {
        'CA.ON': {
          country: 'Canada',
          countryCode: 'CA',
          dates: [],
          key: 'CA.ON',
          locale: '',
          population: 0,
          populationDensity: 0,
          state: 'Ontario',
          stateCode: 'ON',
          counts: [
            {
              active: 5,
              confirmed: 10,
              deaths: 3,
              newConfirmed: 0,
              newDeaths: 0,
              recoveries: 2,
              projectionReverseDeath: 20,
            },
          ],
        },
        CA: {
          country: 'Canada',
          countryCode: 'CA',
          dates: [],
          key: 'CA',
          locale: '',
          population: 0,
          populationDensity: 0,
          state: '',
          stateCode: '',
          counts: [
            {
              active: 5,
              confirmed: 10,
              deaths: 3,
              newConfirmed: 0,
              newDeaths: 0,
              recoveries: 2,
              projectionReverseDeath: 20,
            },
          ],
        },
      };
      const outputDict = sumAllRegions(strings)(inputDict);
      expect(outputDict).toEqual(inputDict);
      expect(outputDict.CA.counts[0].confirmed).toBe(10);
    });

    it('augments regions that have in progress sums', () => {
      const inputDict = {
        'CA.ON': {
          country: 'Canada',
          countryCode: 'CA',
          dates: [],
          key: 'CA.ON',
          locale: '',
          population: 0,
          populationDensity: 0,
          state: 'Ontario',
          stateCode: 'ON',
          counts: [
            {
              active: 5,
              confirmed: 10,
              deaths: 3,
              newConfirmed: 0,
              newDeaths: 0,
              recoveries: 2,
              projectionReverseDeath: 20,
            },
          ],
        },
        ['CA.' + strings.countries.total]: {
          country: 'Canada',
          countryCode: 'CA',
          dates: [],
          key: 'CA.' + strings.countries.total,
          locale: '',
          population: 0,
          populationDensity: 0,
          state: strings.countries.total,
          stateCode: '',
          counts: [
            {
              active: 5,
              confirmed: 10,
              deaths: 3,
              newConfirmed: 0,
              newDeaths: 0,
              recoveries: 2,
              projectionReverseDeath: 20,
            },
          ],
        },
      };
      const outputDict = sumAllRegions(strings)(inputDict);
      expect(
        outputDict['CA.' + strings.countries.total].counts[0].confirmed
      ).toBe(20);
    });
  });

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
});
