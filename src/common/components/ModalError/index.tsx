import { Modal } from '@skbkontur/react-ui';
import { useSelector } from 'react-redux';
import { appActions } from '../../../app/redux/actions';
import {
    errorMessageSelector,
    isAppErrorSelector,
} from '../../../app/redux/store/selectors';
import { useActions } from '../../hooks/useActions';

export const ModalError = () => {
    const isAppError = useSelector(isAppErrorSelector);
    const errorMessage = useSelector(errorMessageSelector);

    const { closeErrorModal } = useActions(appActions);

    if (!isAppError) return null;

    return (
        <Modal onClose={closeErrorModal}>
            <Modal.Header>Произошла ошибка</Modal.Header>

            <Modal.Body>{errorMessage}</Modal.Body>
        </Modal>
    );
};
