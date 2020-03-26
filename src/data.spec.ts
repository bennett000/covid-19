import {
  convertToCountryDictionary,
  csvRowStringToArray,
  csvRowStringToJhuTimeSeriesHeadaer,
  stateToLocaleState,
  convertRowToTimeSeries,
  generateActiveCases,
} from './data';
import { worldString, totalString } from './constants';
import { JhuTimeSeriesHeader, JhuTimeSeries } from './interfaces';

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
      const test = csvRowStringToJhuTimeSeriesHeadaer('foo,bar,1,2,2020-06-04');
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
        convertRowToTimeSeries(['foo', 'bar', '1', '2', '35', '40'])
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
        convertRowToTimeSeries(['foo, ON', 'bar', '1', '2', '35', '40'])
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
        convertRowToTimeSeries([
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

  describe('generateActiveCases', () => {
    it('creates a new dataset based on confirmed - deaths - recoveries', () => {
      const header: JhuTimeSeriesHeader = [];
      const confirmed: JhuTimeSeries[] = [
        {
          country: 'foo',
          locale: 'baz',
          population: 0,
          populationDensity: 0,
          state: 'bar',
          timeSeries: [10, 30, 20],
        },
      ];
      const deaths: JhuTimeSeries[] = [
        {
          country: 'foo',
          locale: 'baz',
          population: 0,
          populationDensity: 0,
          state: 'bar',
          timeSeries: [3, 5, 9],
        },
      ];
      const recoveries: JhuTimeSeries[] = [
        {
          country: 'foo',
          locale: 'baz',
          population: 0,
          populationDensity: 0,
          state: 'bar',
          timeSeries: [1, 3, 5],
        },
      ];
      const active: JhuTimeSeries[] = [
        {
          country: 'foo',
          locale: 'baz',
          population: 0,
          populationDensity: 0,
          state: 'bar',
          timeSeries: [6, 22, 6],
        },
      ];
      expect(
        generateActiveCases([
          [header, confirmed],
          [header, deaths],
          [header, recoveries],
        ])[0][1]
      ).toEqual(active);
    });
  });

  describe('convertToCountryDictionary', () => {
    it('ignores countries that do not have a code', () => {
      const dict = convertToCountryDictionary([
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
      const dict = convertToCountryDictionary([
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
      const dict = convertToCountryDictionary([
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
      const dict = convertToCountryDictionary([
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
      const dict = convertToCountryDictionary([
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
      const dict = convertToCountryDictionary([
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
});
