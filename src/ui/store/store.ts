import {
  applyMiddleware,
  compose,
  createStore as createReduxStore,
  combineReducers,
} from 'redux';
import { createReducerCountry, CountriesState } from './countries';
import { deepFreeze, objEach, isFunction } from '@ch1/utility';
import { ITimeSeriesCollection } from '../../data/data.interfaces';
import { Strings } from '../../i18n';
import { createReducerRouter, routerMiddleware, RouterState } from './router';
// features
import {
  createReducerConfirmedVsRecent,
  ConfirmedVsRecentState,
} from '../features/confirmed-vs-recent/confirmed-vs-recent.state';
import {
  createReducerGeography,
  GeographyState,
} from '../features/geography/geography.state';
import {
  createReducerTimeVsCounts,
  TimeVsCountsState,
} from '../features/time-vs-counts/time-vs-counts.state';
import {
  SeirState,
  createReducerSeirState,
} from '../containers/seir/seir.state';
import {
  DataTableState,
  createReducerDataTable,
} from '../features/data-table/data-table.state';

declare var PRODUCTION: boolean;
if (!PRODUCTION) {
  var PRODUCTION = false;
}

const composeEnhancers = PRODUCTION
  ? compose
  : (typeof window !== 'undefined' &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

export interface AppState {
  confirmedVsRecent: ConfirmedVsRecentState;
  countries: CountriesState;
  dataTable: DataTableState;
  geography: GeographyState;
  router: RouterState;
  seir: SeirState;
  strings: Strings;
  timeSeriesCollection: ITimeSeriesCollection;
  timeVsCounts: TimeVsCountsState;
}

export function createStore(injectable: {
  strings: Strings;
  timeSeriesCollection: ITimeSeriesCollection;
}) {
  const rootReducer = combineReducers({
    confirmedVsRecent: createReducerConfirmedVsRecent(injectable),
    countries: createReducerCountry(injectable),
    dataTable: createReducerDataTable(injectable),
    geography: createReducerGeography(injectable),
    router: createReducerRouter(injectable),
    seir: createReducerSeirState(injectable),
    strings: () => injectable.strings, // frozen object with all strings
    timeSeriesCollection: () => injectable.timeSeriesCollection, // frozen object from which much state is derived
    timeVsCounts: createReducerTimeVsCounts(injectable),
  });

  return createReduxStore(
    rootReducer,
    undefined,
    composeEnhancers(
      PRODUCTION
        ? applyMiddleware(routerMiddleware)
        : applyMiddleware(freezer, routerMiddleware)
    )
  );
}

export function freezer(store) {
  let { getState } = store;
  if (isFunction(getState) === false) {
    getState = () => ({});
  }

  freezeProps(getState());
  return next => action => {
    freezeProps(getState());
    try {
      return next(action);
    } finally {
      freezeProps(getState());
    }
  };
}

export function freezeProps(state) {
  objEach(state, (value, prop) => {
    state[prop] = deepFreeze(value);
  });
}
