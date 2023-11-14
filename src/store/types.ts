import { Reducer, Action, AnyAction, Store } from 'redux';

import { IState as IAuthState } from '../modules/auth/entry';
import { createReducerManager } from './utils';

export interface IRootState {
    auth: IAuthState;
}

export interface IRootReducers {
    auth: Reducer;
}

type TCreateReducerManager = ReturnType<typeof createReducerManager>;

export interface IRootStore<S = any, A extends Action = AnyAction> extends Store<S, A> {
    reducerManager: TCreateReducerManager;
}
