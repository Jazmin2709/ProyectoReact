import React from 'react';
// Importamos los componentes hijos que vamos a utilizar
import { Header } from './components/Header';
import { ArtistList } from './components/ArtistList';
// Importamos nuestros datos de prueba (el array de artistas)
import { artists } from './data/artists';

// App es el componente principal o "padre" de nuestra aplicación
function App() {
  return (
    <main className="app-container">
      {/* 
        Flujo unidireccional (de padre a hijo):
        Pasamos la información (props) desde App hacia abajo.
        A 'Header' le pasamos el prop 'title' con un string.
      */}
      <Header title="Galería de Artistas" />
      
      {/* 
        A 'ArtistList' le pasamos el prop 'artists' que contiene 
        nuestro array de objetos de artistas importado arriba.
      */}
      <ArtistList artists={artists} />
    </main>
  );
}

export default App;
