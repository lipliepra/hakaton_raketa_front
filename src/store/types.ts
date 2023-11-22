import { IAppState } from '../app/types';
import { IState as IAuthState } from '../modules/auth/entry';

export interface IRootState {
    app: IAppState;
    auth: IAuthState;
}
