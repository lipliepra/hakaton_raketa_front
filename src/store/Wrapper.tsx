import React, {
    Suspense,
    useMemo,
} from 'react';
import { Reducer } from 'redux';

import { CFC } from '../apollo/types';
import { Preloader } from '../common/components/Preloader';
import { apolloReducer } from '../modules/apollo/redux/reducers';
import { useStore } from './hook';
import { IStoreWrapperProps } from './types';

export const StoreWrapper: CFC<IStoreWrapperProps> = ({children, moduleName}) => {
    const reducers: {[key: string]: Reducer} = useMemo(() => ({
        apollo: apolloReducer,
    }), []);

    const isModuleInit = useStore(moduleName, reducers[moduleName]);

    if (!isModuleInit) return null;

    return (
        <Suspense fallback={<Preloader />}>
            {children}
        </Suspense>
    );
}