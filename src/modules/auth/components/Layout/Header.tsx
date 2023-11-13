import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';

import { useAdaptive } from '../../../../apollo/hooks/useAdaptive';
import { Logo } from '../../../../common/components/Logo';
import { AUTH_MODE_TITLES } from '../../constants';
import { AuthModes } from '../../enums';

import { LinkToOtherPage } from './LinkToOtherPage';

export const AuthHeader: FC = () => {
    const { search } = useLocation();

    const { isMobile } = useAdaptive();

    const mode = new URLSearchParams(search).get('mode') as AuthModes;

    return (
        <div className='auth__header'>
            <div className='auth__header-main'>
                <Logo size={isMobile ? 'md' : 'lg'} />

                <span className='auth__header-title'>{AUTH_MODE_TITLES[mode]}</span>
            </div>

            {!isMobile && <LinkToOtherPage />}
        </div>
    );
};
