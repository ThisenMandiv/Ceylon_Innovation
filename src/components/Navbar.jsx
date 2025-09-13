import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinkClass = ({ isActive }) =>
  `px-6 py-2 text-base font-medium transition-colors relative ${
    isActive
      ? 'text-blue-600'
      : 'text-gray-700 hover:text-blue-600'
  }`;

const mobileNavLinkClass = "block px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors rounded-lg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isDomainPage = location.pathname === '/domain';

  return (
    <header className={`${isDomainPage ? 'bg-gray-00' : 'bg-white'} shadow-sm rounded-full mx-2 sm:mx-4 mt-4 sm:mt-6 md:mt-8 relative z-50`}>
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 h-14 sm:h-15 md:h-16 flex items-center justify-between">
        {/* Logo - Responsive sizing */}
        <NavLink to="/" className="flex items-center flex-shrink-0">
          <img
            src="/assets/Colour_Logo.png"
            alt="Ceylon Innovation Logo"
            className="w-24 sm:w-28 md:w-32 h-auto"
          />
        </NavLink>

        {/* Desktop Nav - Hidden on mobile and tablet */}
        <nav className="hidden lg:flex items-center space-x-1">
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

        {/* Mobile Menu Button - Visible on mobile and tablet */}
        <button
          className="lg:hidden p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav - Responsive design */}
      {isOpen && (
        <>
          {/* Backdrop for mobile menu */}
          <div 
            className="lg:hidden fixed inset-0 bg-black bg-opacity-25 z-40 transition-opacity"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Mobile menu panel */}
          <nav className={`lg:hidden absolute top-full left-0 right-0 ${isDomainPage ? 'bg-gray-100' : 'bg-white'} border border-gray-100 rounded-2xl shadow-xl mx-2 sm:mx-4 mt-2 z-50`}>
            <div className="px-4 sm:px-6 py-4 space-y-2">
              <NavLink
                to="/"
                end
                className={({ isActive }) => `${mobileNavLinkClass} ${isActive ? 'text-blue-600 bg-blue-50' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/domain"
                className={({ isActive }) => `${mobileNavLinkClass} ${isActive ? 'text-blue-600 bg-blue-50' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                Domain
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => `${mobileNavLinkClass} ${isActive ? 'text-blue-600 bg-blue-50' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                About Us
              </NavLink>
              <NavLink
                to="/more"
                className={({ isActive }) => `${mobileNavLinkClass} ${isActive ? 'text-blue-600 bg-blue-50' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                More
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) => `${mobileNavLinkClass} ${isActive ? 'text-blue-600 bg-blue-50' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}