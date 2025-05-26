"use client";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import Logo from '../assets/images/logoNoir.svg';
import Logo2 from '../assets/images/logo.svg';
import { Search, Mail, Phone, MapPin, Menu, X } from 'lucide-react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Button from './Button';
import { motion } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Fermer la recherche si on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSearchOpen && !event.target.closest('.search-container')) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchOpen]);

  // fermer le menu si on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.menu-container')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 flex flex-col items-center w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className={`flex flex-col w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 ${
        scrolled ? 'pt-0' : ''
      }`}>        
        {!scrolled && (
          <>
            <div className="hidden md:flex justify-between items-center font-semibold text-white">
              <div className='flex gap-4 lg:gap-6 text-white'>
                <motion.div 
                  whileHover={{ scale: 1.1, backgroundColor: "white", color: "#3974EA" }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className='w-7 h-7 lg:w-8 lg:h-8 rounded-full border-1 border-white flex flex-col justify-center items-center cursor-pointer'
                >
                  <FaFacebookF className="text-sm lg:text-base" />
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.1, backgroundColor: "white", color: "#3974EA" }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className='w-7 h-7 lg:w-8 lg:h-8 rounded-full border-1 border-white flex flex-col justify-center items-center cursor-pointer'
                >
                  <FaLinkedinIn className="text-sm lg:text-base" />
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.1, backgroundColor: "white", color: "#3974EA" }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className='w-7 h-7 lg:w-8 lg:h-8 rounded-full border-1 border-white flex flex-col justify-center items-center cursor-pointer'
                >
                  <FaTwitter className="text-sm lg:text-base" />
                </motion.div>
              </div>
              <div className='flex gap-4 lg:gap-6 items-center'>
                <a href="tel:+321234456386" className="flex gap-2 lg:gap-3.5 items-center">
                  <Phone className="w-4 lg:w-5 aspect-[1/1]" />
                  <span className="text-sm lg:text-base">+32 1234-456386</span>
                </a>
                <a href="tel:+321234456386" className="flex gap-2 lg:gap-3.5 items-center">
                  <Mail className="w-4 lg:w-5 aspect-[1/1]" />
                  <span className="text-sm lg:text-base">+32 1234-456386</span>
                </a>
                <a href="tel:+321234456386" className="flex gap-2 lg:gap-3.5 items-center">
                  <MapPin className="w-4 lg:w-5 aspect-[1/1]" />
                  <span className="text-sm lg:text-base">+32 1234-456386</span>
                </a>
              </div>
            </div>
            <div className="hidden md:block shrink-0 mt-4 w-full h-px bg-white bg-opacity-50" />
          </>
        )}

        <div className="flex justify-between items-center w-full">
          <div className='cursor-pointer m-2'>
            <Link to="/">
              <img 
                src={scrolled ? Logo2 : Logo} 
                alt={scrolled ? "Logo2" : "Logo"}
                className="w-20 sm:w-24 md:w-28 lg:w-32"
              />
            </Link>
          </div>
          
          {/* Menu Hamburger pour mobile */}
          <button 
            className={`lg:hidden hover:opacity-80 transition-opacity ${scrolled ? 'text-gray-800' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Navigation */}
          <nav className={`hidden lg:flex flex-wrap gap-4 lg:gap-6 items-center self-stretch my-auto ${
            scrolled ? 'text-gray-800' : 'text-white'
          }`}>
            <div className='cursor-pointer hover:opacity-80 transition-opacity'>
              <Link to="/" className="text-sm lg:text-base">Accueil</Link>
            </div>
            <div className='cursor-pointer hover:opacity-80 transition-opacity'>
              <Link to="/about" className="text-sm lg:text-base">À propos</Link>
            </div>
            <div className='cursor-pointer hover:opacity-80 transition-opacity'>
              <Link to="/projets" className="text-sm lg:text-base">Nos Projets</Link>
            </div>
            <div className='cursor-pointer hover:opacity-80 transition-opacity'>
              <Link to="/services" className="text-sm lg:text-base">Services</Link>
            </div>
            <div className='cursor-pointer hover:opacity-80 transition-opacity'>
              <Link to="/blog" className="text-sm lg:text-base">Blog / Actualités</Link>
            </div>
            <div className='cursor-pointer hover:opacity-80 transition-opacity'>
              <Link to="/contact" className="text-sm lg:text-base">Contact</Link>
            </div>
          </nav>

          {/* Menu mobile */}
          <div className={`lg:hidden fixed top-[72px] left-0 right-0 bg-white shadow-lg transform transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            <nav className="flex flex-col p-5">
              {/* Barre de recherche mobile */}
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>

              {/* Liens de navigation */}
              <div className='cursor-pointer py-2 hover:opacity-80 transition-opacity'>
                <Link to="/" className="text-gray-800">Accueil</Link>
              </div>
              <div className='cursor-pointer py-2 hover:opacity-80 transition-opacity'>
                <Link to="/about" className="text-gray-800">À propos</Link>
              </div>
              <div className='cursor-pointer py-2 hover:opacity-80 transition-opacity'>
                <Link to="/projets" className="text-gray-800">Nos Projets</Link>
              </div>
              <div className='cursor-pointer py-2 hover:opacity-80 transition-opacity'>
                <Link to="/services" className="text-gray-800">Services</Link>
              </div>
              <div className='cursor-pointer py-2 hover:opacity-80 transition-opacity'>
                <Link to="/blog" className="text-gray-800">Blog / Actualités</Link>
              </div>
              <div className='cursor-pointer py-2 hover:opacity-80 transition-opacity'>
                <Link to="/contact" className="text-gray-800">Contact</Link>
              </div>

              {/* CTA Button mobile */}
              <div className="mt-4">
                <Button 
                  variant="bordered" 
                  color="green" 
                  className="w-full justify-center"
                >
                  Nous rejoindre
                </Button>
              </div>
            </nav>
          </div>

          <div className='hidden lg:flex gap-4 lg:gap-6 items-center'>
            <div className="search-container relative">
              <Search 
                className={`w-8 lg:w-10 cursor-pointer hover:opacity-80 transition-opacity ${scrolled ? 'text-gray-800' : 'text-white'}`}
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              />
              {/* Overlay de recherche pour desktop */}
              <div className={`absolute right-0 top-full mt-2 w-96 bg-white rounded-lg shadow-xl transform transition-all duration-300 ${
                isSearchOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}>
                <div className="p-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Rechercher..."
                      className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      autoFocus
                    />
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
            <Button variant="bordered" color={scrolled ? "green" : "white"} className="text-sm lg:text-base">
              Nous rejoindre
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;