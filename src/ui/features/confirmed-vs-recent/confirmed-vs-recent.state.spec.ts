import { actions, events, reducers } from './confirmed-vs-recent.state';

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
});
