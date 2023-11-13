import React, {
    FC,
    Fragment,
    useState,
} from 'react';
import { useSelector } from 'react-redux';

import { BottomSheet } from '../../../../../apollo/components/BottomSheet';
import { isShowFeedbackFormSelector } from '../../../../../common/selectors';

export const Feedback: FC = () => {
    const isShowFeedbackForm = useSelector(isShowFeedbackFormSelector);

    const [isShowContent, setIsShowContent] = useState<boolean>(false);

    if (!isShowFeedbackForm) return null;

    return (
        <Fragment>
            <span className='footer__navigation-link' onClick={() => setIsShowContent(true)}>Обратная связь</span>

            <BottomSheet
                isShow={isShowContent}
                setIsShow={(value) => setIsShowContent(value)}
                dataTestId='FooterAboutProject'
            >
                Обратная связь
            </BottomSheet>
        </Fragment>
    );
};