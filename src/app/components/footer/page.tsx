import React from 'react';
import './footer.css'; // Importa el archivo de estilos

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.</p>
        <p>Desarrollado con ❤️ en Medellín.</p>
      </div>
    </footer>
  );
};

export default Footer;
