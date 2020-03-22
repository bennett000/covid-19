import {
  csvRowStringToArray,
  csvRowStringToJhuTimeSeriesHeadaer,
  stateToLocaleState,
  convertRowToTimeSeries,
  sumRegion,
  totalsDictionaryToTimeSeries,
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

  describe('sumRegion', () => {
    it('produces a world total', () => {
      const dict = {};
      sumRegion(dict)({
        country: 'foo',
        locale: '',
        population: 0,
        populationDensity: 0,
        state: '',
        timeSeries: [1, 1, 1],
      });
      sumRegion(dict)({
        country: 'foo',
        locale: '',
        population: 0,
        populationDensity: 0,
        state: '',
        timeSeries: [0, 1, 2],
      });
      expect(dict[worldString]).toEqual([1, 2, 3]);
    });

    it('ignores entries that have no state or locale', () => {
      const dict = {};
      sumRegion(dict)({
        country: 'foo',
        locale: '',
        population: 0,
        populationDensity: 0,
        state: '',
        timeSeries: [1, 1, 1],
      });
      expect(Object.keys(dict).length).toBe(1);
    });

    it('produces a national total', () => {
      const dict = {};
      sumRegion(dict)({
        country: 'foo',
        locale: '',
        population: 0,
        populationDensity: 0,
        state: 'bar',
        timeSeries: [1, 1, 1],
      });
      sumRegion(dict)({
        country: 'foo',
        locale: '',
        population: 0,
        populationDensity: 0,
        state: 'baz',
        timeSeries: [0, 1, 2],
      });
      expect(dict['foo']).toEqual([1, 2, 3]);
    });

    it(`produces a state total for the US`, () => {
      const dict = {};
      sumRegion(dict)({
        country: 'US',
        locale: "Cook's County",
        population: 0,
        populationDensity: 0,
        state: 'OH',
        timeSeries: [1, 1, 1],
      });
      sumRegion(dict)({
        country: 'US',
        locale: 'Grand County',
        population: 0,
        populationDensity: 0,
        state: 'OH',
        timeSeries: [0, 1, 2],
      });
      expect(dict['US.Ohio']).toEqual([1, 2, 3]);
    });

    it(`produces a state and national total for the US`, () => {
      const dict = {};
      sumRegion(dict)({
        country: 'US',
        locale: "Cook's County",
        population: 0,
        populationDensity: 0,
        state: 'OH',
        timeSeries: [1, 1, 1],
      });
      sumRegion(dict)({
        country: 'US',
        locale: 'Grand County',
        population: 0,
        populationDensity: 0,
        state: 'OH',
        timeSeries: [0, 1, 2],
      });
      expect(dict['US.Ohio']).toEqual([1, 2, 3]);
      expect(dict['US']).toEqual([1, 2, 3]);
    });

    it(`ignores invalid US states`, () => {
      const dict = {};
      sumRegion(dict)({
        country: 'US',
        locale: "Cook's County",
        population: 0,
        populationDensity: 0,
        state: 'OH',
        timeSeries: [1, 1, 1],
      });
      sumRegion(dict)({
        country: 'US',
        locale: 'Grand County',
        population: 0,
        populationDensity: 0,
        state: 'OH',
        timeSeries: [0, 1, 2],
      });
      sumRegion(dict)({
        country: 'US',
        locale: 'Grand County',
        population: 0,
        populationDensity: 0,
        state: 'foo',
        timeSeries: [0, 1, 2],
      });
      expect(Object.keys(dict).length).toEqual(3);
      expect(dict['US']).not.toBe(undefined);
      expect(dict['US.Ohio']).toBeTruthy();
      expect(dict['US.foo']).toBe(undefined);
    });
  });

  describe('totalsDictionaryToTimeSeries', () => {
    it('converts a given data dictionary to structured data and adds it to the list', () => {
      expect(
        totalsDictionaryToTimeSeries(
          {
            US: [7, 8, 9],
            'US.Ohio': [1, 2, 3],
          },
          [
            {
              country: 'US',
              locale: "Cook's County",
              population: 0,
              populationDensity: 0,
              state: 'Ohio',
              timeSeries: [4, 5, 6],
            },
          ]
        )
      ).toEqual([
        {
          country: 'US',
          locale: '',
          population: 0,
          populationDensity: 0,
          state: totalString,
          timeSeries: [7, 8, 9],
        },
        {
          country: 'US',
          locale: '',
          population: 11570808,
          populationDensity: 0,
          state: 'Ohio',
          timeSeries: [1, 2, 3],
        },
      ]);
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
});
