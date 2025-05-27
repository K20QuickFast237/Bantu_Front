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
              buttonLink="/join_us"
              buttonColor="blue"
          />
          <ContactSection/>
          <div className="w-full bg-white pt-20 pr-20 pl-20 mb-20  h-96 rounded-lg overflow-hidden ">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d127353.98199467837!2d9.7121315!3d4.0587326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2scm!4v1748035696192!5m2!1sfr!2scm" 
              width="100%" 
              height="100%" 
              style={{border: 0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            />
          </div>
          <ServicesFooter />
        </main>
      </PageLayout>
    );
};

export default Contact;
