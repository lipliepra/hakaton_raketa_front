import { combineReducers } from 'redux';

import { appReducer } from './slices/appSlice';
import { formReducer } from './slices/formSlice';
import { profileReducer } from './slices/profileSlice';

export const authReducers = combineReducers({
    app: appReducer,
    profile: profileReducer,
    form: formReducer
});
