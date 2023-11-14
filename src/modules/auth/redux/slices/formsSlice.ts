import { createSlice } from '@reduxjs/toolkit';

import { FORMS_DEFAULT_STATE } from '../store/initial';

export const {
    reducer: formsReducer,
    actions: {},
} = createSlice({
    name: 'auth/forms',
    initialState: FORMS_DEFAULT_STATE,
    reducers: {},
});
