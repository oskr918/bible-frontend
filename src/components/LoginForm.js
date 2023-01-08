import '../../src/App.css'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { isUserRegistered } from '../api';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userData = { email, password };

            const response = await fetch('http://localhost:3001/users/login', {
                method: 'POST',
                body: JSON.stringify(userData),
                headers: { 'Content-Type': 'application/json' }
            });
            const data = await response.json();

            await isUserRegistered(userData);
            dispatch({ type: 'IS_REGISTERED', payload: userData });

            if (data.message === 'Inicio de sesión correcto') {
                window.location.replace("http://localhost:3000/bible")
            } else {
                setError(true);  // <-- cambia el estado a true
            }

        } catch (error) {
            setError(true);

        }
    };

    return (
        <div className='container-form'>
            <Container maxWidth="sm" >
                <fieldset>
                    <legend>LOGIN</legend>
                    <form className='login'>
                        <TextField id="email" label="E-mail" variant="standard"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField id="password" label="Password" variant="standard"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <Button onClick={handleSubmit} variant="outlined" endIcon={<LoginIcon></LoginIcon>}>
                            LOGIN
                        </Button>
                    </form>
                </fieldset>
            </Container>
            <Link to='/signup'>Sign Up</Link>
            {error && <Stack sx={{ width: '90%' }} spacing={2}>
                <Alert severity="error">Err  El usuario o contraseña no es valido!</Alert>
            </Stack>}
        </div>
    );
};

export default LoginForm;