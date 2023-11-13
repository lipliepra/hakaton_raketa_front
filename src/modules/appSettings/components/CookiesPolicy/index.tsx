import React, {
    FC,
    useEffect,
    useState,
} from 'react';
import { Link } from 'react-router-dom';
import {
    motion,
    AnimatePresence,
} from 'framer-motion';

import { Button } from '../../../../apollo/components/Button';
import { lStorage } from '../../../../apollo/utils/lStorage';
import './index.scss';

export const CookiesPolicy: FC = () => {
    const [isReadingCookieWarning, setIsReadingCookieWarning] = useState(true);

    useEffect(() => {
        setTimeout(() => setIsReadingCookieWarning(lStorage.getJson('isReadingCookieWarning')), 2000);
    }, []);

    const onClickHandler = () => {
        lStorage.set('isReadingCookieWarning', 'true');
        setIsReadingCookieWarning(true);
    };

    return (
        <AnimatePresence>
            {!isReadingCookieWarning && (
                <motion.div
                    className='cookies-policy'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <h3 className='cookies-policy__title'>Мы используем куки 🍪</h3>

                    <div className='cookies-policy__content'>
                        <span className='cookies-policy__description'>
                            Оставаясь с нами, вы соглашаетесь с
                        </span>

                        {' '}

                        <Link
                            to='/cookies'
                            className='cookies-policy__link'
                        >
                            условиями их применения
                        </Link>
                    </div>

                    <Button
                        content='OK'
                        size='sm'
                        onClick={onClickHandler}
                        isFullWidth
                        dataTestId='cookiesPolicy'
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};