import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Code, Rocket, Users, ArrowRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import statsImage from '../assets/images/stats.jpg';
import pro1 from '../assets/images/aproject1.jpg';
import pro2 from '../assets/images/aproject2.jpeg';
import pro3 from '../assets/images/aproject3.jpeg';
import pro4 from '../assets/images/aproject4.jpeg';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import OptimizedImage from './OptimizedImage';

const SerStatPro = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ count1: 0, count2: 0, count3: 0, count4: 0 });
  const statsRef = useRef(null);

  const services = [
    {
      icon: <Code className="w-12 h-12 text-green-500" />,
      title: t('service.tech'),
      description: t('service.tech.desc')
    },
    {
      icon: <Rocket className="w-12 h-12 text-green-500" />,
      title: t('service.incubationa'),
      description: t('service.incubationa.desc')
    },
    {
      icon: <Users className="w-12 h-12 text-green-500" />,
      title: t('service.consulting'),
      description: t('service.consulting.desc')
    }
  ];

  const stats = [
    { number: 50, suffix: "+", label: t('stats.projects'), key: "count1" },
    { number: 20000, suffix: "+", label: t('stats.beneficiaries'), key: "count2", format: "k" },
    { number: 15, suffix: "", label: t('stats.partnerships'), key: "count3" },
    { number: 10, suffix: "", label: t('stats.countries'), key: "count4" }
  ];

  // Animation du compteur
  const animateCount = (target, key, duration = 2000, format = null) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      
      setCounts(prev => ({
        ...prev,
        [key]: Math.floor(current)
      }));
    }, 16);
  };

  // Observer pour détecter quand la section stats est visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Démarrer les animations avec des délais échelonnés
          setTimeout(() => animateCount(50, 'count1'), 200);
          setTimeout(() => animateCount(20, 'count2'), 400);
          setTimeout(() => animateCount(15, 'count3'), 600);
          setTimeout(() => animateCount(10, 'count4'), 800);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [isVisible]);

  // Fonction pour formater les nombres
  const formatNumber = (num, format, suffix) => {
    if (format === 'k') {
      return `${num}k${suffix}`;
    }
    return `${num}${suffix}`;
  };

  const projects = [
    {
      title: t('project.bantulink'),
      description: t('project.bantulink.desc'),
      image: pro1,
      alt: t('project.bantulink.alt'),
      gradient: "from-blue-500 to-blue-10"
    },
    {
      title: t('project.bantuhire'),
      description: t('project.bantuhire.desc'),
      image: pro2,
      alt: t('project.bantuhire.alt'),
      gradient: "from-blue-500 to-blue-10"
    },
    {
      title: t('project.bantumarket'),
      description: t('project.bantumarket.desc'),
      image: pro3,
      alt: t('project.bantumarket.alt'),
      gradient: "from-blue-500 to-blue-10"
    },
    {
      title: t('project.mech'),
      description: t('project.mectn.desc'),
      image: pro4,
      alt: t('project.mech.alt'),
      gradient: "from-blue-500 to-blue-10"
    }
  ];

  // Variants d'animation pour Framer Motion
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
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const polygonVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.3,
      rotate: -10
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "backOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const floatVariants = {
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const projectVariants = {
    hidden: { 
      opacity: 0, 
      x: -100,
      rotateY: -15
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="bg-gray-50 py-8 md:py-16">
      {/* Services Section */}
      <div className="mx-4 md:mx-8 lg:mx-20">
        <motion.div 
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
          >
              {t('services.title')}
          </motion.h2>
          <motion.p 
              className="text-green-500 max-w-xl mx-auto leading-relaxed text-sm md:text-base px-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
          >
            {t('services.description')}
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="relative flex justify-center"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              {/* Polygone Container */}
              <motion.div 
                className="relative w-full max-w-sm mx-auto h-80 md:h-96 cursor-pointer"
                variants={polygonVariants}
                whileHover="hover"
                animate="animate"
                custom={index}
              >
                {/* Forme polygonale avec CSS clip-path */}
                <motion.div 
                  className="absolute inset-0 bg-white"
                  style={{
                    clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 99%, 0 75%, 0 25%)'
                  }}
                  variants={floatVariants}
                  animate="animate"
                  whileHover={{
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    transition: { duration: 0.3 }
                  }}
                  transition={{ delay: index * 0.8 }}
                />
                
                {/* Contenu */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8 py-12">
                  <motion.div 
                    className="flex justify-center mb-6"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 360,
                      transition: { duration: 0.5 }
                    }}
                  >
                    {service.icon}
                  </motion.div>
                  <motion.h3 
                    className="text-xl font-semibold text-gray-900 mb-4"
                    whileHover={{ color: "#10b981" }}
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600 text-sm leading-relaxed mb-6"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {service.description}
                  </motion.p>
                  <motion.button 
                    className="text-green-500 font-medium text-sm flex items-center justify-center"
                    whileHover={{ 
                      scale: 1.1,
                      color: "#059669"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t('services.card.learn_more')}
                    <motion.div
                      animate={{ y: [0, 5, 0] }}
                      transition={{ 
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </motion.div>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Stats Section */}
      <div ref={statsRef} className="relative bg-gray-800 overflow-hidden mb-12 md:mb-20">
        <OptimizedImage src={statsImage} alt={t('stats.image_alt')} className="absolute inset-0 object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-700 opacity-80"></div>
        <div className="relative px-4 md:px-8 py-6 md:py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col text-center gap-2 md:gap-4">
                <div className="text-2xl md:text-4xl lg:text-6xl font-bold text-green-400 mb-1 md:mb-2">
                  {formatNumber(counts[stat.key], stat.format, stat.suffix)}
                </div>
                <div className="text-white text-xs md:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="mx-4 md:mx-8 lg:mx-20">
        <motion.div 
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {t('projects.title')}
          </motion.h2>
          <motion.p 
            className="text-blue-500 max-w-xl mx-auto text-sm md:text-base px-4"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {t('projects.description')}
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="group cursor-pointer"
              variants={projectVariants}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="relative overflow-hidden rounded-lg shadow-lg"
                whileHover={{
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div className="aspect-video overflow-hidden">
                  <OptimizedImage 
                    src={project.image} 
                    alt={project.alt}
                    className="w-full h-full object-cover"
                    whileHover={{ 
                      scale: 1.2,
                      transition: { duration: 0.5 }
                    }}
                  />
                </motion.div>
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-80`}
                  whileHover={{ opacity: 0.6 }}
                />
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-6 text-white"
                  initial={{ y: 20, opacity: 0.8 }}
                  whileHover={{ y: 0, opacity: 1 }}
                >
                  <motion.h3 
                    className="text-xl font-semibold mb-3"
                    whileHover={{ x: 10 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p 
                    className="text-sm text-gray-100 leading-relaxed opacity-90"
                    whileHover={{ opacity: 1 }}
                  >
                    {project.description}
                  </motion.p>
                </motion.div>
                <motion.div 
                  className="absolute top-4 right-4"
                  initial={{ opacity: 0, rotate: -90 }}
                  whileHover={{ 
                    opacity: 1, 
                    rotate: 0,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div
                    animate={{ 
                      x: [0, 5, 0],
                      transition: { 
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    <ArrowRight className="w-5 h-5 text-white" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/projets">
            <motion.button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium inline-flex items-center"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(37, 99, 235, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {t('projects.view_all')}
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ 
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.div>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default SerStatPro;