import { API_CONTROLLER } from '../../../api/controller';
import { RuntimeStatuses } from '../../../common/enums';
import {
    IResponseData,
    ThunkActionBase,
    ThunkActionPromise,
} from '../../../common/types';
import { IRootState } from '../../../store/types';
import { ENDPOINTS } from './api/endpoints';
import {
    setAppStatus,
    setErrorMessage,
} from './slices/appSlice';
import {
    setLoginFormStatus,
    updateLoginFormField,
} from './slices/loginFormSlice';
import {
    setIsAuth,
    setProfileData,
    setToken,
} from './slices/profileSlice';
import { fieldsSelector } from './store/selectors';

const closeErrorModal = (): ThunkActionBase<IRootState> => (dispatch) => {
    dispatch(setAppStatus(RuntimeStatuses.Ready));
    dispatch(setErrorMessage(''));
};

const submitLoginForm = (): ThunkActionPromise<IRootState, boolean> => (dispatch, getState) => {
    const fields = fieldsSelector(getState());

    const data = {
        username: fields.login,
        password: fields.password,
    };

    dispatch(setLoginFormStatus(RuntimeStatuses.Loading));

    return API_CONTROLLER.post<IResponseData<{ token: string }>>(ENDPOINTS.login, data)
        .then((response) => {
            const { result } = response.data;

            if (result) {
                dispatch(setIsAuth(true));
                dispatch(setProfileData(fields));
                dispatch(setToken(result.token));

                dispatch(setLoginFormStatus(RuntimeStatuses.Ready));
            }
        })
        .finally(() => dispatch(setLoginFormStatus(RuntimeStatuses.Ready)));
};

export const appActions = {
    closeErrorModal,
};

export const loginFormActions = {
    updateLoginFormField,
    submitLoginForm,
};

export const profileActions = {
    setProfileData,
    setIsAuth,
};
