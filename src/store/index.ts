import {
    appSettingsReducer,
    INITIAL_STATE as APP_SETTINGS_INITIAL_STATE,
} from '../modules/appSettings/entry';
import {
    authReducers,
    INITIAL_STATE as AUTH_INITIAL_STATE,
} from '../modules/auth/entry';

import { configureStore } from './utils';
import {
    IRootState,
    IRootReducers,
} from './types';

const INITIAL_STATE: IRootState = {
    appSettings: APP_SETTINGS_INITIAL_STATE,
    auth: AUTH_INITIAL_STATE,
};

const ROOT_REDUCERS: IRootReducers = {
    appSettings: appSettingsReducer,
    auth: authReducers,
};

export const store = configureStore(INITIAL_STATE, ROOT_REDUCERS);
