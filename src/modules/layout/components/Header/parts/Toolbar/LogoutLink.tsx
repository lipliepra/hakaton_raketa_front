import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { ROUTING_URLS } from '../../../../../../common/constants/urls';
import { useActions } from '../../../../../../common/hooks/useActions';
import { headerActions } from '../../../../../auth/redux/actions';

export const LogoutLink: FC = () => {
    const { logout } = useActions(headerActions);

    return (
        <Link
            to={ROUTING_URLS.URL_AUTH_LOGIN}
            className='header__dropdown-item'
            onClick={logout}
        >
            Выйти
        </Link>
    );
};
