
import { Heart, Mail, Instagram, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-50 to-blue-50 pt-16 pb-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-montserrat font-bold text-xl mb-4 text-gray-800">DogEmote AI</h3>
            <p className="text-gray-600 mb-4">
              Understanding your dog's heart through AI-powered emotion and health insights.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-purple-600 hover:text-purple-800 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-purple-600 hover:text-purple-800 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-purple-600 hover:text-purple-800 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-montserrat font-bold text-xl mb-4 text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-purple-600 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-purple-600 transition-colors">About</Link>
              </li>
              <li>
                <Link to="/analysis" className="text-gray-600 hover:text-purple-600 transition-colors">Analysis</Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-600 hover:text-purple-600 transition-colors">Resources</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-purple-600 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-montserrat font-bold text-xl mb-4 text-gray-800">Contact Us</h3>
            <div className="flex items-center space-x-2 text-gray-600 mb-2">
              <Mail className="h-5 w-5 text-purple-600" />
              <span>hello@dogemote.ai</span>
            </div>
            <p className="text-gray-600">
              Have questions or suggestions?<br />
              We'd love to hear from you!
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-600 flex items-center justify-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1 animate-pulse" /> for our furry friends. 
            <span className="ml-1">🐾</span>
          </p>
          <p className="text-gray-500 text-sm mt-2">© {new Date().getFullYear()} DogEmote AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
