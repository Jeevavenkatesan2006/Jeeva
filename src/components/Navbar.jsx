import React, { useState } from "react";
import { FaPhone, FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMenu = () => setMobileMenuOpen(false);
  



  const menuItems = [
    "Home 🏡",
    "About us",
    "Our Services",
    "Portfolio",
    "Pricing",
    "Shop",
    "Contact us 📞",
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top Contact Info */}
      <div className="bg-gray-100 text-gray-900 text-sm font-semibold py-2 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <FaLocationDot className="text-purple-600" />
          <span>Chennai</span>
        </div>
        <div className="flex items-center space-x-4">
          <FaPhone className="text-green-600" />
          <span>Contact me: +91 96262 66254</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-black text-gray-50 px-6 py-4 shadow-md">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            data-cursor-hover
            href="#"
            className="flex items-center space-x-2 font-semibold tracking-tight leading-tight text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text transform transition-transform duration-500 ease-in-out hover:rotate-6 hover:scale-105">
            <img src={logo} alt="Logo" className="h-10 w-auto rounded-full" />
            <span className="text-3xl">Code Developers</span>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <li key={item} data-cursor-hover className="group perspective-1000">
                <a
                    href="#"
                    className="font-semibold transform transition-transform duration-500 ease-in-out group-hover:rotate-y-180 group-hover:bg-gray-900 group-hover:text-pink-400 px-4 py-2 rounded-md block">
                    {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Contact Button */}
          <a
            data-cursor-hover
            href="#contact"
            className="hidden md:flex items-center space-x-2 font-semibold px-4 py-2 rounded-full bg-gray-50 text-gray-900 transform transition-transform duration-500 ease-in-out hover:bg-gray-200 hover:rotate-y-180">
            <span>Contact us</span>
            <FaArrowRight />
          </a>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle Menu"
            data-cursor-hover
            className="md:hidden text-2xl z-30"
            onClick={toggleMenu}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 bottom-0 w-3/4 max-w-xs p-6 transform ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-500 ease-in-out bg-black z-40`}
        >
          <ul className="flex flex-col space-y-6 mt-24">
            {menuItems.map((item) => (
              <li key={item} data-cursor-hover onClick={closeMenu}>
                <a
                    href="#"
                    className="font-semibold transform transition-transform duration-500 ease-in-out hover:rotate-y-180 hover:bg-gray-900 hover:text-pink-400 px-4 py-2 rounded-md">
                    {item}
                </a>
              </li>
            ))}

            {/* Contact Button for Mobile Menu */}
            <a
              data-cursor-hover
              onClick={closeMenu}
              href="#contact"
              className="bg-gray-50 text-gray-900 font-semibold px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-200 transform hover:rotate-y-180">
              <span>Contact us</span>
              <FaArrowRight />
            </a>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
