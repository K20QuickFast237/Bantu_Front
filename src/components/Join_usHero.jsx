"use client";
import React from 'react';
import Button from './Button';
import sectionHero from '../assets/images/join1.jpg';
import Join_us from '../pages/Join_us';

const Join_usHero = () => {
  return (
   <>
    <section className="flex relative flex-col items-center pt-32 pb-32 w-full text-base min-h-[681px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <div className="absolute inset-0 w-full h-full">
        <img
          src={sectionHero}
          alt="Header background"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="absolute inset-0"></div>
      </div>
      
      <div className="flex flex-col items-start px-20 w-full z-10 max-md:px-5">
        <div className="mt-14 mr-24 text-7xl font-bold leading-snug text-white max-md:mt-10 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">
          Faites un travail <br /> qui compte
        </div>
        <p className="mt-8 text-xl font-medium text-white w-[600px] max-md:max-w-full">
          Chez TNK synergie , nous cherchons constamment à exploiter la technologie
           pour améliorer la vie de millions de personnes. Rejoignez-nous et faites un travail qui compte.  </p>
        <p className='mt-14 text-2xl font-bold text-white w-[827px] max-md:max-w-full'>Rejoignez-nous et travaillez chez TNK _SYNERGIES_LTD</p>
      </div>
    </section>
    <div className='w-full h-6 bg-[#33C12B]'></div>
   </>
  );
};

export default Join_usHero;