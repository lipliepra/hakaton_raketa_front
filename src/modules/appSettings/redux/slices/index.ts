import {
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { RuntimeStatuses } from '../../../../apollo/enums';
import { INITIAL_STATE } from '../store/initial';
import { IAppSettings } from '../../types';

export const {
    reducer: appSettingsReducer,
    actions: {
        setStatus,
        setErrorMessage,
        setSettings,
    }
} = createSlice({
    name: 'appSettings',
    initialState: INITIAL_STATE,
    reducers: {
        setStatus: (state, { payload }: PayloadAction<RuntimeStatuses>) => {
            state.status = payload;
        },
        setErrorMessage: (state, { payload }: PayloadAction<string>) => {
            state.errorMessage = payload;
        },
        setSettings: (state, { payload }: PayloadAction<IAppSettings>) => {
            state.settings = payload;
        },
    },
});
