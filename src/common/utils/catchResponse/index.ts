import { TFunc } from 'src/common/types';
import { NOOP } from '../../constants';
import { handleErrorResponseStatus } from '../handleErrorResponseStatus';

import { ICatchResponse } from './types';

export const catchResponse: TFunc<[TFunc<[any]>], TFunc<[ICatchResponse, TFunc<[void]>?], TFunc<[any]>>> =
    (onRunError) =>
    ({ runError = null, runValidation = NOOP, runSkip = NOOP, redirectForbidden = NOOP }) =>
    (error) => {
        if (error.code === 'ERR_NETWORK' || error.code === 'ERR_BAD_RESPONSE') {
            if (runError) {
                runError(error);
                return;
            }

            onRunError(error);
            return;
        }

        handleErrorResponseStatus({
            errorResponse: {
                code: error?.response?.status,
                data: error?.response?.data
            },
            options: {
                runError: () => (runError ? runError : onRunError(error)),
                runValidation: () => runValidation(error),
                runSkip: () => runSkip(error),
                redirectForbidden: () => redirectForbidden(error)
            }
        });
    };
