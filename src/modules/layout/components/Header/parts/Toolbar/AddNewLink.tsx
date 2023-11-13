import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { ICONS } from '../../../../../../apollo/assets';
import { Icon } from '../../../../../../apollo/components/Icon';
import { ROUTING_URLS } from '../../../../../../common/constants/urls';
import { isModerSelector } from '../../../../../../common/selectors';

export const AddNewLink: FC = () => {
    const isModer = useSelector(isModerSelector);

    if (!isModer) return null;

    return (
        <Link
            to={ROUTING_URLS.URL_MODERATION_CREATE}
            className='header__toolbar-item'
        >
            <Icon
                path={ICONS.AddNew}
                dataTestId='HeaderToolbarItem'
            />
        </Link>
    );
};
