import { deepFreeze, Dictionary, noop, objReduce } from '@ch1/utility';
import { Action } from 'redux';
import { createSelector } from 'reselect';
import { createReducer, spreadPayloadIfNew } from '../../store/redux-utility';
import {
  activeRanges,
  confirmedRanges,
  deathRanges,
  recoveryRanges,
  jhuStartDay,
} from '../../../constants';
import { createToolTip } from '../../../data/js-charting/tooltip';
import {
  ITimeSeries,
  ITimeSeriesCollection,
} from '../../../data/data.interfaces';
import { Strings } from '../../../i18n';
import {
  statesToCodes,
  countriesToContinents,
} from '../../../data/country-data';
import { generateDateDictionary } from '../../../utility';
import { forceObject, forceNumber, forceString } from '../../state';

/** @todo come up with a more robust solution */
const startDate = new Date(jhuStartDay).getTime();
const days = Math.floor(
  (Date.now() - 24 * 60 * 60 * 1000 - startDate) / 1000 / 60 / 60 / 24
);
const dates = objReduce(
  generateDateDictionary(),
  (arr, index, dateString) => {
    arr[index] = dateString;
    return arr;
  },
  []
);

const excludeFromMap = deepFreeze({
  '': true,
  AG: true, // but it exists in the docs
  BB: true, // but it exists in the docs
  BH: true, // but it exists in the docs
  'CN.HK': 'HK',
  'CN.MO': 'MO',
  CV: true, // but it exists in the docs
  DM: true, // but it exists in the docs
  GD: true, // but it exists in the docs
  KN: true,
  LC: true, // but it exists in the docs
  MT: true, // but it exists in the docs
  MU: true,
  MV: true,
  PO: true,
  TL: 'TP',
  SC: true,
  SG: true, // but it exists in the docs
  'US.GU': true,
  'US.PR': true,
  'US.VI': true,
  VC: true,
});

export const countriesWithStates = ['AU', 'CA', 'CN', 'US'];

export interface ActionGeography extends Action<string> {}
export interface ActionGeographyNumber extends Action<string> {
  payload: number;
}
export interface ActionGeographyString extends Action<string> {
  payload: string;
}

const worldMapString = 'world';

export type GeographyState = typeof defaultGeographyState;
export const defaultGeographyState = deepFreeze({
  dataSetIndex: 0,
  playRecord: -1,
  map: worldMapString,
  title: '',
});

export const forceDefaults = (value: any): GeographyState =>
  forceObject(
    [
      {
        prop: 'dataSetIndex',
        force: forceNumber.bind(null, defaultGeographyState.dataSetIndex),
      },
      {
        prop: 'playRecord',
        force: forceNumber.bind(null, defaultGeographyState.playRecord),
      },
      { prop: 'map', force: forceString.bind(null, defaultGeographyState.map) },
      {
        prop: 'title',
        force: forceString.bind(null, defaultGeographyState.title),
      },
    ],
    value
  );

const selectDataSetIndex = (state: { geography: GeographyState }) =>
  state.geography.dataSetIndex;
const selectMap = (state: { geography: GeographyState }) => state.geography.map;
const selectPlayRecord = (state: { geography: GeographyState }) =>
  state.geography.playRecord;
const selectCountrySeries = createSelector(
  (state: { strings: Strings }) => state.strings,
  (state: { timeSeriesCollection: ITimeSeriesCollection }) =>
    state.timeSeriesCollection,
  selectDataSetIndex,
  selectPlayRecord,
  selectMap,
  getCountrySeries
);
const selectStateSeries = createSelector(
  (state: { strings: Strings }) => state.strings,
  (state: { timeSeriesCollection: ITimeSeriesCollection }) =>
    state.timeSeriesCollection,
  selectDataSetIndex,
  selectPlayRecord,
  selectMap,
  getStateSeries
);

const selectContinentSeries = createSelector(
  (state: { strings: Strings }) => state.strings,
  (state: { timeSeriesCollection: ITimeSeriesCollection }) =>
    state.timeSeriesCollection,
  selectDataSetIndex,
  selectPlayRecord,
  selectMap,
  getContinentSeries
);

