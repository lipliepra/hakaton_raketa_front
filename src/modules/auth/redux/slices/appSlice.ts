import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RuntimeStatuses } from '../../../../common/enums';
import { APP_DEFAULT_STATE } from '../store/initial';

export const {
    reducer: appReducer,
    actions: { setStatus, setErrorMessage }
} = createSlice({
    name: 'auth/app',
    initialState: APP_DEFAULT_STATE,
    reducers: {
        setStatus: (state, { payload }: PayloadAction<RuntimeStatuses>) => {
            state.status = payload;
        },
        setErrorMessage: (state, { payload }: PayloadAction<string>) => {
            state.errorMessage = payload;
        }
    }
});
