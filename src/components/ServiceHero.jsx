"use client";
import React from 'react';
import Button from './Button';
import sectionHero from '../assets/images/service_Hero.jpg';

const ServicesHero = () => {
  return (
    <section className="flex relative flex-col items-center pt-32 pb-32 w-full text-base min-h-[681px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <div className="absolute inset-0 w-full h-full">
        <img
          src={sectionHero}
          alt="Header background"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="absolute inset-0 bg-green-900 opacity-40"></div>
      </div>
      
      <div className="flex flex-col items-start px-20 w-full z-10 max-md:px-5">
        <div className="mt-14 mr-24 text-7xl font-bold leading-snug text-green-500 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">
          Nos Services pour accompagner votre innovation
        </div>
        <p className="mt-1 text-lg text-white w-[827px] max-md:max-w-full">
          TNK Synergies propose des solutions sur mesure pour répondre aux enjeux technologiques et sociaux de l'Afrique.
        </p>
        <Button 
          variant="filled" 
          color="green" 
          className='px-5 py-2.5 mt-12 font-semibold rounded-lg'
        >
          Nous contacter
        </Button>
      </div>
    </section>
  );
};

export default ServicesHero;