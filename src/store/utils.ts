import {
    combineReducers,
    Reducer,
    legacy_createStore as createStore,
    applyMiddleware,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
    IRootState,
    IRootStore,
} from './types';

export const createReducerManager = (initialReducers: Record<string, any>) => {
    const reducers = { ...initialReducers };

    let combinedReducer = combineReducers(reducers);

    let keysToRemove: Array<string> = [];

    return {
        getReducerMap: () => reducers,
        getCurrentReducer: () => combineReducers(reducers),
        reduce: (state: any, action: any) => {
            const newState = { ...state };

            if (keysToRemove.length) {
                keysToRemove.forEach((key) => {
                    delete newState[key];
                });
                keysToRemove = [];
            }
            return combinedReducer(newState, action);
        },
        get: (key: string) => Boolean(reducers[key]),
        add: (key: string, reducer: Reducer) => {
            if (!key || reducers[key]) return false;
            reducers[key] = reducer;
            combinedReducer = combineReducers(reducers);
            return true;
        },
        remove: (key: string) => {
            if (!key || !reducers[key]) return false;
            delete reducers[key];
            keysToRemove.push(key);
            combinedReducer = combineReducers(reducers);
            return true;
        },
    };
};

export const configureStore = (initialState: IRootState, staticReducers: Record<string, any>) => {
    const reducerManager = createReducerManager(staticReducers);

    const store = createStore(reducerManager.reduce, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware))) as IRootStore;

    store.reducerManager = reducerManager;
    store.getModule = (key: string) => store.reducerManager.get(key);
    store.addModule = (key, reducer) => {
        const isDone = store.reducerManager.add(key, reducer);
        if (isDone) store.replaceReducer(reducerManager.reduce);
    };
    store.removeModule = (key) => {
        const isDone = store.reducerManager.remove(key);
        if (isDone) store.replaceReducer(reducerManager.reduce);
    };

    return store;
};
