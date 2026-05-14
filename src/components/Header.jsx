import React from 'react';

// Componente Funcional 'Header'. 
// Recibe los 'props' y extraemos 'title' directamente en los parámetros (desestructuración)
export const Header = ({ title }) => {
  return (
    <header className="header">
      {/* Usamos la variable 'title' que recibimos del padre (App.jsx) */}
      <h1 className="header-title">{title}</h1>
      <p className="header-subtitle">Descubre el talento que inspira al mundo</p>
    </header>
  );
};
