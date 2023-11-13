import {
    AxiosRequestConfig,
    AxiosRequestHeaders,
} from 'axios';

export interface IControllerOptions {
    baseURL: string;
    headers: AxiosRequestHeaders;
}

export interface IControllerData {
    [key: string]: any;
}

export interface IControllerConfig extends AxiosRequestConfig, IControllerData {
    headers?: { [key: string]: string };
    params?: { [key: string]: any };
    data?: { [key: string]: any };
}
