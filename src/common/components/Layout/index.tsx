import { CFC } from '../../types';
import { Footer } from './Footer';
import { Header } from './Header';

export const Layout: CFC = ({ children }) => {
    return (
        <div className="layout">
            <Header />

            <div className="container">{children}</div>

            <Footer />
        </div>
    );
};
