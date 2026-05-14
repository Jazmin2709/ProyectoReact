import React, { useState } from 'react'; // Importamos useState para manejar el estado interno

// Componente Funcional 'ArtistCard'
export const ArtistCard = (props) => {
  
  // -- NUEVO CONCEPTO: ESTADO (State) --
  // Usamos el Hook 'useState' de React para recordar si la tarjeta está volteada (true) o no (false).
  // 'isFlipped' es nuestra variable, y 'setIsFlipped' es la función que usamos para actualizarla.
  const [isFlipped, setIsFlipped] = useState(false);

  // Función que se ejecuta al hacer clic en los botones.
  // Invierte el valor actual de isFlipped (si era true pasa a false, y viceversa).
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // FORMA 1: Accediendo mediante "Desestructuración"
  const { nombre, profesion, color } = props;
  
  // FORMA 2: Acceso normal o clásico a los props
  const imagenUrl = props.imagen;
  const descripcionTexto = props.descripcion;

  return (
    // Contenedor principal. 
    // Si isFlipped es true, le añadimos dinámicamente la clase 'flipped' para activar la animación 3D.
    // Usamos el prop 'color' de forma dinámica para establecer variables CSS
    <article className={`artist-card-container ${isFlipped ? 'flipped' : ''}`} style={{ '--accent-color': color }}>
      
      {/* Esta es la capa interior que realmente gira en 3D */}
      <div className="artist-card-inner">
        
        {/* === CARA FRONTAL === */}
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
            {/* Al hacer clic (onClick), llamamos a nuestra función handleFlip */}
            <button className="card-button" style={{ backgroundColor: color }} onClick={handleFlip}>
              Ver perfil
            </button>
          </div>
        </div>

        {/* === CARA TRASERA === */}
        <div className="artist-card-back">
          <div className="card-back-content">
            <h2 className="card-name-back">{nombre}</h2>
            <p className="card-profession-back" style={{ color: color }}>{profesion}</p>
            
            {/* Línea decorativa del color del artista */}
            <div className="card-divider" style={{ backgroundColor: color }}></div>
            
            {/* Aquí mostramos la descripción detallada del artista */}
            <p className="card-description-back">{descripcionTexto}</p>
            
            {/* Botón para regresar a la cara frontal */}
            <button className="card-button back-button" style={{ backgroundColor: color }} onClick={handleFlip}>
              Volver a la imagen
            </button>
          </div>
        </div>

      </div>
    </article>
  );
};
