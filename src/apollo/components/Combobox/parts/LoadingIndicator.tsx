import React, { FC } from 'react';

import { Icon } from '../../Icon';
import { ICONS } from '../../../assets';
import { IIndicatorProps } from '../types';


export const LoadingIndicator: FC<IIndicatorProps> = ({ dataTestId }) => (
    <Icon
        size='sm'
        className='apollo-combobox__loading-icon'
        path={ICONS.Loader}
        dataTestId={`${dataTestId}ComboboxLoadingIndicator`}
    />
);
