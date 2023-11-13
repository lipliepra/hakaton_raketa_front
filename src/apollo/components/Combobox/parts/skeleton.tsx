import React, { FC } from 'react';

import { generateCLassNames } from '../../../utils/generateClassNames';
import { IComboboxProps } from '../types';

export const Skeleton: FC<IComboboxProps> = ({ isFullWidth = false }) => {
    const generatedCls = generateCLassNames({
        block: 'apollo-combobox',
        elem: 'skeleton',
        mods: { 'full-width': isFullWidth },
    });

    return <div className={generatedCls} />;
};
