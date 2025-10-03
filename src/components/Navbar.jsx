import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="flex items-center justify-between px-6 py-4 md:px-20">
        <div className="text-xl font-bold text-indigo-600">IELTS</div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li><a href="#features" className="hover:text-indigo-600">Features</a></li>
          <li><a href="#testimonials" className="hover:text-indigo-600">Reviews</a></li>
          <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
        </ul>
        <button className="ml-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
          Join Now
        </button>

        {/* Hamburger Button */}
        <div className="md:hidden flex items-center ml-2">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6 text-indigo-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 bg-white shadow-md">
          <a href="#features" className="block py-2 hover:text-indigo-600">Features</a>
          <a href="#testimonials" className="block py-2 hover:text-indigo-600">Reviews</a>
          <a href="#contact" className="block py-2 hover:text-indigo-600">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
