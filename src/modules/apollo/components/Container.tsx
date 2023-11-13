import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import { ICONS } from '../../../apollo/assets';
import { Icon } from '../../../apollo/components/Icon';
import { SanitizedHtml } from '../../../apollo/components/SanitizedHtml';
import { CFC } from '../../../apollo/types';
import { Panel } from '../../../common/components/Panel';
import { IContainerProps } from '../types';

export const Container: CFC<IContainerProps> = ({
    children,
    title,
    description,
}) => {
    const navigate = useNavigate();

    return (
        <Fragment>
            <h2 className='apollo-module__title'>
                <Icon
                    path={ICONS.ArrowLeft}
                    onClick={() => navigate('/apollo')}
                    dataTestId=''
                />

                {title}
            </h2>

            <div className='apollo-module__container'>
                <div className='apollo-module__content'>{children}</div>

                <Panel className='apollo-module__description'>
                    <SanitizedHtml html={description} />
                </Panel>
            </div>
        </Fragment>
    );
};