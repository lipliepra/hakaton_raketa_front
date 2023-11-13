import {
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';

import { RuntimeStatuses } from '../../../../apollo/enums';
import { COMPONENTS_DEFAULT_STATE } from '../store/initial';
import {
    IComponentsFilterUpdate,
    IComponentsFilters,
    TCheckboxPattern,
} from '../../types';

const componentsSlice = createSlice({
    name: 'apollo/components',
    initialState: COMPONENTS_DEFAULT_STATE,
    reducers: {
        setComponentsStatus: (state, { payload: status }: PayloadAction<RuntimeStatuses>) => {
            state.status = status;
        },
        setComponentsDescription: (state, { payload: text }: PayloadAction<string>) => {
            state.description = text;
        },
        updateComponentsFilter: (state, { payload }: PayloadAction<IComponentsFilterUpdate>) => {
            if (payload.component === 'buttons') state.filters[payload.component][payload.filterName as keyof IComponentsFilters['buttons']] = payload.value as boolean;

            if (payload.component === 'checkboxes') state.filters[payload.component][payload.filterName as keyof IComponentsFilters['checkboxes']] = payload.value as TCheckboxPattern;
        },
    },
});

export const {
    actions: actionCreators,
    reducer: componentsReducer,
} = componentsSlice;
