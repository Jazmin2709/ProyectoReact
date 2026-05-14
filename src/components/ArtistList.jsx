import React from 'react';
import { ArtistCard } from './ArtistCard';

// Componente Funcional 'ArtistList'.
// Recibe la prop 'artists' que es el array enviado desde el componente padre (App.jsx)
export const ArtistList = ({ artists }) => {
  return (
    <section className="artist-grid">
      {/* 
        Usamos el método .map() para iterar sobre el array 'artists'.
        Por cada objeto en el array, retornamos un componente 'ArtistCard'.
      */}
      {artists.map((artist) => (
        <ArtistCard 
          // La prop 'key' es obligatoria en React cuando mapeamos listas 
          // para ayudar a identificar de forma única cada elemento en el DOM.
          key={artist.id}
          // Pasamos cada propiedad del artista como un prop individual hacia ArtistCard
          nombre={artist.nombre}
          profesion={artist.profesion}
          imagen={artist.imagen}
          descripcion={artist.descripcion}
          color={artist.color}
        />
      ))}
    </section>
  );
};
