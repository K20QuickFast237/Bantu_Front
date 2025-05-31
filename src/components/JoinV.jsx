"use client";
import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../assets/images/j1.png';
import backgroundImage2 from '../assets/images/j2.png';
import backgroundImage3 from '../assets/images/j3.png';
import backgroundImage4 from '../assets/images/j4.png';
import backgroundImage5 from '../assets/images/j5.png';
import backgroundImage6 from '../assets/images/j6.png';
import { FileText, Clock, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function JoinV() {
  const { t } = useTranslation();

  const cards = [
    {
      image: backgroundImage,
      title: t('join_us.values.card1.title'),
      description: t('join_us.values.card1.desc')
    },
    {
      image: backgroundImage2,
      title: t('join_us.values.card2.title'),
      description: t('join_us.values.card2.desc')
    },
    {
      image: backgroundImage3,
      title: t('join_us.values.card3.title'),
      description: t('join_us.values.card3.desc')
    },
    {
      image: backgroundImage4,
      title: t('join_us.values.card4.title'),
      description: t('join_us.values.card4.desc')
    },
    {
      image: backgroundImage5,
      title: t('join_us.values.card5.title'),
      description: t('join_us.values.card5.desc')
    },
    {
      image: backgroundImage6,
      title: t('join_us.values.card6.title'),
      description: t('join_us.values.card6.desc')
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Première ligne de cartes */}
      <div className="w-full relative flex flex-wrap justify-center gap-8 mt-[-60px] px-4 md:px-20 z-auto">
        {cards.slice(0, 3).map((card, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${card.image})` }}
            className="w-[300px] h-[280px] border-white border-2 bg-center bg-no-repeat bg-cover flex flex-col justify-start pt-32 pl-10"
          >
            <p className="text-white font-semibold text-2xl">
              {card.title}
            </p>
            <p className="text-white text-lg pt-3">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      {/* Deuxième ligne de cartes */}
      <div className="w-full relative flex flex-wrap justify-center gap-8 mt-8 px-4 md:px-20 z-auto">
        {cards.slice(3, 6).map((card, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${card.image})` }}
            className="w-[300px] h-[280px] border-white border-2 bg-center bg-no-repeat bg-cover flex flex-col justify-start pt-32 pl-10"
          >
            <p className="text-white font-semibold text-2xl">
              {card.title}
            </p>
            <p className="text-white text-lg pt-3">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      {/* Section "Qu'est-ce que vous y gagnez ?" */}
      <div className="bg-green-100 py-16 px-4 md:px-20 mt-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-800 mb-12 text-left">
            {t('join_us.values.benefits.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <FileText className="w-10 h-10 text-white" />,
                text: t('join_us.values.benefits.item1')
              },
              {
                icon: <Clock className="w-10 h-10 text-white" />,
                text: t('join_us.values.benefits.item2')
              },
              {
                icon: <Users className="w-10 h-10 text-white" />,
                text: t('join_us.values.benefits.item3')
              },
              {
                icon: <FileText className="w-10 h-10 text-white" />,
                text: t('join_us.values.benefits.item4')
              }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <p className="text-lg text-gray-900 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default JoinV;