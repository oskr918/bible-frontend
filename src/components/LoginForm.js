import '../../src/App.css'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { isUserRegistered } from '../api';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isRegistered, setIsregistered] = useState(false)
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userData = { email, password };
            await isUserRegistered(userData);
            dispatch({ type: 'IS_REGISTERED', payload: userData });
            setIsregistered(true)
            if(isRegistered){
                window.location.replace("http://localhost:3000/bible");
            }else{
                alert('el usuario o contraseña no es valido')
            }
        } catch (error) {
            // Mostrar un mensaje de error

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

                <Button onClick={handleSubmit}variant="outlined" endIcon={<LoginIcon></LoginIcon>}>
                    LOGIN
                </Button>
            </form>
            </fieldset>
        </Container>
        <Link to='/signup'>Sign Up</Link>
        </div>
    );
};

export default LoginForm;