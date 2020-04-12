import { deepFreeze } from '@ch1/utility';
import { Action } from 'redux';
import { createSelector } from 'reselect';
import {
  createReducer,
  spreadPayloadIfNew,
  toggleProp,
} from '../../store/redux-utility';
import {
  defaultMode,
  defaultScaleType,
  defaultStart,
} from '../../../constants';
import { selectData } from '../../../data';

export interface TimeVsCountsAction extends Action<string> {}

export type TimeVsCountsState = typeof defaultTimeVsCountsState;
export const defaultTimeVsCountsState = deepFreeze({
  dataSetIndexes: [],
  isConfigOpen: false,
  mode: defaultMode,
  scaleType: defaultScaleType,
  showSeirState: false,
  startDate: defaultStart,
  usePerCapita: false,
});

type StoreSlice = { timeVsCounts: TimeVsCountsState };

const selectDataSetIndexes = (state: StoreSlice) =>
  state.timeVsCounts.dataSetIndexes;
const selectIsConfigOpen = (state: StoreSlice) =>
  state.timeVsCounts.isConfigOpen;
const selectMode = (state: StoreSlice) => state.timeVsCounts.mode;
const selectScaleType = (state: StoreSlice) => state.timeVsCounts.scaleType;
const selectShowSeirState = (state: StoreSlice) =>
  state.timeVsCounts.showSeirState;
const selectStartDate = (state: StoreSlice) => state.timeVsCounts.startDate;
const selectUsePerCapita = (state: StoreSlice) =>
  state.timeVsCounts.usePerCapita;
const selectCurrentSeries = selectData;

export const select = {
  currentSeries: selectCurrentSeries,
  dataSetIndexes: selectDataSetIndexes,
  isConfigOpen: selectIsConfigOpen,
  mode: selectMode,
  scaleType: selectScaleType,
  showSeirState: selectShowSeirState,
  startDate: selectStartDate,
  usePerCapita: selectUsePerCapita,
};

export const events = deepFreeze({
  toggledConfig: 'time_vs_counts/toggled_config',
  toggledPerCapita: 'time_vs_counts/toggled_per_capita',
  toggledSeirControls: 'time_vs_counts/toggled_seir_controls',
  updatedDataSetIndexes: 'time_vs_counts/updated_data_set_indexes',
  updatedMode: 'time_vs_counts/updated_mode',
  updatedScaleType: 'time_vs_counts/updated_scale_type',
  updatedStartDate: 'time_vs_counts/updated_start_date',
});

export const actions = {
  selectedDataSets: (payload: any[]) => ({
    type: events.updatedDataSetIndexes,
    payload: payload.map(v => parseInt(v + '', 10)),
  }),
  selectedStartDate: (payload: string) => ({
    type: events.updatedStartDate,
    payload,
  }),
  selectedMode: (payload: number | string) => ({
    type: events.updatedMode,
    payload: parseInt(payload + '', 10),
  }),
  selectedScaleType: (payload: number | string) => ({
    type: events.updatedScaleType,
    payload: parseInt(payload + '', 10),
  }),
  toggledConfig: () => ({ type: events.toggledConfig }),
  toggledPerCapita: () => ({ type: events.toggledPerCapita }),
  toggledSeirControls: () => ({ type: events.toggledSeirControls }),
};

export const reducers = {
  [events.toggledConfig]: toggleProp(defaultTimeVsCountsState, 'isConfigOpen'),
  [events.toggledPerCapita]: toggleProp(
    defaultTimeVsCountsState,
    'usePerCapita'
  ),
  [events.toggledSeirControls]: toggleProp(
    defaultTimeVsCountsState,
    'showSeirState'
  ),
  [events.updatedDataSetIndexes]: spreadPayloadIfNew(
    defaultTimeVsCountsState,
    'dataSetIndexes'
  ),
  [events.updatedMode]: spreadPayloadIfNew(defaultTimeVsCountsState, 'mode'),
  [events.updatedScaleType]: spreadPayloadIfNew(
    defaultTimeVsCountsState,
    'scaleType'
  ),
  [events.updatedStartDate]: spreadPayloadIfNew(
    defaultTimeVsCountsState,
    'startDate'
  ),
};

export const createReducerTimeVsCounts = (injectable?: any) =>
  createReducer(defaultTimeVsCountsState, reducers, injectable);
