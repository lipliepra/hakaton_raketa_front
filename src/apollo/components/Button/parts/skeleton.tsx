import React, { FC } from 'react';

import { generateCLassNames } from '../../../utils/generateClassNames';
import { IButtonProps } from '../types';

export const Skeleton: FC<IButtonProps> = ({
    size = 'md',
    isFullWidth = false,
}) => {
    const generatedCls = generateCLassNames({
        block: 'apollo-button',
        elem: 'skeleton',
        mods: {
            [size]: true,
            'full-width': isFullWidth,
        },
    });

    return <div className={generatedCls} />;
};
