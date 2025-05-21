"use client";
import React from 'react';
import Header from '../components/Header';
import ServicesHero from '../components/ServiceHero';
import ServicesShowcase from '../components/ServiceShowcase';
import ApproachSection from '../components/Approach';
import WhyChooseUs from '../components/WhyChooseUs';
import ServicesFooter from '../components/Footer';
import Button from '../components/Button';

const Services = () => {
  return (
    <main className="flex overflow-hidden flex-col bg-white">
      <Header/>
      <ServicesHero />
      <ServicesShowcase />
      <ApproachSection />
      <WhyChooseUs />
      <section className="flex flex-col justify-center items-center px-20 py-24 mb-18 w-full min-h-[453px] max-md:px-5 max-md:pt-24 max-md:max-w-full" style={{ backgroundImage: "url('https://cdn.builder.io/api/v1/image/assets/TEMP/fd4d16ff4f8b8e9adb87a787b040fb855d13134b?placeholderIfAbsent=true&apiKey=fc2b18f8aa35478bb94d2d55f863feab')"}}>
        <div className="flex relative flex-col max-w-full w-[976px]">
          <h2 className="text-6xl font-bold text-center text-white max-md:max-w-full max-md:text-4xl">
            Prêts à donner vie à vos idées avec TNK ?
          </h2>
          <Button variant="bordered" color="white" className='self-center mt-11'>
            Discutons de votre projet
          </Button>
        </div>
      </section>
      <ServicesFooter />
    </main>
  );
};

export default Services;
