import { configureStore } from '@reduxjs/toolkit';
import { authReducers } from '../modules/auth/entry';

export const store = configureStore({
    reducer: {
        auth: authReducers
    }
});
