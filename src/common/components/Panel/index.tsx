import React from 'react';
import cn from 'classnames';

import { CFC } from '../../../apollo/types';
import { IPanelProps } from './types';
import './index.scss';

export const Panel: CFC<IPanelProps> = ({
    children,
    className = '',
}) => <div className={cn('panel', className)}>{children}</div>;
