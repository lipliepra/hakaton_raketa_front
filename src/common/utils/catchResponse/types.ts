import { TFunc } from '../../types';

export interface ICatchResponse {
    requestType: 'GET' | 'POST' | 'DELETE' | 'PUT';
    actionName: string;
    runError?: TFunc<[any]>;
    runValidation?: TFunc<[any]>;
}