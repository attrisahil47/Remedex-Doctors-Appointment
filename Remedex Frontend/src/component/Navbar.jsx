import { useState, useEffect } from 'react';
import { NavLink } from 'react-router';
import { Menu, X } from 'lucide-react';
import logo1 from '../assets/logo1.jpg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Update `isMobile` on screen resize
  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth < 768;
      setIsMobile(isNowMobile);
      if (!isNowMobile) {
        setMenuOpen(false); // Hide menu on resize to large screen
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { path: '/home', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/remedies', label: 'Remedies' },
    { path: '/finddoc', label: 'Find a Doctor' },
    { path: '/feedback', label: 'Feedback' },
    { path: '/contact', label: 'Contact Us' },
    { path: '/login', label: 'Login / Sign Up' },
  ];

  return (
    <nav className="bg-[#4c5d79] sticky top-0 z-50 px-5 py-2.5">
      {/* Main Navbar (Logo & Title) */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <NavLink to="/home">
            <img src={logo1} alt="Logo" className="h-16 w-16 object-contain rounded-full" />
          </NavLink>
          <NavLink to="/home">
            <span id="sp1" className="text-lg sm:text-2xl font-bold text-white ml-2">
              Remedex
            </span>
          </NavLink>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="desktop-menu hidden md:flex space-x-8 list-none">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `text-white text-[18px] transition-all hover:bg-white hover:text-black hover:px-4 hover:py-2 rounded ${isActive ? 'font-bold underline' : ''
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && isMobile && (
        <ul className="md:hidden flex flex-col bg-[#4c5d79] w-full mt-2 py-2 px-4 space-y-2">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="block text-white text-base px-4 py-2 rounded hover:bg-white hover:text-black transition-all"
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}


    </nav>
  );
};

export default Navbar;
