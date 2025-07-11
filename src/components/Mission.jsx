import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import about2 from '../assets/images/about2.png';
import about3 from '../assets/images/about3.png';
import { Link } from 'react-router-dom';
import about4 from '../assets/images/about4.png';
import about5 from '../assets/images/about5.png';
import { useTranslation } from 'react-i18next';
import OptimizedImage from './OptimizedImage';

function Mission() {
  const { t } = useTranslation();

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-20 w-full mt-10 flex flex-col lg:flex-row justify-between max-md:mt-6">
      
      {/* Texte + image (mobile) */}
      <motion.div
        className="w-full lg:w-[45%] mb-10 lg:mb-0"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        {/* Image affichée uniquement sur mobile */}
        <motion.div
          className="mb-6 block lg:hidden w-full h-64 relative"
          variants={imageVariants}
          transition={{ delay: 0.2 }}
        >
          <OptimizedImage
            src={about2}
            alt={t('mission.image_alt')}
            className="object-cover rounded-xl absolute inset-0 w-full h-full"
          />
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-500"
          variants={textVariants}
          transition={{ delay: 0.2 }}
        >
          {t('mission.title')}
        </motion.h1>

        <motion.p
          className="text-gray-500 text-base sm:text-lg mt-6 lg:mt-10 font-medium text-justify"
          variants={textVariants}
          transition={{ delay: 0.4 }}
        >
          {t('mission.description1')}
        </motion.p>

        <motion.p
          className="text-gray-500 text-base sm:text-lg text-justify mt-6 lg:mt-10 font-medium"
          variants={textVariants}
          transition={{ delay: 0.6 }}
        >
          {t('mission.description2')}
        </motion.p>

        <motion.div
          variants={textVariants}
          transition={{ delay: 0.8 }}
        >
          <Link to="/projets">
            <Button 
              variant="filled" 
              color="blue" 
              className="font-semibold mt-6 lg:mt-10 rounded-lg w-full sm:w-auto"
            >
              {t('mission.button')}
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Images uniquement en desktop */}
      <motion.div
        className="hidden lg:flex flex-col sm:flex-row justify-between w-full lg:w-[50%] max-md:mt-6"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
      >
        <div className="w-full sm:w-1/2">
          <motion.div
            className="w-full relative h-30"
            variants={imageVariants}
            transition={{ delay: 1.0 }}
          >
            <OptimizedImage
              src={about2}
              alt={t('mission.image_alt')}
              className="object-cover rounded-xl absolute inset-0 size-full"
            />
          </motion.div>
          <motion.div
            className="w-full mt-6 h-70"
            variants={imageVariants}
            transition={{ delay: 1.2 }}
          >
            <OptimizedImage
              src={about3}
              alt={t('mission.image_alt')}
              className="object-cover rounded-xl inset-0 size-full"
            />
          </motion.div>
        </div>
        <div className="w-full sm:w-1/2 sm:ml-6 max-md:mt-6">
          <motion.div
            className="w-full h-70"
            variants={imageVariants}
            transition={{ delay: 1.4 }}
          >
            <OptimizedImage
              src={about4}
              alt={t('mission.image_alt')}
              className="object-cover rounded-xl inset-0 size-full"
            />
          </motion.div>
          <motion.div
            className="w-full  mt-6 h-30"
            variants={imageVariants}
            transition={{ delay: 1.6 }}
          >
            <OptimizedImage
              src={about5}
              alt={t('mission.image_alt')}
              className="object-cover rounded-xl inset-0 size-full"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Mission;