import {
  actions,
  events,
  reducers,
  defaultConfirmedVsRecentState,
  forceDefaults,
} from './confirmed-vs-recent.state';

describe('confirmed vs recent', () => {
  describe('toggledConfig', () => {
    const reducer = reducers[events.toggledConfig];
    const action = actions.toggledConfig;

    it('toggles the config', () => {
      expect(
        reducer({ isConfigOpen: false } as any, action()).isConfigOpen
      ).toBe(true);
      expect(
        reducer({ isConfigOpen: true } as any, action()).isConfigOpen
      ).toBe(false);
    });
  });

  describe('forceDefaults', () => {
    it('forces an empty object to match the defaults', () => {
      expect(forceDefaults(undefined)).toEqual(defaultConfirmedVsRecentState);
    });
  });
});
