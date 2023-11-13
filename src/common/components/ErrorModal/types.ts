import { TFunc } from '../../../apollo/types';

export interface IErrorModalProps {
    isError: boolean;
    message: string;
    onClose: TFunc;
}