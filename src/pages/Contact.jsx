"use client";
import React from 'react';
import Header from '../components/Header';
import ServicesFooter from '../components/Footer';
import HeroSection from '../components/Hero';
import sectionHero from '../assets/images/contact_Hero.jpg';
import ContactSection from '../components/ContactSection';
import PageLayout from '../components/PageLayout';

const Contact = () => {
    return (
      <PageLayout>
        <main className="flex overflow-hidden flex-col bg-white">
          <Header/>
          <HeroSection
              image={sectionHero}
              overlayColor="bg-blue-950"
              overlayOpacity="opacity-40"
              title="Contactez nous pour commencer votre voyage"
              titleColor="text-blue-500"
              description="Que vous ayez une question sur notre fonctionnalité, les tarifs des services ou toute autre chose, notre équipe est prête à répondre à toutes vos questions"
              buttonText="Nous Rejoindre"
              buttonColor="blue"
          />
          <ContactSection/>
          <ServicesFooter />
        </main>
      </PageLayout>
    );
};

export default Contact;