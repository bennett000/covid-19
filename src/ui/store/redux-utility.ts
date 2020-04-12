import { Action } from 'redux';
import {
  Dictionary,
  objReduce,
  isNumber,
  isString,
  isBoolean,
  isFunction,
  isUndefined,
  isNull,
  noop,
} from '@ch1/utility';
import { arity } from '../../utility';

export interface Reducer<TState, TAction> {
  (state: TState, action: TAction): TState;
}

export interface ReducerFactory<TState, TAction, TInjection> {
  (injection: TInjection): Reducer<TState, TAction>;
}

export type ReducerOrReducerFactory<TState, TAction, TInjection> =
  | Reducer<TState, TAction>
  | ReducerFactory<TState, TAction, TInjection>;

export function createReducer<
  TState,
  TAction extends Action<string>,
  TInjection
>(
  defaultState: TState,
  reducers: Dictionary<ReducerOrReducerFactory<TState, TAction, TInjection>>,
  injection?: TInjection
) {
  const injectedReducers: Dictionary<Reducer<TState, TAction>> = injection
    ? objReduce(
        reducers,
        (hs, f, key) => {
          if (arity(f) === 1) {
            hs[key] = (f as any)(injection);
          } else {
            hs[key] = f;
          }
          return hs;
        },
        {}
      )
    : (reducers as Dictionary<Reducer<TState, TAction>>);

  return (state = defaultState, action: TAction) => {
    const reducer = injectedReducers[action.type];
    if (reducer) {
      return reducer(state, action);
    }

    return state;
  };
}

export interface ActionSpreadableIfNew extends Action<string> {
  payload: any;
}
export function spreadPayloadIfNew<
  TState,
  TAction extends ActionSpreadableIfNew
>(defaultState: TState, prop: keyof TState) {
  return (state = defaultState, { payload }: TAction): TState => {
    if (Array.isArray(payload)) {
      return spreadArrayIfNew(state, payload, prop);
    }
    if (state[prop] === payload) {
      return state;
    }
    return {
      ...state,
      [prop]: payload,
    };
  };
}

function spreadArrayIfNew<T>(state: T, payload: any[], prop: keyof T) {
  if (payload.length !== (state[prop] as any).length) {
    return {
      ...state,
      [prop]: payload,
    };
  }
  if (
    payload.reduce((keepGoing, next, i) => {
      if (keepGoing === false) {
        return keepGoing;
      }
      return state[prop][i] === next;
    }, true)
  ) {
    return state;
  }
  return {
    ...state,
    [prop]: payload,
  };
}

export function toggleProp<TState>(defaultState: TState, prop: string) {
  return (state = defaultState, _: any): TState => {
    (noop as any)(_); // preserve arity
    return {
      ...state,
      [prop]: state[prop] ? false : true,
    };
  };
}
