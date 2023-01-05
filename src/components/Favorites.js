import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchFavoritesSuccess}  from '../app/features/userSlice';
import { fetchUsers } from '../api';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import axios from 'axios';


const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 650,
  color: theme.palette.text.primary,
}));


const Favorites = () => {

  const dispatch = useDispatch();
  const users = useSelector((state)=> state.users)  
  useEffect(() => {
    (async () => {
        const response = await fetchUsers();
        dispatch(fetchFavoritesSuccess(response.data));
      })();
  }, [dispatch]);



 
  
  return (
    <div className='users'>
      {users.map((user, i)=>{
        return(
          <>
          <Box container sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
      <StyledPaper
        sx={{
          my: 1,
          mx: 'auto',
          p: 2,
        }}
      >
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs>
            <Typography>{user.versiculo}</Typography>
            <Tooltip title="Delete">
        <IconButton onClick={ async function deleteVerse() {
    
    try {
      
      const response = await axios.delete(`http://localhost:3001/users/favorites/${user.versiculo}`, {
      });
      console.log(response.data); // "Versículo eliminado correctamente"
      window.location.replace("http://localhost:3000/favorites")
    } catch (error) {
      console.error(error);
    }
  }}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
          </Grid>
        </Grid>
      </StyledPaper>
    </Box>
    </>
        )
      })}
    </div>
  );
};

export default Favorites;
