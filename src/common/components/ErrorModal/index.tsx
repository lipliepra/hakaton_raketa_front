import React, { FC } from 'react';
import { IErrorModalProps } from './types';

export const ErrorModal: FC<IErrorModalProps> = ({
    isError,
    message,
    onClose,
}) => {

    if (!isError) return null;

    return <div onClick={onClose}>{message}</div>;
};