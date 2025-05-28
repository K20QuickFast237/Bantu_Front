import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import sectionHero from '../assets/images/blog1.png';
import blogb from '../assets/images/service_Hero.jpg';
import about5 from '../assets/images/about5.png';
import blog23 from '../assets/images/blog23.png';

const BlogHero = ({ searchValue, setSearchValue }) => {
  const slides = [
    {
      image: blogb,
      text: `Tnk technolie a aise près de 500 millions d'entreprises dans la réalisation de leur projet futur.
      Alors le but est de se mettre sur le numérique pour un rendement beaucoup plus élevé sur le marché.`,
    },
    {
      image: about5,
      text: `Nos services numériques vous aident à transformer vos idées en projets concrets avec impact réel.`,
    },
    {
      image: blog23,
      text: `Rejoignez notre communauté d'innovateurs et bénéficiez de notre expertise en solutions technologiques.`,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change every 5s

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full text-base px-20 pt-32 pb-20 md:pt-36 md:pb-32">
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-green-500 text-xl font-bold underline">Tous les blogs</p>
            <p className="text-white text-lg mt-7">{slides[currentSlide].text}</p>
            <p className="text-white text-lg mt-8">
              Nous vous souhaitons la bienvenue sur tnk technologies.
            </p>
            <button className="text-blue-600 mt-6 font-bold text-xl">
              Lire plus
              <i className="fas fa-arrow-circle-right ml-4 text-xl text-blue-700"></i>
            </button>
          </motion.div>

          {/* Carrousel d'image */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full h-60 mt-7">
              <img
                src={slides[currentSlide].image}
                alt="Carrousel"
                className="object-cover rounded-2xl w-full h-full transition duration-1000 ease-in-out"
              />
              {/* Boutons précédent/suivant */}
              <button
                onClick={() =>
                  setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
                }
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white px-3 py-1 rounded-full"
              >
                ‹
              </button>
              <button
                onClick={() =>
                  setCurrentSlide((prev) => (prev + 1) % slides.length)
                }
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white px-3 py-1 rounded-full"
              >
                ›
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
