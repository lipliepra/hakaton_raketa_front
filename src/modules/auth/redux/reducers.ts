import { combineReducers } from 'redux';

import { appReducer } from './slices/appSlice';
import { formsReducer } from './slices/formsSlice';
import { profileReducer } from './slices/profileSlice';

export const authReducers = combineReducers({
    app: appReducer,
    profile: profileReducer,
    forms: formsReducer
});
