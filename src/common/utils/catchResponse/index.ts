import { handleErrorResponseStatus } from '../handleErrorResponseStatus';
import { ICatchResponse } from './types';
import { TFunc } from '../../types';

export const catchResponse: TFunc<[TFunc<[any]>, string], TFunc<[ICatchResponse, TFunc<[void]>?], TFunc<[any]>>> = (
    onRunError,
    moduleName,
) => ({
        requestType,
        actionName,
        runError = null,
        runValidation = () => {},
    }, dispatch = () => {},
) => (error) => {
    if (error.code === 'ERR_BAD_RESPONSE' || error.code === 'ERR_NETWORK') {
        return dispatch(onRunError(error));
        // return runFail(error);
    }

    handleErrorResponseStatus({
        errorResponse: {
            code: error?.response?.status,
            data: error?.response?.data,
        },
        throwException: () => {
            throw new Error(`${moduleName}-${requestType}-${actionName}-${error?.message}`);
        },
        options: {
            runError: () => (runError
                ? runError
                : onRunError(error)),
            runValidation: () => runValidation(error),
        },
    });
};