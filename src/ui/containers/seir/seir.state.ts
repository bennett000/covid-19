import { Action } from 'redux';
import { deepFreeze, objReduce, Dictionary, noop } from '@ch1/utility';
import { createReducer, spreadPayloadIfNew } from '../../store/redux-utility';
import { Seir } from '../../../seir';
import { defaultDaysToProject } from '../../../constants';
import { camelToSnake, capitalizeFirst } from '../../../utility';
import { Strings } from '../../../i18n';

export type SeirProps = SeirActions & SeirSelectors;

export interface SeirSelectors {
  daysToProject: number;
  r0: number;
  incubationPeriod: number;
  durationOfInfection: number;
  fatalityRate: number;
  timeFromIncubationToDeath: number;
  lengthOfSevereHospitalStay: number;
  recoveryTimeForMildCases: number;
  hospitalizationRate: number;
  timeFromIncubationToHospital: number;
  strings: Strings;
}

export interface SeirActions {
  updatedDaysToProject: number;
  updatedR0: number;
  updatedIncubationPeriod: number;
  updatedDurationOfInfection: number;
  updatedFatalityRate: number;
  updatedTimeFromIncubationToDeath: number;
  updatedLengthOfSevereHospitalStay: number;
  updatedRecoveryTimeForMildCases: number;
  updatedHospitalizationRate: number;
  updatedTimeFromIncubationToHospital: number;
}

const intGt0 = (value: number | string, min = 1) => {
  const number = parseInt(value + '', 10);
  if (number > 0) {
    return number;
  }
  return min;
};
const floatGt0 = (value: number | string, min = 0.1) => {
  const number = parseFloat(value + '');
  if (number > 0) {
    return number;
  }
  return min;
};
const reducerDesc = deepFreeze({
  daysToProject: {
    defaultValue: defaultDaysToProject,
    filter: intGt0,
  },
  r0: {
    defaultValue: Seir.r0,
    filter: floatGt0,
  },
  incubationPeriod: {
    defaultValue: Seir.incubationPeriod,
    filter: intGt0,
  },
  durationOfInfection: {
    defaultValue: Seir.durationOfInfection,
    filter: intGt0,
  },
  recoveryTimeForMildCases: {
    defaultValue: Seir.recoveryTimeForMildCases,
    filter: intGt0,
  },
  timeFromIncubationToHospital: {
    defaultValue: Seir.timeFromIncubationToDeath,
    filter: intGt0,
  },
  lengthOfSevereHospitalStay: {
    defaultValue: Seir.lengthOfSevereHospitalStay,
    filter: intGt0,
  },
  timeFromIncubationToDeath: {
    defaultValue: Seir.timeFromIncubationToDeath,
    filter: intGt0,
  },
  hospitalizationRate: {
    defaultValue: Seir.hospitalizationRate,
    filter: floatGt0,
  },
  fatalityRate: {
    defaultValue: Seir.fatalityRate,
    filter: floatGt0,
  },
});

export const camelProp = (prop: string) => 'updated' + capitalizeFirst(prop);

export type SeirState = typeof defaultSeirState;
export const defaultSeirState = deepFreeze(
  objReduce(
    reducerDesc,
    (state, value, prop) => {
      state[prop] = value;
      return state;
    },
    {}
  )
);

type StoreSlice = { timeVsCounts: SeirState };

const numericSelectors = objReduce(
  defaultSeirState,
  (dict, _, prop) => {
    dict[prop] = (state: StoreSlice) => state[prop];
    return dict;
  },
  {}
);

export const select = {
  ...numericSelectors,
};

const numericEvents = objReduce(
  defaultSeirState,
  (dict: Dictionary<string>, _, prop) => {
    dict[camelProp(prop)] = `seir/updated_${camelToSnake(prop)}`;
    return dict;
  },
  {}
);

export const events: Dictionary<string> = deepFreeze({
  ...numericEvents,
  reset: 'seir/reset',
});

export interface ActionSeir extends Action<string> {}

const numericActions = objReduce(
  reducerDesc,
  (dict, _, prop: string) => {
    const cp = camelProp(prop);
    dict[cp] = (input: number | string, min?: number) => ({
      type: events[cp],
      payload: reducerDesc[prop].filter(input, min),
    });
    return dict;
  },
  {}
);

export const actions: { [key: string]: (...args: any[]) => ActionSeir } = {
  ...numericActions,
  reset: () => ({ type: events.reset }),
};

const numericreducers = objReduce(
  defaultSeirState,
  (dict, _, prop: keyof SeirState) => {
    const event = events[camelProp(prop)];
    dict[event] = spreadPayloadIfNew(defaultSeirState, prop);
    return dict;
  },
  {}
);

export const reducers = {
  ...numericreducers,
  [events.reset]: (state = defaultSeirState, _: any) => {
    (noop as any)(state); // preserve arity
    (noop as any)(_); // preserve arity
    return defaultSeirState;
  },
};

export const createReducerSeirState = (injectable?: any) =>
  createReducer(defaultSeirState, reducers, injectable);
