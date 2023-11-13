import React, {
    FC,
    Fragment,
} from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../../apollo/components/Button';
import { Panel } from '../../../common/components/Panel';

const HomePage: FC = () => {
    const navigate = useNavigate();

    return (
        <Fragment>
            <h2>Apollo</h2>

            <Panel>
                <Button
                    content={'Components'}
                    pattern='primary'
                    dataTestId={''}
                    onClick={() => navigate('/apollo/components')}
                />
                <Button
                    content={'Icons'}
                    pattern='primary'
                    dataTestId={''}
                    onClick={() => navigate('/apollo/icons')}
                />
                <Button
                    content={'Colors'}
                    pattern='primary'
                    dataTestId={''}
                    onClick={() => navigate('/apollo/colors')}
                />
            </Panel>
        </Fragment>
    );
};

export default HomePage;
