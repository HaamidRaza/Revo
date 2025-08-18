import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // icon library (you can replace with Heroicons if you prefer)

const Header = ({ currentPage, setCurrentPage }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const pages = ["home", "about", "prototype", "contact"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-purple-200 bg-opacity-90 backdrop-blur-md shadow-md z-60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a
              href="#"
              className="flex-shrink-0 text-5xl font-bold text-gray-900 font-[Allura]"
              onClick={() => setCurrentPage("home")}
            >
              Revo
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 font-sans">
              {pages.map((page) => (
                <a
                  key={page}
                  href="#"
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    currentPage === page
                      ? "text-purple-600 font-bold bg-purple-200 border-1"
                      : "text-gray-700 hover:bg-purple-300"
                  }`}
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-purple-300 focus:outline-none"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-purple-100 px-2 pt-2 pb-3 space-y-1 font-sans">
          {pages.map((page) => (
            <a
              key={page}
              href="#"
              onClick={() => {
                setCurrentPage(page);
                setMenuOpen(false);
              }}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                currentPage === page
                  ? "text-purple-600 font-bold bg-purple-200"
                  : "text-gray-700 hover:bg-purple-300"
              }`}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;
