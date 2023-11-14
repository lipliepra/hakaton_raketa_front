import { combineReducers, legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { IRootState, IRootStore } from './types';

export const createReducerManager = (initialReducers: Record<string, any>) => {
    const reducers = { ...initialReducers };

    const combinedReducer = combineReducers(reducers);

    let keysToRemove: Array<string> = [];

    return {
        reduce: (state: any, action: any) => {
            const newState = { ...state };

            if (keysToRemove.length) {
                keysToRemove.forEach((key) => {
                    delete newState[key];
                });
                keysToRemove = [];
            }
            return combinedReducer(newState, action);
        }
    };
};

export const configureStore = (initialState: IRootState, staticReducers: Record<string, any>) => {
    const reducerManager = createReducerManager(staticReducers);

    const store = createStore(
        reducerManager.reduce,
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    ) as IRootStore;

    return store;
};
