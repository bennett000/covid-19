import * as timeVsCountsState from './time-vs-counts.state';

describe('time vs counts', () => {
  describe('forceDefaults', () => {
    it('forces an empty object to match the defaults', () => {
      expect(timeVsCountsState.forceDefaults(undefined)).toEqual(
        timeVsCountsState.defaultTimeVsCountsState
      );
    });
  });
});
