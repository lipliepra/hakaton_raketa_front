import { TFunc } from '../../types';

export interface ICatchResponse {
    runError?: TFunc<[any]>;
    runValidation?: TFunc<[any]>;
    runSkip?: TFunc<[any]>;
    redirectForbidden?: TFunc<[any]>;
}
