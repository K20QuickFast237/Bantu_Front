import React, { useState } from 'react';
import BlogHero from '../components/BlogHero';
import PLR from '../components/PLR';
import Header from '../components/Header';
import BlogListing from '../components/Allblog';
import CTA from "../components/CTA";
import blogCTA from "../assets/images/blogCTA.jpg";
import Testimonials from '../components/Testimonials';
import PageLayout from "../components/PageLayout";
import ServicesFooter from "../components/Footer";
import { useTranslation } from 'react-i18next';

function Blog() {
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <PageLayout>
        <Header />
        <BlogHero searchValue={searchValue} setSearchValue={setSearchValue} />
        <PLR />
        <BlogListing searchValue={searchValue} />
        <CTA 
          title={t('cta.collaborate_africa')} 
          color="white" 
          callToAction={t('cta.contact')} 
          image={blogCTA} 
        />
        <Testimonials />
        <ServicesFooter />   
      </PageLayout>
    </>
  );
}

export default Blog;