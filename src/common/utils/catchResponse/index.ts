import { NOOP } from '../../../apollo/constants';
import { TFunc } from '../../../apollo/types';
import { handleErrorResponseStatus } from '../handleErrorResponseStatus';
import { ICatchResponse } from './types';

export const catchResponse: TFunc<[TFunc<[any]>, string], TFunc<[ICatchResponse, TFunc<[void]>?], TFunc<[any]>>> = (
    onRunError,
    moduleName,
) => ({
        requestType,
        actionName,
        runError = null,
        runValidation = NOOP,
        runSkip = NOOP,
    // TODO: Подумать что оставить errorModal или Toast. Если Toast, то выпилить runFail
        runFail = NOOP,
        redirectForbidden = NOOP,
    }, dispatch = NOOP,
) => (error) => {
    if (error.code === 'ERR_NETWORK') {
        runFail(error);
        return;
        // return takeToast('error', 'Ошибка соединения с сервером!');
    }

    if (error.code === 'ERR_BAD_RESPONSE') {
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
            runSkip: () => runSkip(error),
            redirectForbidden: () => redirectForbidden(error),
        },
    });
};