import { RuntimeStatuses } from '../../../../common/enums';
import { IAppState, IFormsState, IProfileState, IState } from '../../types';

export const APP_DEFAULT_STATE: IAppState = {
    status: RuntimeStatuses.BeforeInitial,
    errorMessage: ''
};

export const PROFILE_DEFAULT_STATE: IProfileState = {
    data: null,
    token: '',
    isAuth: false
};

export const FORM_DEFAULT_STATE: IFormsState = {
    status: RuntimeStatuses.Ready,
    errorMessage: '',
    formErrors: {},
    fields: {
        login: '',
        password: ''
    }
};

export const INITIAL_STATE: IState = {
    app: APP_DEFAULT_STATE,
    profile: PROFILE_DEFAULT_STATE,
    form: FORM_DEFAULT_STATE
};
