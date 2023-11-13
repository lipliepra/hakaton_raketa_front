
import React, {
    FC,
    useEffect,
} from 'react';
import Editor from 'ckeditor/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react';

import { EDITOR_CONFIG } from './constants';
import { NOOP } from '../../constants';
import { ITextEditorProps } from './types';
import './index.scss';

export const TextEditor: FC<ITextEditorProps> = ({
    value,
    onChange,
    onReady = NOOP,
    onFocus = NOOP,
    onBlur = NOOP,
    reactRef = null,
}) => {
    useEffect(() => {
        const elements = document.getElementsByClassName('ck-body-wrapper');

        if (elements.length) Array.from(elements).forEach((elem) => elem.remove());
    }, []);

    const setValueHandler = (event: any, editor: any) => {
        const data = editor.getData();

        onChange(data);
    };

    return (
        <CKEditor
            ref={reactRef}
            editor={Editor}
            data={value}
            config={EDITOR_CONFIG}
            onChange={setValueHandler}
            onReady={onReady}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    );
};