import React, { Fragment } from 'react';
import { components } from 'react-select';
import { GroupTypeBase } from 'react-select/src/types';
import { ControlProps } from 'react-select/src/components/Control';

import { Icon } from '../../Icon';
import { TOption } from '../../../types';
import { IIndicatorProps } from '../types';

export const Control: React.FC<IIndicatorProps & ControlProps<TOption, boolean, GroupTypeBase<TOption>>> = (props) => {
    const {
        innerProps,
        selectProps,
        children,
        dataTestId,
    } = props;

    return components.Control({
        ...props,
        innerProps: innerProps,
        children: (
            <Fragment>
                {!!selectProps.prefixIcon && (
                    <Icon
                        className='apollo-combobox__control--prefix-icon'
                        path={selectProps.prefixIcon}
                        dataTestId={`${dataTestId}ComboboxControl`}
                    />
                )}

                {children}
            </Fragment>
        ),
    });
};
