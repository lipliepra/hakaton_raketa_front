import React, { FC } from 'react';
import {
    Routes,
    Route,
} from 'react-router-dom';

import { StoreWrapper } from '../../../store/Wrapper';
import { ErrorModal } from '../components/ErrorModal';
import { APOLLO_ROUTES } from '../constants';
import '../index.scss';

const ApolloModule: FC = () => {
    return (
        <StoreWrapper moduleName='apollo'>
            <div className='container'>
                <Routes>
                    {APOLLO_ROUTES.map(({
                        path,
                        element: Element,
                    }, index) => (
                        <Route
                            key={`${path}${index}`}
                            path={path}
                            element={<Element />}
                        />
                    ))}
                </Routes>

                <ErrorModal />
            </div>
        </StoreWrapper>
    );
};

export default ApolloModule;
