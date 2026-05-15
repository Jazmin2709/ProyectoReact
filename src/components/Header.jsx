import React from 'react';

export const Header = ({ title }) => {
  return (
    <header className="header">
      <h1 className="header-title">{title}</h1>
      <p className="header-subtitle">Descubre el talento de nuestros artistas favoritos</p>
    </header>
  );
};
