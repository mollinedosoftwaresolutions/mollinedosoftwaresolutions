"use client";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center
                 px-8 py-4 bg-[#0B0F19]/80 backdrop-blur-md border-b border-gray-800
                 shadow-md transition-all duration-300"
    >
      {/* === Brand === */}
      <div className="flex items-center space-x-2">
        <img
          src="../assets/logo.png"
          alt="Mollinedo Software Solutions Logo"
          className="w-10 h-10 rounded-full object-cover"
        />
        <h1 className="text-lg font-semibold tracking-wide text-gray-100">
          Mollinedo
          <span className="text-blue-400">Software</span>
          <span className="text-gray-300">Solutions</span>
        </h1>
      </div>


      {/* === Desktop Links === */}
      <ul className="hidden md:flex space-x-8 text-sm font-medium">
        <li>
          <a
            href="/"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#services"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
          >
            Contact
          </a>
        </li>
      </ul>


      {/* === Mobile Button === */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-blue-400 hover:text-blue-300 transition"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* === Dropdown Menu === */}
      {menuOpen && (
        <div
          className="absolute top-16 left-0 w-full bg-[#0B0F19]/95 backdrop-blur-md
                     border-t border-gray-700 py-6 md:hidden animate-fadeSlide"
        >
          <ul className="flex flex-col items-center space-y-4 text-gray-200 text-base">
            {["Home", "Services", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="px-6 py-2 rounded-full hover:bg-blue-600/20 hover:text-blue-300 transition-all duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
