import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RuntimeStatuses } from '../../../../common/enums';
import { TFormFields } from '../../types';

import { FORM_DEFAULT_STATE } from '../store/initial';

export const {
    reducer: formReducer,
    actions: { setFormStatus, setFormErrorMessage, setFormErrors, updateField }
} = createSlice({
    name: 'auth/form',
    initialState: FORM_DEFAULT_STATE,
    reducers: {
        setFormStatus: (state, { payload }: PayloadAction<RuntimeStatuses>) => {
            state.status = payload;
        },
        setFormErrorMessage: (state, { payload }: PayloadAction<string>) => {
            state.errorMessage = payload;
        },
        setFormErrors: (state, { payload }: PayloadAction<{ [key: string]: string }>) => {
            state.formErrors = payload;
        },
        updateField: (state, { payload }: PayloadAction<{ field: TFormFields; value: string }>) => {
            state.fields[payload.field] = payload.value;
        }
    }
});
