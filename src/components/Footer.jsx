import React from 'react';
import { Link } from 'react-router-dom'; // Agrega esta línea

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-4 px-6">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Logo pequeño a la derecha */}
        {/* <div className="flex items-center justify-end space-x-2">
          <span className="text-xs">Binaguy</span>
        </div> */}

        {/* Menu más pequeño alineado a la izquierda */}
        <div className="flex space-x-4 text-xs mt-4 md:mt-0">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/quienes-somos" className="hover:text-gray-300">Quiénes Somos</Link>
          <Link to="/contacto" className="hover:text-gray-300">Contacto</Link>
          <Link to="/usados" className="hover:text-gray-300">Usados</Link>
          <Link to="/nuevos" className="hover:text-gray-300">Nuevos</Link>
        </div>

        {/* Copyright en una segunda línea con fuente muy pequeña */}
        <div className="w-full text-center mt-2">
          <p className="text-xs">© 2025 Concesionaria Binaguy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;