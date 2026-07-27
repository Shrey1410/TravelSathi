import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center text-lg font-bold">
            T
          </div>

          <h1 className="text-2xl font-bold text-gray-900">
            Travel<span className="text-blue-600">Sathi</span>
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <a href="#" className="hover:text-blue-600 transition-colors duration-200">
            Home
          </a>
          <a href="#" className="hover:text-blue-600 transition-colors duration-200">
            Destinations
          </a>
          <a href="#" className="hover:text-blue-600 transition-colors duration-200">
            Features
          </a>
          <a href="#" className="hover:text-blue-600 transition-colors duration-200">
            Contact
          </a>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
            Login
          </button>

          <button className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition shadow-md">
            Get Started
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;