import React, {
    FC,
    Fragment,
    useState,
} from 'react';
import { useSelector } from 'react-redux';

import { BottomSheet } from '../../../../../apollo/components/BottomSheet';
import {
    isShowAboutProjectSelector,
    aboutProjectInfoSelector,
} from '../../../../../common/selectors';

export const AboutProject: FC = () => {
    const isShowAboutProject = useSelector(isShowAboutProjectSelector);
    const aboutProjectInfo = useSelector(aboutProjectInfoSelector);

    const [isShowContent, setIsShowContent] = useState<boolean>(false);

    if (!isShowAboutProject) return null;

    return (
        <Fragment>
            <span className='footer__navigation-link' onClick={() => setIsShowContent(true)}>О проекте</span>

            <BottomSheet
                isShow={isShowContent}
                setIsShow={(value) => setIsShowContent(value)}
                dataTestId='FooterAboutProject'
            >
                {aboutProjectInfo}
            </BottomSheet>
        </Fragment>
    );
};