import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Logo from '../assets/images/logo.svg';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaWhatsapp} from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import Button from './Button';
import NewLetter from '../assets/images/NewLetter.png';
import { motion } from 'framer-motion';
import OptimizedImage from './OptimizedImage';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';

const NewsletterSection = () => {
  const { t } = useTranslation();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email(t('validation.email_invalid'))
      .required(t('validation.email_required')),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm, setFieldError }) => {
    const loadingToast = toast.loading(t('toast.subscribing'));
    try {
      const response = await axios.post('http://localhost:8000/api/newsletter', values);

      toast.dismiss(loadingToast);
      toast.success(response.data.message || t('toast.subscribe_success'));
      resetForm();
    } catch (error) {
      toast.dismiss(loadingToast);
      if (error.response && error.response.status === 422) {
        // Gère les erreurs de validation de Laravel (ex: email déjà pris)
        const validationErrors = error.response.data.errors;
        if (validationErrors.email) {
          const errorMessage = validationErrors.email[0];
          setFieldError('email', errorMessage); // Affiche l'erreur sous le champ
          toast.error(errorMessage); // Affiche aussi un toast pour la visibilité
        } else {
          toast.error(t('toast.subscribe_error'));
        }
      } else {
        // Autres erreurs (serveur, réseau...)
        toast.error(t('toast.generic_error'));
      }
      console.error("Erreur lors de l'inscription à la newsletter:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="w-full px-20 max-md:px-5">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex gap-5 max-md:flex-col bg-gradient-to-br from-[#33C12B] to-green-600 h-full max-md:h-auto max-md:min-h-[400px] rounded-[30px]"
      >
        <div className="w-[75%] max-md:w-full">
          <div className="flex flex-col px-20 py-16 w-full max-md:px-6 max-md:py-8 max-md:mt-6 max-md:max-w-full">
            <h2 className="text-4xl font-semibold text-white leading-tight max-md:text-2xl max-md:max-w-full">
              {t('footer.newsletter.title')}
            </h2>
            <p className="text-xl mt-2 text-white max-md:text-lg">{t('cta.subscribe')}</p>
            <Formik
              initialValues={{ email: '' }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <div className="mt-12 w-full max-md:mt-8 max-md:max-w-full">
                  <Form className="flex justify-between py-2 pr-3 pl-9 bg-white rounded-2xl max-md:flex-col max-md:gap-4 max-md:pl-4">
                    <Field
                      type="email"
                      name="email"
                      placeholder={t('footer.newsletter.placeholder')}
                      className="my-auto text-lg text-gray-600 bg-transparent outline-none w-[80%] max-md:w-full max-md:text-base"
                    />
                    <Button variant="filled" color="green" type="submit" disabled={isSubmitting} className="max-md:w-full max-md:py-3">
                      {isSubmitting ? t('footer.newsletter.submitting') : t('footer.newsletter.submit')}
                    </Button>
                  </Form>
                  <ErrorMessage name="email" component="span" className="text-yellow-300 font-semibold text-md mt-2" />
                </div>
              )}
            </Formik>
          </div>
        </div>
        <div className="relative w-[25%] max-md:hidden">
          <div className='absolute bottom-0 right-0'>
            <OptimizedImage
              src={NewLetter}
              alt={t('footer.newsletter.alt')}
              className="w-full h-auto mt-[-189px] max-md:mt-0"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};



const Footer = () => {
  const { t } = useTranslation();
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
            <OptimizedImage
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
          <motion.a 
            whileHover={{ scale: 1.1, backgroundColor: "white", color: "#3974EA" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className='w-8 h-8 rounded-full border-1 border-white flex flex-col justify-center items-center cursor-pointer'
             href="https://www.facebook.com/share/1AhPm1QpV7/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"
          >
            <FaFacebookF />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.1, backgroundColor: "white", color: "#3974EA" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className='w-7 h-7 lg:w-8 lg:h-8 rounded-full border-1 border-white flex flex-col justify-center items-center cursor-pointer'
            href="https://www.instagram.com/tnk_synergies?igsh=dDkzd2t2NjdlN3Jt" target="_blank" rel="noopener noreferrer"
          >
            <FaInstagram className="text-sm lg:text-base" />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.1, backgroundColor: "white", color: "#3974EA" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className='w-8 h-8 rounded-full border-1 border-white flex flex-col justify-center items-center cursor-pointer'
            href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.1, backgroundColor: "white", color: "#3974EA" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className='w-8 h-8 rounded-full border-1 border-white flex flex-col justify-center items-center cursor-pointer'
            href="https://x.com/TNK_SYNERGIES" target="_blank" rel="noopener noreferrer" 
          >
            <FaTwitter />
          </motion.a>
        </div>
      </nav>

      <motion.div 
        onClick={() => window.open('https://wa.me/+237686135038', '_blank')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ 
          type: "spring",
          stiffness: 400,
          damping: 10,
          duration: 0.2
        }}
        className='fixed bottom-18 right-4 flex items-center group z-40'
      >
        <div className='bg-white text-green-500 px-4 py-2 rounded-lg cursor-pointer shadow-lg mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap'>
          {t('footer.contact.chat')}
        </div>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className='absolute bottom-16 right-0 bg-[#E7F3FF] text-gray-800 px-4 py-2 rounded-2xl shadow-lg max-w-[300px]'
          >
            <div className="relative">
              <p className="text-sm leading-relaxed">{t("footer.hello.chat")}</p>
              <div className="absolute -bottom-4 right-4 w-4 h-4 bg-[#E7F3FF] transform rotate-45"></div>
            </div>
          </motion.div>
        )}
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
      <Toaster position="top-center" reverseOrder={false} />
      <NewsletterSection/>
      <Footer/>
    </>
  );
};

export default ServicesFooter;