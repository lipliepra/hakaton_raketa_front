import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { ICONS } from '../../../../../../apollo/assets';
import { Icon } from '../../../../../../apollo/components/Icon';
import { ROUTING_URLS } from '../../../../../../common/constants/urls';

export const FavoritesLink: FC = () => (
    <Link
        to={ROUTING_URLS.URL_PROFILE_FAVORITES}
        className='header__toolbar-item'
    >
        <Icon
            path={ICONS.StarEmpty}
            dataTestId='HeaderToolbarItem'
        />
    </Link>
);
