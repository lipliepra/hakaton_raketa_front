import React, {
    Fragment,
    useLayoutEffect,
} from 'react';

import { RuntimeStatuses } from '../../apollo/enums';
import { CFC } from '../../apollo/types';
import { useActions } from '../../common/hooks/useActions';
import { useParamsSelector } from '../../common/hooks/useParamSelector';
import { CookiesPolicy } from './components/CookiesPolicy';
import { Preloader } from '../../common/components/Preloader';
import { ErrorModal } from './components/ErrorModal';
import { appActions } from './redux/actions';
import { appSettingsStatusSelector } from './redux/store/selectors';

export const AppSettings: CFC = ({ children }) => {
    const isAppSettingsLoading = useParamsSelector(appSettingsStatusSelector, RuntimeStatuses.Loading);
    const isAppSettingsBeforeInitial = useParamsSelector(appSettingsStatusSelector, RuntimeStatuses.BeforeInitial);

    const { getSettings } = useActions(appActions);

    useLayoutEffect(() => {
        getSettings();
    }, []);

    if (isAppSettingsBeforeInitial || isAppSettingsLoading) return <Preloader />;

    return (
        <Fragment>
            {children}

            <ErrorModal />

            <CookiesPolicy />
        </Fragment>
    );
};