import React, { useState } from "react";
import { FaPhone, FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    mobile: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMenu = () => setMobileMenuOpen(false);
  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
    setSubmitted(false); // Reset success message
    closeMenu();
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send formData to a server here
    setSubmitted(true);
    setFormData({ mobile: "", email: "", message: "" });
  };

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
    <div className="relative bg-white">
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
              href="#"
              className="flex items-center space-x-2 font-semibold tracking-tight text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text transform transition-transform duration-500 hover:rotate-6 hover:scale-105"
            >
              <img src={logo} alt="Logo" className="h-10 w-auto rounded-full" />
              <span className="text-3xl">Code Developers</span>
            </a>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-6">
              {menuItems.map((item) => (
                <li key={item} className="group">
                  <a
                    href="#"
                    className="font-semibold transition-transform duration-500 group-hover:bg-gray-900 group-hover:text-pink-400 px-4 py-2 rounded-md block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop Contact Button */}
            <button
              onClick={toggleContactForm}
              className="hidden md:flex items-center space-x-2 font-semibold px-4 py-2 rounded-full bg-gray-50 text-gray-900 hover:bg-gray-200 transition duration-300"
            >
              <span>Contact us</span>
              <FaArrowRight />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              aria-label="Toggle Menu"
              className="md:hidden text-2xl z-50"
              onClick={toggleMenu}
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 right-0 bottom-0 w-3/4 max-w-xs p-6 bg-black transform ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-500 z-40`}
          >
            <div className="flex justify-end">
              <button
                onClick={closeMenu}
                className="text-white text-2xl hover:text-pink-400"
              >
                <FaTimes />
              </button>
            </div>

            <ul className="flex flex-col space-y-6 mt-10">
              {menuItems.map((item) => (
                <li key={item} onClick={closeMenu}>
                  <a
                    href="#"
                    className="font-semibold hover:bg-gray-900 hover:text-pink-400 px-4 py-2 rounded-md block transition duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
              <button
                onClick={toggleContactForm}
                className="bg-gray-50 text-gray-900 font-semibold px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-200 transition"
              >
                <span>Contact us</span>
                <FaArrowRight />
              </button>
            </ul>
          </div>
        </nav>
      </header>

      {/* Contact Form Popup */}
      {showContactForm && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50 px-4">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md relative">
            <button
              onClick={toggleContactForm}
              className="absolute top-3 right-3 text-xl font-bold text-gray-600 hover:text-red-600"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-6 text-center text-black">Contact Us</h2>

            {submitted ? (
              <p className="text-green-600 text-center font-semibold">
                Submitted successfully!
              </p>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block font-semibold text-blue-800 mb-1">
                    Your Mobile Number
                  </label>
                  <input
                    name="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg text-fuchsia-700"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-blue-800 mb-1">
                    Your Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg text-fuchsia-700"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-blue-900 mb-1">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg text-fuchsia-700"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-pink-600 hover:bg-purple-600 text-white font-semibold rounded-lg transition duration-300"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
