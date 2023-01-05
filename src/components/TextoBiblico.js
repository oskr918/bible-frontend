import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios'
import '../../src/App.css'
import LongTextSnackbar from './LongTextSnackbar';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const TextoBiblico = (props) => {

  const URL = `https://api.scripture.api.bible/v1/bibles/b32b9d1b64b4ef29-01/passages/${props.libro}.${props.capitulo}?content-type=text&include-notes=false&include-titles=true&include-chapter-numbers=false&include-verse-numbers=true&include-verse-spans=false&use-org-id=false`

  const [texto, setTexto] = useState([])

  const API_KEY = "30eb61aed54f9ce2146d2b2fdd5f294f"
  useEffect(() => {

    async function getTexto() {
      try {
        const response = await axios.get(URL, {
          headers: {
            "api-key": API_KEY
          }
        });
        const data = response.data.data.content.split("\n");
        setTexto(data)
      } catch (error) {
        console.error(error);
      }
    }

    getTexto()
  }, [props.libro, props.capitulo])

  return (
    <div className='contenedor-texto'>
      {texto.map((verso, i) => {
        return (
          <div key={i}>
            <LongTextSnackbar key={i}
              versiculo={verso.trim().replace(/^\[\d+\]\s*/, "")}>
            </LongTextSnackbar>

          </div>
        )
      })}
    </div>
  )
}

export default TextoBiblico