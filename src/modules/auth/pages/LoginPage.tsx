import { Button, Input } from '@skbkontur/react-ui';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useActions } from '../../../common/hooks/useActions';
import { formActions } from '../redux/actions';
import { loginSelector, passwordSelector } from '../redux/store/selectors';
import { TFormFields } from '../types';

export default () => {
    const login = useSelector(loginSelector);
    const password = useSelector(passwordSelector);

    const navigate = useNavigate();

    const { submitLogin, updateField } = useActions(formActions);

    const updateFieldHandler = (field: TFormFields) => (value: string) => {
        updateField({
            field,
            value
        });
    };

    const loginHandler = () => {
        submitLogin().then((response) => {
            if (response) navigate('/');
        });
    };

    return (
        <div className="auth">
            <div className="auth__container">
                <h2 className="auth__title">Авторизация</h2>

                <Input
                    className="input auth__field"
                    size="medium"
                    value={login}
                    placeholder="Введите логин"
                    width="100%"
                    onValueChange={updateFieldHandler('login')}
                />

                <Input
                    className="input auth__field"
                    size="medium"
                    value={password}
                    width="100%"
                    placeholder="Введите пароль"
                    onValueChange={updateFieldHandler('password')}
                />

                <Button size="medium" use="primary" onClick={loginHandler}>
                    Войти
                </Button>
            </div>
        </div>
    );
};
