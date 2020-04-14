import {
  forceNumber,
  forceString,
  forceBoolean,
  forceArrayOf,
  forceDictionaryOf,
  DataDefaulter,
  forceObject,
} from './state';

describe('state functions', () => {
  describe('force number', () => {
    it('provides a default if a non number is given', () => {
      expect(forceNumber(12, '98')).toBe(12);
    });

    it('provides the number if a number is given', () => {
      expect(forceNumber(12, 98)).toBe(98);
    });
  });

  describe('force string', () => {
    it('provides a default if a non string is given', () => {
      expect(forceString('12', 98)).toBe('12');
    });

    it('provides the string if a string is given', () => {
      expect(forceString('12', '98')).toBe('98');
    });
  });

  describe('force boolean', () => {
    it('provides a default if a non boolean is given', () => {
      expect(forceBoolean(true, null)).toBe(true);
    });

    it('provides the boolean if a boolean is given', () => {
      expect(forceBoolean(true, false)).toBe(false);
    });
  });

  describe('force array of', () => {
    it('provides a copy of the default array if a non array is given', () => {
      const force: DataDefaulter<boolean> = forceBoolean.bind(null, true);
      const defaultArr = [true, false, true];
      const forced = forceArrayOf(force, defaultArr, undefined);
      expect(forced).toEqual(defaultArr);
      expect(forced).not.toBe(defaultArr);
    });

    it('provides a completed array if a sparse array is given', () => {
      const force: DataDefaulter<boolean> = forceBoolean.bind(null, true);
      const forced = forceArrayOf(
        force,
        [true, false, true],
        [false, false, true, undefined, undefined]
      );
      expect(forced).toEqual([false, false, true, true, true]);
    });
  });

  describe('force dictionary of', () => {
    it('provides a copy of the default dictionary if a non dictionary is given', () => {
      const force: DataDefaulter<boolean> = forceBoolean.bind(null, true);
      const defaultDictionary = { a: true, b: false, c: true };
      const forced = forceDictionaryOf(force, defaultDictionary, undefined);
      expect(forced).toEqual(defaultDictionary);
      expect(forced).not.toBe(defaultDictionary);
    });

    it('provides a completed dictionary if a sparse dictionary is given', () => {
      const force: DataDefaulter<boolean> = forceBoolean.bind(null, true);
      const forced = forceDictionaryOf(
        force,
        { a: true, b: false, c: true },
        { a: true, b: null }
      );
      expect(forced).toEqual({ a: true, b: true });
    });
  });

  describe('force object', () => {
    it('forces an object to a given shape', () => {
      const forceBool: DataDefaulter<boolean> = forceBoolean.bind(null, true);
      const forceStr: DataDefaulter<boolean> = forceString.bind(
        null,
        'community'
      );
      const forced = forceObject(
        [
          { prop: 'a', force: forceBool },
          { prop: 'b', force: forceStr },
        ],
        undefined
      );
      expect(forced).toEqual({ a: true, b: 'community' });
    });

    it('fills in sparse objects', () => {
      const forceBool: DataDefaulter<boolean> = forceBoolean.bind(null, true);
      const forceStr: DataDefaulter<boolean> = forceString.bind(
        null,
        'community'
      );
      const forced = forceObject(
        [
          { prop: 'a', force: forceBool },
          { prop: 'b', force: forceStr },
          { prop: 'c', force: forceStr },
        ],
        { c: 'distance' }
      );
      expect(forced).toEqual({ a: true, b: 'community', c: 'distance' });
    });
  });
});
