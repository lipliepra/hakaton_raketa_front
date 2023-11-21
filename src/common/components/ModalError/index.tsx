import { Modal } from '@skbkontur/react-ui';
import { FC } from 'react';
import { IModalErrorProps } from './types';

export const ModalError: FC<IModalErrorProps> = ({ errorMessage, onClose }) => {
    return (
        <Modal onClose={onClose}>
            <Modal.Header>Произошла ошибка</Modal.Header>

            <Modal.Body>{errorMessage}</Modal.Body>
        </Modal>
    );
};
