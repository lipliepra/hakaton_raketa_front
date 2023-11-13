import { TApiResponseError } from '../types';

export const saveMessageByError = (error: TApiResponseError) => {
    if (error.code === 'ERR_NETWORK') return error.code;

    if (error.code === 'ERR_BAD_RESPONSE') return 'Что-то пошло не так! Попробуйте позже!';

    if (error.response?.data?.message) return error.response.data.message;

    return '';
};
