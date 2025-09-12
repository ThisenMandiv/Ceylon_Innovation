import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinkClass = ({ isActive }) =>
  `px-6 py-2 text-base font-medium transition-colors relative ${
    isActive 
      ? 'text-blue-600' 
      : 'text-gray-700 hover:text-blue-600'
  }`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm rounded-full mx-4 mt-8 relative z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src="/assets/Colour_Logo.png"
            alt="Ceylon Innovation Logo"
            className="w-32 h-auto"
          />
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink to="/" end className={navLinkClass}>
            {({ isActive }) => (
              <span className={isActive ? 'border-b-2 border-blue-600 pb-1' : ''}>
                Home
              </span>
            )}
          </NavLink>
          <NavLink to="/domain" className={navLinkClass}>
            Domain
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About Us
          </NavLink>
          <NavLink to="/more" className={navLinkClass}>
            More
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-700 hover:text-blue-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-100 rounded-b-3xl shadow-lg">
          <div className="flex flex-col px-6 py-4 space-y-3">
            <NavLink 
              to="/" 
              end 
              className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors" 
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/domain" 
              className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors" 
              onClick={() => setIsOpen(false)}
            >
              Domain
            </NavLink>
            <NavLink 
              to="/about" 
              className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors" 
              onClick={() => setIsOpen(false)}
            >
              About Us
            </NavLink>
            <NavLink 
              to="/more" 
              className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors" 
              onClick={() => setIsOpen(false)}
            >
              More
            </NavLink>
            <NavLink 
              to="/contact" 
              className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors" 
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  );
}