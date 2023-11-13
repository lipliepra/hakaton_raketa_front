import {
    Reducer,
    Action,
    AnyAction,
    Store,
} from 'redux';

import { TFunc } from '../apollo/types';
import { IAppSettingsState } from '../modules/appSettings/types';
import { IState as IAuthState } from '../modules/auth/entry';
import { createReducerManager } from './utils';

export interface IStoreWrapperProps {
    moduleName: string;
}

export interface IRootState {
    appSettings: IAppSettingsState;
    auth: IAuthState;
}

export interface IRootReducers {
    appSettings: Reducer;
    auth: Reducer;
}

type TCreateReducerManager = ReturnType<typeof createReducerManager>;

export interface IRootStore<S = any, A extends Action = AnyAction> extends Store<S, A> {
    reducerManager: TCreateReducerManager;
    getModule: TFunc<[string], boolean>;
    addModule: TFunc<[string, Reducer]>;
    removeModule: TFunc<[string]>;
}