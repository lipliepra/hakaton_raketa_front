import {
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { RuntimeStatuses } from '../../../../apollo/enums';
import { APP_DEFAULT_STATE } from '../store/initial';

const appSlice = createSlice({
    name: 'apollo/app',
    initialState: APP_DEFAULT_STATE,
    reducers: {
        setAppStatus: (state, { payload: status }: PayloadAction<RuntimeStatuses>) => {
            state.status = status;
        },

        setAppErrorMessage: (state, { payload: error }: PayloadAction<string>) => {
            state.errorMessage = error;
        },
    },
});

export const {
    actions: actionCreators,
    reducer: appReducer,
} = appSlice;
