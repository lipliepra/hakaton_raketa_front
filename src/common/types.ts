import {
    AxiosError,
    AxiosResponse,
} from 'axios';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

export interface IApiStatus {
    status: 'info' | 'success' | 'created' | 'error' | 'not-found' | 'not-auth' | 'not-access' | 'bad-request';
}

export interface IApiResponse extends IApiStatus {
    message: string | null;
}

export interface IResponseData<RESULT = null> extends IApiResponse {
    result: RESULT;
}

export interface IApiResponseErrorData extends IApiResponse {
    errors: any;

    [key: string]: any;
}

export type TApiResponseError = AxiosError<IApiResponseErrorData>

export type AxiosPromise<R> = Promise<void | AxiosResponse<R & IApiResponse> | R>;

export type ThunkActionBase<S> = ThunkAction<void, S, unknown, AnyAction>;
export type ThunkActionPromise<S, R = void> = ThunkAction<AxiosPromise<R>, S, unknown, AnyAction>;
