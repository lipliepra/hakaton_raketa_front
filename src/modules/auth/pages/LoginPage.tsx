import { useNavigate } from 'react-router-dom';
import { Button, TextField, Paper, Box, Grid, Typography } from '@mui/material';

import { useActions } from '../../../common/hooks/useActions';
import { profileActions } from '../redux/actions';

export default () => {
    const navigate = useNavigate();

    const { setIsAuth } = useActions(profileActions);

    const loginHandler = () => {
        setIsAuth(true);
        navigate('/');
    };

    return (
        <Grid container className="auth__layout">
            <Grid item xs={false} sm={0} md={7} sx={{ backgroundColor: (t) => t.palette.grey[400] }} />

            <Grid item sm={12} md={5} component={Paper} elevation={6} square>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%'
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Авторизация
                    </Typography>

                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="userName"
                            label="Логин"
                            name="userName"
                            autoFocus
                            autoComplete="login"
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Пароль"
                            type="password"
                            id="password"
                            autoComplete="current-passoword"
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            onClick={loginHandler}
                            sx={{
                                mt: 3,
                                mb: 2
                            }}
                        >
                            Войти
                        </Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};
