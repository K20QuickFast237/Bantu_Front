"use client";
import React from 'react';
import Header from '../components/Header';
import ServicesHero from '../components/ServiceHero';
import ServicesShowcase from '../components/ServiceShowcase';
import ApproachSection from '../components/Approach';
import WhyChooseUs from '../components/WhyChooseUs';
import ServicesFooter from '../components/Footer';

import CTA from '../components/CTA';

const Services = () => {
  return (
    <main className="flex overflow-hidden flex-col bg-white">
      <Header/>
      <ServicesHero />
      <ServicesShowcase />
      <ApproachSection />
      <WhyChooseUs />
      <CTA title="Prêts à donner vie à vos idées avec TNK ?" callToAction=" Discutons de votre projet" image="https://cdn.builder.io/api/v1/image/assets/TEMP/fd4d16ff4f8b8e9adb87a787b040fb855d13134b?placeholderIfAbsent=true&apiKey=fc2b18f8aa35478bb94d2d55f863feab"/>
      <ServicesFooter />
    </main>
  );
};

export default Services;
