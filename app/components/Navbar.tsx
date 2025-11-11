"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleScroll = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // close mobile menu after clicking
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <button
          onClick={() => handleScroll("#hero")}
          className="text-2xl font-bold text-gray-800 focus:outline-none cursor-pointer"
        >
          Mayuresh Devadkar<span className="text-blue-600">.</span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <button
            onClick={() => handleScroll("#hero")}
            className="hover:text-blue-600 transition cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => handleScroll("#about")}
            className="hover:text-blue-600 transition cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => handleScroll("#services")}
            className="hover:text-blue-600 transition cursor-pointer"
          >
            Services
          </button>
          <button
            onClick={() => handleScroll("#projects")}
            className="hover:text-blue-600 transition cursor-pointer"
          >
            Projects
          </button>
          <button
            onClick={() => handleScroll("#contact")}
            className="hover:text-blue-600 transition cursor-pointer"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-800 cursor-pointer"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-white border-t text-center space-y-4 py-4">
          <button
            onClick={() => handleScroll("#hero")}
            className="block w-full hover:text-blue-600 transition cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => handleScroll("#about")}
            className="block w-full hover:text-blue-600 transition cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => handleScroll("#services")}
            className="block w-full hover:text-blue-600 transition cursor-pointer"
          >
            Services
          </button>
          <button
            onClick={() => handleScroll("#projects")}
            className="block w-full hover:text-blue-600 transition cursor-pointer"
          >
            Projects
          </button>
          <button
            onClick={() => handleScroll("#contact")}
            className="block w-full hover:text-blue-600 transition cursor-pointer"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}
