import React, { ReactNode } from 'react';

import { NOOP } from '../../../constants';
import { generateCLassNames } from '../../../utils/generateClassNames';
import { TFunc } from '../../../types';
import { IImageProps } from '../types';
import '../index.scss';

export const WithExpandButton = (Component: TFunc<[IImageProps], ReactNode>) => (props: IImageProps) => {
    const {
        withExpandButton = false,
        withPhotoButton = false,
        onClick = NOOP,
    } = props;

    const generatedCls = generateCLassNames({
        block: 'apollo-image',
        elem: 'button',
        mods: {
            'expand': withExpandButton,
            'photo': withPhotoButton,
        },
    });

    if (withExpandButton || withPhotoButton) {
        return (
            <div className='apollo-image'>
                <Component {...props} />

                <div
                    className={generatedCls}
                    onClick={onClick}
                />
            </div>
        );
    }

    return <Component {...props} />;
};