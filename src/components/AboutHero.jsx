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
      
      <div className="flex flex-col items-start px-20 w-full z-10 max-md:px-5">
        <div class="bg-blue-500 text-white mt-14 font-bold text-4xl px-17 py-6 transform -skew-x-12">
            <span class="transform text-5xl  skew-x-12 block">About us</span>
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