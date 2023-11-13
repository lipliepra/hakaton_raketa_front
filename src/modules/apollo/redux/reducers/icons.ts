import {
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';

import { RuntimeStatuses } from '../../../../apollo/enums';

import { IIconsFilterUpdate } from '../../types';
import { ICONS_DEFAULT_STATE } from '../store/initial';

const iconsSlice = createSlice({
    name: 'apollo/icons',
    initialState: ICONS_DEFAULT_STATE,
    reducers: {
        setIconsStatus: (state, { payload: status }: PayloadAction<RuntimeStatuses>) => {
            state.status = status;
        },
        setIconsDescription: (state, { payload: text }: PayloadAction<string>) => {
            state.description = text;
        },
        updateIconsFilter: (state, { payload }: PayloadAction<IIconsFilterUpdate>) => {
            state.filters[payload.key] = payload.value as never;
        },
    },
});

export const {
    actions: actionCreators,
    reducer: iconsReducer,
} = iconsSlice;
