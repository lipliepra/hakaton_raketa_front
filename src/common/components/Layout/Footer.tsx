import { FC } from 'react';

import './index.scss';
import { Link } from 'react-router-dom';
import { FOOTER_NAVIGATION } from './constants';

export const Footer: FC = () => {
    return (
        <div className="layout-footer">
            <div className="layout-footer__container">
                <span className="layout-footer__logo">Название проекта</span>

                <div className="layout-footer__navigation">
                    {FOOTER_NAVIGATION.map((item) => (
                        <Link key={item.path} to={item.path} className="layout-footer__navigation-item">
                            {item.content}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};
