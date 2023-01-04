import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios'
import { Button } from '@mui/material';

const Capitulos = ({libro, onClick}) => {
    let [capitulos, setCapitulos] = useState([])
    const API_KEY = "30eb61aed54f9ce2146d2b2fdd5f294f"
    let URL_CAPITULOS = `https://api.scripture.api.bible/v1/bibles/b32b9d1b64b4ef29-01/books/${libro}/chapters`

    useEffect(() => {

        async function getCapitulos() {
            try {
                const response = await axios.get(URL_CAPITULOS, {
                    headers: {
                        "api-key": API_KEY
                    }
                });
                setCapitulos(response.data.data)
                //console.log(capitulos)
            } catch (error) {
                console.error(error);
            }
        }
        getCapitulos()
    }, [libro, onClick])

    return (
        <div className='contenedor-capitulo'>
            {
                capitulos.map((cap) => {
                    return (
                        <>
                            <Button
                                onClick={()=>{onClick(cap)}}
                                color="primary"
                                disabled={false}
                                size="small"
                                variant="outlined"
                            >
                                {cap.number}
                            </Button>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Capitulos