import { deepFreeze } from '@ch1/utility';
import { createReducer } from './redux-utility';
import { route } from 'preact-router';
import { Strings } from '../../i18n';
import { Action } from 'redux';
import { forceObject, forceString } from '../state';

export type RouterState = typeof defaultRouterState;
export const defaultRouterState = deepFreeze({
  path: '/',
});

export const forceDefaults = (value: any): RouterState =>
  forceObject(
    [{ prop: 'path', force: forceString.bind(null, defaultRouterState.path) }],
    value
  );

export type StoreSlice = { router: { path: string }; strings: Strings };

const selectPath = (state: StoreSlice) => state.router.path;
const selectPathIndex = (state: StoreSlice) => {
  const index = state.strings.app.menu.find(
    el => el.route === state.router.path
  );
  return index || 0;
};
export const select = {
  path: selectPath,
  pathIndex: selectPathIndex,
};

export const events = deepFreeze({
  updatedPath: 'router/updated_path',
});

export interface ActionRouterNumber extends Action<string> {
  payload: string;
}
export const actions = {
  updatedPath: (pathIndex: number) => ({
    type: events.updatedPath,
    payload: pathIndex,
  }),
};

export const reducers: any = {
  [events.updatedPath]: ({ strings }: { strings: Strings }) => (
    state = defaultRouterState,
    action: ActionRouterNumber
  ) => {
    const routePath =
      strings.app.menu[action.payload].route || strings.app.menu[0].route;
    if (state.path === routePath) {
      return state;
    }
    return {
      ...state,
      path: routePath,
    };
  },
};

export const createReducerRouter = (injectable?: any) =>
  createReducer(defaultRouterState, reducers, injectable);

export function routerMiddleware(store) {
  return next => action => {
    const result = next(action);
    if (action.type === events.updatedPath) {
      route(store.getState().router.path);
    }
    return result;
  };
}