const selectSeries = createSelector(
  selectMap,
  selectCountrySeries,
  selectStateSeries,
  selectContinentSeries,
  (map, c, s, o) => {
    if (map === worldMapString) {
      return c;
    }
    if (countriesWithStates.indexOf(map.toUpperCase()) > -1) {
      return s;
    }
    return o;
  }
);

export const select = {
  dataSetIndex: selectDataSetIndex,
  map: selectMap,
  playRecord: selectPlayRecord,
  series: selectSeries,
  stateSeries: selectStateSeries,
  title: (state: { geography: GeographyState }) => state.geography.title,
  isPlaying: createSelector(selectPlayRecord, record => record > -1),
};

export const events = deepFreeze({
  incrementedRecord: 'geography/incremented_record',
  updatedDataSet: 'geography/updated_data_set',
  resetRecord: 'geography/reset_record',
  selectedMap: 'geography/selected_map',
});

export const actions = {
  incrementedRecord: (): ActionGeography => ({
    type: events.incrementedRecord,
  }),
  updatedDataSet: (dataSetIndex: number | string): ActionGeographyNumber => ({
    type: events.updatedDataSet,
    payload: parseInt(dataSetIndex + '', 10),
  }),
  resetRecord: (): ActionGeography => ({
    type: events.resetRecord,
  }),
  selectedMap: (map: string): ActionGeographyString => ({
    type: events.selectedMap,
    payload: map,
  }),
  selectedWorldMap: (): ActionGeographyString =>
    actions.selectedMap(worldMapString),
};

export const reducers: any = {
  [events.selectedMap]: spreadPayloadIfNew(defaultGeographyState, 'map'),
  [events.updatedDataSet]: spreadPayloadIfNew(
    defaultGeographyState,
    'dataSetIndex'
  ),
  [events.resetRecord]: inj => (
    state = defaultGeographyState,
    _: ActionGeography
  ) => {
    if (state.playRecord === -1 && state.title === '') {
      return state;
    }
    return {
      ...state,
      playRecord: -1,
      title: getMapTitle(inj.strings, state.dataSetIndex),
    };
  },
  [events.incrementedRecord]: inj => (
    state = defaultGeographyState,
    _: ActionGeography
  ) => {
    const newPlayRecord = state.playRecord + 1;
    if (newPlayRecord >= days) {
      return {
        ...state,
        playRecord: -1,
        title: getMapTitle(inj.strings, state.dataSetIndex),
      };
    }
    return {
      ...state,
      playRecord: newPlayRecord,
      title: getMapTitle(inj.strings, state.dataSetIndex, newPlayRecord),
    };
  },
};

export const createReducerGeography = (injectable?: any) =>
  createReducer(defaultGeographyState, reducers, injectable);

function emptySeries() {
  return { ranges: [], series: [] };
}

function getCountrySeries(
  strings: Strings,
  timeSeries: ITimeSeriesCollection,
  dataSetIndex: number,
  playRecord: number,
  map: string
) {
  if (map !== worldMapString) {
    return emptySeries();
  }

  let max = 0;
  const s = [];
  timeSeries.forEach(ts => {
    const code = ts.countryCode();
    if (code === strings.countries.world) {
      return null;
    }

    if (excludeFromMap[code]) {
      return null;
    }

    if (ts.state()) {
      if (ts.state() !== strings.countries.total) {
        return null;
      }
    }
    if (!ts.population()) {
      return null;
    }
    const value = getFromDataSet(dataSetIndex, ts, playRecord);

    if (value < 1) {
      return null;
    }

    if (value > max) {
      max = value;
    }

    s.push({
      attributes: {
        toolTip: createToolTip(ts, dataSetIndex, ts.counts().length - 1),
      },
      map: 'WORLD.' + code.toLowerCase(),
      z: value,
    });
  });

  return {
    ranges: getRangesFromDataSet(dataSetIndex),
    series: [
      {
        defaultPoint_events_click: null,
        map,
        points: s,
      },
    ],
  };
}

function getRangesFromDataSet(index: number) {
  switch (index) {
    case 0:
      return activeRanges;
    case 1:
      return confirmedRanges;
    case 2:
      return deathRanges;
    case 3:
      return recoveryRanges;
    default:
      return activeRanges;
  }
}

