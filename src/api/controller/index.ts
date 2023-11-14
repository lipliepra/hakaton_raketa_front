import axios, { AxiosStatic, AxiosResponse } from 'axios';

import { __BACK_API_ORIGIN__ } from '../../../config/environment';
import { IApiResponse } from '../../common/types';
import { IControllerData, IControllerConfig, IControllerOptions } from './types';

export const config: IControllerOptions = {
    baseURL: `${__BACK_API_ORIGIN__}/api`,
    // @ts-ignore
    headers: { Accept: 'application/json' }
};

const controller = axios.create(config) as AxiosStatic;

controller.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');

    if (token) config.headers!.Authorization = `Bearer ${token}`;

    return config;
});

export const API_CONTROLLER = {
    get: <T>(url: string, conf: IControllerConfig = {}): Promise<AxiosResponse<T & IApiResponse>> =>
        controller.get<IApiResponse & T>(url, conf),
    post: <T>(
        url: string,
        data: IControllerData,
        conf: IControllerConfig = {}
    ): Promise<AxiosResponse<T & IApiResponse>> => controller.post<IApiResponse & T>(url, data, conf),
    put: <T>(
        url: string,
        data: IControllerData,
        conf: IControllerConfig = {}
    ): Promise<AxiosResponse<T & IApiResponse>> => controller.put<IApiResponse & T>(url, data, conf),
    delete: <T>(url: string, conf: IControllerConfig = {}): Promise<AxiosResponse<T & IApiResponse>> =>
        controller.delete<IApiResponse & T>(url, conf)
};
