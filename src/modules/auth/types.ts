import { RuntimeStatuses } from '../../common/enums';
import { TNullable } from '../../common/types';

export type TLoginFormFields = 'login' | 'password';

export interface IProfileData {
    login: string;
    password: string;
}

export interface IAppState {
    status: RuntimeStatuses;
    errorMessage: string;
}

export interface IProfileState {
    data: TNullable<IProfileData>;
    token: string;
    isAuth: boolean;
}

export interface ILoginFormState {
    status: RuntimeStatuses;
    errorMessage: string;
    fields: { login: string; password: string };
    formErrors: { [key: string]: string };
}

export interface IState {
    app: IAppState;
    profile: IProfileState;
    loginForm: ILoginFormState;
}
