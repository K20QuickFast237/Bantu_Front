import React from 'react';
import { useTranslation } from 'react-i18next';
import Logo from '../assets/images/logo.svg';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import Button from './Button';
import NewLetter from '../assets/images/NewLetter.png';
import { motion } from 'framer-motion';

const NewsletterSection = () => {
  const { t } = useTranslation();

  return (
    <section className="self-center mt-25 max-w-full rounded-[30px] px-20 max-md:px-5 max-md:mt-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex gap-5 max-md:flex-col bg-gradient-to-br from-[#33C12B] to-green-600 h-[300px] max-md:h-auto rounded-l-[30px] rounded-tr-[30px]"
      >
        <div className="w-[69%] max-md:w-full">
          <div className="flex flex-col px-20 py-16 w-full max-md:px-5 max-md:py-10 max-md:mt-10 max-md:max-w-full">
            <h2 className="text-4xl font-semibold text-white leading-tight max-md:text-2xl max-md:max-w-full">
              {t('footer.newsletter.title')}
            </h2>
            <form className="flex justify-between py-2 pr-3 pl-9 mt-12 w-full bg-white rounded-2xl max-md:flex-col max-md:gap-4 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
              <input
                type="email"
                placeholder={t('footer.newsletter.placeholder')}
                className="my-auto text-lg text-gray-600 bg-transparent outline-none w-[80%] max-md:w-full"
              />
              <Button variant="filled" color="green" type="submit" className="max-md:w-full">
                {t('footer.newsletter.submit')}
              </Button>
            </form>
          </div>
        </div>
        <div className="ml-6 w-[27.5%] max-md:hidden">
          <img
            src={NewLetter}
            alt={t('footer.newsletter.alt')}
            className="mt-[-189px]"
          />
        </div>
      </motion.div>
    </section>
  );
};

const Footer = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="flex flex-col items-start px-20 mt-10 w-full bg-[#3974EA] max-md:px-5">
      <div className="z-10 mt-0 w-full py-20 max-md:py-10">
        <div className="flex gap-20 max-md:flex-col max-md:gap-10">
          <div className="w-[50%] h-full bg-white/20 backdrop-blur-lg rounded-lg px-16 py-8 space-y-6 max-md:w-full max-md:px-8">
            <img
              src={Logo}
              alt={t('footer.logo.alt')}
              className="w-[40%] cursor-pointer mix-blend-multiply max-md:w-[60%]"
              onClick={scrollToTop}
            />
            <p className="text-sm text-white">
              {t('footer.description')}
            </p>
          </div>
          
          <nav className="ml-5 w-[50%] max-md:ml-0 max-md:w-full">
            <div className="grid grid-cols-2 justify-between items-start max-md:grid-cols-2 max-md:justify-between">
              <div className="w-[50%] max-md:w-full">
                <div className="flex flex-col mt-1.5 text-sm text-white max-md:mt-10">
                  <h3 className="text-lg font-medium text-white max-md:mr-1.5">
                    {t('footer.info.title')}
                  </h3>
                  <motion.a 
                    whileHover={{ x: 5, color: "#33C12B" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    href="#" 
                    className="self-start mt-8 max-md:mt-4"
                  >
                    {t('footer.info.faq')}
                  </motion.a>
                  <motion.a 
                    whileHover={{ x: 5, color: "#33C12B" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    href="/blog" 
                    className="mt-2.5"
                  >
                    {t('footer.info.blog')}
                  </motion.a>
                  <motion.a 
                    whileHover={{ x: 5, color: "#33C12B" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    href="#" 
                    className="self-start mt-2.5"
                  >
                    {t('footer.info.support')}
                  </motion.a>
                </div>
              </div>
              <div className="w-[50%] max-md:w-full">
                <div className="flex flex-col mt-1.5 text-sm text-white max-md:mt-10">
                  <h3 className="text-lg font-medium text-white max-md:mr-1.5">
                    {t('footer.links.title')}
                  </h3>
                  <motion.a 
                    whileHover={{ x: 5, color: "#33C12B" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    href="/about" 
                    className="mt-3"
                  >
                    {t('footer.links.about')}
                  </motion.a>
                  <motion.a 
                    whileHover={{ x: 5, color: "#33C12B" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    href="/projets" 
                    className="mt-2.5"
                  >
                    {t('footer.links.projects')}
                  </motion.a>
                  <motion.a 
                    whileHover={{ x: 5, color: "#33C12B" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    href="/services" 
                    className="mt-2.5"
                  >
                    {t('footer.links.services')}
                  </motion.a>
                  <motion.a 
                    whileHover={{ x: 5, color: "#33C12B" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    href="/contact" 
                    className="mt-2.5"
                  >
                    {t('footer.links.contact')}
                  </motion.a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className="flex shrink-0 self-center max-w-full h-px bg-white/20 w-full max-md:mt-10" />

      <nav className="flex justify-between items-center w-full py-10 max-md:flex-col max-md:gap-6">
        <div className='flex gap-10 max-md:flex-col max-md:gap-4 max-md:items-center'>
          <motion.a 
            whileHover={{ scale: 1.05, color: "#33C12B" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            href="#" 
            className="text-white"
          >
            {t('footer.footerLinks.terms')}
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05, color: "#33C12B" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            href="#" 
            className="text-white"
          >
            {t('footer.footerLinks.privacy')}
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05, color: "#33C12B" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            href="#" 
            className="text-white"
          >
            {t('footer.footerLinks.cookies')}
          </motion.a>
        </div>
        <div className='flex gap-6 text-white'>
          <motion.div 
            whileHover={{ scale: 1.1, backgroundColor: "white", color: "#3974EA" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className='w-8 h-8 rounded-full border-1 border-white flex flex-col justify-center items-center cursor-pointer'
          >
            <FaFacebookF />
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.1, backgroundColor: "white", color: "#3974EA" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className='w-8 h-8 rounded-full border-1 border-white flex flex-col justify-center items-center cursor-pointer'
          >
            <FaLinkedinIn />
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.1, backgroundColor: "white", color: "#3974EA" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className='w-8 h-8 rounded-full border-1 border-white flex flex-col justify-center items-center cursor-pointer'
          >
            <FaTwitter />
          </motion.div>
        </div>
      </nav>

      <motion.div 
        onClick={() => window.open('https://wa.me/+237671526369', '_blank')}
        whileHover={{ scale: 1.1, backgroundColor: "#33C12B" }}
        whileTap={{ scale: 0.95 }}
        transition={{ 
          type: "spring",
          stiffness: 400,
          damping: 10
        }}
        className='fixed bottom-32 right-8 flex items-center group z-40'
      >
        <div className='bg-white text-green-500 px-4 py-2 rounded-lg cursor-pointer shadow-lg mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap'>
          {t('footer.contact.chat')}
        </div>
        <div className='w-12 h-12 rounded-full bg-green-500 shadow-lg flex flex-col justify-center items-center cursor-pointer'>
          <FaWhatsapp className='text-white text-3xl' />
        </div>
      </motion.div>
    </footer>
  );
};

const ServicesFooter = () => {
  return(
    <>
      <NewsletterSection/>
      <Footer/>
    </>
  );
};

export default ServicesFooter;