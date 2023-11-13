import { TFunc } from '../../../apollo/types';

export interface ICatchResponse {
    requestType: 'GET' | 'POST' | 'DELETE' | 'PUT';
    actionName: string;
    runError?: TFunc<[any]>;
    runValidation?: TFunc<[any]>;
    runSkip?: TFunc<[any]>;
    runFail?: TFunc<[any]>;
    redirectForbidden?: TFunc<[any]>;
}