"use client";
import React from 'react';
import Header from '../components/Header';
import ServicesFooter from '../components/Footer';
import CTA from '../components/CTA';
import HeroSection from '../components/Hero';
import sectionHero from '../assets/images/projet_Hero.jpg';
import ProjectsSection from '../components/projectSection';


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
        <main className='bg-gray-50'>
            <section className='flex flex-col justify-center mx-20 px-20 h-[150px] bg-gradient-to-br from-blue-500 to-blue-900 rounded-b-3xl'>
                <div className='flex justify-between items-center'>
                    <div className='flex flex-col gap-6 items-center'>
                        <h1 className='text-7xl font-bold text-[#FFC300]'>50+</h1>
                        <p className='text-md text-white'>projets menés à bien</p>
                    </div>
                    <div className='flex flex-col gap-6 items-center'>
                        <h1 className='text-7xl font-bold text-[#FFC300]'>20 000+</h1>
                        <p className='text-md text-white'>bénéficiaires directs</p>
                    </div>
                    <div className='flex flex-col gap-6 items-center'>
                        <h1 className='text-7xl font-bold text-[#FFC300]'>15</h1>
                        <p className='text-md text-white'>organisations partenaires</p>
                    </div>
                </div>
            </section>
        </main>
        <ProjectsSection/>
        <CTA title="Vous souhaitez collaborer avec nous sur de nouveaux projets ?" callToAction=" Contactez-nous" image="https://cdn.builder.io/api/v1/image/assets/TEMP/fd4d16ff4f8b8e9adb87a787b040fb855d13134b?placeholderIfAbsent=true&apiKey=fc2b18f8aa35478bb94d2d55f863feab"/>
        <ServicesFooter />
      </main>
    );
};

export default Projects;