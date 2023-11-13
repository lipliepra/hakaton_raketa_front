import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { Image } from '../../../../../../apollo/components/Image';
import {
    profileFullNameSelector,
    profileImageIdSelector,
} from '../../../../../../common/selectors';
import { getImageUrl } from '../../../../../../common/utils/getImageUrl';
import { ROUTING_URLS } from '../../../../../../common/constants/urls';

export const ProfileLink: FC = () => {
    const profileImageId = useSelector(profileImageIdSelector);
    const profileFullName = useSelector(profileFullNameSelector);

    return (
        <Link
            to={ROUTING_URLS.URL_PROFILE}
            className={cn('header__dropdown-item', 'header__dropdown-item_profile')}
        >
            <Image
                src={getImageUrl(profileImageId)}
                alt='profileImage'
                className='header__dropdown-item_image'
            />

            <span className='header__dropdown-item_name'>{profileFullName}</span>

            <span className='header__dropdown-item_caption'>Посмотреть свой профиль</span>
        </Link>
    );
};
