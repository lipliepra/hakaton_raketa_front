import { CKEditor } from '@ckeditor/ckeditor5-react';
import { RefObject } from 'react';

import {
    TFunc,
    TNullable,
} from '../../types';

export interface ITextEditorProps {
    value: string;
    onChange: TFunc<[string]>;
    onReady?: TFunc;
    onBlur?: TFunc;
    onFocus?: TFunc;
    reactRef?: TNullable<RefObject<CKEditor<any>>>;
}
