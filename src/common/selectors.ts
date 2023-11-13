import { IRootState } from '../store/types';

// Common
export const isShowOtherProjectsSelector = (state: IRootState) => state.appSettings.settings.common.isShowOtherProjects;
// Footer
export const isShowUserAgreementSelector = (state: IRootState) => state.appSettings.settings.footer.isShowUserAgreement;
export const isShowFeedbackFormSelector = (state: IRootState) => state.appSettings.settings.footer.isShowFeedbackForm;
export const isShowAboutProjectSelector = (state: IRootState) => state.appSettings.settings.footer.aboutProject.isShowAboutProject;
export const aboutProjectInfoSelector = (state: IRootState) => state.appSettings.settings.footer.aboutProject.aboutProjectInfo;

// Profile
export const isAuthSelector = (state: IRootState) => state.auth.profile.isAuth;
export const isAdminSelector = (state: IRootState) => state.auth.profile.data?.accessRoles?.isAdmin;
export const isModerSelector = (state: IRootState) => state.auth.profile.data?.accessRoles?.isModer;
export const profileImageIdSelector = (state: IRootState) => state.auth.profile.data?.imageId;
export const profileFullNameSelector = (state: IRootState) => {
    const data = state.auth.profile.data;

    return `${data.firstName} ${data.lastName}`;
};