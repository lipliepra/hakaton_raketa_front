import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { ICONS } from '../../../../../../apollo/assets';
import { Icon } from '../../../../../../apollo/components/Icon';
import { ROUTING_URLS } from '../../../../../../common/constants/urls';

export const SettingsLink: FC = () => (
    <Link
        to={ROUTING_URLS.URL_PROFILE_SETTINGS}
        className='header__dropdown-item'
    >
        Настройки

        <Icon
            className='header__dropdown-item-icon'
            path={ICONS.ChevronRight}
            dataTestId='HeaderProfileToolDropdownItem'
        />
    </Link>
);
