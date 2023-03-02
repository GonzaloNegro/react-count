import React from 'react';
import '../Styles/style.css'

function Boton({text, esBotonDeClick, manejarClick }){
    return(
        <button className={esBotonDeClick ? "boton-click" : "boton-reiniciar" }
        onClick={manejarClick}>
            {text}
        </button>
    );
}

export default Boton;