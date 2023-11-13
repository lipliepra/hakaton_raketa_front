import React, { FC } from 'react';
import cn from 'classnames';

import { AdminLink } from './AdminLink';
import { LogoutLink } from './LogoutLink';
import { ModerLink } from './ModerLink';
import { ProfileLink } from './ProfileLink';
import { SettingsLink } from './SettingsLink';

export const ProfileToolList: FC<{ isOpened: boolean }> = ({ isOpened }) => (
    <div className={cn('header__dropdown-list', { opened: isOpened })}>
        <ProfileLink />

        <SettingsLink />

        <ModerLink />

        <AdminLink />

        <LogoutLink />
    </div>
);