import { Grid } from '@mui/material';

import { CFC } from '../../types';
import { Footer } from './Footer';
import { Header } from './Header';

export const Layout: CFC = ({ children }) => {
    return (
        <div className="layout">
            <Header />

            <Grid container className="container">
                {children}
            </Grid>

            <Footer />
        </div>
    );
};
