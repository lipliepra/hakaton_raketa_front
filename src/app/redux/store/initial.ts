import { RuntimeStatuses } from '../../../common/enums';
import { IAppState } from '../../types';

export const APP_DEFAULT_STATE: IAppState = {
    status: RuntimeStatuses.BeforeInitial,
    errorMessage: '',
    errors: {},
};
