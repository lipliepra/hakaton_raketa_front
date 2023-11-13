import { useMemo } from 'react';
import {
    ActionCreatorsMapObject,
    bindActionCreators,
} from 'redux';
import { useDispatch } from 'react-redux';
import { ThunkAction } from 'redux-thunk';

type TUseActions<M extends ActionCreatorsMapObject<any>> = {
    [N in keyof M]: ReturnType<M[N]> extends ThunkAction<any, any, any, any>
        ? (...args: Parameters<M[N]>) => ReturnType<ReturnType<M[N]>>
        : M[N]
};

export const useActions = <T extends ActionCreatorsMapObject>(actions: T) => {
    const dispatch = useDispatch();
    return useMemo<TUseActions<T>>(() => bindActionCreators<any, T>(actions, dispatch), [dispatch]);
};