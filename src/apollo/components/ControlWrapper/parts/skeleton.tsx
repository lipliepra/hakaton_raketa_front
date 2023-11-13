import React from 'react';

import { generateCLassNames } from '../../../utils/generateClassNames';
import { CFC } from '../../../types';
import { IControlWrapperProps } from '../types';

export const Skeleton: CFC<IControlWrapperProps> = ({
    children,
    label,
    errorMessage,
}) => {
    const generatedCls = generateCLassNames({
        block: 'apollo-control-wrapper',
        elem: 'skeleton',
    });

    return (
        <div className={generatedCls}>
            {label && <div className={`${generatedCls}_label`} />}

            {children}

            {errorMessage && <div className={`${generatedCls}_error-message`} />}
        </div>
    );
};
