"use client";
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/Hero';
import ServicesShowcase from '../components/ServiceShowcase';
import ApproachSection from '../components/Approach';
import WhyChooseUs from '../components/WhyChooseUs';
import ServicesFooter from '../components/Footer';
import CTA from '../components/CTA';
import sectionHero from '../assets/images/service_Hero.jpg';
import PageLayout from '../components/PageLayout';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <main className="flex overflow-hidden flex-col bg-white">
        <Header/>
        <HeroSection
          image={sectionHero}
          overlayColor="bg-green-950"
          overlayOpacity="opacity-40"
          title={t('services.hero')}
          titleColor="text-green-500"
          description={t('services.hero.desc')}
          buttonText={t('cta.contact')}
          buttonLink="/contact"
          buttonColor="green"
        />
        <ServicesShowcase />
        <ApproachSection />
        <WhyChooseUs />
        <CTA 
          title={t('cta.collaborate_africa')} 
          callToAction={t('cta.discuss')} 
          image="https://cdn.builder.io/api/v1/image/assets/TEMP/fd4d16ff4f8b8e9adb87a787b040fb855d13134b?placeholderIfAbsent=true&apiKey=fc2b18f8aa35478bb94d2d55f863feab"
        />
        <ServicesFooter />
      </main>
    </PageLayout>
  );
};

export default Services;