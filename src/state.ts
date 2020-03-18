import { fetchData } from './data';
import { AppState } from './interfaces';
import { isNumber, isString } from '@ch1/utility';

const defaultDataset = 0;
const defaultCountries = [1, 43, 119, 414, 426];
const defaultMode = 2;
const defaultStart = '2019-12-26';
const defaultScaleType = 0;
const defaultShowStates = false;

export function createState(): AppState {
  return {
    countries: [],
    currentSeries: [],
    dataPromise: fetchData(),
    lineGraphState: {
      dataSetIndexes: [defaultDataset],
      byMetric: 0,
      countryIndexes: defaultCountries,
      mode: defaultMode,
      scaleType: defaultScaleType,
      showStates: defaultShowStates,
      startDate: defaultStart,
    },
  };
}

export function saveState(state: AppState) {
  if (window.localStorage) {
    window.localStorage.setItem(
      'state',
      JSON.stringify({
        ...state,
        dataPromise: undefined,
      })
    );
  }
}

export function loadState(): AppState | null {
  if (window.localStorage) {
    const item = window.localStorage.getItem('state');
    if (item) {
      try {
        const parsed = JSON.parse(item);
        if (!parsed) {
          return null;
        }
        if (isSavedAppState(parsed) === false) {
          console.log('reseting old state');
          window.localStorage.setItem('state', '');
          return null;
        }
        return {
          ...parsed,
          dataPromise: fetchData(),
        };
      } catch (e) {
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
  if (Array.isArray(thing.currentSeries) === false) {
    return false;
  }
  return isSavedLineGraphState(thing.lineGraphState);
}

function isSavedLineGraphState(thing: any): boolean {
  if (!thing) {
    return false;
  }

  if (isNumber(thing.byMetric) === false) {
    return false;
  }

  if (Array.isArray(thing.countryIndexes) === false) {
    return false;
  }

  if (Array.isArray(thing.dataSetIndexes) === false) {
    return false;
  }

  if (isNumber(thing.mode) === false) {
    return false;
  }

  if (isNumber(thing.showStates) === false) {
    return false;
  }

  if (isString(thing.startDate) === false) {
    return false;
  }

  return true;
}
