import React, { useState } from 'react';
import { motion } from 'framer-motion';
import sectionHero from '../assets/images/contact2.png';

const Formulaire = () => {
  const [formData, setFormData] = useState({
    noms: '',
    email: '',
    sujet: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // logique d'envoi du formulaire
  };

  return (
    <motion.section
      className="mt-10 flex flex-col lg:flex-row justify-between items-center gap-10 bg-indigo-200 px-6 md:px-20 pt-10 pb-10 w-full"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Image */}
      <div className="w-full lg:w-[47%] h-72 lg:h-[450px] relative">
        <img
          src={sectionHero}
          alt="Header background"
          className="object-cover rounded-2xl absolute inset-0 w-full h-full"
        />
      </div>

      {/* Formulaire */}
      <div className="w-full max-w-lg">
        <div className="mb-8 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-2">
            Réservez un appel rapide
          </h1>
          <p className="text-gray-500 text-base md:text-lg">
            Obtenez 15 minutes de consultation gratuite
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {['noms', 'email', 'sujet'].map((field) => (
            <div className="space-y-2" key={field}>
              <label htmlFor={field} className="text-gray-700 text-lg capitalize">
                {field} <span className="text-red-500 font-bold">*</span>
              </label>
              <input
                id={field}
                name={field}
                type={field === 'email' ? 'email' : 'text'}
                value={formData[field]}
                onChange={handleChange}
                className="w-full h-12 bg-white border border-gray-200 rounded-lg px-4 text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                required
              />
            </div>
          ))}

          <div className="space-y-2">
            <label htmlFor="message" className="text-gray-700 text-lg">
              Message <span className="text-red-500 font-bold">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full h-28 bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all resize-none"
              required
            />
          </div>

          <div className="flex justify-center lg:justify-start">
            <button
              type="submit"
              className="w-full sm:w-40 h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg"
            >
              Souscrire
            </button>
          </div>
        </form>
      </div>
    </motion.section>
  );
};

export default Formulaire;
