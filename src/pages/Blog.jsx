import React, { useState } from 'react';
import BlogHero from '../components/BlogHero';
import PLR from '../components/PLR';
import Header from '../components/Header';
import BlogListing from '../components/Allblog';
import CTAa from "../components/Ctab";
import ctaa from "../assets/images/ctaa.png";
import Testimonials from '../components/Testimonials';
import PageLayout from "../components/PageLayout";
import ServicesFooter from "../components/Footer";

function Blog() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
     <PageLayout >
        <Header />
        <BlogHero searchValue={searchValue} setSearchValue={setSearchValue} />
        <PLR />
        <BlogListing searchValue={searchValue} />
        <CTAa title="Pret a collaborer avec l'afrique ?" color="white" callToAction=" Nous contacter" image={ctaa} />
        <Testimonials />
        <ServicesFooter/>   
     </PageLayout>
    </>
  );
}

export default Blog;