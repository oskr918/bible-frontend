import React, { useState } from 'react'
import Capitulos from '../components/Capitulos'
import ListDividers from '../components/ListDividers'
import TextoBiblico from '../components/TextoBiblico'

const Biblia = () => {
  const [libro, setLibro] = useState("GEN")
  const [capitulo, setCapitulo] = useState(1)
  const book = (libro)=>{
    setLibro(libro.abbreviation)
  }
  const getCapitulo = (cap)=>{
    setCapitulo(cap.number)
  }

  return (
    <div className='biblia'>
      <div>
        <ListDividers onClick={book}></ListDividers>
      </div>
      <div className='texto-capitulos'>
        <TextoBiblico libro={libro} capitulo={capitulo}></TextoBiblico>
        <Capitulos libro={libro} onClick={getCapitulo}></Capitulos>

      </div>
    </div>
  )
}

export default Biblia