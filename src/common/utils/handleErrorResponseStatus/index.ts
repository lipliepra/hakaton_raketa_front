import { TFunc } from '../../types';
import { IHandleResponseErrorStatus } from './types';

export const handleErrorResponseStatus: TFunc<[IHandleResponseErrorStatus]> = ({
    errorResponse,
    options,
}) => {
    const { code } = errorResponse;

    if (code === 422) {
        return options.runValidation();
    }

    if (code === 403 || code === 401) {
        return options.redirectForbidden();
    }

    if (code === 404) {
        return options.runSkip();
    }

    options.runError();
};
