import React from 'react';

import { CFC } from '../../../apollo/types';
import { BottomMenu } from '../components/BottomMenu';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import '../index.scss';

export const Layout: CFC = ({ children }) => (
    <div className='layout'>
        <Header />

        <div className='container'>{children}</div>

        <BottomMenu />

        <Footer />
    </div>
);
