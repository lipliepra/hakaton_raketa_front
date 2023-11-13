import React from 'react';
import { components } from 'react-select';
import { GroupTypeBase } from 'react-select/src/types';
import { IndicatorProps } from 'react-select/src/components/indicators';

import { Icon } from '../../Icon';
import { ICONS } from '../../../assets';
import { TOption } from '../../../types';
import { IIndicatorProps } from '../types';

export const DropdownIndicator: React.FC<IIndicatorProps & IndicatorProps<TOption, boolean, GroupTypeBase<TOption>>> = (props) => (
    components.DropdownIndicator({
        ...props,
        children: (
            <Icon
                path={ICONS.ChevronDown}
                size='sm'
                dataTestId={`${props.dataTestId}ComboboxDropDownIndicator`}
            />
        ),
    })
);
