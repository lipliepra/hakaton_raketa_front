import React from 'react';
import { components } from 'react-select';
import { GroupTypeBase } from 'react-select/src/types';
import { IndicatorProps } from 'react-select/src/components/indicators';
import { ICONS } from '../../../assets';

import { Icon } from '../../Icon';
import { TOption } from '../../../types';
import { IIndicatorProps } from '../types';

export const ClearIndicator: React.FC<IIndicatorProps & IndicatorProps<TOption, boolean, GroupTypeBase<TOption>>> = (props) => {
    const {
        clearValue,
        selectProps,
        dataTestId,
    } = props;

    const clearValueHandler = () => {
        if (clearValue) clearValue();

        if (selectProps?.onClear) selectProps.onClear();
    };

    const innerProps = {
        ...props,
        onMouseDown: clearValueHandler,
        onTouchEnd: clearValueHandler,
    };

    return components.ClearIndicator({
        ...props,
        innerProps: innerProps,
        children: (
            <Icon
                size='sm'
                path={ICONS.Cross}
                dataTestId={`${dataTestId}ComboboxClearIndicator`}
            />
        ),
    });
};
