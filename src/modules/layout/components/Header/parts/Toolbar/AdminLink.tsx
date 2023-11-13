import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { ICONS } from '../../../../../../apollo/assets';
import { Icon } from '../../../../../../apollo/components/Icon';
import { ROUTING_URLS } from '../../../../../../common/constants/urls';
import { isAdminSelector } from '../../../../../../common/selectors';

export const AdminLink: FC = () => {
    const isAdmin = useSelector(isAdminSelector);

    if (!isAdmin) return null;

    return (
        <Link
            to={ROUTING_URLS.URL_ADMINISTRATION}
            className='header__dropdown-item'
        >
            Администрация

            <Icon
                className='header__dropdown-item-icon'
                path={ICONS.ChevronRight}
                dataTestId='HeaderProfileToolDropdownItem'
            />
        </Link>
    );
};
