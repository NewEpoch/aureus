import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const dropdownRef = useRef(null);
  const languageDropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!languageDropdownOpen);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsSticky(offset > 0);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setDropdownOpen(false);
    }
    if (
      languageDropdownRef.current &&
      !languageDropdownRef.current.contains(event.target)
    ) {
      setLanguageDropdownOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className={`bg-white bg-opacity-70 shadow-md fixed w-full z-20 transition-all duration-300 ${isSticky ? 'top-0' : 'top-0'}`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex space-x-4">
          <a href="#" className="text-gray-700 hover:text-blue-500">Home</a>
          <div className="relative" ref={dropdownRef}>
            <button onClick={toggleDropdown} className="text-gray-700 hover:text-blue-500 focus:outline-none">
              Products
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Product 1</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Product 2</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Product 3</a>
              </div>
            )}
          </div>
          <a href="#" className="text-gray-700 hover:text-blue-500">About</a>
        </div>

        {/* Language Dropdown */}
        <div className="relative" ref={languageDropdownRef}>
          <button onClick={toggleLanguageDropdown} className="text-gray-700 hover:text-blue-500 focus:outline-none">
            Languages
          </button>
          {languageDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">German</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Polish</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">English</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
