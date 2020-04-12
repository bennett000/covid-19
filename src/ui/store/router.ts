import { deepFreeze } from '@ch1/utility';
import { createReducer, spreadPayloadIfNew } from './redux-utility';
import { route } from 'preact-router';

export type RouterState = typeof defaultRouterState;
export const defaultRouterState = deepFreeze({
  path: '/',
});

export const events = deepFreeze({
  updatedPath: 'router/updated_path',
});

export const actions = {
  updatedPath: (path: string) => ({ type: events.updatedPath, payload: path }),
};

export const reducers = {
  [events.updatedPath]: spreadPayloadIfNew(defaultRouterState, 'path'),
};

export const createReducerRouter = (injectable?: any) =>
  createReducer(defaultRouterState, reducers);

export function routerMiddleware() {
  return next => action => {
    const result = next(action);
    if (action.type === events.updatedPath) {
      route(action.payload);
    }
    return result;
  };
}
