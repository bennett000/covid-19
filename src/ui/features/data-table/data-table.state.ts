import { deepFreeze, isNumber } from '@ch1/utility';
import { createSelector } from 'reselect';
import {
  createReducer,
  spreadPayloadIfNew,
  toggleProp,
} from '../../store/redux-utility';
import { Action } from 'redux';
import { ITimeSeriesCollection } from '../../../data/data.interfaces';
import { TimeSeriesArray } from '../../../data/time-series/time-series-array';
import {
  forceBoolean,
  forceObject,
  forceArrayOf,
  forceNumber,
  forceString,
} from '../../state';

export type DataTableState = typeof defaultDataTableState;
export const defaultDataTableState = deepFreeze({
  columns: [1, 3, 5, 7, 9],
  isConfigOpen: false,
  showAll: true,
  sortField: { prop: 'sortByCountry', asc: true },
});

export const forceDefaults = (value: any): DataTableState =>
  forceObject(
    [
      {
        prop: 'columns',
        force: forceArrayOf.bind(
          null,
          forceNumber.bind(null, -1),
          defaultDataTableState.columns
        ),
      },
      {
        prop: 'isConfigOpen',
        force: forceBoolean.bind(null, defaultDataTableState.isConfigOpen),
      },
      {
        prop: 'showAll',
        force: forceBoolean.bind(null, defaultDataTableState.showAll),
      },
      {
        prop: 'sortField',
        force: forceObject.bind(null, [
          {
            prop: 'prop',
            force: forceString.bind(null, defaultDataTableState.sortField.prop),
          },
          {
            prop: 'asc',
            force: forceBoolean.bind(null, defaultDataTableState.sortField.asc),
          },
        ]),
      },
    ],
    value
  );

type StoreSlice = {
  dataTable: DataTableState;
  timeSeriesCollection: ITimeSeriesCollection;
};
const selectColumns = (state: StoreSlice) => state.dataTable.columns;
const selectIsConfigOpen = (state: StoreSlice) => state.dataTable.isConfigOpen;
const selectShowAll = (state: StoreSlice) => state.dataTable.showAll;
const selectSortField = (state: StoreSlice) => state.dataTable.sortField;
const selectTimeSeriesCollection = (state: StoreSlice) =>
  state.timeSeriesCollection;
const selectList = createSelector(
  selectSortField,
  selectTimeSeriesCollection,
  (sortField, timeSeriesCollection) => {
    const arr = TimeSeriesArray.fromCollection(timeSeriesCollection);
    arr[sortField.prop](sortField.asc);
    return arr;
  }
);

export const select = {
  columns: selectColumns,
  isConfigOpen: selectIsConfigOpen,
  list: selectList,
  showAll: selectShowAll,
  sortField: selectSortField,
  timeSeriesCollection: selectTimeSeriesCollection,
};

export const events = deepFreeze({
  clickedSortField: 'data_table/clicked_sort_field',
  toggledConfig: 'data_table/toggled_config',
  toggledShowAll: 'data_table/toggled_show_all',
  selectedColumn: 'data_table/selected_column',
});

export interface ActionDataTable extends Action<string> {}
export interface ActionDataTableString extends ActionDataTable {
  payload: string;
}
export interface ActionDataTableNumberOrNumberArray extends ActionDataTable {
  payload: number | number[];
}

export const actions = {
  clickedSortField: (field: string) => ({
    type: events.clickedSortField,
    payload: field,
  }),
  toggledConfig: () => ({ type: events.toggledConfig }),
  toggledShowAll: () => ({ type: events.toggledShowAll }),
  selectedColumn: (column: number | number[]) => ({
    type: events.selectedColumn,
    payload: column,
  }),
};

export const reducers = {
  [events.clickedSortField]: (
    state = defaultDataTableState,
    action: ActionDataTableString
  ) => {
    if (state.sortField.prop === action.payload) {
      return {
        ...state,
        sortField: {
          prop: state.sortField.prop,
          asc: state.sortField.asc ? false : true,
        },
      };
    }

    return {
      ...state,
      sortField: {
        prop: action.payload,
        asc: true,
      },
    };
  },
  [events.toggledConfig]: toggleProp(defaultDataTableState, 'isConfigOpen'),
  [events.toggledShowAll]: toggleProp(defaultDataTableState, 'showAll'),
  [events.selectedColumn]: (
    state = defaultDataTableState,
    action: ActionDataTableNumberOrNumberArray
  ) => {
    if (isNumber(action.payload)) {
      const index = state.columns.indexOf(action.payload);
      if (index === -1) {
        return {
          ...state,
          columns: [...state.columns, action.payload],
        };
      }
      return {
        ...state,
        columns: [
          ...state.columns.slice(0, index),
          ...state.columns.slice(index + 1),
        ],
      };
    }
    return spreadPayloadIfNew(state, 'columns')(state, action);
  },
};

export const createReducerDataTable = (injectible?: any) =>
  createReducer(defaultDataTableState, reducers, injectible);
