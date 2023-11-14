import {
    FC,
    PropsWithChildren,
    RefObject,
    SVGProps,
} from 'react';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AxiosResponse } from 'axios';

export interface IApiResponse {
    status: string;
    message: TNullable<string>;
}

export interface IResponseData<RESULT = null> extends IApiResponse {
    result: RESULT;
}

export type AxiosPromise<R> = Promise<void | AxiosResponse<R & IApiResponse> | R>;
export type ThunkActionBase<S> = ThunkAction<void, S, unknown, AnyAction>;
export type ThunkActionPromise<S, R = void> = ThunkAction<AxiosPromise<R>, S, unknown, AnyAction>;

// Type
export type CFC<P = unknown> = FC<PropsWithChildren<P>>;

export type TIcon = FC<SVGProps<SVGSVGElement>>;

export type TRef<T = HTMLDivElement> = TNullable<RefObject<T>>;

export type TNullable<T> = (T | null);

export type TOption<T = {}, TValue = null> = ({
    label: string | null;
    value: TValue;
    prefix?: string,
    postfix?: string,
    isDisabled?: boolean,
    isOff?: boolean;
    description?: string | Element,
} & T);

export type TOptions<T = null> = Array<TOption<T>>;

export type TValue<T = null> = (TOption<T> | TOptions<T> | T | null | string | number | boolean | undefined);

export type TFunc<Args extends Array<any> = Array<never>, Return = void> = (...args: Args) => Return;
