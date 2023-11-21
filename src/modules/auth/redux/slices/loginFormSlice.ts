import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RuntimeStatuses } from '../../../../common/enums';
import { TLoginFormFields } from '../../types';
import { LOGIN_FORM_DEFAULT_STATE } from '../store/initial';

export const {
    reducer: loginFormReducer,
    actions: { setLoginFormStatus, setLoginFormErrorMessage, setLoginFormErrors, updateLoginFormField }
} = createSlice({
    name: 'auth/login-form',
    initialState: LOGIN_FORM_DEFAULT_STATE,
    reducers: {
        setLoginFormStatus: (state, { payload }: PayloadAction<RuntimeStatuses>) => {
            state.status = payload;
        },
        setLoginFormErrorMessage: (state, { payload }: PayloadAction<string>) => {
            state.errorMessage = payload;
        },
        setLoginFormErrors: (state, { payload }: PayloadAction<{ [key: string]: string }>) => {
            state.formErrors = payload;
        },
        updateLoginFormField: (state, { payload }: PayloadAction<{ field: TLoginFormFields; value: string }>) => {
            state.fields[payload.field] = payload.value;
        }
    }
});
