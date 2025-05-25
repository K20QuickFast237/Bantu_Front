import React from 'react';
import { Search } from 'lucide-react';
import sectionHero from '../assets/images/blog1.png';
import blogb from '../assets/images/service_Hero.jpg';

const BlogHero = ({ searchValue, setSearchValue }) => {
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value); // Met à jour searchValue en temps réel
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Recherche soumise:', searchValue); // Pour débogage
  };

  return (
    <section className="flex relative flex-col items-center mt-[-63px] pt-32 pb-32 w-full text-base min-h-[681px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <div className="absolute inset-0 w-full h-full">
        <img
          src={sectionHero}
          alt="Header background"
          className="object-contain absolute inset-0 size-full"
        />
      </div>
      
      <div className="flex flex-col items-start px-20 w-full z-10 max-md:px-5">
        <div className='flex justify-between pl-3 mt-30 w-full'>
          <div className='w-1/2'>
            <p className='text-green-500 text-xl font-bold'><u>Tous les blogs</u></p>
            <p className='text-white text-lg mt-7'>
              Tnk technolie a aise pres de 500 millions d'entreprises dan sla realisationd e leur projets future.
              Alors le but est de se mettre sur le numerique pour un rendement beacoup plus leve sur le marche 
            </p>
            <p className='text-white text-lg mt-8'>
              Nous vous souhaitons la bienvenue sur tnk technolgies.
            </p>
            <button className='text-blue-600 mt-6 font-bold text-xl'>
              Lire plus
              <i className="fas fa-arrow-circle-right ml-4 text-xl text-blue-700"></i>
            </button>
          </div>

          <div className='w-1/2 ml-50 items-end'>
            <div className="w-full max-w-md mx-auto">
              <div className="relative">
                <input
                  type="text"
                  value={searchValue}
                  onChange={handleSearchChange}
                  placeholder="Rechercher un blog"
                  className="w-full px-4 py-3 pl-12 pr-4 text-gray-700 bg-white border border-gray-300 rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSearchSubmit(e);
                    }
                  }}
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                  <Search className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>
            <div className='h-60 relative w-full mt-10'>
              <img
                src={blogb}
                alt="Header background"
                className="object-cover rounded-2xl absolute inset-0 size-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;