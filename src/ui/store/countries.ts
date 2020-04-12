import { deepFreeze, isString, noop } from '@ch1/utility';
import { Action } from 'redux';
import { createReducer, spreadPayloadIfNew, toggleProp } from './redux-utility';
import { createSelector } from 'reselect';
import { ITimeSeriesCollection } from '../../data/data.interfaces';
import { filterStates } from '../../utility';

export interface ActionCountriesSelected extends Action<string> {
  payload: string | string[];
}

export interface ActionCountriesUpdatedFilter extends Action<string> {
  payload: string;
}

export interface ActionCountriesClickedClear extends Action<string> {}
export interface ActionCountriesToggledShowStates extends Action<string> {}

export type CountriesState = typeof defaultCountriesState;
export const defaultCountriesState = deepFreeze({
  filter: '',
  selected: [] as string[],
  showStates: true,
});

const selectCountries = (state: {
  timeSeriesCollection: ITimeSeriesCollection;
}) => state.timeSeriesCollection.countries();
const selectFilter = (state: { countries: CountriesState }) =>
  state.countries.filter;
const selectSelected = (state: { countries: CountriesState }) =>
  state.countries.selected;
const selectShowStates = (state: { countries: CountriesState }) =>
  !state.countries.showStates;
const selectStringTotal = (state: {
  strings: { countries: { total: string } };
}) => state.strings.countries.total;
const selectList = createSelector(
  selectShowStates,
  selectStringTotal,
  selectCountries,
  selectFilter,
  (showStates, totalString, countries, filter) => {
    const shortlist = countries.filter(filterStates(showStates, totalString));
    if (filter) {
      return shortlist.filter(s => s.name.indexOf(filter) > -1);
    }
    return shortlist;
  }
);

export const select = {
  countries: selectCountries,
  filter: selectFilter,
  selected: selectSelected,
  showStates: selectShowStates,
  stringTotal: selectStringTotal,
  list: selectList,
};

export const events = deepFreeze({
  clickedClear: 'countries/clicked_clear',
  selected: 'countries/selected',
  toggledShowStates: 'countries/toggled_show_states',
  updatedFilter: 'countries/updated_filter',
});

export const actions = {
  clickedClear: () => ({
    type: events.clickedClear,
  }),
  selected: (payload: string | string[]) => ({
    type: events.selected,
    payload,
  }),
  toggledShowStates: () => ({
    type: events.toggledShowStates,
  }),
  updatedFilter: (payload: string) => ({
    type: events.updatedFilter,
    payload,
  }),
};

export const reducers = {
  [events.clickedClear]: (
    state = defaultCountriesState,
    _: ActionCountriesClickedClear
  ) => {
    (noop as any)(_); // preserve arity;
    return {
      ...state,
      selected: [],
    };
  },
  [events.selected]: (
    state = defaultCountriesState,
    action: ActionCountriesSelected
  ) => {
    if (isString(action.payload)) {
      const index = state.selected.indexOf(action.payload);
      if (index === -1) {
        return {
          ...state,
          selected: [...state.selected, action.payload],
        };
      }
      return {
        ...state,
        selected: [
          ...state.selected.slice(0, index),
          ...state.selected.slice(index + 1),
        ],
      };
    }
    return spreadPayloadIfNew(defaultCountriesState, 'selected')(state, action);
  },
  [events.toggledShowStates]: toggleProp(defaultCountriesState, 'showStates'),
  [events.updatedFilter]: spreadPayloadIfNew(defaultCountriesState, 'filter'),
};

export const createReducerCountry = (injectable?: any) =>
  createReducer(defaultCountriesState, reducers, injectable);
