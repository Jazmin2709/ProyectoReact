import React from 'react';
import { Header } from './components/Header';
import { ArtistList } from './components/ArtistList';
import { artists } from './data/artists';

function App() {
  return (
    <main className="app-container">
      <Header title="Galería de Artistas" />
      <ArtistList artists={artists} />
    </main>
  );
}

export default App;
