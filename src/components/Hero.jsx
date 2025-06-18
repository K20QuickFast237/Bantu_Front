'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import OptimizedImage from './OptimizedImage';

const HeroSection = ({
  image,
  overlayColor = 'bg-green-900',
  overlayOpacity = 'opacity-40',
  title,
  titleColor = 'text-green-500',
  description,
  buttonText,
  buttonLink,
  buttonColor = 'green',
  onButtonClick,
  className = '',
}) => {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`relative flex flex-col items-center pt-32 pb-32 w-full text-base min-h-[681px] max-md:px-5 max-md:pb-24 max-md:max-w-full max-md:pt-20 max-md:min-h-[500px] ${className}`}
    >
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src={image}
          alt={t('hero.alt')}
          className="object-cover absolute inset-0 size-full"
        />
        <div className={`absolute inset-0 ${overlayColor} ${overlayOpacity}`}></div>
      </motion.div>

      <div className="flex flex-col items-start px-20 w-full z-10 max-md:px-5 max-lg:px-10">
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`mt-14 mr-24 text-7xl font-bold leading-snug ${titleColor} max-md:mt-10 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl max-lg:text-5xl max-lg:mr-12`}
        >
          {title}
        </motion.h1>
        <motion.p 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-1 text-lg text-white w-[827px] max-md:max-w-full max-lg:w-full"
        >
          {description}
        </motion.p>
        {buttonText && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full max-md:flex max-md:justify-center"
          >
            <Link to={buttonLink}>
              <Button
                variant="filled"
                color={buttonColor}
                onClick={onButtonClick}
                className="px-5 py-2.5 mt-12 font-semibold rounded-lg max-md:mt-8 max-md:w-full max-md:max-w-[300px]"
              >
                {buttonText}
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default HeroSection;