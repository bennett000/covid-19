import { freezer } from './store';
import { noop } from '@ch1/utility';

describe('store functions', () => {
  describe('freezer', () => {
    it('freezes the props on an object', () => {
      expect(() => {
        const state = { slice: { prop: 'foo' } };
        freezer({ getState: () => state })(noop)({});
        state.slice.prop = 'bar';
      }).toThrow();
    });
  });
});
