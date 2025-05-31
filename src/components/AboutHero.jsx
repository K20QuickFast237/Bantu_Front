"use client";
import React from 'react';
import Button from './Button';
import sectionHero from '../assets/images/About1.png';
import { useTranslation } from 'react-i18next';

const AboutHero = () => {
  const { t } = useTranslation();

  return (
    <section className="flex relative flex-col items-center pt-32 pb-32 w-full text-base max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <div className="absolute inset-0 w-full h-full">
        <img
          src={sectionHero}
          alt={t('about.hero.alt')}
          className="object-cover absolute inset-0 size-full"
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>
      
      <div className="flex flex-col items-start w-full px-5 md:px-20 z-10">
        <div className="bg-blue-500 text-white mt-10 md:mt-14 font-bold text-2xl md:text-4xl px-6 md:px-12 py-4 md:py-6 transform -skew-x-12">
          <span className="transform skew-x-12 block text-3xl md:text-5xl">{t('about.hero.title')}</span>
        </div>
        <p className="mt-10 text-justify text-lg font-medium text-lime-600 w-[827px] max-md:max-w-full">
          {t('about.hero.description')}
        </p>
      </div>
    </section>
  );
};

export default AboutHero;