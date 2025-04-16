
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Analysis', path: '/analysis' },
  { name: 'Resources', path: '/resources' },
  { name: 'Contact', path: '/contact' }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path: string) => {
    setCurrentPath(path);
    setIsMenuOpen(false);
  };

  return (
    <nav className="glass-effect fixed w-full z-50 px-4 sm:px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2" onClick={() => handleNavigation('/')}>
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M19.28 9.08s1.75-1.38 2.57-2.2a2.64 2.64 0 0 0 .36-3.25 2.64 2.64 0 0 0-3.25-.36c-.82.82-2.2 2.57-2.2 2.57" />
              <path d="M7.44 22a3.29 3.29 0 0 1-2.29-4.67L6.7 13.8a2 2 0 0 1 2.69-.76 2 2 0 0 1 .76 2.69l-1.55 3.55a3.29 3.29 0 0 1-1.16 2.72Z" />
              <path d="M13.56 18.92c.98.98 2.2 1.16 3.27.54l3.57-2.08a2 2 0 0 0 .65-2.74 2 2 0 0 0-2.74-.66l-3.57 2.08c-1.07.62-2.17 1.88-1.18 2.86Z" />
              <path d="M15.9 13.24c1.41-.03 2.56-.7 3.2-1.82l2.15-3.71a2 2 0 0 0-.74-2.72 2 2 0 0 0-2.72.73l-2.15 3.72c-.64 1.12-.67 2.59-.06 3.18.17.17.38.29.61.34.1.03.2.04.32.04.13 0 .26-.02.39-.05Z" />
              <path d="M8.1 10.65c.98.98 2.41 1.08 3.26.11.13-.15.24-.31.32-.47 1.32-2.3.1-5.21-2.8-6.07-2.9-.86-5.39.74-4.96 3.66l.55 3.82c.09.64.73 1.12 1.38 1.03.65-.09 1.13-.74 1.03-1.39l-.54-3.77c-.13-.98.36-1.28.8-1.4.44-.11 1.09.09 1.31 1.11.32 1.45-.09 3.28-.94 3.82-.21.14-.83.43-1.31-.05-.37-.38-1.01-.39-1.39-.02-.4.38-.42 1.03-.03 1.42.67.69.67.69 2.32-.8Z" />
            </svg>
          </div>
          <span className="font-montserrat font-semibold text-xl sm:text-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
            DogEmote AI
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link ${link.path === currentPath ? 'active-nav-link' : ''}`}
              onClick={() => handleNavigation(link.path)}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 hover:text-purple-600">
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-effect">
          <div className="flex flex-col space-y-2 px-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-montserrat text-lg py-2 ${
                  link.path === currentPath ? 'text-purple-600' : 'text-gray-700'
                }`}
                onClick={() => handleNavigation(link.path)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
