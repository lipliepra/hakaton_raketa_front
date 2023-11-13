import React from 'react';

import { CFC } from '../../../../apollo/types';
import { Description } from './Description';
import { AuthHeader as Header } from './Header';

export const AuthLayout: CFC = ({  children }) => {

    return (
        <div className='auth__layout'>
            <Header />

            <div className='auth__layout-container'>
                <Description />

                {children}
                {/*{isMobile && <LinkToOtherPage type={type} />}*/}
                {/*<MobileAppInfo />*/}
            </div>
        </div>
    );
};
