import React from 'react';
import cn from 'classnames';

import { Hint } from '../../Hint';
import { IControlWrapperProps } from '../types';
import { CFC } from '../../../types';
import '../index.scss';

export const ControlWrapperComponent: CFC<IControlWrapperProps> = ({
    label,
    children,
    dataTestId,
    id = '',
    errorMessage = '',
    hint = '',
    tooltipPosition = 'top',
    isRequired = false,
    className = '',
    reactRef = null,
}) => {
    const clickLabelHandler = () => {
        const element = document.getElementById(id);

        if (element) element.click();
    };

    return (
        <div
            ref={reactRef}
            className={cn('apollo-control-wrapper', className)}
            role='group'
            id={id}
            data-test-id={`${dataTestId}ControlWrapper`}
        >
            <label
                className='apollo-control-wrapper__label'
                htmlFor={id}
                onClick={clickLabelHandler}
            >
                <span className='apollo-control-wrapper__label-text'>
                    {label}

                    {isRequired && <span className='apollo-control-wrapper__required-sign'>*</span>}
                </span>

                {hint && (
                    <Hint
                        message={hint}
                        tooltipPosition={tooltipPosition}
                        dataTestId={`${dataTestId}ControlWrapper`}
                    />
                )}
            </label>

            <div className='apollo-control-wrapper__content'>
                {children}

                {!!errorMessage && <span className='apollo-control-wrapper__error-message'>{errorMessage}</span>}
            </div>
        </div>
    );
};

export default ControlWrapperComponent;
