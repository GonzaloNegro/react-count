import './App.css';
import freeCodeCampLogo from './Images/logo.png';
import Boton from './Components/Boton';
import Contador from './Components/Contador';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () =>{
    setNumClicks(numClicks + 1);
  }

  const reiniciarContador = () => {
    setNumClicks(0);
  }


  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
        className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt='Logo de freeCodeCamp'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClicks={ numClicks }/>
        <Boton 
        text="Click" 
        esBotonDeClick={true}
        manejarClick={manejarClick} />
        <Boton 
        text="Reiniciar" 
        esBotonDeClick={false}
        manejarClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
