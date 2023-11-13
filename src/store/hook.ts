import {
    useLayoutEffect,
    useState,
} from 'react';
import { Reducer } from 'redux';

import { TFunc } from '../apollo/types';
import { store } from './index';

export const useStore: TFunc<[string, Reducer, boolean?], boolean> = (moduleName, reducer, withDelete = true) => {
    const [isReducerInit, setIsReducerInit] = useState<boolean>();

    useLayoutEffect(() => {
        store.addModule(moduleName, reducer);

        return () => {
            if (withDelete) store.removeModule(moduleName);
        };
    }, []);

    useLayoutEffect(() => {
        setIsReducerInit(store.getModule(moduleName));
    }, [store.getModule(moduleName)]);

    return isReducerInit;
};