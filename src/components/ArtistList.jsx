import React, { useState } from 'react';
import { ArtistCard } from './ArtistCard';

export const ArtistList = ({ artists }) => {
  const [activeCardId, setActiveCardId] = useState(null);

  const handleToggle = (id) => {
    setActiveCardId(activeCardId === id ? null : id);
  };

  return (
    <section className="artist-grid">
      {artists.map((artist) => (
        <ArtistCard 
          key={artist.id}
          nombre={artist.nombre}
          profesion={artist.profesion}
          imagen={artist.imagen}
          descripcion={artist.descripcion}
          color={artist.color}
          audio={artist.audio}
          isFlipped={activeCardId === artist.id}
          onToggle={() => handleToggle(artist.id)}
        />
      ))}
    </section>
  );
};
