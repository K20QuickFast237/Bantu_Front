import React from 'react';
import { motion } from 'framer-motion';
import { ChartBar, ChartPie, ChartLine } from 'lucide-react';
import about2 from '../assets/images/about2.png';
import about3 from '../assets/images/about3.png';
import about4 from '../assets/images/about4.png';
import { useTranslation } from 'react-i18next';
import OptimizedImage from './OptimizedImage';

function Valeurs() {
  const { t } = useTranslation();

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
      <section className="bg-gray-50 w-full p-4 sm:p-6 md:p-10 lg:p-20 mt-10 max-md:mt-6">
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-blue-600 max-md:text-3xl"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ delay: 0.2 }}
        >
          {t('valeurs.title')}
        </motion.h1>
        <motion.h1
          className="text-2xl sm:text-3xl mt-6 lg:mt-10 font-bold text-center text-green-600 max-md:text-xl"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ delay: 0.4 }}
        >
          {t('valeurs.subtitle')}
        </motion.h1>

        <div className="py-8 md:py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
              {/* Bordure décorative */}
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

              {/* Cards */}
              {[
                {
                  icon: <ChartBar className="w-8 md:w-10 h-8 md:h-10 text-white" />,
                  title: t('valeurs.cards.innovation.title'),
                  text: t('valeurs.cards.innovation.text'),
                },
                {
                  icon: <ChartPie className="w-8 md:w-10 h-8 md:h-10 text-white" />,
                  title: t('valeurs.cards.community.title'),
                  text: t('valeurs.cards.community.text'),
                },
                {
                  icon: <ChartLine className="w-8 md:w-10 h-8 md:h-10 text-white" />,
                  title: t('valeurs.cards.excellence.title'),
                  text: t('valeurs.cards.excellence.text'),
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="bg-white p-6 md:p-8 text-center relative z-10"
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  transition={{ delay: 0.8 + index * 0.2 }}
                >
                  <div className="w-16 md:w-20 h-16 md:h-20 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">{item.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Notre impact */}
      <motion.p
        className="text-green-600 font-extrabold mt-10 text-4xl sm:text-5xl ml-4 sm:ml-6 md:ml-10 lg:ml-20 max-md:text-3xl max-md:text-center max-md:mt-6"
        initial="hidden"
        animate="visible"
        variants={textVariants}
        transition={{ delay: 0.2 }}
      >
        {t('valeurs.impact.title')}
      </motion.p>

      <div className="bg-white py-8 md:py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 cursor-pointer md:grid-cols-3 gap-6">
          {[
            {
              img: about4,
              alt: t('valeurs.impact.cards.innovation.alt'),
              title: t('valeurs.impact.cards.innovation.title'),
              text: t('valeurs.impact.cards.innovation.text'),
            },
            {
              img: about2,
              alt: t('valeurs.impact.cards.community.alt'),
              title: t('valeurs.impact.cards.community.title'),
              text: t('valeurs.impact.cards.community.text'),
            },
            {
              img: about3,
              alt: t('valeurs.impact.cards.environmental.alt'),
              title: t('valeurs.impact.cards.environmental.title'),
              text: t('valeurs.impact.cards.environmental.text'),
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              className="relative overflow-hidden rounded-lg h-64 md:h-80 group"
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              transition={{ delay: 0.4 + index * 0.2 }}
            >
              <OptimizedImage
                src={item.img}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Overlay adaptatif */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent 
                md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 opacity-100">
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                  <h3 className="text-xl md:text-2xl text-center font-bold mb-2 md:mb-3">{item.title}</h3>
                  <p className="text-gray-200 text-sm md:text-base text-center leading-relaxed">{item.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Valeurs;