import { combineReducers } from 'redux';

import { appReducer } from './slices/appSlice';
import { loginFormReducer } from './slices/loginFormSlice';
import { profileReducer } from './slices/profileSlice';

export const authReducers = combineReducers({
    app: appReducer,
    profile: profileReducer,
    loginForm: loginFormReducer
});
