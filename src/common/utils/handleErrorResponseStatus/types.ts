import { IResponseData, TFunc } from '../../types';

export interface IHandleResponseErrorStatus {
    errorResponse: {
        code: number;
        data: IResponseData<any>;
    };
    options: {
        runError: TFunc;
        runValidation: TFunc;
        runSkip: TFunc;
        runFail?: TFunc;
        redirectForbidden: TFunc;
    };
}
