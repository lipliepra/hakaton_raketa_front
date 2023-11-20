import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PROFILE_DEFAULT_STATE } from '../store/initial';
import { IProfileData } from '../../types';

export const {
    reducer: profileReducer,
    actions: { setProfileData, setIsAuth, setToken }
} = createSlice({
    name: 'auth/profile',
    initialState: PROFILE_DEFAULT_STATE,
    reducers: {
        setProfileData: (state, { payload }: PayloadAction<IProfileData>) => {
            state.data = payload;
        },
        setIsAuth: (state, { payload }: PayloadAction<boolean>) => {
            state.isAuth = payload;
        },
        setToken: (state, { payload }: PayloadAction<string>) => {
            state.token = payload;
        }
    }
});
