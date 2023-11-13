import { __BACK_API_ORIGIN__ } from '../../../config/environment';

export const getImageUrl = (imageId: string = '') => imageId
    ? `${__BACK_API_ORIGIN__}/api/images/${imageId}`
    : '';
