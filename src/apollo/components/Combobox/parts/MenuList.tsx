import React, { FC } from 'react';
import { components } from 'react-select';
import { MenuListComponentProps } from 'react-select/src/components/Menu';
import { GroupTypeBase } from 'react-select/src/types';
import { TOption } from '../../../types';

import { IIndicatorProps } from '../types';

export const MenuList: FC<IIndicatorProps & MenuListComponentProps<TOption, boolean, GroupTypeBase<TOption>>> = (props) => {
    const {
        children,
        dataTestId,
    } = props;

    return components.MenuList({
        ...props,
        children: <div data-test-id={`${dataTestId}Options`}>{children}</div>,
    });
};
