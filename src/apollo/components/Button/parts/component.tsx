import React, { FC } from 'react';

import { Icon } from '../../Icon';
import { ICONS } from '../../../assets';
import { generateCLassNames } from '../../../utils/generateClassNames';
import { IButtonProps } from '../types';

const ButtonComponent: FC<IButtonProps> = ({
    content,
    onClick,
    dataTestId,
    className = '',
    size = 'md',
    pattern = 'branded',
    isLoading = false,
    isDisabled = false,
    iconPrefix = null,
    iconPostfix = null,
    isShowLoaderIcon = false,
    isFullWidth = false,
    reactRef = null,
}) => {
    const generatedCls = generateCLassNames({
        block: 'apollo-button',
        mods: {
            [pattern]: true,
            [size]: true,
            'full-width': isFullWidth,
            loading: isLoading,
            disabled: isDisabled,
        },
        className,
    });

    const iconPrefixCls = generateCLassNames({
        block: 'apollo-button',
        elem: 'icon',
        mods: {
            prefix: !!content,
        },
    });

    const iconPostfixCls = generateCLassNames({
        block: 'apollo-button',
        elem: 'icon',
        mods: {
            postfix: !!content,
        },
    });

    const renderIconPostfix = () => {
        if (iconPostfix) {
            if (isLoading) {
                return (
                    <Icon
                        path={ICONS.Loader}
                        size={size}
                        className={iconPostfixCls}
                        dataTestId={`${dataTestId}Button`}
                    />
                );
            }

            return (
                <Icon
                    path={iconPostfix}
                    size={size}
                    className={iconPostfixCls}
                    dataTestId={`${dataTestId}Button`}
                />
            );
        }

        if (isShowLoaderIcon && isLoading) {
            return (
                <Icon
                    path={ICONS.Loader}
                    size={size}
                    className={iconPostfixCls}
                    dataTestId={`${dataTestId}Button`}
                />
            );
        }

        return null;
    };

    return (
        <button
            ref={reactRef}
            className={generatedCls}
            disabled={isDisabled || isLoading}
            data-test-id={`${dataTestId}Button`}
            onClick={onClick}
        >
            {!!iconPrefix && (
                <Icon
                    path={iconPrefix}
                    size={size}
                    className={iconPrefixCls}
                    dataTestId={`${dataTestId}Button`}
                />
            )}

            {content}

            {renderIconPostfix()}

        </button>
    );
};

export default ButtonComponent;
