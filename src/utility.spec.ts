import {
  arity,
  filterStates,
  simplePad,
  sortByProp,
  debounce,
  camelToSnake,
} from './utility';

describe('utility functions', () => {
  describe('arity', () => {
    it('handles the "terse" case (arrow)', () => {
      expect(arity(foo => foo)).toBe(1);
    });

    it('handles the "terse" case (function)', () => {
      expect(
        arity(function(foo) {
          return foo;
        })
      ).toBe(1);
    });

    it('handles the null arrow case', () => {
      expect(arity(() => 'foo')).toBe(0);
    });

    it('handles the null function case', () => {
      expect(
        arity(function() {
          return 'foo';
        })
      ).toBe(0);
    });

    it('handles two arguments (arrow)', () => {
      expect(arity((state, action) => 'foo')).toBe(2);
    });

    it('handles two arguments (function)', () => {
      expect(
        arity(function(state, action) {
          return 'foo';
        })
      ).toBe(2);
    });
  });

  describe('filterStates', () => {
    const totalString = 'Total';
    it('includes everything if the filter is off', () => {
      expect(filterStates(false, totalString)('foo' as any)).toBe(true);
    });

    it('includes korea', () => {
      expect(
        filterStates(true, totalString)({ name: 'KoReA, South', index: 5 })
      ).toBe(true);
    });

    it('excludes countries with commas', () => {
      expect(
        filterStates(true, totalString)({ name: 'foo, bar', index: 5 })
      ).toBe(false);
    });

    it('includes countries with commas if there is a total string', () => {
      expect(
        filterStates(true, totalString)({ name: 'foo, Total', index: 5 })
      ).toBe(true);
    });

    it('includes countries with no commas', () => {
      expect(filterStates(true, totalString)({ name: 'foo', index: 5 })).toBe(
        true
      );
    });
  });

  describe('simplePad', () => {
    it('pads numbers less than 10 with a leading 0', () => {
      expect(simplePad(5)).toBe('05');
    });

    it('ignores numbers greater than 10', () => {
      expect(simplePad(10)).toBe('10');
    });
  });

  describe('sortByProp', () => {
    it('smaller things are negative', () => {
      expect(sortByProp('foo')({ foo: 3 }, { foo: 5 })).toBe(-1);
    });

    it('bigger things are positive', () => {
      expect(sortByProp('foo')({ foo: 5 }, { foo: 3 })).toBe(1);
    });

    it('even things are even', () => {
      expect(sortByProp('foo')({ foo: 5 }, { foo: 5 })).toBe(0);
    });
  });

  describe('debounce', () => {
    it('runs a function *once* after it has not been called for a given amount of time', done => {
      let count = 0;
      const inc = debounce(() => (count += 1), 0);
      inc();
      inc();
      inc();
      expect(count).toBe(0);
      setTimeout(() => {
        expect(count).toBe(1);
        done();
      }, 1);
    });

    it('uses the last set of arguments', done => {
      let count = 0;
      const inc = debounce(val => (count += val), 0);
      inc(5);
      inc(10);
      inc(37);
      expect(count).toBe(0);
      setTimeout(() => {
        expect(count).toBe(37);
        done();
      }, 1);
    });
  });

  describe('camel to snake', () => {
    it('does nothing to lowercase strings', () => {
      expect(camelToSnake('foo')).toBe('foo');
    });

    it('converts camel to snake', () => {
      expect(camelToSnake('fooBar')).toBe('foo_bar');
    });

    it('converts Pascal to snake', () => {
      expect(camelToSnake('FooBar')).toBe('foo_bar');
    });

    it('brutalizes uppercase oddities', () => {
      expect(camelToSnake('someHTML')).toBe('some_h_t_m_l');
    });
  });
});
