import { fetchData } from './data';
import { AppState } from './interfaces';
import { isNumber, isString, isBoolean } from '@ch1/utility';
import { log } from './utility';
import { TimeSeriesArray } from './time-series';
import { Strings } from './i18n';
import { jhuStartDay } from './constants';

const defaultDataset = 0;
const defaultCountries = [];
const defaultMode = 2;
const defaultStart = jhuStartDay;
const defaultScaleType = 0;
const defaultShowStates = false;

export function createState(strings: Strings): AppState {
  return {
    countries: [],
    currentSeries: [],
    data: TimeSeriesArray.create(),
    dataPromise: fetchData(strings),
    countryKeys: defaultCountries,
    routePath: '/',
    lineGraphState: {
      dataSetIndexes: [defaultDataset],
      byMetric: 0,
      countryFilter: '',
      isConfigOpen: false,
      mode: defaultMode,
      scaleType: defaultScaleType,
      showStates: defaultShowStates,
      startDate: defaultStart,
    },
    tableState: {
      columns: [1, 3, 5, 7, 9],
      isConfigOpen: false,
      showAll: true,
      sortByActive: false,
      sortByActivePercent: false,
      sortByConfirmed: false,
      sortByConfirmedPercent: false,
      sortByDeaths: false,
      sortByDeathsPercent: false,
      sortByRecoveries: false,
      sortByRecoveriesPercent: false,
      sortByPopulation: false,
      sortByPopulationDensity: false,
    },
  };
}

export function saveState(state: AppState) {
  if (window.localStorage) {
    window.localStorage.setItem(
      'state',
      JSON.stringify({
        ...state,
        currentSeries: undefined,
        data: undefined,
        dataPromise: undefined,
      })
    );
  }
}

export function loadState(strings: Strings): AppState | null {
  if (window.localStorage) {
    const item = window.localStorage.getItem('state');
    if (item) {
      try {
        const parsed = JSON.parse(item);
        if (!parsed) {
          return null;
        }
        if (isSavedAppState(parsed) === false) {
          log(strings.state.wipingOld);
          window.localStorage.setItem('state', '');
          return null;
        }
        return {
          ...parsed,
          currentSeries: [],
          dataPromise: fetchData(strings),
          data: TimeSeriesArray.create(),
        };
      } catch (e) {
        log(strings.state.parseFail);
        window.localStorage.setItem('state', '');
        return null;
      }
    }
  }
  return null;
}

function isSavedAppState(thing: any): boolean {
  if (!thing) {
    return false;
  }
  if (Array.isArray(thing.countries) === false) {
    return false;
  }
  if (isSavedLineGraphState(thing.lineGraphState) === false) {
    return false;
  }

  if (Array.isArray(thing.countryKeys) === false) {
    return false;
  }

  return isSavedTableState(thing.tableState);
}

function isSavedLineGraphState(thing: any): boolean {
  if (!thing) {
    return false;
  }

  if (isBoolean(thing.isConfigOpen) === false) {
    return false;
  }

  if (isNumber(thing.byMetric) === false) {
    return false;
  }

  if (isString(thing.countryFilter) === false) {
    return false;
  }

  if (Array.isArray(thing.dataSetIndexes) === false) {
    return false;
  }

  if (isNumber(thing.mode) === false) {
    return false;
  }

  if (typeof thing.showStates !== 'boolean') {
    return false;
  }

  if (isString(thing.startDate) === false) {
    return false;
  }

  return true;
}

function isSavedTableState(thing: any): boolean {
  if (!thing) {
    return false;
  }
  if (Array.isArray(thing.columns) === false) {
    return false;
  }
  if (isBoolean(thing.isConfigOpen) === false) {
    return false;
  }
  if (isBoolean(thing.showAll) === false) {
    return false;
  }
  if (isBoolean(thing.sortByActive) === false) {
    return false;
  }
  if (isBoolean(thing.sortByActivePercent) === false) {
    return false;
  }
  if (isBoolean(thing.sortByConfirmed) === false) {
    return false;
  }
  if (isBoolean(thing.sortByConfirmedPercent) === false) {
    return false;
  }
  if (isBoolean(thing.sortByDeaths) === false) {
    return false;
  }
  if (isBoolean(thing.sortByDeathsPercent) === false) {
    return false;
  }
  if (isBoolean(thing.sortByRecoveries) === false) {
    return false;
  }
  if (isBoolean(thing.sortByRecoveriesPercent) === false) {
    return false;
  }
  if (isBoolean(thing.sortByPopulation) === false) {
    return false;
  }
  if (isBoolean(thing.sortByPopulationDensity) === false) {
    return false;
  }
  return true;
}

export function getSavedLanguage() {
  if (window.localStorage) {
    return window.localStorage.getItem('language') || '';
  }
}

export function saveLanguage(language: string) {
  if (window.localStorage) {
    window.localStorage.setItem('language', language);
  }
}
