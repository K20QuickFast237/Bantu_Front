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
    <section className="relative w-full text-base px-5 pt-32 pb-20 md:pt-36 md:pb-32">
      {/* Image de fond */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        <img
          src={sectionHero}
          alt="Header background"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* Texte */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-green-500 text-xl font-bold underline">Tous les blogs</p>
            <p className="text-white text-lg mt-7">
              Tnk technolie a aise près de 500 millions d'entreprises dans la réalisation de leur projet futur.
              Alors le but est de se mettre sur le numérique pour un rendement beaucoup plus élevé sur le marché.
            </p>
            <p className="text-white text-lg mt-8">
              Nous vous souhaitons la bienvenue sur tnk technologies.
            </p>
            <button className="text-blue-600 mt-6 font-bold text-xl">
              Lire plus
              <i className="fas fa-arrow-circle-right ml-4 text-xl text-blue-700"></i>
            </button>
          </motion.div>

          {/* Recherche + image */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-full max-w-md mx-auto md:mx-0">
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

            <div className="relative w-full h-60 mt-10">
              <img
                src={blogb}
                alt="Header background"
                className="object-cover rounded-2xl w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
