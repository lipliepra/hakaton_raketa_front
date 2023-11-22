import { RuntimeStatuses } from '../../common/enums';
import {
    TApiResponseError,
    ThunkActionBase,
} from '../../common/types';
import { saveMessageByError } from '../../common/utils/saveMessageByError';
import { IRootState } from '../../store/types';
import {
    setAppStatus,
    setErrorMessage,
} from './slices/appSlice';

export const onRunError = (error: TApiResponseError): ThunkActionBase<IRootState> => (dispatch) => {

    dispatch(setAppStatus(RuntimeStatuses.Error));
    dispatch(setErrorMessage(saveMessageByError(error)));
};

const closeErrorModal = (): ThunkActionBase<IRootState> => (dispatch) => {
    dispatch(setAppStatus(RuntimeStatuses.Ready));
    dispatch(setErrorMessage(''));
};

export const appActions = { closeErrorModal };
