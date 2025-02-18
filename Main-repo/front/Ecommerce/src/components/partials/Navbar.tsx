import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// @ts-ignore
import logo from '../../assets/logo.png';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isLogoZoomed, setIsLogoZoomed] = useState(false);

  const handleLogoClick = () => {
    setIsLogoZoomed(!isLogoZoomed);
  };

  const logoClasses = `h-12 w-12 transition-all duration-500 transform ${
    isLogoZoomed ? 'scale-150' : ''
  }`;

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-white" onClick={handleLogoClick}>
                <img className={logoClasses} src={logo} alt="Logo" />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline">
                <Link
                  to="/"
                  className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900"
                >
                  Home
                </Link>
                <Link
                  to="/register"
                  className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700 hover:text-white"
                >
                  Register
                </Link>
                <Link
                  to="/login"
                  className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700 hover:text-white"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
          <div className="md:flex md:items-center md:justify-end md:flex-1 lg:w-0">
            <div className="relative flex items-center flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M21 21l-4.35-4.35M14.5 10A4.5 4.5 0 119 10a4.5 4.5 0 015 0zM8 10a2 2 0 100-4 2 2 0 000 4z"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                className="block w-full py-2 pl-10 pr-3 leading-5 rounded-md border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Search"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Search
            </button>
          </div>
          <div className="flex items-center ml-4">
            <Link to="/cart" className="text-white">
              <FaShoppingCart className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );

};

export default Navbar;
