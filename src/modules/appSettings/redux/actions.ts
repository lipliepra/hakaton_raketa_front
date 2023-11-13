import { API_CONTROLLER } from '../../../api/controller';
import { RuntimeStatuses } from '../../../apollo/enums';
import {
    IResponseData,
    TApiResponseError,
    ThunkActionBase,
} from '../../../common/types';
import { catchResponse } from '../../../common/utils/catchResponse';
import { saveMessageByError } from '../../../common/utils/saveMessageByError';
import { ENDPOINTS } from './api/endpoints';
import {
    setErrorMessage,
    setSettings,
    setStatus,
} from './slices';
import {
    IAppSettings,
    IState,
} from '../types';

const onRunError = (error: TApiResponseError): ThunkActionBase<IState> => (dispatch) => {
    dispatch(setStatus(RuntimeStatuses.Error));
    dispatch(setErrorMessage(saveMessageByError(error)));
};

const closeErrorModal = (): ThunkActionBase<IState> => (dispatch) => {
    dispatch(setStatus(RuntimeStatuses.Ready));
    dispatch(setErrorMessage(''));
};

const onCatch = catchResponse(onRunError, 'appSettings');

const getSettings = (): ThunkActionBase<IState> => (dispatch) => {
    dispatch(setStatus(RuntimeStatuses.Loading));

    API_CONTROLLER.get<IResponseData<IAppSettings>>(ENDPOINTS.getAppSettings)
        .then((response) => {
            const { result } = response.data;

            if (result) {
                dispatch(setSettings(result));
            }

            dispatch(setStatus(RuntimeStatuses.Ready));
        })
        .catch(onCatch({
            actionName: 'getSettings',
            requestType: 'GET',
            runFail: (error) => {
                dispatch(onRunError(error));
            },
        }, dispatch));
};

export const appActions = { getSettings };

export const errorModalActions = { closeErrorModal };