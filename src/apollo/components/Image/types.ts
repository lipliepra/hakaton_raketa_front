import { TFunc } from '../../types';

export interface IImageProps {
    src: string;
    alt?: string;
    defaultImage?: string;
    className?: string;
    onClick?: TFunc;
    withExpandButton?: boolean;
    withPhotoButton?: boolean;
}