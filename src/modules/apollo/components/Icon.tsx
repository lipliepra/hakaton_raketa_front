import React, { FC } from 'react';

import { Icon as IconEl } from '../../../apollo/components/Icon';
import { IIconProps } from '../types';

export const Icon: FC<IIconProps> = ({ icon, isActive, isLoading, size = 'sm' }) => {
    return (
        <div className='apollo-module__icon'>
            <IconEl
                path={icon}
                isActive={isActive}
                isLoading={isLoading}
                size={size}
                dataTestId=''
            />
        </div>
    );
};