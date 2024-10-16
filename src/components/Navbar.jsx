import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!languageDropdownOpen);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsSticky(offset > 0); // Sayfa kaydırıldığında isSticky durumunu güncelle
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`bg-white bg-opacity-70 shadow-md fixed w-full z-20 transition-all duration-300 ${isSticky ? 'top-0' : 'top-0'}`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex space-x-4">
          <a href="#" className="text-gray-700 hover:text-blue-500">Home</a>
          <div className="relative">
            <button onClick={toggleDropdown} className="text-gray-700 hover:text-blue-500 focus:outline-none">
              Ürünler
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Ürün 1</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Ürün 2</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Ürün 3</a>
              </div>
            )}
          </div>
          <a href="#" className="text-gray-700 hover:text-blue-500">Hakkımızda</a>
        </div>

        {/* Dil Seçeneği */}
        <div className="relative">
          <button onClick={toggleLanguageDropdown} className="text-gray-700 hover:text-blue-500 focus:outline-none">
            Diller
          </button>
          {languageDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Almanca</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Polonyaca</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">İspanyolca</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;