"use client";
import React from 'react';
import Button from './Button';
import sectionHero from '../assets/images/contact1.jpg';

const ContactHero = () => {
  return (
    <section className="flex relative flex-col items-center pt-32 pb-32 w-full text-base min-h-[681px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <div className="absolute inset-0 w-full h-full">
        <img
          src={sectionHero}
          alt="Header background"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="absolute inset-0 from-bg-green-900 to-bg-blue-300 opacity-40"></div>
      </div>
      
      <div className="flex flex-col items-start px-20 w-full z-10 max-md:px-5">
        <div className="mt-14 mr-24 text-7xl font-bold leading-snug text-blue-500 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">
          Contactez-nous pour <br/>commencer votre voyage
        </div>
        <p className="mt-1 text-lg text-white w-[827px] max-md:max-w-full">
         que vous ayez une question sur notre fonctionnalité, les tarifs des services ou toute autre chose, notre équipe est prête à répondre à toutes vos questions
        </p>
        <Button  
          className='border-2 px-5 py-2.5 mt-12 font-semibold rounded-lg'
        >
          Nous rejoindre
        </Button>
      </div>
  
    </section>
    
  );
};

export default ContactHero;