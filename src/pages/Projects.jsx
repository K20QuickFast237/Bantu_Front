"use client";
import React from 'react';
import Header from '../components/Header';
import ServicesHero from '../components/ServiceHero';
import ServicesFooter from '../components/Footer';
import CTA from '../components/CTA';
import HeroSection from '../components/Hero';
import sectionHero from '../assets/images/projet_Hero.jpg'


const Projects = () => {
    return (
      <main className="flex overflow-hidden flex-col bg-white">
        <Header/>
        <HeroSection
            image={sectionHero}
            overlayColor="bg-blue-950"
            overlayOpacity="opacity-40"
            title="Découvrez nos projets à fort impact"
            titleColor="text-blue-500"
            description="TNK Synergies développe des initiatives technologiques et communautaires pour répondre aux besoins des populations africaines. Voici nos projets phares."
            buttonText="Nous contacter"
            buttonColor="blue"
        />
        {/* <ServicesHero /> */}
        <CTA title="Prêts à donner vie à vos idées avec TNK ?" callToAction=" Discutons de votre projet" image="https://cdn.builder.io/api/v1/image/assets/TEMP/fd4d16ff4f8b8e9adb87a787b040fb855d13134b?placeholderIfAbsent=true&apiKey=fc2b18f8aa35478bb94d2d55f863feab"/>
        <ServicesFooter />
      </main>
    );
};

export default Projects;