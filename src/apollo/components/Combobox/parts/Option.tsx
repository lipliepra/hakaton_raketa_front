import React, { FC } from 'react';
import cn from 'classnames';
import { components } from 'react-select';
import { OptionProps } from 'react-select/src/components/Option';
import { GroupTypeBase } from 'react-select/src/types';

import { TOption } from '../../../types';

export const Option: FC<OptionProps<TOption, boolean, GroupTypeBase<TOption>>> = (props) => {
    const {
        data,
        selectProps,
    } = props;

    const {
        isOff,
        value,
        label,
        description,
    } = data;

    const { size = 'md' } = selectProps;

    return components.Option({
        ...props,
        className: cn(`apollo-combobox__option_${size}`, { 'apollo-combobox__option--is-off': isOff }),
        children: [
            (
                <div
                    className='apollo-combobox__option-title'
                    key={`label_${value}`}
                >
                    {label}
                </div>
            ),
            description && (
                <div
                    className='apollo-combobox__option-description'
                    key={`desc_${value}`}
                >
                    {description}
                </div>
            ),
        ],
    });
};
