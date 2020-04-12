import * as dataTableState from './data-table.state';

describe('data table state', () => {
  describe('selected columns', () => {
    const action: any = dataTableState.actions.selectedColumn;
    const reducer =
      dataTableState.reducers[dataTableState.events.selectedColumn];
    it('adds numbers to the array', () => {
      expect(reducer({ columns: [] } as any, action(3)).columns).toEqual([3]);
    });

    it('removes numbers from the array', () => {
      expect(reducer({ columns: [3] } as any, action(3)).columns).toEqual([]);
    });

    it('replaces the array with an array', () => {
      expect(reducer({ columns: [3] } as any, action([1, 5])).columns).toEqual([
        1,
        5,
      ]);
    });
  });

  describe('clicked sort', () => {
    const action: any = dataTableState.actions.clickedSortField;
    const reducer: any =
      dataTableState.reducers[dataTableState.events.clickedSortField];

    it('flips the asc if the prop is the same', () => {
      expect(
        reducer({ sortField: { prop: 'foo', asc: true } }, action('foo'))
          .sortField
      ).toEqual({
        prop: 'foo',
        asc: false,
      });
    });

    it('replaces the sortField if prop is different', () => {
      expect(
        reducer({ sortField: { prop: 'foo', asc: false } }, action('bar'))
          .sortField
      ).toEqual({
        prop: 'bar',
        asc: true,
      });
    });
  });
});
