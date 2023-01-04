import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { useEffect, useState } from 'react';
import axios from 'axios'

const style = {
  width: '100%',
  maxWidth: 200,
  bgcolor: 'background.paper',
};

export default function ListDividers({onClick}) {

  const [datos, setDatos] =  useState([])
  const URL = `https://api.scripture.api.bible/v1/bibles/b32b9d1b64b4ef29-01/books`
  const API_KEY ="30eb61aed54f9ce2146d2b2fdd5f294f"
 
useEffect(()=>{
  async function getNombres(

  ) {
      try {
        const response = await axios.get(URL,{
          headers:{
              "api-key":API_KEY
          }
        });
        setDatos(response.data.data)
      } catch (error) {
        console.error(error);
      }
    }
    getNombres()
    
},[])
  return (
    <div  className='lista'>
      {datos.map((libro, i)=>{
        return(
            <div>
              <List onClick={()=>onClick(libro)} sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button>
        <ListItemText key={i} primary={libro.name} />
      </ListItem>
      <Divider />
    </List>
            </div>
        )
    })}
    </div>
    
  );
}