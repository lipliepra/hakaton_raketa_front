import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { isAuthSelector } from '../../../../../../common/selectors';
import { LoginButton } from './LoginButton';
import { ToolbarLinks } from './ToolbarLinks';
import { ProfileTool } from './ProfileTool';

export const Toolbar: FC = () => {
    const isAuth = useSelector(isAuthSelector);

    if (!isAuth) return <LoginButton />

    return (
        <div className='header__toolbar'>
            <ToolbarLinks />

            <ProfileTool />
        </div>
    );
};
