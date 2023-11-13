import {
    shallowEqual,
    useSelector,
} from 'react-redux';

export const useParamsSelector = <TArgs extends Array<any>, TValue, TState>(parametrizesSelector: (
    state: TState,
    ...params: TArgs
) => TValue, ...selectorParams: TArgs): TValue => useSelector(
    (state: TState) => parametrizesSelector(state, ...selectorParams),
    shallowEqual,
);
