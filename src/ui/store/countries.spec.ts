import { reducers, events, actions } from './countries';

describe('countries state reducers', () => {
  describe('selected', () => {
    const reducer = reducers[events.selected];
    const selected = actions.selected;
    it('defaults to an empty array', () => {
      expect(reducer(undefined, selected('p')).selected).toEqual(['p']);
    });

    it('adds countries not in the list', () => {
      expect(reducer({ selected: [] } as any, selected('p')).selected).toEqual([
        'p',
      ]);
    });

    it('removes countries already on the list', () => {
      expect(
        reducer({ selected: ['q', 'r', 'p'] } as any, selected('r')).selected
      ).toEqual(['q', 'p']);
    });

    it('is overloaded to support wiping with a given array', () => {
      const given = ['q', 'p'];
      expect(
        reducer({ selected: ['q', 'r', 'p'] } as any, selected(given)).selected
      ).toBe(given);
    });

    it('returns the same state object if the arrays shalowly match', () => {
      const qp = ['q', 'p'];
      const state: any = { selected: qp };
      const newState = reducer(state, selected(['q', 'p']));
      expect(newState).toBe(state);
      expect(newState.selected).toBe(qp);
    });
  });

  describe('cickedClear', () => {
    const reducer = reducers[events.clickedClear];
    const clickedClear = actions.clickedClear;

    it('empties the selected array', () => {
      expect(
        reducer({ selected: ['p'] } as any, clickedClear()).selected
      ).toEqual([]);
    });
  });

  describe('toggled show state', () => {
    const reducer = reducers[events.toggledShowStates];
    const toggledShowStates = actions.toggledShowStates;

    it('toggles show states', () => {
      expect(
        reducer({ showStates: false } as any, toggledShowStates()).showStates
      ).toBe(true);
      expect(
        reducer({ showStates: true } as any, toggledShowStates()).showStates
      ).toBe(false);
    });
  });

  describe('updated filter', () => {
    const reducer = reducers[events.updatedFilter];
    const updatedFilter = actions.updatedFilter;

    it('sets the filter', () => {
      expect(reducer({ filter: '' } as any, updatedFilter('foo')).filter).toBe(
        'foo'
      );
    });

    it('returns the same state object if the value has not changed', () => {
      const state: any = { filter: 'foo' };
      expect(reducer(state, updatedFilter('foo'))).toBe(state);
    });
  });
});
