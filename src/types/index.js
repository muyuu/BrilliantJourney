// @flow
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';

import type { SiteInfo } from './siteinfo';
import type { StartState } from './start';
import type { PointAction, PointState } from './points';

export type ReduxInitAction = { type: '@@INIT' };
export type State = StartState & PointState & SiteInfo;
export type Action = 
    | ReduxInitAction
    | PointAction;
export type Store = ReduxStore<State, Action>;
export type Dispatch = ReduxDispatch<Action>;
export type GetState = () => State;
export type PromiseAction = Promise<Action>;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
