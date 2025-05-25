import React, { useState } from 'react';
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
//    logique d'envoie du formuaire
  };

  return (
    <>
      <section className="mt-15 justify-between pb-10 bg-indigo-200 pl-20 flex pr-20 pt-10 w-full">
        <div className="w-[47%] h-150 relative  ">
            <img
                      src={sectionHero}
                      alt="Header background"
                      className="object-cover  rounded-2xl absolute inset-0 size-full"
                    />
        </div>
        
        {/* partie du formulaire */}
        <div className="flex-1  flex  justify-center ">
          <div className="w-full max-w-md">
            <div className="text-left mb-8">
              <h1 className="text-4xl font-semibold text-gray-800 mb-2">
                Réservez un appel rapide
              </h1>
              <p className="text-gray-400 text-lg">
                obtenez 15 minute de consultation gratuite
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="noms" className="text-gray-700  text-lg">
                  Noms <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  id="noms"
                  name="noms"
                  type="text"
                  value={formData.noms}
                  onChange={handleChange}
                  className="w-130 h-12 bg-white border border-gray-200 rounded-lg px-4 text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-gray-700 text-lg">
                  Email <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-130 h-12 bg-white border border-gray-200 rounded-lg px-4 text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="sujet" className="text-gray-700 text-lg">
                  Sujet <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  id="sujet"
                  name="sujet"
                  type="text"
                  value={formData.sujet}
                  onChange={handleChange}
                  className="w-130 h-12 bg-white border border-gray-200 rounded-lg px-4 text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-gray-700 text-lg">
                  Message <span className="text-red-500 font-bold">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-130 h-24 bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all resize-none"
                  required
                />
              </div>

              <button 
                type="submit"
                onClick={handleSubmit}
                className="w-40 shadow-2xl mt-[-10px] h-12 pt-3 pb-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200  hover:shadow-xl"
              >
                Souscrire
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Formulaire;