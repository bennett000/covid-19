import { TimeSeriesArray } from './time-series-array';

describe('time series array', () => {
  describe('create', () => {
    it('creates a thing that inherits from array', () => {
      expect(TimeSeriesArray.create() instanceof Array).toBe(true);
    });
  });

  describe('sortByProp', () => {
    it('sorts by a given prop', () => {
      const arr: any = TimeSeriesArray.create();
      const first = { id: () => 0 };
      const second = { id: () => 1 };
      const third = { id: () => 2 };
      const fourth = { id: () => 2 };
      const fifth = { id: () => 3 };
      arr.push(third);
      arr.push(fifth);
      arr.push(first);
      arr.push(fourth);
      arr.push(second);
      arr.sortByProp('id');
      expect(arr[0].id()).toBe(0);
      expect(arr[1].id()).toBe(1);
      expect(arr[2].id()).toBe(2);
      expect(arr[3].id()).toBe(2);
      expect(arr[4].id()).toBe(3);
    });
  });

  describe('sort by country', () => {
    it('sorts by country and state', () => {
      const arr: any = TimeSeriesArray.create();
      const first = { state: () => 'r1', country: () => 'a' };
      const second = { state: () => 'r2', country: () => 'a' };
      const third = { state: () => 'r1', country: () => 'b' };
      const fourth = { state: () => 'r2', country: () => 'b' };
      const fifth = { state: () => 'r2', country: () => 'b' };
      const sixth = { state: () => 'r2', country: () => 'c' };
      const seventh = { state: () => 'r1', country: () => 'c' };
      arr.push(sixth);
      arr.push(seventh);
      arr.push(third);
      arr.push(fifth);
      arr.push(first);
      arr.push(fourth);
      arr.push(second);
      arr.sortByCountry();
      expect(arr[0].country()).toBe('a');
      expect(arr[0].state()).toBe('r1');

      expect(arr[1].country()).toBe('a');
      expect(arr[1].state()).toBe('r2');

      expect(arr[2].country()).toBe('b');
      expect(arr[2].state()).toBe('r1');

      expect(arr[3].country()).toBe('b');
      expect(arr[3].state()).toBe('r2');

      expect(arr[4].country()).toBe('b');
      expect(arr[4].state()).toBe('r2');
    });
  });
});
