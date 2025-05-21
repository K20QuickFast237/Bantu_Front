"use client";
import React, { useState, useEffect } from 'react';
import Logo from '../assets/images/logo.svg';
import { Search, Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Button from './Button';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
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

  return (
    <header className={`fixed top-0 left-0 right-0 flex flex-col items-center w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className={`flex flex-col w-full px-20 max-md:px-5 max-md:max-w-full ${
        scrolled ? 'pt-0' : ''
      }`}>        
        {!scrolled && (
          <>
            <div className="flex justify-between items-center font-semibold text-white">
              <div className='flex gap-6'>
                <div className='w-8 h-8 rounded-full border-1 border-white flex flex-col justify-center items-center cursor-pointer'>
                  <FaFacebookF />
                </div>
                <div className='w-8 h-8 rounded-full border-1 border-white flex flex-col justify-center items-center cursor-pointer'>
                  <FaLinkedinIn />
                </div>
                <div className='w-8 h-8 rounded-full border-1 border-white flex flex-col justify-center items-center cursor-pointer'>
                  <FaTwitter />
                </div>
              </div>
              <div className='flex gap-8 items-center'>
                <a href="tel:+321234456386" className="flex gap-3.5">
                  <Phone className="w-5 aspect-[1/1]" />
                  <span>+32 1234-456386</span>
                </a>
                <a href="tel:+321234456386" className="flex gap-3.5">
                  <Mail className="w-5 aspect-[1/1]" />
                  <span>+32 1234-456386</span>
                </a>
                <a href="tel:+321234456386" className="flex gap-3.5">
                  <MapPin className="w-5 aspect-[1/1]" />
                  <span>+32 1234-456386</span>
                </a>
              </div>
            </div>
            <div className="flex shrink-0 mt-4 w-full h-px bg-white bg-opacity-50" />
          </>
        )}

        <div className="flex justify-between items-center w-full">
          <div className='cursor-pointer'>
            <img src={Logo} alt="Logo" />
          </div>
          <nav className={`flex flex-wrap gap-6 items-center self-stretch my-auto max-md:max-w-full ${
            scrolled ? 'text-gray-800' : 'text-white'
          }`}>
            <a href="#" className="self-stretch my-auto">acceuil</a>
            <a href="#" className="self-stretch my-auto">À propos</a>
            <a href="#" className="self-stretch my-auto">Nos Projets</a>
            <a href="#" className="self-stretch my-auto">Services</a>
            <a href="#" className="self-stretch my-auto">Blog / Actualités</a>
            <a href="#" className="self-stretch my-auto">Contact</a>
          </nav>
          <div className='flex gap-6 items-center'>
            <Search className={`w-10 cursor-pointer ${scrolled ? 'text-gray-800' : 'text-white'}`} />
            <Button variant="bordered" color={scrolled ? "green" : "white"}>
              Nous rejoindre
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;