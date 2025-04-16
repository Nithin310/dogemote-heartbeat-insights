
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Paw } from 'lucide-react';

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
            <Paw className="h-5 w-5 text-white" />
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
