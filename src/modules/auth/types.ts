import { RuntimeStatuses } from '../../common/enums';
import { TNullable } from '../../common/types';

export interface IProfileData {
    id: string;
    firstName: string;
    login: string;
    password: string;
}

export interface IForm {
    status: RuntimeStatuses;
    errorMessage: string;
    fields: { [key: string]: string };
    formErrors: { [key: string]: string };
}

export interface IAppState {
    status: RuntimeStatuses;
    errorMessage: string;
}

export interface IProfileState {
    data: TNullable<IProfileData>;
    isAuth: boolean;
}

export interface IFormsState {
    login: IForm;
    register: IForm;
    restorePassword: IForm;
}

export interface IState {
    app: IAppState;
    profile: IProfileState;
    forms: IFormsState;
}
