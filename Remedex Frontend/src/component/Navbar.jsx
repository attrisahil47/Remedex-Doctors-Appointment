
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router";
import { Menu, X } from "lucide-react";
import { useAuth } from "../AuthContext";  // use the auth context
import logo1 from "../assets/logo1.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    
    const handleResize = () => {
      const isNowMobile = window.innerWidth < 768;
      setIsMobile(isNowMobile);
      if (!isNowMobile) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Links for logged out users
  const publicLinks = [
    { path: "/home", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/login", label: "Login / Sign Up" },
  ];

  // Links for logged in users
  const privateLinks = [
    { path: "/home", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/remedies", label: "Remedies" },
    { path: "/finddoc", label: "Find a Doctor" },
    { path: "/feedback", label: "Feedback" },
    { path: "/contact", label: "Contact Us" },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-[#4c5d79] sticky top-0 z-50 px-5 py-2.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <NavLink to="/home">
            <img
              src={logo1}
              alt="Logo"
              className="h-16 w-16 object-contain rounded-full"
            />
          </NavLink>
          <NavLink to="/home">
            <span
              id="sp1"
              className="text-lg sm:text-2xl font-bold text-white ml-2"
            >
              Remedex
            </span>
          </NavLink>
        </div>

        {/* Desktop menu */}
        <ul className="desktop-menu hidden md:flex space-x-8 list-none">
          {(user ? privateLinks : publicLinks).map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `text-white text-[18px] transition-all hover:bg-white hover:text-black hover:px-4 hover:py-2 rounded ${
                    isActive ? "font-bold underline" : ""
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}

          {user && (
            <li>
              <button
                onClick={handleLogout}
                className="text-white text-[18px] px-4 py-2 rounded hover:bg-white hover:text-black transition-all"
              >
                Logout
              </button>
            </li>
          )}
        </ul>

        {/* Mobile menu toggle */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        )}
      </div>

      {/* Mobile menu */}
      {menuOpen && isMobile && (
        <ul className="md:hidden flex flex-col bg-[#4c5d79] w-full mt-2 py-2 px-4 space-y-2">
          {(user ? privateLinks : publicLinks).map((link, index) => (
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
          {user && (
            <li>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  handleLogout();
                }}
                className="block text-white text-base px-4 py-2 rounded hover:bg-white hover:text-black transition-all"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
