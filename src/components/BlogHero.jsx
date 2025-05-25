import React from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';
import sectionHero from '../assets/images/blog1.png';
import blogb from '../assets/images/service_Hero.jpg';

const BlogHero = ({ searchValue, setSearchValue }) => {
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Recherche soumise:', searchValue);
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex relative flex-col items-center mt-[-63px] pt-32 pb-32 w-full text-base min-h-[681px] max-md:px-5 max-md:pb-24 max-md:max-w-full"
    >
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src={sectionHero}
          alt="Header background"
          className="object-contain absolute inset-0 size-full"
        />
      </motion.div>
      
      <div className="flex flex-col items-start px-4 sm:px-8 md:px-20 w-full z-10">
        <div className='flex flex-col lg:flex-row justify-between gap-8 w-full'>
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='w-full lg:w-1/2'
          >
            <p className='text-green-500 text-xl font-bold'><u>Tous les blogs</u></p>
            <p className='text-white text-base sm:text-lg mt-4 sm:mt-7'>
              Tnk technolie a aise pres de 500 millions d'entreprises dan sla realisationd e leur projets future.
              Alors le but est de se mettre sur le numerique pour un rendement beacoup plus leve sur le marche 
            </p>
            <p className='text-white text-base sm:text-lg mt-4 sm:mt-8'>
              Nous vous souhaitons la bienvenue sur tnk technolgies.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='text-blue-600 mt-4 sm:mt-6 font-bold text-lg sm:text-xl'
            >
              Lire plus
              <i className="fas fa-arrow-circle-right ml-4 text-xl text-blue-700"></i>
            </motion.button>
          </motion.div>

          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='w-full lg:w-1/2 space-y-6'
          >
            <div className="w-full max-w-md mx-auto">
              <div className="relative">
                <input
                  type="text"
                  value={searchValue}
                  onChange={handleSearchChange}
                  placeholder="Rechercher un blog"
                  className="w-full px-4 py-3 pl-12 pr-4 text-gray-700 bg-white border border-gray-300 rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSearchSubmit(e);
                    }
                  }}
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                  <Search className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className='h-60 relative w-full mt-6 sm:mt-10'
            >
              <img
                src={blogb}
                alt="Header background"
                className="object-cover rounded-2xl absolute inset-0 size-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default BlogHero;