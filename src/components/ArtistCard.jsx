import React, { useRef, useEffect } from 'react';

export const ArtistCard = (props) => {
  const { nombre, profesion, color, audio, isFlipped, onToggle } = props;
  const imagenUrl = props.imagen;
  const descripcionTexto = props.descripcion;

  const audioRef = useRef(null);

  useEffect(() => {
    if (isFlipped) {
      if (audioRef.current) {
        audioRef.current.volume = 0.15;
        audioRef.current.play().catch(error => {
          console.error("Error al intentar reproducir el audio del artista:", error);
        });
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  }, [isFlipped]); 

  return (
    <article className={`artist-card-container ${isFlipped ? 'flipped' : ''}`} style={{ '--accent-color': color }}>
      {audio && <audio ref={audioRef} src={audio} loop preload="auto" />}

      <div className="artist-card-inner">
        <div className="artist-card-front">
          <div className="card-image-wrapper">
            <img 
              src={imagenUrl} 
              alt={`Retrato de ${nombre}`} 
              className="card-image" 
            />
            <div className="card-overlay">
              <span className="card-profession">{profesion}</span>
            </div>
          </div>
          <div className="card-content">
            <h2 className="card-name">{nombre}</h2>
            <button className="card-button" style={{ backgroundColor: color }} onClick={onToggle}>
              Ver Canción
            </button>
          </div>
        </div>

        <div className="artist-card-back">
          <div className="card-back-content">
            <h2 className="card-name-back">{nombre}</h2>
            <p className="card-profession-back" style={{ color: color }}>{profesion}</p>
            <div className="card-divider" style={{ backgroundColor: color }}></div>
            <p className="card-description-back">{descripcionTexto}</p>
            <button className="card-button back-button" style={{ backgroundColor: color }} onClick={onToggle}>
              Volver a la imagen
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
