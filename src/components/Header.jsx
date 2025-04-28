import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({limpiarFiltros}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
 
   const handleHomeClick = () => {
     limpiarFiltros();  // Reseteamos los filtros al hacer clic en Home
     navigate("/");  // Navegamos a la página principal
   };

  return (
    <header className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-4 px-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
        <Link to="/" onClick={handleHomeClick} className="uppercase text-white no-underline hover:text-gray-300">
            BNGY
          </Link>
        </div>

        {/* Menu - Desktop */}
        <nav className="hidden md:flex space-x-6">
        <Link to="/" onClick={handleHomeClick} className="text-white hover:text-gray-300">Catálogo de autos</Link>
          <Link to="/nuevos" className="text-white hover:text-gray-300">0km</Link>
          <Link to="/quienes-somos" className="text-white hover:text-gray-300">Quiénes Somos</Link>
          <Link to="/contacto" className="text-white hover:text-gray-300">Contacto</Link>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <Link to="/" className="block text-white hover:text-gray-300">Catálogo de autos</Link>
          <Link to="/nuevos" className="block text-white hover:text-gray-300">0km</Link>
          <Link to="/quienes-somos" className="block text-white hover:text-gray-300">Quiénes Somos</Link>
          <Link to="/contacto" className="block text-white hover:text-gray-300">Contacto</Link>
        </div>
      )}
    </header>
  );
};

export default Header;

