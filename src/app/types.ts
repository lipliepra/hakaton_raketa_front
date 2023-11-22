import { RuntimeStatuses } from '../common/enums';

export interface IAppState {
    status: RuntimeStatuses;
    errorMessage: string;
    errors: { [key: string]: string };
}
