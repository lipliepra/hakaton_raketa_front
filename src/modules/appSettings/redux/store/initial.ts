import { RuntimeStatuses } from '../../../../apollo/enums';
import { IAppSettingsState } from '../../types';

export const INITIAL_STATE: IAppSettingsState = {
    status: RuntimeStatuses.BeforeInitial,
    errorMessage: '',
    settings: {
        common: {
            isShowOtherProjects: false,
        },
        footer: {
            isShowUserAgreement: false,
            isShowFeedbackForm: false,
            aboutProject: {
                isShowAboutProject: false,
                aboutProjectInfo: '',
            },
        },
    },
};