import { defaultRouterState, forceDefaults } from './router';

describe('router state', () => {
  describe('forceDefaults', () => {
    it('forces an empty object to match the defaults', () => {
      expect(forceDefaults(undefined)).toEqual(defaultRouterState);
    });
  });
});
