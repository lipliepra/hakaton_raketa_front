import { ReactNode } from 'react';

import { TRef } from '../../types';

export interface IControlWrapperProps {
    label: string;
    id: string;
    dataTestId: string;
    hint?: ReactNode;
    tooltipPosition?: 'top' | 'left' | 'right';
    errorMessage?: string;
    isRequired?: boolean;
    className?: string;
    reactRef?: TRef;
}
