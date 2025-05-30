import React from 'react';
import { motion } from 'framer-motion';
import devT from '../assets/images/devTech.svg';
import aut from '../assets/images/aut.svg';
import incu from '../assets/images/incub.svg';
import cons from '../assets/images/cons.svg';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({
  icon,
  title,
  description,
  variant = 'default',
  className = ''
}) => {
  const isgradient = variant === 'gradient';

  return (
    <motion.article 
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`flex flex-col items-start px-10 pt-10 pb-4 w-full h-[320px] text-base font-semibold rounded-3xl ${
        isgradient ? 'text-white bg-gradient-to-br from-sky-600 to-blue-100' : 'bg-white'
      } ${className}`}
    >
      <motion.img
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
        src={icon}
        alt={`${title} icon`}
        className="object-contain w-20 aspect-square"
      />
      <h3 className={`mt-2.5 text-2xl line-clamp-2 ${
        isgradient ? 'text-white' : 'text-neutral-800'
      }`}>
        {title}
      </h3>
      <p className={`font-normal mt-2.5 line-clamp-3 flex-grow ${
        isgradient ? 'text-white' : 'text-gray-500'
      }`}>
        {description}
      </p>
      <motion.div 
        whileHover={{ x: 10 }}
        className={`flex gap-3.5 mt-8 uppercase cursor-pointer ${
          isgradient ? 'text-white' : 'text-sky-600'
        }`}
      >
        <span className="grow">En savoir plus</span>
        <ArrowRight 
          className={`object-contain shrink-0 my-auto aspect-[1/1] w-[25px] ${
            isgradient ? 'fill-white' : 'fill-sky-600'
          }`} 
        />
      </motion.div>
    </motion.article>
  );
};

const ServicesShowcase = () => {
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

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 lg:px-20 py-10 md:py-20 mt-1 w-full bg-gray-50"
    >
      <div className="flex flex-col w-full max-w-[1217px] max-md:max-w-full">
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap gap-4 sm:gap-8 self-center max-w-full text-lg sm:text-xl font-semibold text-sky-600 uppercase w-full sm:w-[498px]"
        >
          <div className="shrink-0 my-auto h-px bg-sky-600 border border-sky-600 border-solid w-[100px] sm:w-[170px]" />
          <h2 className="flex-auto text-sky-600 w-[200px] sm:w-[264px]">
            Services que nous offrons
          </h2>
        </motion.div>
        <motion.h3 
          variants={itemVariants}
          className="self-center mt-8 sm:mt-14 text-3xl sm:text-4xl md:text-4xl font-bold text-center capitalize text-neutral-800 w-full sm:w-[854px]"
        >
          explorez notre gamme complète de services conçus pour élever vos projets.
        </motion.h3>

        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-8 sm:mt-14"
        >
          <motion.div variants={itemVariants}>
            <ServiceCard
              icon={devT}
              title="Développement Tech"
              description="Solutions numériques adaptées aux besoins locaux."
              variant="gradient"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ServiceCard
              icon={incu}
              title="Incubation"
              description="Accompagnement des startups et projets innovants."
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ServiceCard
              icon={cons}
              title="Conseil & Assistance "
              description="Développement commercial, transformation digitale et stratégie de recrutement."
            />
          </motion.div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-4 sm:mt-6"
        >
          <motion.div variants={itemVariants}>
            <ServiceCard
              icon={aut}
              title="Autonomisation"
              description="Nous créons des initiatives pour renforcer les capacités locales."
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ServiceCard
              icon=""
              title="BantuHire"
              description="Mise en relation des demandeurs d'emploi avec les employeurs et création de réseaux professionnels structurés."
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ServiceCard
              icon=""
              title="BantuMarket"
              description="Plateforme e-commerce permettant les transactions B2B, B2C, C2C et C2B."
            />
          </motion.div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-4 sm:mt-6"
        >
          <motion.div variants={itemVariants}>
            <ServiceCard
              icon=""
              title="BantuLink SuperApp"
              description="Écosystème numérique central intégrant plusieurs services multisectoriels."
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesShowcase;
