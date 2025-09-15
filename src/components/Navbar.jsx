import { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

// Reusable class for navigation links
const navLinkClass = ({ isActive }) =>
  `px-6 py-2 text-base font-medium transition-colors relative ${
    isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
  }`;

// Reusable class for mobile navigation links
const mobileNavLinkClass =
  'block px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors rounded-lg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDomainOpen, setIsDomainOpen] = useState(false);
  const location = useLocation();
  const isDomainPage = location.pathname === '/domain';

  // Create a ref to attach to the dropdown container
  const dropdownRef = useRef(null);

  // Effect to handle clicks outside the dropdown to close it
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDomainOpen(false);
      }
    }

    // Add event listener for mousedown
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Clean up the event listener on component unmount
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
    // When the mobile menu closes, also close the dropdown to prevent weird state issues
    if (isOpen) {
      setIsDomainOpen(false);
    }
  };
  
  const toggleDomainDropdown = (e) => {
    e.preventDefault(); // Prevent default link behavior if any
    setIsDomainOpen(!isDomainOpen);
  };

  return (
    <header
      className={`${
        isDomainPage ? 'bg-gray-00' : 'bg-white'
      } shadow-sm rounded-full mx-2 sm:mx-4 mt-4 sm:mt-6 md:mt-8 relative z-50`}
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 h-14 sm:h-15 md:h-16 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center flex-shrink-0">
          <img
            src="/assets/Colour_Logo.png"
            alt="Ceylon Innovation Logo"
            className="w-24 sm:w-28 md:w-32 h-auto"
          />
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-1 relative">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>

          {/* Dropdown - Domain */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="px-6 py-2 text-base font-medium text-gray-700 hover:text-blue-600 flex items-center space-x-1"
              onClick={toggleDomainDropdown}
            >
              <span>Domain</span>
              <ChevronDown size={16} className={`transform transition-transform ${isDomainOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown menu */}
            {isDomainOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-100 rounded-lg shadow-lg z-50">
                <NavLink
                  to="/domain/healthcare"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  onClick={() => setIsDomainOpen(false)}
                >
                  Healthcare
                </NavLink>
                <NavLink
                  to="/domain/hospitality"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  onClick={() => setIsDomainOpen(false)}
                >
                  Hospitality
                </NavLink>
                <NavLink
                  to="/domain/education"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  onClick={() => setIsDomainOpen(false)}
                >
                  Education
                </NavLink>
                <NavLink
                  to="/domain/retail"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  onClick={() => setIsDomainOpen(false)}
                >
                  Retail
                </NavLink>
              </div>
            )}
          </div>

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
          className="lg:hidden p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="lg:hidden fixed inset-0 bg-black bg-opacity-25 z-40 transition-opacity"
            onClick={toggleMobileMenu}
          />

          {/* Panel */}
          <nav
            className={`lg:hidden absolute top-full left-0 right-0 ${
              isDomainPage ? 'bg-gray-100' : 'bg-white'
            } border border-gray-100 rounded-2xl shadow-xl mx-2 sm:mx-4 mt-2 z-50`}
          >
            <div className="px-4 sm:px-6 py-4 space-y-2">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `${mobileNavLinkClass} ${
                    isActive ? 'text-blue-600 bg-blue-50' : ''
                  }`
                }
                onClick={toggleMobileMenu}
              >
                Home
              </NavLink>

              {/* Mobile Dropdown */}
              <div ref={dropdownRef}>
                <button
                  className="w-full flex justify-between items-center px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg"
                  onClick={toggleDomainDropdown}
                >
                  <span>Domain</span>
                  <ChevronDown
                    size={18}
                    className={`transform transition-transform ${
                      isDomainOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isDomainOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    <NavLink
                      to="/domain/healthcare"
                      className={mobileNavLinkClass}
                      onClick={toggleMobileMenu}
                    >
                      Healthcare
                    </NavLink>
                    <NavLink
                      to="/domain/hospitality"
                      className={mobileNavLinkClass}
                      onClick={toggleMobileMenu}
                    >
                      Hospitality
                    </NavLink>
                    <NavLink
                      to="/domain/education"
                      className={mobileNavLinkClass}
                      onClick={toggleMobileMenu}
                    >
                      Education
                    </NavLink>
                    <NavLink
                      to="/domain/retail"
                      className={mobileNavLinkClass}
                      onClick={toggleMobileMenu}
                    >
                      Retail
                    </NavLink>
                  </div>
                )}
              </div>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${mobileNavLinkClass} ${
                    isActive ? 'text-blue-600 bg-blue-50' : ''
                  }`
                }
                onClick={toggleMobileMenu}
              >
                About Us
              </NavLink>
              <NavLink
                to="/more"
                className={({ isActive }) =>
                  `${mobileNavLinkClass} ${
                    isActive ? 'text-blue-600 bg-blue-50' : ''
                  }`
                }
                onClick={toggleMobileMenu}
              >
                More
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${mobileNavLinkClass} ${
                    isActive ? 'text-blue-600 bg-blue-50' : ''
                  }`
                }
                onClick={toggleMobileMenu}
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
