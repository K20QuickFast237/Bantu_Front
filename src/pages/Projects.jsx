"use client";
import React from 'react';
import Header from '../components/Header';
import ServicesFooter from '../components/Footer';
import CTA from '../components/CTA';
import HeroSection from '../components/Hero';
import sectionHero from '../assets/images/projet_Hero.jpg';
import ProjectsSection from '../components/projectSection';
import PageLayout from '../components/PageLayout';
import servicesCTA from '../assets/images/servicesCTA.jpg';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <main className="flex overflow-hidden flex-col bg-white">
        <Header />
        <HeroSection
          image={sectionHero}
          overlayColor="bg-blue-950"
          overlayOpacity="opacity-40"
          title={t('projects.hero.title')}
          titleColor="text-blue-500"
          description={t('projects.hero.description')}
          buttonText={t('projects.hero.button')}
          buttonLink="/contact"
          buttonColor="blue"
        />
        <section className='bg-gray-50'>
          <section className='flex flex-col justify-center mx-4 md:mx-10 lg:mx-20 px-4 md:px-10 lg:px-20 py-8 md:py-12 lg:h-[150px] bg-gradient-to-br from-blue-500 to-blue-900 rounded-b-3xl'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4'>
              <div className='flex flex-col gap-4 md:gap-6 items-center'>
                <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold text-[#FFC300]'>50+</h1>
                <p className='text-sm md:text-md text-white text-center'>{t('projects.stats.projects')}</p>
              </div>
              <div className='flex flex-col gap-4 md:gap-6 items-center'>
                <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold text-[#FFC300]'>20 000+</h1>
                <p className='text-sm md:text-md text-white text-center'>{t('projects.stats.beneficiaries')}</p>
              </div>
              <div className='flex flex-col gap-4 md:gap-6 items-center'>
                <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold text-[#FFC300]'>15</h1>
                <p className='text-sm md:text-md text-white text-center'>{t('projects.stats.partners')}</p>
              </div>
            </div>
          </section>
        </section>
        <ProjectsSection />
        <CTA title={t('cta.collaborate')} callToAction={t('cta.contact')} image={servicesCTA} />
        <ServicesFooter />
      </main>
    </PageLayout>
  );
};

export default Projects;