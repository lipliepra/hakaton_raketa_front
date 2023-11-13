import { RuntimeStatuses } from '../../apollo/enums';

export interface IAppSettings {
    common: {
        isShowOtherProjects: boolean;
    },
    footer: {
        isShowUserAgreement: boolean;
        isShowFeedbackForm: boolean;
        aboutProject: {
            isShowAboutProject: boolean;
            aboutProjectInfo: string;
        };
    };
}

export interface IAppSettingsState {
    status: RuntimeStatuses;
    errorMessage: string;
    settings: IAppSettings;
}

export interface IState {
    appSettings: IAppSettingsState;
}
