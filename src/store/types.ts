import { IState as IAuthState } from '../modules/auth/entry';

export interface IRootState {
    auth: IAuthState;
}
