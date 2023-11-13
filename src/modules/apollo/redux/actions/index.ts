import { RuntimeStatuses } from '../../../../apollo/enums';
import { ThunkActionBase } from '../../../../common/types';
import { actionCreators as appActionCreators } from '../reducers/app';
import { actionCreators as componentsActionCreators } from '../reducers/components';
import { actionCreators as iconsActionCreators } from '../reducers/icons';
import {
    componentsStatusSelector,
    iconsStatusSelector,
} from '../store/selectors';
import { IState } from '../../types';

const {
    setAppStatus,
    setAppErrorMessage,
} = appActionCreators;

const {
    setComponentsStatus,
    setComponentsDescription,
    updateComponentsFilter,
} = componentsActionCreators;

const {
    setIconsStatus,
    updateIconsFilter,
    setIconsDescription,
} = iconsActionCreators;

const closeErrorModal = (): ThunkActionBase<IState> => (dispatch) => {
    dispatch(setAppStatus(RuntimeStatuses.Ready));
    dispatch(setAppErrorMessage(''));
};

const getComponentsDescription = (): ThunkActionBase<IState> => (dispatch, getState) => {
    const state = getState();
    const isComponentsReady = componentsStatusSelector(state, RuntimeStatuses.Ready);

    if (isComponentsReady) return;

    dispatch(setComponentsStatus(RuntimeStatuses.Loading));

    setTimeout(() => {
        dispatch(setComponentsDescription('Описание компонентов'));
        dispatch(setComponentsStatus(RuntimeStatuses.Ready));
    }, 2000);
};

const getIconsDescription = (): ThunkActionBase<IState> => (dispatch, getState) => {
    const state = getState();
    const isIconsReady = iconsStatusSelector(state, RuntimeStatuses.Ready);

    if (isIconsReady) return;

    dispatch(setIconsStatus(RuntimeStatuses.Loading));

    setTimeout(() => {
        dispatch(setIconsDescription('Описание иконок'));
        dispatch(setIconsStatus(RuntimeStatuses.Ready));
    }, 2000);
};

export const errorModalActions = { closeErrorModal };

export const componentsActions = {
    updateComponentsFilter,
    getComponentsDescription,
};

export const iconsActions = {
    updateIconsFilter,
    getIconsDescription,
};
