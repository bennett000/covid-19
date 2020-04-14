import {
  actions,
  events,
  reducers,
  forceDefaults,
  defaultGeographyState,
} from './geography.state';

describe('geography', () => {
  describe('updated data set index', () => {
    const reducer = reducers[events.updatedDataSet];
    const action = actions.updatedDataSet;

    it('updates the data set index if no state is given', () => {
      expect(reducer(undefined, action(5)).dataSetIndex).toBe(5);
    });

    it('updates the data set index', () => {
      expect(reducer({ dataSetIndex: 3 } as any, action(5)).dataSetIndex).toBe(
        5
      );
    });
  });

  describe('selected map', () => {
    const reducer = reducers[events.selectedMap];
    const action = actions.selectedMap;

    it('updates the map if no state is given', () => {
      expect(reducer(undefined, action('foo')).map).toBe('foo');
    });

    it('updates the map', () => {
      expect(reducer({ map: 'bar' } as any, action('foo')).map).toBe('foo');
    });
  });

  describe('reset record', () => {
    const inj = { strings: { geography: {} } };
    const reducer = reducers[events.resetRecord];
    const action = actions.resetRecord;
    it('resets the playRecord to -1', () => {
      expect(reducer(inj)({ playRecord: 5 } as any, action()).playRecord).toBe(
        -1
      );
    });

    it('sets the title', () => {
      expect(
        reducer(inj)({ playRecord: 5 } as any, action()).title
      ).toBeTruthy();
    });

    it('sets the playRecord to -1 if no state is given', () => {
      expect(reducer(inj)(undefined, action()).playRecord).toBe(-1);
    });
  });

  describe('incremented record', () => {
    const inj = { strings: { geography: {} } };
    const reducer = reducers[events.incrementedRecord];
    const action = actions.incrementedRecord;

    it('increments the record', () => {
      expect(reducer(inj)({ playRecord: 5 } as any, action()).playRecord).toBe(
        6
      );
    });

    it('starts the record at 0 if state is given', () => {
      expect(reducer(inj)(undefined, action()).playRecord).toBe(0);
    });
  });

  describe('forceDefaults', () => {
    it('forces an empty object to match the defaults', () => {
      expect(forceDefaults(undefined)).toEqual(defaultGeographyState);
    });
  });
});
