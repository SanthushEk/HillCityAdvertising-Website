import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FiAlignJustify, FiMoreVertical, FiArrowRight } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationSharp, IoCallSharp, IoTimeOutline } from "react-icons/io5";
import { FaHome, FaCog, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isMoreMenuOpen, setMoreMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const toggleSearch = () => setSearchOpen(!isSearchOpen);
  const toggleMoreMenu = () => setMoreMenuOpen(!isMoreMenuOpen);
  const handleNavItemClick = (item) => {
    setActiveItem(item);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-secondary text-primary tracking-wide py-2 font-futura font-bold hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-sm">
          {/* Left: Info */}
          <div className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <IoLocationSharp size={18} className="text-yellow" />
              <span>1234 Hillview Avenue, Colombo 10000</span>
            </div>
            <div className="flex items-center space-x-2">
              <IoCallSharp size={18} className="text-yellow" />
              <span>+94 11 765 4321</span>
            </div>
            <div className="flex items-center space-x-2">
              <AiOutlineMail size={18} className="text-yellow" />
              <span>contact@hillcityadv.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <IoTimeOutline size={18} className="text-yellow" />
              <span>Mon - Sat 9:00 - 18:00, Sunday - CLOSED</span>
            </div>
          </div>

          {/* Right: Social Media */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow"
            >
              <FaFacebook size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow"
            >
              <FaSquareXTwitter size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-primary text-secondary font-futura font-bold border-b-2 border-yellow">
        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className={`transition-all duration-300 ease-in-out transform ${
              isMobileMenuOpen ? "rotate-180" : ""
            }`}
          >
            {isMobileMenuOpen ? (
              <FiArrowRight size={24} />
            ) : (
              <FiAlignJustify size={32} />
            )}
          </button>
        </div>

        {/* Logo */}
        <div className="flex items-center space-x-2 flex-grow md:flex-none justify-start md:justify-center">
          <h1 className="text-xl font-sans pl-4">
            HillCity <span className="text-yellow">Advertising</span>
          </h1>
        </div>

        {/* Menu (Desktop) */}
        <div className="hidden md:flex space-x-6 justify-between text-xl tracking-wider">
          <Link
            to="/"
            onClick={() => handleNavItemClick("home")}
            className={`cursor-pointer hover:text-yellow transition-all duration-300 ${
              activeItem === "home" ? "text-yellow" : ""
            }`}
          >
            Home
          </Link>

          <Link
            to="/service"
            onClick={() => handleNavItemClick("services")}
            className={`cursor-pointer hover:text-yellow transition-all duration-300 ${
              activeItem === "services" ? "text-yellow" : ""
            }`}
          >
            Services
          </Link>

          <Link
            to="/contact"
            onClick={() => handleNavItemClick("contact")}
            className={`cursor-pointer hover:text-yellow transition-all duration-300 ${
              activeItem === "contact" ? "text-yellow" : ""
            }`}
          >
            Contact Us
          </Link>
        </div>

        {/* Search / Mobile More */}
        <div className="flex items-center space-x-2">
          {/* Desktop Search */}
          <div className="relative items-center hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="p-2 pl-3 pr-10 rounded-lg bg-transparent border border-yellow text-white focus:outline-none md:w-48 w-32"
            />
            <button
              onClick={toggleSearch}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-r-md"
            >
              <FaSearch size={18} className="text-yellow" />
            </button>
          </div>

          {/* Mobile Three-dot */}
          <div className="md:hidden">
            <button onClick={toggleMoreMenu}>
              <FiMoreVertical size={24} className="text-secondary" />
            </button>
            {isMoreMenuOpen && (
              <div className="absolute top-20 right-0 w-full bg-primary text-secondary p-4 shadow-lg z-50">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <IoLocationSharp size={20} className="text-yellow" />
                    <span>1234 Hillview Avenue, Colombo 10000</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <IoCallSharp size={20} className="text-yellow" />
                    <span>+94 11 765 4321</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <AiOutlineMail size={20} className="text-yellow" />
                    <span>contact@hillcityadv.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <IoTimeOutline size={20} className="text-yellow" />
                    <span>Mon - Sat 9:00 - 18:00, Sunday - CLOSED</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="flex flex-col space-y-4 p-4 bg-primary text-secondary font-futura md:hidden z-50">
          <div className="flex flex-col items-start space-y-2">
            <div className="flex items-center space-x-5 w-full hover:bg-yellow rounded-md hover:px-4 py-2 transition-all duration-300">
              <FaHome className="text-2xl hover:text-primary" />
              <Link
                to="/"
                onClick={() => handleNavItemClick("home")}
                className="text-xl font-bold text-secondary hover:text-primary"
              >
                Home
              </Link>
            </div>

            <div className="flex items-center space-x-5 w-full hover:bg-yellow rounded-md hover:px-4 py-2 transition-all duration-300">
              <FaCog className="text-2xl hover:text-primary" />
              <Link
                to="/service"
                onClick={() => handleNavItemClick("services")}
                className="text-xl font-bold text-secondary hover:text-primary"
              >
                Services
              </Link>
            </div>

            <div className="flex items-center space-x-5 w-full hover:bg-yellow rounded-md hover:px-4 py-2 transition-all duration-300">
              <FaEnvelope className="text-2xl hover:text-primary" />
              <Link
                to="/contact"
                onClick={() => handleNavItemClick("contact")}
                className="text-xl font-bold text-secondary hover:text-primary"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
