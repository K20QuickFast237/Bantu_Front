import React from 'react';
import { motion } from 'framer-motion';
import service2 from '../assets/images/service2.jpg';
import { useTranslation } from 'react-i18next';

const ApproachStep = ({ number, title, description }) => (
  <motion.div 
    whileHover={{ x: 10 }}
    transition={{ type: "spring", stiffness: 300 }}
    className=""
  >
    <div className="flex gap-4 md:gap-9 self-start">
      <motion.span 
        whileHover={{ scale: 1.2 }}
        className="text-3xl md:text-4xl font-semibold text-sky-600"
      >
        {number}.
      </motion.span>
      <div className='flex flex-col gap-y-2'>
        <h3 className="flex-auto my-auto text-xl md:text-2xl font-medium text-neutral-800">
          {title}
        </h3>
        <p className="text-sm md:text-base text-black">
          {description}
        </p>
      </div>
    </div>
  </motion.div>
);

const ApproachSection = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const imageVariants = {
    hidden: { x: -100, opacity: 0 },
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
      className="self-center py-12 md:py-24 px-4 md:px-16 w-full"
    >
      <div className="flex flex-col md:flex-row gap-8 md:gap-5 items-center">
        <motion.div 
          variants={imageVariants}
          className="w-full md:w-[36%]"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            src={service2}
            alt={t('approach.image_alt')}
            className="h-[300px] md:h-[550px] w-full object-cover rounded-2xl md:rounded-3xl"
          />
        </motion.div>
        <div className="md:ml-5 w-full md:w-[64%]">
          <div className="flex flex-col self-stretch my-auto w-full">
            <motion.div 
              variants={itemVariants}
              className="flex gap-4 md:gap-8 self-start text-sm md:text-base font-semibold text-sky-600 uppercase whitespace-nowrap"
            >
              <div className="shrink-0 my-auto h-px bg-sky-600 border border-sky-600 border-solid w-[100px] md:w-[170px]" />
              <span className="text-sky-600">{t('approach.title')}</span>
            </motion.div>

            <motion.h2 
              variants={itemVariants}
              className="mt-3.5 text-3xl md:text-5xl font-bold text-black"
            >
              {t('approach.main_title')}
            </motion.h2>

            <motion.div 
              variants={containerVariants}
              className="flex flex-col gap-8 md:gap-16 mt-8 md:mt-10"
            >
              <motion.div variants={itemVariants}>
                <ApproachStep
                  number="01"
                  title={t('approach.step1.title')}
                  description={t('approach.step1.desc')}
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <ApproachStep
                  number="02"
                  title={t('approach.step2.title')}
                  description={t('approach.step2.desc')}
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <ApproachStep
                  number="03"
                  title={t('approach.step3.title')}
                  description={t('approach.step3.desc')}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ApproachSection;