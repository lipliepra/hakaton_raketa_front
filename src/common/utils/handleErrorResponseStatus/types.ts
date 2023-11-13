import { TFunc } from '../../../apollo/types';
import { IResponseData } from '../../types';

export interface IHandleResponseErrorStatus {
    errorResponse: {
        code: number;
        data: IResponseData<any>;
    };
    throwException: TFunc;
    options: {
        runError: TFunc;
        runValidation: TFunc;
        runSkip: TFunc;
        runFail?: TFunc;
        redirectForbidden: TFunc;
    };
}