import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeLinkClasses =
    "text-teal-600 border-b-2 border-teal-600 font-semibold";
  const inactiveLinkClasses =
    "text-gray-700 hover:text-teal-500 transition-colors duration-300";

  const navLinkStyles = ({ isActive }) =>
    isActive ? activeLinkClasses : inactiveLinkClasses;

  return (
    <nav className="bg-white shadow sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3 text-3xl font-extrabold text-teal-600 select-none cursor-default">
            <img
              src="/download-removebg-preview.png"
              alt="MyRecipes Logo"
              className="w-12 h-12 object-contain"
            />
            <span>MyRecipes</span>
          </div>

          <div className="hidden md:flex gap-8 text-base sm:text-lg font-medium tracking-wide">
            <NavLink className={navLinkStyles} to="/">
              Home
            </NavLink>
            <NavLink className={navLinkStyles} to="/Recipes">
              Recipes
            </NavLink>
            <NavLink className={navLinkStyles} to="/Recipes-Create">
              Create
            </NavLink>
            <NavLink className={navLinkStyles} to="/about">
              About
            </NavLink>

            {/* Styled Favorites Link */}
            <NavLink
              className={({ isActive }) =>
                `flex items-center gap-1 px-3 py-1 rounded-full transition-all duration-300 ${isActive
                  ? "bg-teal-100 text-teal-700 font-semibold border border-teal-300"
                  : "text-gray-700 hover:text-teal-500 hover:bg-teal-50"
                }`
              }
              to="/favorite"
            >
              <span className="text-red-500">❤️</span> Favorites
            </NavLink>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="text-gray-800 hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 rounded"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-6 flex flex-col gap-5 text-base font-semibold border-t border-gray-200">
          <NavLink
            onClick={() => setIsOpen(false)}
            className={navLinkStyles}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(false)}
            className={navLinkStyles}
            to="/Recipes"
          >
            Recipes
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(false)}
            className={navLinkStyles}
            to="/Recipes-Create"
          >
            Create
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(false)}
            className={navLinkStyles}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(false)}
            to="/favorite"
            className={({ isActive }) =>
              `flex items-center gap-1 transition-all duration-300 ${isActive
                ? "text-teal-700 font-semibold"
                : "text-gray-700 hover:text-teal-500"
              }`
            }
          >
            <span className="text-red-500">❤️</span> Favorites
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
