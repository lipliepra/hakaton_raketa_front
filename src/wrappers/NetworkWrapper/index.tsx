import React, {
    useState,
    useEffect,
} from 'react';
import { BrowserRouter } from 'react-router-dom';

import { CFC } from '../../apollo/types';

export const NetworkWrapper: CFC = ({ children }) => {
    const [isOffline, setIsOffline] = useState<boolean>(false);

    const setIsOfflineHandler = (isOff: boolean) => () => {
        setIsOffline(isOff);
    };

    useEffect(() => {
        window.addEventListener('online', setIsOfflineHandler(false));
        window.addEventListener('offline', setIsOfflineHandler(true));

        return () => {
            window.removeEventListener('online', setIsOfflineHandler(false));
            window.removeEventListener('offline', setIsOfflineHandler(true));
        };
    }, []);

    const renderContent = () => {
        if (isOffline) return <span>disconnected</span>;

        return children;
    };

    return <BrowserRouter>{renderContent()}</BrowserRouter>;
};
