import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SnackbarContent from '@mui/material/SnackbarContent';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useDispatch } from 'react-redux';
import { addFavorites } from '../api';
import { useState } from 'react';
import ActionAlerts from './ActionAlerts';


export default function LongTextSnackbar(props) {

  const [agregado, setAgregado] = useState(false)
  const dispatch = useDispatch();
  const versiculo = props.versiculo;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const userData = { versiculo };
        await addFavorites(userData);
        dispatch({ type: 'ADD_FAVORITES', payload: userData });
        // Mostrar un mensaje de éxito
        setAgregado(true)
    } catch (error) {
        // Mostrar un mensaje de error
        alert('No has sido registrado')
    }
};
    const action = (
        <Button 
        onClick={handleSubmit} 
            color="secondary" size="small">
          Añadir a Favoritos <StarBorderIcon></StarBorderIcon>
        </Button>
      );

  return (
    <>
    <Stack className='verciculos' spacing={2} sx={{ maxWidth: 1200 }}>
      <SnackbarContent
        message={props.versiculo}
        action={action}
      />
    </Stack>
    {agregado === true && <ActionAlerts></ActionAlerts>}</>
  );
}