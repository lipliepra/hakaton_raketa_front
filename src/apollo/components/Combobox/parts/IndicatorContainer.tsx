import React from 'react';
import cn from 'classnames';

import { IndicatorContainerProps } from '../types';

export const IndicatorsContainer: React.FC<IndicatorContainerProps> = ({
    children,
    className,
    innerProps,
    selectProps: {
        customIndicatorComponent,
        dataTestId,
    },
}) => (
    <div
        className={cn({ indicators: true }, className)}
        data-test-id={`${dataTestId}ComboboxIndicatorsContainer`}
        {...innerProps}
    >
        {customIndicatorComponent}
        {children}
    </div>
);
