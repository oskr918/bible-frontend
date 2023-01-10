import './App.css';
import Home from './pages/Home';
import SignUpForm from './components/SignUpForm'
import PermanentDrawerLeft from './components/PermanentDrawerLeft';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Biblia from './pages/Biblia';
import Favorites from './components/Favorites';
import Libros from './pages/Libros';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <PermanentDrawerLeft></PermanentDrawerLeft>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/signup' element={<SignUpForm></SignUpForm>}></Route>
          <Route path='/bible' element={<Biblia></Biblia>} ></Route>
          <Route path='/books' element={<Libros></Libros>}></Route>
          <Route path='/favorites' element={<Favorites></Favorites>}></Route>
        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;
