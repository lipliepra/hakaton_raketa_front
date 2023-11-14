import { TFunc } from '../../types';
import { IHandleResponseErrorStatus } from './types';

export const handleErrorResponseStatus: TFunc<[IHandleResponseErrorStatus]> = ({ errorResponse, throwException, options }) => {
    const {
        code,
        data: {status},
    } = errorResponse;

    if (code === 400) {
        if (status === 'bad-request') return options.runValidation();

        if (status === 'not-found') return options.runSkip();

        if (status === 'error') return throwException();

        options.runError();
        throwException();
    }

    if ([401, 403, 407].includes(code)) return options.redirectForbidden();

    if ([404, 409].includes(code)) return options.runSkip();

    if ([405, 406, 408, 410, 411, 412, 413, 414, 415, 416, 417].includes(code)) {
        options.runError();
        throwException();
        return;
    }

    throwException();
};