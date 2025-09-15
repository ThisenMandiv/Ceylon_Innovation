import { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

// Reusable class for navigation links
const navLinkClass = ({ isActive }) =>
  `px-5 py-2 text-base font-medium transition-colors relative ${
    isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
  }`;

// Reusable class for mobile navigation links
const mobileNavLinkClass =
  'block px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors rounded-lg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const location = useLocation();
  const isDomainPage = location.pathname === '/domain';

  // Create a ref to attach to the dropdown container
  const industriesDropdownRef = useRef(null);
  const moreDropdownRef = useRef(null);

  // Effect to handle clicks outside the dropdown to close it
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        industriesDropdownRef.current &&
        !industriesDropdownRef.current.contains(event.target)
      ) {
        setIsIndustriesOpen(false);
      }
      if (moreDropdownRef.current && !moreDropdownRef.current.contains(event.target)) {
        setIsMoreOpen(false);
      }
    }

    // Add event listener for mousedown
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Clean up the event listener on component unmount
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [industriesDropdownRef, moreDropdownRef]);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
    // When the mobile menu closes, also close the dropdown to prevent weird state issues
    if (isOpen) {
      setIsIndustriesOpen(false);
      setIsMoreOpen(false);
    }
  };
  
  const toggleIndustriesDropdown = (e) => {
    e.preventDefault(); // Prevent default link behavior if any
    setIsIndustriesOpen(!isIndustriesOpen);
  };

  const toggleMoreDropdown = (e) => {
    e.preventDefault();
    setIsMoreOpen(!isMoreOpen);
  };

  const handleProductsClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const section = document.getElementById('products');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Navigate to home with hash which will land at products
      window.location.href = '/#products';
    }
  };

  return (
    <header
      className={`${
        isDomainPage ? 'bg-gray-00' : 'bg-white/95 backdrop-blur'
      } shadow-sm rounded-full mx-2 sm:mx-4 mt-4 sm:mt-6 md:mt-8 relative z-50`}
    >
      <div className="max-w-5xl mx-auto px-3 sm:px-4 md:px-6 h-14 sm:h-15 md:h-16 flex items-center justify-between">
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

          {/* Products scroll link */}
          <a
            href="/#products"
            className={navLinkClass({ isActive: false })}
            onClick={handleProductsClick}
          >
            Product
          </a>

          {/* Dropdown - Industries */}
          <div className="relative" ref={industriesDropdownRef}>
            <button
              className="px-6 py-2 text-base font-medium text-gray-700 hover:text-blue-600 flex items-center space-x-1"
              onClick={toggleIndustriesDropdown}
            >
              <span>Industries</span>
              <ChevronDown size={16} className={`transform transition-transform ${isIndustriesOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown menu */}
            {isIndustriesOpen && (
              <div className="absolute left-0 mt-2 w-64 bg-white/90 backdrop-blur border border-gray-100 rounded-2xl shadow-lg z-50 p-2">
                <NavLink
                  to="/domain/healthcare"
                  className="block px-4 py-2 text-base text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                  onClick={() => setIsIndustriesOpen(false)}
                >
                  • Healthcare
                </NavLink>
                <NavLink
                  to="/domain/hospitality"
                  className="block px-4 py-2 text-base text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                  onClick={() => setIsIndustriesOpen(false)}
                >
                  • Hotels
                </NavLink>
              </div>
            )}
          </div>

          <NavLink to="/about" className={navLinkClass}>
            About Us
          </NavLink>

          {/* Dropdown - More */}
          <div className="relative" ref={moreDropdownRef}>
            <button
              className="px-6 py-2 text-base font-medium text-gray-700 hover:text-blue-600 flex items-center space-x-1"
              onClick={toggleMoreDropdown}
            >
              <span>More</span>
              <ChevronDown size={16} className={`transform transition-transform ${isMoreOpen ? 'rotate-180' : ''}`} />
            </button>
            {isMoreOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-white/90 backdrop-blur border border-gray-100 rounded-2xl shadow-lg z-50 p-2">
                <NavLink to="/more/careers" className="block px-4 py-2 text-base text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-lg" onClick={() => setIsMoreOpen(false)}>
                  Careers
                </NavLink>
                <NavLink to="/more/charity" className="block px-4 py-2 text-base text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-lg" onClick={() => setIsMoreOpen(false)}>
                  Charity
                </NavLink>
                <NavLink to="/more/partner" className="block px-4 py-2 text-base text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-lg" onClick={() => setIsMoreOpen(false)}>
                  Partner
                </NavLink>
              </div>
            )}
          </div>

          {/* Contact us button */}
          <NavLink to="/contact" className="ml-2 inline-flex items-center px-5 py-2 rounded-full text-white bg-gradient-to-r from-sky-400 to-blue-600 shadow ring-2 ring-blue-200 hover:brightness-105">
            Contact us
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

              {/* Products scroll */}
              <a
                href="/#products"
                className={mobileNavLinkClass}
                onClick={(e) => {
                  handleProductsClick(e);
                  toggleMobileMenu();
                }}
              >
                Product
              </a>

              {/* Mobile Dropdown */}
              <div ref={industriesDropdownRef}>
                <button
                  className="w-full flex justify-between items-center px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg"
                  onClick={toggleIndustriesDropdown}
                >
                  <span>Industries</span>
                  <ChevronDown
                    size={18}
                    className={`transform transition-transform ${
                      isIndustriesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isIndustriesOpen && (
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
                      Hotels
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
              {/* More dropdown - mobile */}
              <div ref={moreDropdownRef}>
                <button
                  className="w-full flex justify-between items-center px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg"
                  onClick={toggleMoreDropdown}
                >
                  <span>More</span>
                  <ChevronDown
                    size={18}
                    className={`transform transition-transform ${
                      isMoreOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isMoreOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    <NavLink to="/more/careers" className={mobileNavLinkClass} onClick={toggleMobileMenu}>
                      Careers
                    </NavLink>
                    <NavLink to="/more/charity" className={mobileNavLinkClass} onClick={toggleMobileMenu}>
                      Charity
                    </NavLink>
                    <NavLink to="/more/partner" className={mobileNavLinkClass} onClick={toggleMobileMenu}>
                      Partner
                    </NavLink>
                  </div>
                )}
              </div>
              <NavLink
                to="/contact"
                className="block text-center px-4 py-3 text-base font-medium text-white rounded-full bg-gradient-to-r from-sky-400 to-blue-600 shadow ring-2 ring-blue-200"
                onClick={toggleMobileMenu}
              >
                Contact us
              </NavLink>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
