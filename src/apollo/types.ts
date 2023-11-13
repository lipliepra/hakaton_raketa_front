import {
    FC,
    PropsWithChildren,
    RefObject,
    SVGProps,
} from 'react';

// Interface
export interface ILocation {
    search: string;
    state: {
        pathname: string;
        search: string;
    };
}

export interface IKeyable {
    key: string;
}

export interface IMoney {
    amount: number;
    currency: string;
}

// Type
export type CFC<P = unknown> = FC<PropsWithChildren<P>>;

export type TIcon = FC<SVGProps<SVGSVGElement>>;

export type TRef = TNullable<RefObject<HTMLDivElement>>;

export type TNullable<T> = (T | null);

export type TStrNum = (string | number);

export type TOption<T = {}, TValue = null> = ({
    label: string | null;
    value: TStrNum | TValue;
    prefix?: string,
    postfix?: string,
    isDisabled?: boolean,
    isOff?: boolean;
    description?: string | Element,
} & T);

export type TOptions<T = {}> = Array<TOption<T>>;

export type TValue<T = {}> = (TOption<T> | TOptions<T> | T | null | TStrNum | boolean | undefined);

export type TFunc<Args extends Array<any> = Array<never>, Return = void> = (...args: Args) => Return;

export type TSearchOptions = TFunc<[string, TFunc<[TOptions]>]>;

export type TSize = ('sm' | 'md' | 'lg' | 'xl');

export type TStatus = ('info' | 'warning' | 'negative' | 'positive');

export type TLang = ('ru' | 'en');

export type TMoney = TNullable<IMoney>;
