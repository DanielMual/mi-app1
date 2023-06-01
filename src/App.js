import React from 'react';
import Perfiles from './Componentes/Perfiles';
import './App.css';

// Importa todas las imágenes de la carpeta "./img"
const importarTodasLasFotos = (requireContext) => {
  return requireContext.keys().map(requireContext);
};

const imagenes = importarTodasLasFotos(require.context('./img', false, /.(png|jpe?g|svg)$/));

function App() {
  return (
    <div className="App">
      {imagenes.map((imagen, index) => (
        <Perfiles key={index} foto={imagen} nombre={`Persona ${index + 1}`} ocupacion="Ocupación" talentos="Talentos" />
      ))}
    </div>
  );
}

export default App;
