import { fetchData } from './data';
import { AppState } from './interfaces';
import { isNumber, isString, isBoolean } from '@ch1/utility';
import { log } from './utility';
import { TimeSeriesArray } from './time-series';
import { Strings } from './i18n';
import { Seir } from './seir';
import {
  defaultCountries,
  defaultDaysToProject,
  defaultDataset,
  defaultMode,
  defaultScaleType,
  defaultShowStates,
  defaultStart,
} from './constants';

export function createState(strings: Strings): AppState {
  return {
    countries: [],
    currentSeries: [],
    data: TimeSeriesArray.create(),
    dataPromise: fetchData(strings),
    countryKeys: defaultCountries,
    routePath: '/',
    seirState: {
      daysToProject: defaultDaysToProject,
      r0: Seir.r0,
      incubationPeriod: Seir.incubationPeriod,
      durationOfInfection: Seir.durationOfInfection,
      recoveryTimeForMildCases: Seir.recoveryTimeForMildCases,
      timeFromIncubationToHospital: Seir.timeFromIncubationToDeath,
      lengthOfSevereHospitalStay: Seir.lengthOfSevereHospitalStay,
      timeFromIncubationToDeath: Seir.timeFromIncubationToDeath,
      hospitalizationRate: Seir.hospitalizationRate,
      fatalityRate: Seir.fatalityRate,
    },
    timeVsCountsState: {
      dataSetIndexes: [defaultDataset],
      byMetric: 0,
      countryFilter: '',
      isConfigOpen: false,
      mode: defaultMode,
      scaleType: defaultScaleType,
      showSeirState: false,
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
      sortByNewConfirmed: false,
      sortByNewDeaths: false,
      sortByRecoveries: false,
      sortByRecoveriesPercent: false,
      sortByPeakActive: false,
      sortByPeakActivePercent: false,
      sortByPeakNewConfirmed: false,
      sortByPeakNewDeaths: false,
      sortByPopulation: false,
      sortByPopulationDensity: false,
    },
    confirmedVsRecentState: {
      countryFilter: '',
      isConfigOpen: false,
      showStates: defaultShowStates,
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

interface DataType {
  prop: string;
  is: (thing: any) => boolean;
}

const dataTypeAppState: DataType[] = [
  { prop: 'countries', is: Array.isArray },
  { prop: 'timeVsCountsState', is: isSavedTimeVsCountsState },
  { prop: 'countryKeys', is: Array.isArray },
  { prop: 'tableState', is: isSavedTableState },
  { prop: 'confirmedVsRecentState', is: isConfirmedVsRecentState },
  { prop: 'seirState', is: isSeirState },
];

const dataTypeSavedTimeVsCountsState: DataType[] = [
  { prop: 'isConfigOpen', is: isBoolean },
  { prop: 'byMetric', is: isNumber },
  { prop: 'countryFilter', is: isString },
  { prop: 'dataSetIndexes', is: Array.isArray },
  { prop: 'mode', is: isNumber },
  { prop: 'showStates', is: isBoolean },
  { prop: 'showSeirState', is: isBoolean },
  { prop: 'startDate', is: isString },
];

const dataTypeSavedTableState: DataType[] = [
  { prop: 'columns', is: Array.isArray },
  { prop: 'isConfigOpen', is: isBoolean },
  { prop: 'showAll', is: isBoolean },
  { prop: 'sortByActive', is: isBoolean },
  { prop: 'sortByActivePercent', is: isBoolean },
  { prop: 'sortByConfirmed', is: isBoolean },
  { prop: 'sortByConfirmedPercent', is: isBoolean },
  { prop: 'sortByDeaths', is: isBoolean },
  { prop: 'sortByDeathsPercent', is: isBoolean },
  { prop: 'sortByRecoveries', is: isBoolean },
  { prop: 'sortByRecoveriesPercent', is: isBoolean },
  { prop: 'sortByPeakActive', is: isBoolean },
  { prop: 'sortByPeakActivePercent', is: isBoolean },
  { prop: 'sortByPopulation', is: isBoolean },
  { prop: 'sortByPopulationDensity', is: isBoolean },
];

const dataTypeInputSeirSavedState: DataType[] = [
  { prop: 'daysToProject', is: isNumber },
  { prop: 'r0', is: isNumber },
  { prop: 'incubationPeriod', is: isNumber },
  { prop: 'durationOfInfection', is: isNumber },
  { prop: 'fatalityRate', is: isNumber },
  { prop: 'timeFromIncubationToDeath', is: isNumber },
  { prop: 'lengthOfSevereHospitalStay', is: isNumber },
  { prop: 'recoveryTimeForMildCases', is: isNumber },
  { prop: 'hospitalizationRate', is: isNumber },
  { prop: 'timeFromIncubationToHospital', is: isNumber },
];

function isDataType(dt: DataType[], thing: any): boolean {
  if (!thing) {
    return false;
  }

  return dt.reduce((r: boolean, pi) => {
    if (r === false) {
      return r;
    }
    return pi.is(thing[pi.prop]);
  }, true);
}

function isSavedAppState(thing: any): boolean {
  return isDataType(dataTypeAppState, thing);
}

function isSavedTimeVsCountsState(thing: any): boolean {
  return isDataType(dataTypeSavedTimeVsCountsState, thing);
}

function isSavedTableState(thing: any): boolean {
  return isDataType(dataTypeSavedTableState, thing);
}

function isSeirState(thing: any): boolean {
  return isDataType(dataTypeInputSeirSavedState, thing);
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

function isConfirmedVsRecentState(thing: any): boolean {
  if (!thing) {
    return false;
  }
  if (isString(thing.countryFilter) === false) {
    return false;
  }
  if (isBoolean(thing.isConfigOpen) === false) {
    return false;
  }
  if (isBoolean(thing.showStates) === false) {
    return false;
  }

  return true;
}
