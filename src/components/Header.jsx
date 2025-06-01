"use client";
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router'; // Corrigé de 'react-router'
import Logo from '../assets/images/logoNoir.svg';
import Logo2 from '../assets/images/logo.svg';
import { Search, Mail, Phone, MapPin, Menu, X } from 'lucide-react';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';
import Button from './Button';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const LanguageSelector = ({ scrolled, isMobile = false }) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  
  const languages = [
    { 
      code: 'fr', 
      name: 'Français', 
      flag: 'https://flagcdn.com/w40/fr.png',
      flagAlt: 'Drapeau français'
    },
    { 
      code: 'en', 
      name: 'English', 
      flag: 'https://flagcdn.com/w40/gb.png',
      flagAlt: 'Drapeau britannique'
    }
  ];

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className={`relative language-selector ${isMobile ? 'w-full' : 'group'}`}>
      <button
        onClick={() => isMobile && setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-md transition-all ${
          scrolled ? 'text-gray-800' : 'text-white'
        } ${isMobile ? 'w-full justify-between' : ''}`}
      >
        <span className="flex items-center gap-2">
          <img 
            src={languages.find(lang => lang.code === i18n.language)?.flag}
            alt={languages.find(lang => lang.code === i18n.language)?.flagAlt}
            className="w-5 h-3 object-cover rounded-sm"
          />
          <span className={`text-sm lg:text-base ${scrolled ? 'text-gray-800' : 'text-white'}`}>
            {languages.find(lang => lang.code === i18n.language)?.name}
          </span>
        </span>
      </button>
      <div className={`absolute ${isMobile ? 'relative' : 'right-0'} mt-1 w-full bg-white rounded-lg shadow-lg ${
        isMobile 
          ? isOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'
          : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'
      } transition-all duration-200 z-50`}>
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition-colors ${
              i18n.language === lang.code ? 'bg-blue-50' : ''
            }`}
          >
            <img 
              src={lang.flag}
              alt={lang.flagAlt}
              className="w-5 h-3 object-cover rounded-sm"
            />
            <span className="text-sm text-gray-800">{lang.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled, isMenuOpen]);

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.menu-container') && !event.target.closest('.mobile-search-container') && !event.target.closest('.language-selector')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileSearchOpen && !event.target.closest('.mobile-search-container')) {
        setIsMobileSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileSearchOpen]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.length > 2) {
      const searchableContent = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a');
      const results = Array.from(searchableContent)
        .filter(element => {
          const text = element.textContent.toLowerCase();
          return text.includes(query.toLowerCase());
        })
        .map(element => ({
          text: element.textContent,
          element: element,
          type: element.tagName.toLowerCase()
        }))
        .slice(0, 5);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const scrollToResult = (result) => {
    result.element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    result.element.classList.add('highlight-search');
    setTimeout(() => {
      result.element.classList.remove('highlight-search');
    }, 2000);
    setIsSearchOpen(false);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsMenuOpen(false);
  };

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
                <motion.a 
                  whileHover={{ scale: 1.1, backgroundColor: "white", color: "#3974EA" }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className='w-7 h-7 lg:w-8 lg:h-8 rounded-full border-1 border-white flex flex-col justify-center items-center cursor-pointer'
                  href="https://www.facebook.com/share/1AhPm1QpV7/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"
                >
                  <FaFacebookF className="text-sm lg:text-base" />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.1, backgroundColor: "white", color: "#3974EA" }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className='w-7 h-7 lg:w-8 lg:h-8 rounded-full border-1 border-white flex flex-col justify-center items-center cursor-pointer'
                  href="https://www.instagram.com/tnk_synergies?igsh=dDkzd2t2NjdlN3Jt" target="_blank" rel="noopener noreferrer"
                >
                  <FaInstagram className="text-sm lg:text-base" />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.1, backgroundColor: "white", color: "#3974EA" }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className='w-7 h-7 lg:w-8 lg:h-8 rounded-full border-1 border-white flex flex-col justify-center items-center cursor-pointer'
                  href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="text-sm lg:text-base" />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.1, backgroundColor: "white", color: "#3974EA" }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className='w-7 h-7 lg:w-8 lg:h-8 rounded-full border-1 border-white flex flex-col justify-center items-center cursor-pointer'
                  href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                >
                  <FaTwitter className="text-sm lg:text-base" />
                </motion.a>
              </div>
              <div className='flex gap-4 lg:gap-6 items-center'>
                <a href="tel:+321234456386" className="flex gap-2 lg:gap-3.5 items-center">
                  <Phone className="w-4 lg:w-5 aspect-[1/1]" />
                  <span className="text-sm lg:text-base">+237 6831-79451</span>
                </a>
                <a href="tel:+321234456386" className="flex gap-2 lg:gap-3.5 items-center">
                  <Mail className="w-4 lg:w-5 aspect-[1/1]" />
                  <span className="text-sm lg:text-base">info@tnksynergies.com</span>
                </a>
                <a href="tel:+321234456386" className="flex gap-2 lg:gap-3.5 items-center">
                  <MapPin className="w-4 lg:w-5 aspect-[1/1]" />
                  <span className="text-sm lg:text-base">Location, Streep</span>
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
          
          <button 
            className={`xl:hidden hover:opacity-80 transition-opacity ${scrolled ? 'text-gray-800' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className={`hidden xl:flex flex-wrap gap-4 lg:gap-6 items-center self-stretch my-auto ${
            scrolled ? 'text-gray-800' : 'text-white'
          }`}>
            <div className={`cursor-pointer hover:opacity-80 transition-opacity px-3 py-1.5 rounded-md ${
              location.pathname === '/' ? 'bg-blue-100 text-blue-600' : ''
            }`}>
              <Link to="/" className="text-sm lg:text-base">{t('home')}</Link>
            </div>
            <div className={`cursor-pointer hover:opacity-80 transition-opacity px-3 py-1.5 rounded-md ${
              location.pathname === '/about' ? 'bg-blue-100 text-blue-600' : ''
            }`}>
              <Link to="/about" className="text-sm lg:text-base">{t('about')}</Link>
            </div>
            <div className={`cursor-pointer hover:opacity-80 transition-opacity px-3 py-1.5 rounded-md ${
              location.pathname === '/projets' ? 'bg-blue-100 text-blue-600' : ''
            }`}>
              <Link to="/projets" className="text-sm lg:text-base">{t('projects')}</Link>
            </div>
            <div className={`cursor-pointer hover:opacity-80 transition-opacity px-3 py-1.5 rounded-md ${
              location.pathname === '/services' ? 'bg-blue-100 text-blue-600' : ''
            }`}>
              <Link to="/services" className="text-sm lg:text-base">{t('services')}</Link>
            </div>
            <div className={`cursor-pointer hover:opacity-80 transition-opacity px-3 py-1.5 rounded-md ${
              location.pathname === '/blog' ? 'bg-blue-100 text-blue-600' : ''
            }`}>
              <Link to="/blog" className="text-sm lg:text-base">{t('blog')}</Link>
            </div>
            <div className={`cursor-pointer hover:opacity-80 transition-opacity px-3 py-1.5 rounded-md ${
              location.pathname === '/contact' ? 'bg-blue-100 text-blue-600' : ''
            }`}>
              <Link to="/contact" className="text-sm lg:text-base">{t('contact')}</Link>
            </div>
            <LanguageSelector scrolled={scrolled} />
          </nav>

          <div className={`xl:hidden fixed top-[72px] left-0 right-0 bg-white shadow-lg transform transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            <nav className="flex flex-col p-5">
              <div className="relative mb-4 mobile-search-container">
                <input
                  type="text"
                  placeholder={t('search.placeholder')}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  onFocus={() => setIsMobileSearchOpen(true)}
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                {isMobileSearchOpen && searchQuery.length > 2 && (
                  <div className="absolute left-0 right-0 mt-2 bg-white rounded-lg shadow-xl z-50 max-h-60 overflow-y-auto">
                    {searchResults.length > 0 ? (
                      searchResults.map((result, index) => (
                        <div 
                          key={index} 
                          className="p-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2 border-b border-gray-100"
                          onClick={() => {
                            scrollToResult(result);
                            setIsMobileSearchOpen(false);
                          }}
                        >
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                            {result.type}
                          </span>
                          <span className="truncate">{result.text}</span>
                        </div>
                      ))
                    ) : (
                      <div className="p-2 text-gray-500 text-center">
                        {t('search.no_results')}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Liens de navigation */}
              <div className={`cursor-pointer py-2 px-3 rounded-md transition-all ${
                location.pathname === '/' ? 'bg-blue-100 text-blue-600' : 'text-gray-800 hover:bg-gray-100'
              }`}>
                <Link to="/">Accueil</Link>
              </div>
              <div className={`cursor-pointer py-2 px-3 rounded-md transition-all ${
                location.pathname === '/about' ? 'bg-blue-100 text-blue-600' : 'text-gray-800 hover:bg-gray-100'
              }`}>
                <Link to="/about">À propos</Link>
              </div>
              <div className={`cursor-pointer py-2 px-3 rounded-md transition-all ${
                location.pathname === '/projets' ? 'bg-blue-100 text-blue-600' : 'text-gray-800 hover:bg-gray-100'
              }`}>
                <Link to="/projets">Nos Projets</Link>
              </div>
              <div className={`cursor-pointer py-2 px-3 rounded-md transition-all ${
                location.pathname === '/services' ? 'bg-blue-100 text-blue-600' : 'text-gray-800 hover:bg-gray-100'
              }`}>
                <Link to="/services">Services</Link>
              </div>
              <div className={`cursor-pointer py-2 px-3 rounded-md transition-all ${
                location.pathname === '/blog' ? 'bg-blue-100 text-blue-600' : 'text-gray-800 hover:bg-gray-100'
              }`}>
                <Link to="/blog">Blog / Actualités</Link>
              </div>
              <div className={`cursor-pointer py-2 px-3 rounded-md transition-all ${
                location.pathname === '/contact' ? 'bg-blue-100 text-blue-600' : 'text-gray-800 hover:bg-gray-100'
              }`}>
                <Link to="/contact">Contact</Link>
              </div>

              <div className="mt-4 border-t pt-4">
                <LanguageSelector scrolled={true} isMobile={true} />
              </div>

              <div className="mt-4">
                <Link to="/join_us">
                  <Button 
                    variant="bordered" 
                    color="green" 
                    className="w-full justify-center"
                  >
                    {t('join_us')}
                  </Button>
                </Link>
              </div>
            </nav>
          </div>

          <div className='hidden xl:flex gap-4 lg:gap-6 items-center'>
            <div className="search-container relative">
              <Search 
                className={`w-8 lg:w-10 cursor-pointer hover:opacity-80 transition-opacity ${scrolled ? 'text-gray-800' : 'text-white'}`}
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              />
              <div className={`absolute right-0 top-full mt-2 w-96 bg-white rounded-lg shadow-xl transform transition-all duration-300 ${
                isSearchOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}>
                <div className="p-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder={t('search.placeholder')}
                      className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={searchQuery}
                      onChange={(e) => handleSearch(e.target.value)}
                      autoFocus
                    />
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  </div>
                  {searchResults.length > 0 && (
                    <div className="mt-2 max-h-60 overflow-y-auto">
                      {searchResults.map((result, index) => (
                        <div 
                          key={index} 
                          className="p-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                          onClick={() => scrollToResult(result)}
                        >
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                            {result.type}
                          </span>
                          <span className="truncate">{result.text}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {searchQuery.length > 2 && searchResults.length === 0 && (
                    <div className="mt-2 text-gray-500 text-center">
                      {t('search.no_results')}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <Link to="/join_us">
              <Button variant="bordered" color={scrolled ? "green" : "white"} className="text-sm lg:text-base">
                {t('join_us')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

const style = document.createElement('style');
style.textContent = `
  .highlight-search {
    background-color: #ffeb3b;
    transition: background-color 0.3s ease;
  }
`;
document.head.appendChild(style);

export default Header;