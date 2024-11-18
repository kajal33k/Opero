import React, { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        <a href="#home" className="text-3xl font-bold hover:text-gray-400 transition duration-300 ease-in-out" aria-label="Go to homepage">
      Opero
        </a>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden items-center cursor-pointer" onClick={toggleMenu} aria-label="Toggle menu">
          <span className="block w-6 h-1 bg-white my-1 transition-all duration-300 ease-in-out"></span>
          <span className="block w-6 h-1 bg-white my-1 transition-all duration-300 ease-in-out"></span>
          <span className="block w-6 h-1 bg-white my-1 transition-all duration-300 ease-in-out"></span>
        </div>

        {/* Desktop Menu */}
        <ul className={`lg:flex space-x-8 hidden items-center text-lg font-medium`}>
          <li>
            <a href="#home" className="hover:text-gray-400 transition duration-300 ease-in-out" aria-label="Go to home">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-400 transition duration-300 ease-in-out" aria-label="Go to about section">About</a>
          </li>
          <li>
            <a href="#services" className="hover:text-gray-400 transition duration-300 ease-in-out" aria-label="Go to services section">Services</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400 transition duration-300 ease-in-out" aria-label="Go to contact section">Contact</a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <ul className="space-y-4 p-4 bg-gray-800">
          <li>
            <a href="#home" className="text-lg font-medium hover:text-gray-400 transition duration-300 ease-in-out" aria-label="Go to home">Home</a>
          </li>
          <li>
            <a href="#about" className="text-lg font-medium hover:text-gray-400 transition duration-300 ease-in-out" aria-label="Go to about section">About</a>
          </li>
          <li>
            <a href="#services" className="text-lg font-medium hover:text-gray-400 transition duration-300 ease-in-out" aria-label="Go to services section">Services</a>
          </li>
          <li>
            <a href="#contact" className="text-lg font-medium hover:text-gray-400 transition duration-300 ease-in-out" aria-label="Go to contact section">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