function getFromDataSet(index: number, ts: ITimeSeries, record = -1) {
  if (record < 0) {
    switch (index) {
      case 0:
        return ts.lastActive();
      case 1:
        return ts.lastConfirmed();
      case 2:
        return ts.lastDeaths();
      case 3:
        return ts.lastRecoveries();
      default:
        return ts.lastActive();
    }
  } else {
    switch (index) {
      case 0:
        return ts.counts()[record].active || 0;
      case 1:
        return ts.counts()[record].confirmed || 0;
      case 2:
        return ts.counts()[record].deaths || 0;
      case 3:
        return ts.counts()[record].recoveries || 0;
      default:
        return ts.counts()[record].active || 0;
    }
  }
}

function getStateSeries(
  strings: Strings,
  timeSeries: ITimeSeriesCollection,
  dataSetIndex: number,
  playRecord: number,
  map: string
) {
  if (
    map === worldMapString ||
    countriesWithStates.indexOf(map.toUpperCase()) === -1
  ) {
    return emptySeries();
  }
  let max = 0;
  const s = [];
  timeSeries.forEach(ts => {
    if (ts.countryCode().toLowerCase() !== map.toLowerCase()) {
      return null;
    }
    if (ts.state() === strings.countries.total) {
      return null;
    }
    let stc = statesToCodes[ts.country()];
    if (!stc) {
      return null;
    }
    const code = ts.stateCode();
    if (!code) {
      return null;
    }
    if (excludeFromMap[ts.countryCode() + '.' + code]) {
      return null;
    }
    const value = getFromDataSet(dataSetIndex, ts, playRecord);

    if (value < 1) {
      return null;
    }

    if (value > max) {
      max = value;
    }

    s.push({
      attributes: {
        toolTip: createToolTip(ts, dataSetIndex, ts.counts().length - 1),
      },
      map: map + '.' + code,
      z: value,
    });
  });

  return {
    ranges: getRangesFromDataSet(dataSetIndex),
    series: [
      {
        defaultPoint_events_click: null,
        map: map,
        points: s,
      },
    ],
  };
}

function getContinentSeries(
  strings: Strings,
  timeSeries: ITimeSeriesCollection,
  dataSetIndex: number,
  playRecord: number,
  map: string
) {
  if (
    map === worldMapString ||
    countriesWithStates.indexOf(map.toUpperCase()) > -1
  ) {
    return emptySeries();
  }
  let max = 0;
  const s = [];
  timeSeries.forEach(ts => {
    const isIn = countriesToContinents[ts.country()];
    if (!isIn) {
      return null;
    }
    if (isIn !== map) {
      if (isIn.indexOf('America') > -1 && map.indexOf('America') > -1) {
      } else {
        return null;
      }
    }
    if (ts.state()) {
      if (ts.state() !== strings.countries.total) {
        return null;
      }
    }

    const code = ts.countryCode();
    if (excludeFromMap[code]) {
      return null;
    }
    const value = getFromDataSet(dataSetIndex, ts, playRecord);

    if (value < 1) {
      return null;
    }

    if (value > max) {
      max = value;
    }

    s.push({
      attributes: {
        toolTip: createToolTip(ts, dataSetIndex, ts.counts().length - 1),
      },
      map: code.toLowerCase(),
      z: value,
    });
  });

  return {
    ranges: getRangesFromDataSet(dataSetIndex),
    series: [
      {
        defaultPoint_events_click: null,
        map: map,
        points: s,
      },
    ],
  };
}

function getMapTitle(strings: Strings, dataSetIndex: number, index?: number) {
  if (index === undefined) {
    return new Date(dates[dates.length - 1]).toLocaleDateString();
  }
  return (
    getSeriesName(strings, dataSetIndex) +
    ' ' +
    new Date(dates[index]).toLocaleDateString()
  );
}

function getSeriesName(strings: Strings, dataSetIndex: number) {
  switch (dataSetIndex) {
    case 0:
      return strings.geography.mode0;
    case 1:
      return strings.geography.mode1;
    case 2:
      return strings.geography.mode2;
    case 3:
      return strings.geography.mode3;
    default:
      return strings.geography.mode0;
  }
}
