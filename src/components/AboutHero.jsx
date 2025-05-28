"use client";
import React from 'react';
import Button from './Button';
import sectionHero from '../assets/images/About1.png';

const AboutHero = () => {
  return (
    <section className="flex relative flex-col items-center pt-32 pb-32 w-full text-base     max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <div className="absolute inset-0 w-full h-full">
        <img
          src={sectionHero}
          alt="Header background"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="absolute inset-0 bg-gray-800 opacity-40"></div>
      </div>
      
          <div className="flex flex-col items-start w-full px-5 md:px-20 z-10">
      <div className="bg-blue-500 text-white mt-10 md:mt-14 font-bold text-2xl md:text-4xl px-6 md:px-12 py-4 md:py-6 transform -skew-x-12">
        <span className="transform skew-x-12 block text-3xl md:text-5xl">About us</span>
      </div>
        <p className="mt-10 text-justify text-lg font-medium text-lime-600 w-[827px] max-md:max-w-full">
           TNK Synergies Ltd est une entreprise dynamique, axée sur l’innovation, engagée à transformer les idées en projets à fort impact. Fondée avec une vision audacieuse de servir les communautés camerounaises et africaines, TNK Synergies se consacre à la création de solutions technologiques 
           et au lancement de projets progressifs visant à améliorer la qualité de vie et à promouvoir un développement durable.
        </p>

      </div>
    </section>
  );
};

export default AboutHero;