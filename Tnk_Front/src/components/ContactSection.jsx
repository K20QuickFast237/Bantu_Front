import React, { useState } from 'react';
import { Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaShareAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import contact1 from '../assets/images/contact2.jpg';
import Button from './Button';
import { useTranslation } from 'react-i18next';
import OptimizedImage from './OptimizedImage';

const ContactSection = () => {
  const { t } = useTranslation();

  // Schéma de validation avec Yup
  const validationSchema = Yup.object({
    name: Yup.string().required(t('validation.name_required')),
    email: Yup.string().email(t('validation.email_invalid')).required(t('validation.email_required')),
    type: Yup.string().required(t('validation.type_required')),
    message: Yup.string().required(t('validation.message_required')),
  });

  const [activeCategory, setActiveCategory] = useState('General');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const categories = ['General', 'Tarifs', 'Services', 'Fonctionnalités', 'Autres'];

  const faqData = [
    {
      id: 1,
      category: 'General',
      question: t('faqData.general.question1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ?'),
      answer: t('faqData.general.answer1', 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.')
    },
    {
      id: 2,
      category: 'General',
      question: t('faqData.general.question2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ?'),
      answer: t('faqData.general.answer2', 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.')
    },
    {
      id: 3,
      category: 'Services',
      question: t('faqData.services.question1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ?'),
      answer: t('faqData.services.answer1', 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.')
    },
    {
      id: 4,
      category: 'Fonctionnalités',
      question: t('faqData.features.question1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ?'),
      answer: t('faqData.features.answer1', 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.')
    },
    {
      id: 5,
      category: 'Autres',
      question: t('faqData.others.question1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ?'),
      answer: t('faqData.others.answer1', 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.')
    }
  ];

  const typeDemande = [
    t("contact.form.type.demande1"),
    t("contact.form.type.demande2"),
    t("contact.form.type.demande3"),
    t("contact.form.type.demande4"),
  ];

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const loadingToast = toast.loading(t('toast.sending'));
    try {
      // L'URL de votre API Laravel. Assurez-vous que le backend est en cours d'exécution.
      const response = await axios.post('http://localhost:8000/api/contact', values);
      
      toast.dismiss(loadingToast);
      toast.success(response.data.message || t('toast.success'));
      resetForm();
    } catch (error) {
      toast.dismiss(loadingToast);
      if (error.response && error.response.status === 422) {
        // Erreurs de validation de Laravel
        toast.error(t('toast.validation_error'));
      } else {
        // Autres erreurs (serveur, réseau, etc.)
        toast.error(t('toast.generic_error'));
      }
      console.error('Erreur lors de la soumission du formulaire:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  const filteredFaqs = faqData.filter(faq => faq.category === activeCategory);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const faqVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="min-h-screen bg-gray-50"
    >
      <Toaster position="top-center" reverseOrder={false} />
      {/* Contact Cards Section */}
      <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-20 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-16">
          {/* Phone Card */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
          >
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6"
            >
              <Phone className="w-6 h-6 text-green-600" />
            </motion.div>
            <p className="text-gray-500 text-sm mb-3">{t('contact.call_anytime')}</p>
            <p className="text-blue-600 font-semibold text-lg">{t('contact.phone')}</p>
          </motion.div>

          {/* Email Card */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
          >
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6"
            >
              <Mail className="w-6 h-6 text-green-600" />
            </motion.div>
            <p className="text-gray-500 text-sm mb-3">{t('contact.write_email')}</p>
            <p className="text-blue-600 font-semibold text-lg">{t('contact.email')}</p>
          </motion.div>

          {/* Location Card */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
          >
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6"
            >
              <MapPin className="w-6 h-6 text-green-600" />
            </motion.div>
            <p className="text-gray-500 text-sm mb-3">{t('contact.visit_office')}</p>
            <p className="text-blue-600 font-semibold text-lg">{t('contact.location')}</p>
          </motion.div>

          {/* Social Media Card */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
          >
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6"
            >
              <FaShareAlt className="w-6 h-6 text-green-600" />
            </motion.div>
            <p className="text-gray-500 text-sm mb-3">{t("contact.follow")}</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1AhPm1QpV7/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/tnk_synergies?igsh=dDkzd2t2NjdlN3Jt" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
                <FaLinkedinIn className="w-5 h-5" />
              </a>
              <a href="https://x.com/TNK_SYNERGIES" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Booking Form Section */}
        <motion.div 
          variants={cardVariants}
          className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 mb-8 md:mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
            {/* Image */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-2xl overflow-hidden">
                <div className="aspect-square relative">
                    <OptimizedImage src={contact1} alt="" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              variants={containerVariants}
            >
              <motion.h2 
                variants={cardVariants}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 md:mb-3"
              >
                {t('contact.book_call')}
              </motion.h2>
              <motion.p 
                variants={cardVariants}
                className="text-gray-600 mb-4 md:mb-8"
              >
                {t('contact.book_call_desc')}
              </motion.p>

              <Formik
                initialValues={{ name: '', email: '', type: '', message: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form className="space-y-6">
                    <motion.div variants={cardVariants}>
                      <Field
                        type="text"
                        name="name"
                        placeholder={t('contact.form.names')}
                        className="w-full px-3 sm:px-4 py-3 sm:py-4 rounded-xl bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      />
                      <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                    </motion.div>

                    <motion.div variants={cardVariants}>
                      <Field
                        type="email"
                        name="email"
                        placeholder={t('contact.form.email')}
                        className="w-full px-3 sm:px-4 py-3 sm:py-4 rounded-xl bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      />
                      <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                    </motion.div>

                    <motion.div variants={cardVariants}>
                      <Field
                        as="select"
                        name="type"
                        className='w-full px-3 sm:px-4 py-3 sm:py-4 text-gray-700 rounded-xl bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all'
                      >
                        <option value="" disabled>{t('contact.form.select_type')}</option>
                        {typeDemande.map((type, index) => (
                          <option key={index} value={type}>
                            {type}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage name="type" component="div" className="text-red-500 text-sm mt-1" />
                    </motion.div>

                    <motion.div variants={cardVariants}>
                      <Field
                        as="textarea"
                        name="message"
                        placeholder={t('contact.form.message')}
                        rows="4"
                        className="w-full px-3 sm:px-4 py-3 sm:py-4 rounded-xl  bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                      />
                      <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
                    </motion.div>
                    <motion.div variants={cardVariants}>
                      <Button color="blue" variant='filled' disabled={isSubmitting} type='submit'>
                        {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
                      </Button>
                    </motion.div>
                  </Form>
                )}
              </Formik>
            </motion.div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div 
          variants={cardVariants}
          className="bg-gradient-to-br from-gray-100 to-blue-50 rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12"
        >
          <motion.div 
            variants={cardVariants}
            className="mb-6 md:mb-8"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">{t('faq.title')}</h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl">
              {t('faq.description')}
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            variants={containerVariants}
            className="flex flex-wrap gap-2 sm:gap-3 mb-6 md:mb-8"
          >
            {categories.map((category, index) => (
              <motion.button
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50 hover:shadow-md'
                }`}
              >
                {t(`faq.category.${category}`, category)} {/* Traduction des catégories si nécessaire */}
              </motion.button>
            ))}
          </motion.div>

          {/* FAQ Items */}
          <motion.div 
            variants={containerVariants}
            className="space-y-4"
          >
            <AnimatePresence>
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  variants={faqVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-4 sm:px-6 py-4 sm:py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-gray-800 font-medium text-base sm:text-lg pr-4">
                      {faq.question}
                    </span>
                    <motion.div 
                      animate={{ rotate: expandedFaq === faq.id ? 180 : 0 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    </motion.div>
                  </motion.button>
                  
                  <AnimatePresence>
                    {expandedFaq === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6">
                          <div className="border-l-4 border-blue-500 pl-4">
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactSection;