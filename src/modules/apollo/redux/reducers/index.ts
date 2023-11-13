import { combineReducers } from '@reduxjs/toolkit';

import { appReducer } from './app';
import { componentsReducer } from './components';
import { iconsReducer } from './icons';
import { IApolloState } from '../../types';

export const apolloReducer = combineReducers<IApolloState>({
    app: appReducer,
    components: componentsReducer,
    icons: iconsReducer
});
