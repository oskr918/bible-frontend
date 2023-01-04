import Login from '@mui/icons-material/Login'
import React from 'react'
import '../App.css';
import LoginForm from '../components/LoginForm';
const Home = () => {
  return (
    <div className='contenedor-home'>
      <div className='contenedor-img-home'>
        <img src={require('../img/portada.png')} alt='estudiantes de la biblia'></img>
      </div>
      <div>
        <LoginForm></LoginForm>
      </div>
    </div>
  )
}

export default Home