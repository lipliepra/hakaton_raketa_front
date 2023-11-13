import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { RuntimeStatuses } from '../../../apollo/enums';
import { ErrorModal as ErrorModalEl } from '../../../common/components/ErrorModal';
import { useActions } from '../../../common/hooks/useActions';
import { useParamsSelector } from '../../../common/hooks/useParamSelector';
import { errorModalActions } from '../redux/actions';
import {
    appsErrorMessageSelector,
    appStatusSelector,
} from '../redux/store/selectors';

export const ErrorModal: FC = () => {
    const isAppSettingsError = useParamsSelector(appStatusSelector, RuntimeStatuses.Error);
    const errorMessage = useSelector(appsErrorMessageSelector);

    const { closeErrorModal } = useActions(errorModalActions);

    return (
        <ErrorModalEl
            isError={isAppSettingsError}
            message={errorMessage}
            onClose={closeErrorModal}
        />
    );
};