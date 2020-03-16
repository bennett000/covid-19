import { fetchData } from './data';
import { AppState } from './interfaces';

const defaultDataset = 0;
const defaultCountries = [1, 43, 119, 414, 426];
const defaultMode = 2;
const defaultStart = '2019-12-26';

export function createState(): AppState {
  return {
    countries: [],
    currentSeries: [],
    dataPromise: fetchData(),
    lineGraphState: {
      dataSetIndexes: [defaultDataset],
      countryIndexes: defaultCountries,
      mode: defaultMode,
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
        return {
          ...JSON.parse(item),
          dataPromise: fetchData(),
        };
      } catch (e) {
        return null;
      }
    }
  }
  return null;
}
