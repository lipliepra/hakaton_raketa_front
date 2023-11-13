import {
    ReactNode,
    MouseEvent,
} from 'react';

import {
    TFunc,
    TNullable,
    TOption,
    TRef,
} from '../../types';

export interface IComboboxProps {
    dataTestId: string;
    id?: string;
    value: Array<TOption> | TOption;
    onChange?: TFunc<[TNullable<TOption | Array<TOption>>]>;
    isAsync?: boolean;
    isMulti?: boolean;
    isCreatable?: boolean;
    isSearchable?: boolean;
    isClearable?: boolean;
    isFullWidth?: boolean;
    isDisabled?: boolean;
    isLoading?: boolean;
    hasError?: boolean;
    autoFocus?: boolean;
    searchOptions?: TFunc<[string, TFunc<[Array<TOption>]>]>;
    options?: Array<TOption>;
    defaultOptions?: Array<TOption>;
    noOptionsMessage?: string;
    nothingFoundMessage?: string;
    placeholder?: string;
    onInput?: TFunc<[string]>;
    defaultValue?: TNullable<TOption>;
    className?: string;
    reactRef?: TRef;
}

export type TLabel = (string | number | null | undefined);

export interface IIndicatorProps {
    dataTestId: string;
}

export type IndicatorContainerProps = {
    className?: string;
    children: ReactNode;
    innerProps?: { onMouseDown: TFunc<[MouseEvent<HTMLElement>]> };
    selectProps?: {
        dataTestId: string;
        customIndicatorComponent: any;
    };
};
