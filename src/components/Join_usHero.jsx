"use client";
import React from 'react';
import sectionHero from '../assets/images/join1.jpg';
import { useTranslation } from 'react-i18next';

const Join_usHero = () => {
  const { t } = useTranslation();

  return (
   <>
    <section className="flex relative flex-col items-center pt-32 pb-32 w-full text-base min-h-[681px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <div className="absolute inset-0 w-full h-full">
        <img
          src={sectionHero}
          alt={t('join_us.hero.alt')}
          className="object-cover absolute inset-0 size-full"
        />
        <div className="absolute inset-0"></div>
      </div>
      
      <div className="flex flex-col items-start px-20 w-full z-10 max-md:px-5">
        <div className="mt-14 mr-24 text-7xl font-bold leading-snug text-white max-md:mt-10 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">
          {t('join_us.hero.title')}
        </div>
        <p className="mt-8 text-xl font-medium text-white w-[600px] max-md:max-w-full">
          {t('join_us.hero.description')}
        </p>
        <p className='mt-14 text-2xl font-bold text-white w-[827px] max-md:max-w-full'>
          {t('join_us.hero.subtitle')}
        </p>
      </div>
    </section>
    <div className='w-full h-6 bg-[#33C12B]'></div>
   </>
  );
};

export default Join_usHero;