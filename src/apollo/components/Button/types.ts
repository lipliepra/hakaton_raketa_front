import { RefObject } from 'react';
import {
    TFunc,
    TIcon,
    TNullable,
    TSize,
    TStatus,
} from '../../types';

export interface IButtonProps {
    content?: string;
    onClick: TFunc;
    dataTestId: string;
    pattern?: TButtonPattern;
    size?: TSize;
    isLoading?: boolean;
    isDisabled?: boolean;
    isFullWidth?: boolean;
    isShowLoaderIcon?: boolean;
    reactRef?: TNullable<RefObject<HTMLButtonElement>>;
    className?: string;
    iconPrefix?: TNullable<TIcon>;
    iconPostfix?: TNullable<TIcon>;
}

export type TButtonPattern = (('branded' | 'common' | 'primary' | 'secondary' | 'like-link' | 'like-icon') | TStatus);
