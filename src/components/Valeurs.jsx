import React from 'react';
import { motion } from 'framer-motion';
import { ChartBar, ChartPie, ChartLine } from 'lucide-react';
import about2 from '../assets/images/about2.png';
import about3 from '../assets/images/about3.png';
import about4 from '../assets/images/about4.png';

function Valeurs() {
  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <>
      {/* Section des valeurs */}
      <section className="bg-gray-50 w-full p-4 sm:p-6 md:p-10 lg:p-20 mt-10 max-md:mt-6">
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-blue-600 max-md:text-3xl"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ delay: 0.2 }}
        >
          Valeurs fondamentales
        </motion.h1>
        <motion.h1
          className="text-2xl sm:text-3xl mt-6 lg:mt-10 font-bold text-center text-green-600 max-md:text-xl"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ delay: 0.4 }}
        >
          Nos principes pour un impact durable
        </motion.h1>

        <div className="py-8 md:py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
              {/* Bordure verte avec coins */}
              <motion.div
                className="absolute inset-0 border-1 md:border-2 border-green-500 rounded-lg"
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                transition={{ delay: 0.6 }}
              >
                <div className="absolute -bottom-1 -left-1 w-2 md:w-3 h-2 md:h-3 bg-green-500"></div>
                <div className="absolute -bottom-1 -right-1 w-2 md:w-3 h-2 md:h-3 bg-green-500"></div>
              </motion.div>

              {/* Card Innovation */}
              <motion.div
                className="bg-white p-6 md:p-8 text-center relative z-10"
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                transition={{ delay: 0.8 }}
              >
                <div className="w-16 md:w-20 h-16 md:h-20 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <ChartBar className="w-8 md:w-10 h-8 md:h-10 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Innovation</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Trouver continuellement des solutions créatives et efficaces aux problèmes réels
                </p>
              </motion.div>

              {/* Card Communauté */}
              <motion.div
                className="bg-white p-6 md:p-8 text-center relative z-10"
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                transition={{ delay: 1.0 }}
              >
                <div className="w-16 md:w-20 h-16 md:h-20 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <ChartPie className="w-8 md:w-10 h-8 md:h-10 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Communauté</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Mettre les personnes au centre de nos actions avec une approche inclusive et culturelle.
                </p>
              </motion.div>

              {/* Card Excellence */}
              <motion.div
                className="bg-white p-6 md:p-8 text-center relative z-10"
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                transition={{ delay: 1.2 }}
              >
                <div className="w-16 md:w-20 h-16 md:h-20 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <ChartLine className="w-8 md:w-10 h-8 md:h-10 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Excellence</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  S'engager à atteindre les plus hauts standards dans tous nos projets
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section des impacts */}
      <motion.p
        className="text-green-600 font-extrabold mt-10 text-4xl sm:text-5xl ml-4 sm:ml-6 md:ml-10 lg:ml-20 max-md:text-3xl max-md:text-center max-md:mt-6"
        initial="hidden"
        animate="visible"
        variants={textVariants}
        transition={{ delay: 0.2 }}
      >
        Notre impact
      </motion.p>

      <div className="bg-white py-8 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Première image - Innovation */}
            <motion.div
              className="relative group mt-6 md:mt-30 overflow-hidden rounded-lg cursor-pointer h-64 md:h-80"
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              transition={{ delay: 0.4 }}
            >
              <img
                src={about4}
                alt="Innovation"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                  <h3 className="text-xl md:text-2xl text-center font-bold mb-2 md:mb-3">Innovation</h3>
                  <p className="text-gray-200 text-sm md:text-base text-center leading-relaxed">
                    Trouver continuellement des solutions créatives et efficaces aux problèmes réels
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Deuxième image - Communauté */}
            <motion.div
              className="relative group overflow-hidden rounded-lg cursor-pointer h-64 md:h-110"
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              transition={{ delay: 0.6 }}
            >
              <img
                src={about2}
                alt="Communauté"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                  <h3 className="text-xl md:text-2xl text-center font-bold mb-2 md:mb-3">Communauté</h3>
                  <p className="text-gray-200 text-sm md:text-base text-center leading-relaxed">
                    Mettre les personnes au centre de nos actions avec une approche inclusive et culturelle.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Troisième image - Environnemental */}
            <motion.div
              className="relative group overflow-hidden mt-6 md:mt-30 rounded-lg cursor-pointer h-64 md:h-80"
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              transition={{ delay: 0.8 }}
            >
              <img
                src={about3}
                alt="Environnemental"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                  <h3 className="text-xl md:text-2xl text-center font-bold mb-2 md:mb-3">Environnemental</h3>
                  <p className="text-gray-200 text-sm md:text-base text-center leading-relaxed">
                    Formation des jeunes et soutien à l'innovation locale par des incubateurs et des programmes de mentorat.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Valeurs;