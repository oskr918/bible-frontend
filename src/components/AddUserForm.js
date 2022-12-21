import '../../src/App.css'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addUser } from '../api';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';

const AddUserForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("hola")
        try {
            const userData = { id: uuidv4(), name, email, password };
            await addUser(userData);
            dispatch({ type: 'ADD_USER', payload: userData });
            // Mostrar un mensaje de éxito
        } catch (error) {
            // Mostrar un mensaje de error
        }
    };

    return (
        <div className='container-form'>
            <Container maxWidth="sm" >
            <fieldset>
                <legend>login</legend>
            <form className='login'>
                <TextField id="name" label="Name" variant="standard"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
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
                    Login
                </Button>
            </form>
            </fieldset>
        </Container>
        </div>
    );
};

export default AddUserForm;
