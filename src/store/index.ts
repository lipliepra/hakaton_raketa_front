import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from '../app/redux/slices/appSlice';
import { authReducers } from '../modules/auth/entry';
import { IRootState } from './types';

export const store = configureStore<IRootState>({
    reducer: {
        auth: authReducers,
        app: appReducer,
    },
});
