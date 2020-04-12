import { deepFreeze, noop } from '@ch1/utility';
import { Action } from 'redux';
import { createReducer, toggleProp } from '../../store/redux-utility';
import { ChartSelector } from '../../../data/js-charting/chart-selector';

export interface ActionConfirmedVsRecentToggledConfig extends Action<string> {}

export type ConfirmedVsRecentState = typeof defaultConfirmedVsRecentState;
export const defaultConfirmedVsRecentState = deepFreeze({
  isConfigOpen: false,
});

export const select = {
  currentSeries: state => {
    const cs = ChartSelector.create(state.timeSeriesCollection);
    return cs.select(state);
  },
  isConfigOpen: (state: { confirmedVsRecent: ConfirmedVsRecentState }) =>
    state.confirmedVsRecent.isConfigOpen,
};

export const events = deepFreeze({
  toggledConfig: 'confirmed_vs_recent/toggled_config',
});

export const actions = {
  toggledConfig: () => ({
    type: events.toggledConfig,
  }),
};

export const reducers = {
  [events.toggledConfig]: toggleProp(
    defaultConfirmedVsRecentState,
    'isConfigOpen'
  ),
};

export const createReducerConfirmedVsRecent = (injectable?: any) =>
  createReducer(defaultConfirmedVsRecentState, reducers, injectable);
