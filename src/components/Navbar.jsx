// Navbar.jsx
import React, { useState, useEffect } from "react";
import { FaPhone, FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({ mobile: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Disable body scroll only when modal is open
    document.body.style.overflow = showContactForm ? "hidden" : "auto";
  }, [showContactForm]);

  const toggleMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMenu = () => setMobileMenuOpen(false);
  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
    setSubmitted(false);
    closeMenu();
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ mobile: "", email: "", message: "" });
  };

  const menuItems = [
    "Home 🏡", "About us", "Our Services", "Portfolio", "Pricing", "Shop", "Contact us 📞"
  ];

  return (
    <div className="relative z-50">
      <header className="fixed top-0 left-0 w-full">
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

        <nav className="bg-black text-white px-6 py-4 shadow-md">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center space-x-2 font-semibold text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text">
              <img src={logo} alt="Logo" className="h-10 w-auto rounded-full" />
              <span className="text-3xl">Code Developers</span>
            </a>

            <ul className="hidden md:flex space-x-6">
              {menuItems.map((item) => (
                <li key={item}>
                  <a href="#" className="font-semibold hover:text-pink-400 px-4 py-2 rounded-md">{item}</a>
                </li>
              ))}
            </ul>

            <button
              onClick={toggleContactForm}
              className="hidden md:flex items-center space-x-2 font-semibold px-4 py-2 rounded-full bg-gray-50 text-gray-900 hover:bg-gray-200"
            >
              <span>Contact us</span>
              <FaArrowRight />
            </button>

            <button
              className="md:hidden text-2xl z-50"
              onClick={toggleMenu}
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`absolute top-0 right-0 bottom-0 w-3/4 max-w-xs p-6 bg-black text-white transform ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-500 z-40 h-screen overflow-y-auto`}
          >
            <div className="flex justify-end">
              <button onClick={closeMenu} className="text-2xl"><FaTimes /></button>
            </div>
            <ul className="flex flex-col space-y-6 mt-10">
              {menuItems.map((item) => (
                <li key={item} onClick={closeMenu}>
                  <a href="#" className="hover:text-pink-400 px-4 py-2 rounded-md block">{item}</a>
                </li>
              ))}
              <button
                onClick={toggleContactForm}
                className="bg-gray-50 text-gray-900 font-semibold px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-200"
              >
                <span>Contact us</span>
                <FaArrowRight />
              </button>
            </ul>
          </div>
        </nav>
      </header>

      {/* Contact Modal */}
      {showContactForm && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-60 px-4 overflow-y-auto py-10">
          <div className="bg-gradient-to-br from-pink-500 via-purple-600 to-blue-500 p-1 rounded-xl w-full max-w-md">
            <div className="bg-white rounded-xl p-6 relative">
              <button
                onClick={toggleContactForm}
                className="absolute top-2 right-4 text-xl font-bold text-gray-500 hover:text-red-600"
              >
                ×
              </button>
              <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
              {submitted ? (
                <p className="text-green-600 text-center font-semibold">Submitted successfully!</p>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <input
                    name="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    placeholder="Mobile Number"
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email Address"
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your Message"
                    className="w-full px-4 py-2 border rounded-lg"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-pink-600 hover:bg-purple-700 text-white font-semibold rounded-lg"
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
