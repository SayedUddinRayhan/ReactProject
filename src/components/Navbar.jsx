import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Common link classes
  const baseLinkClasses =
    "block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200";

  return (
    <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <NavLink
            to="/"
            className="text-xl font-bold text-blue-600 hover:text-blue-700"
          >
            ReactHooks
          </NavLink>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${baseLinkClasses} ${
                  isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/api"
              className={({ isActive }) =>
                `${baseLinkClasses} ${
                  isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              API
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-3 space-y-2">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `${baseLinkClasses} ${
                  isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/api"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `${baseLinkClasses} ${
                  isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              API
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
