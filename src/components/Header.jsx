import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-4 px-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" className="uppercase text-white shadow-lg">
            Binaguy
          </Link>
        </div>

        {/* Menu - Desktop (should be visible on medium and large screens) */}
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/quienes-somos" className="hover:text-gray-300">Quiénes Somos</Link>
          <Link to="/contacto" className="hover:text-gray-300">Contacto</Link>
          <Link to="/usados" className="hover:text-gray-300">Usados</Link>
          <Link to="/nuevos" className="hover:text-gray-300">Nuevos</Link>
        </nav>

        {/* Mobile Menu Icon (should be visible on small screens only) */}
        <div className="md:hidden flex items-center" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </div>
      </div>

      {/* Mobile Menu (should appear when isMobileMenuOpen is true) */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <Link to="/" className="block py-2 text-white hover:text-gray-300">Home</Link>
          <Link to="/quienes-somos" className="block py-2 text-white hover:text-gray-300">Quiénes Somos</Link>
          <Link to="/contacto" className="block py-2 text-white hover:text-gray-300">Contacto</Link>
          <Link to="/usados" className="block py-2 text-white hover:text-gray-300">Usados</Link>
          <Link to="/nuevos" className="block py-2 text-white hover:text-gray-300">Nuevos</Link>
        </div>
      )}
    </header>
  );
};

export default Header;