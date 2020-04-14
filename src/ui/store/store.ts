import {
  applyMiddleware,
  compose,
  createStore as createReduxStore,
  combineReducers,
} from 'redux';
import { deepFreeze, objEach, isFunction } from '@ch1/utility';
import { ITimeSeriesCollection } from '../../data/data.interfaces';
import { Strings } from '../../i18n';
// container slices
import * as countries from '../containers/countries/countries.state';
import * as router from './router';
import * as seir from '../containers/seir/seir.state';
// features
import * as confirmedVsRecent from '../features/confirmed-vs-recent/confirmed-vs-recent.state';
import * as geography from '../features/geography/geography.state';
import * as timeVsCounts from '../features/time-vs-counts/time-vs-counts.state';
import * as dataTable from '../features/data-table/data-table.state';
import { loadState, saveState, forceObject } from '../state';

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
  confirmedVsRecent: confirmedVsRecent.ConfirmedVsRecentState;
  countries: countries.CountriesState;
  dataTable: dataTable.DataTableState;
  geography: geography.GeographyState;
  router: router.RouterState;
  seir: seir.SeirState;
  strings: Strings;
  timeSeriesCollection: ITimeSeriesCollection;
  timeVsCounts: timeVsCounts.TimeVsCountsState;
}

export function createStore(injectable: {
  strings: Strings;
  timeSeriesCollection: ITimeSeriesCollection;
}) {
  const rootReducer = combineReducers({
    confirmedVsRecent: confirmedVsRecent.createReducerConfirmedVsRecent(
      injectable
    ),
    countries: countries.createReducerCountry(injectable),
    dataTable: dataTable.createReducerDataTable(injectable),
    geography: geography.createReducerGeography(injectable),
    router: router.createReducerRouter(injectable),
    seir: seir.createReducerSeirState(injectable),
    strings: () => injectable.strings, // frozen object with all strings
    timeSeriesCollection: () => injectable.timeSeriesCollection, // frozen object from which much state is derived
    timeVsCounts: timeVsCounts.createReducerTimeVsCounts(injectable),
  });

  const forceState = (value: any) =>
    forceObject(
      [
        { prop: 'confirmedVsRecent', force: confirmedVsRecent.forceDefaults },
        { prop: 'countries', force: countries.forceDefaults },
        { prop: 'dataTable', force: dataTable.forceDefaults },
        { prop: 'geography', force: geography.forceDefaults },
        { prop: 'router', force: router.forceDefaults },
        { prop: 'seir', force: seir.forceDefaults },
        { prop: 'timeVsCounts', force: timeVsCounts.forceDefaults },
      ],
      value
    );

  const loadedState: AppState = {
    ...loadState(forceState),
    strings: injectable.strings,
    timeSeriesCollection: injectable.timeSeriesCollection,
  };

  return createReduxStore(
    rootReducer,
    loadedState,
    composeEnhancers(
      PRODUCTION
        ? applyMiddleware(localStorageMiddleware, router.routerMiddleware)
        : applyMiddleware(
            freezer,
            localStorageMiddleware,
            router.routerMiddleware
          )
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

export function localStorageMiddleware(store) {
  return next => action => {
    const result = next(action);
    saveState(store.getState());
    return result;
  };
}
