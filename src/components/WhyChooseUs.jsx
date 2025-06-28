import React from 'react';
import { motion } from 'framer-motion';
import service3 from '../assets/images/service3.jpg';
import { useTranslation } from 'react-i18next';
import OptimizedImage from './OptimizedImage';

const BenefitCard = ({ icon, title, description, className = '', variant = 'default' }) => {
  const isgradient = variant === 'gradient';
  return (
    <motion.article 
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`flex flex-col grow items-start px-4 sm:px-6 md:px-8 py-4 h-[250px] sm:py-5 rounded-2xl sm:rounded-3xl ${
        isgradient ? 'text-white bg-gradient-to-br from-green-600 to-green-100' : 'bg-white'
      } ${className}`}
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        <OptimizedImage
          src={icon}
          alt={`${title} icon`}
          className="object-contain w-16 sm:w-20 aspect-square"
        />
      </motion.div>
      <h3 className={`mt-1.5 text-xl sm:text-2xl font-semibold line-clamp-2   ${
        isgradient ? 'text-white' : 'text-neutral-800'
      }`}>
        {title}
      </h3>
      <p className={`mt-2 sm:mt-3 text-sm sm:text-base line-clamp-3 ${
        isgradient ? 'text-white' : 'text-gray-500'
      }`}>
        {description}
      </p>
    </motion.article>
  );
};

const WhyChooseUs = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const imageVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="flex flex-col items-center px-4 sm:px-8 md:px-16 w-full bg-gray-50"
    >
      <div className="z-10 w-full max-w-[1220px]">
        <div className="flex flex-col lg:flex-row gap-5">
          <motion.div 
            variants={imageVariants}
            className="w-full lg:w-[36%] order-first lg:order-last"
          >
            <OptimizedImage
              src={service3}
              alt={t('why_choose_us.image_alt')}
              className="h-[300px] sm:h-[400px] lg:h-full w-full object-cover rounded-2xl"
            />
          </motion.div>
          <div className="w-full lg:w-[64%]">
            <div className="flex flex-col py-10 sm:py-16 md:py-20 self-stretch w-full">
              <motion.div 
                variants={itemVariants}
                className="flex gap-4 sm:gap-8 self-start text-sm sm:text-base font-semibold text-green-500 uppercase whitespace-nowrap"
              >
                <div className="shrink-0 my-auto h-px bg-green-500 border border-green-500 border-solid w-[100px] sm:w-[170px]" />
                <span className="text-green-500">{t('why_choose_us.choice')}</span>
              </motion.div>

              <motion.h2 
                variants={itemVariants}
                className="mt-3.5 text-3xl sm:text-4xl md:text-5xl font-bold text-black"
              >
                {t('why_choose_us')}
              </motion.h2>

              <motion.div 
                variants={containerVariants}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mt-8 sm:mt-10"
              >
                <motion.div variants={itemVariants}>
                  <BenefitCard
                    icon="https://cdn.builder.io/api/v1/image/assets/TEMP/6c361f521e740097394114f8965236c3cbc37339?placeholderIfAbsent=true&apiKey=fc2b18f8aa35478bb94d2d55f863feab"
                    title={t('benefit.africa')}
                    description={t('benefit.africa.desc')}
                    className="bg-white"
                    variant='gradient'
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <BenefitCard
                    icon="https://cdn.builder.io/api/v1/image/assets/TEMP/05a5d1060db28d6ffdebc45301e766f593a3d474?placeholderIfAbsent=true&apiKey=fc2b18f8aa35478bb94d2d55f863feab"
                    title={t('benefit.results')}
                    description={t('benefit.results.desc')}
                    className="bg-white"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <BenefitCard
                    icon="https://cdn.builder.io/api/v1/image/assets/TEMP/028385668d31043ed7acc6e439046be3be022a91?placeholderIfAbsent=true&apiKey=fc2b18f8aa35478bb94d2d55f863feab"
                    title={t('benefit.collaboration')}
                    description={t('benefit.collaboration.desc')}
                    className="bg-white"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <BenefitCard
                    icon="https://cdn.builder.io/api/v1/image/assets/TEMP/7b923bbd8d6deccee7ab56fc7a6b0abff3207d96?placeholderIfAbsent=true&apiKey=fc2b18f8aa35478bb94d2d55f863feab"
                    title={t('benefit.tech')}
                    description={t('benefit.tech.desc')}
                    className="bg-white"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;