import React from 'react';
import { motion } from 'framer-motion';

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
      className={`flex flex-col items-start px-10 pt-10 pb-4 w-full text-base font-semibold rounded-3xl ${
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
      <h3 className={`mt-2.5 text-2xl ${
        isgradient ? 'text-white' : 'text-neutral-800'
      }`}>
        {title}
      </h3>
      <p className={`font-normal mt-2.5 ${
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
        <img
          src={isgradient ? "https://cdn.builder.io/api/v1/image/assets/TEMP/6c4add3c62eec96966a6e88cb099a7dc7ae4ad0f?placeholderIfAbsent=true&apiKey=fc2b18f8aa35478bb94d2d55f863feab" : "https://cdn.builder.io/api/v1/image/assets/TEMP/2721cc9bce8f85e4129db62b89833e6aafd3d731?placeholderIfAbsent=true&apiKey=fc2b18f8aa35478bb94d2d55f863feab"}
          alt="Arrow icon"
          className={`object-contain shrink-0 my-auto aspect-[1/1] w-[15px] ${
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
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/5e983adaf13233615cbc2737e0ea06a719d17a72?placeholderIfAbsent=true&apiKey=fc2b18f8aa35478bb94d2d55f863feab"
              title="Développement Tech"
              description="Solutions numériques adaptées aux besoins locaux."
              variant="gradient"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ServiceCard
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/0f1bcb7106489ec19f016c9c371758a571a316dd?placeholderIfAbsent=true&apiKey=fc2b18f8aa35478bb94d2d55f863feab"
              title="Incubation"
              description="Accompagnement des startups et projets innovants."
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ServiceCard
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/0f453f1386e1cf6fd38ebed2a6e0db57c5859895?placeholderIfAbsent=true&apiKey=fc2b18f8aa35478bb94d2d55f863feab"
              title="Conseil"
              description="Expertise stratégique pour réussir vos initiatives."
            />
          </motion.div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-4 sm:mt-6"
        >
          <motion.div variants={itemVariants}>
            <ServiceCard
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/02ea8388d48d173c2b980bbeba5e4222761422db?placeholderIfAbsent=true&apiKey=fc2b18f8aa35478bb94d2d55f863feab"
              title="Autonomisation"
              description="Nous créons des initiatives pour renforcer les capacités locales."
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ServiceCard
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/02ea8388d48d173c2b980bbeba5e4222761422db?placeholderIfAbsent=true&apiKey=fc2b18f8aa35478bb94d2d55f863feab"
              title="Autonomisation"
              description="Nous créons des initiatives pour renforcer les capacités locales."
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ServiceCard
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/02ea8388d48d173c2b980bbeba5e4222761422db?placeholderIfAbsent=true&apiKey=fc2b18f8aa35478bb94d2d55f863feab"
              title="Autonomisation"
              description="Nous créons des initiatives pour renforcer les capacités locales."
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesShowcase;
