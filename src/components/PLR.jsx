import React, { useEffect, useState } from 'react';
import blog22 from "../assets/images/blog22.png";
import blog23 from "../assets/images/blog23.png";
import { useTranslation } from 'react-i18next';

const PLR = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Déclencher l'animation après le montage du composant
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* Styles CSS pour les animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.8s ease-out forwards;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-400 {
          animation-delay: 0.4s;
        }

        .delay-600 {
          animation-delay: 0.6s;
        }

        .delay-800 {
          animation-delay: 0.8s;
        }

        .initial-hidden {
          opacity: 0;
        }

        .text-shadow-2xs {
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
        }

        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }
      `}</style>

      <div className="bg-gray-200 mt-[-30px] pt-20 md:pt-20 lg:pt-20 max-md:pt-16">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
          <h1
            className={`text-4xl sm:text-5xl md:text-5xl font-bold text-green-500 mb-15 max-md:text-3xl max-md:mb-10 text-shadow-2xs ${
              isVisible ? 'animate-fadeInUp delay-200' : 'initial-hidden'
            }`}
          >
            {t('blog.recent')}
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-md:gap-4">
            {/* Card 1 */}
            <div
              className={`bg-white rounded-lg shadow-md overflow-hidden card-hover ${
                isVisible ? 'animate-scaleIn delay-400' : 'initial-hidden'
              }`}
            >
              <div className="w-full h-40 md:h-48 lg:h-48 bg-gray-500"></div>
              <div className="p-4 md:p-6">
                <h2 className="text-xl md:text-2xl font-bold text-green-600 mb-2 md:mb-3 max-md:text-lg">{t('blog.post1.title')}</h2>
                <p className="text-gray-900 text-sm md:text-base leading-relaxed mb-3 md:mb-4">
                  {t('blog.post1.desc')}
                </p>
                <span className="inline-block bg-gray-200 text-gray-900 text-xs px-3 py-1 rounded-lg font-medium max-md:text-[10px] max-md:px-2 max-md:py-0.5">
                  {t('blog.post1.category')}
                </span>
                <div className="flex items-center mt-3 md:mt-4">
                  <div className="w-8 h-8 bg-gray-400 rounded-full mr-3"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-800 max-md:text-xs">{t('blog.post1.author')}</p>
                    <p className="text-xs text-gray-500 max-md:text-[10px]">{t('blog.post1.date')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className={`bg-white rounded-lg shadow-md overflow-hidden card-hover ${
                isVisible ? 'animate-scaleIn delay-600' : 'initial-hidden'
              }`}
            >
              <img
                src={blog23}
                alt={t('blog.post2.alt')}
                className="w-full h-40 md:h-48 lg:h-48 object-cover"
              />
              <div className="p-4 md:p-6">
                <h2 className="text-xl md:text-2xl font-bold text-green-600 mb-2 md:mb-3 max-md:text-lg">{t('blog.post2.title')}</h2>
                <p className="text-gray-900 text-sm md:text-base leading-relaxed mb-3 md:mb-4">
                  {t('blog.post2.desc')}
                </p>
                <span className="inline-block bg-gray-200 text-gray-900 text-xs px-3 py-1 rounded-lg font-medium max-md:text-[10px] max-md:px-2 max-md:py-0.5">
                  {t('blog.post2.category')}
                </span>
                <div className="flex items-center mt-3 md:mt-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full mr-3 flex items-center justify-center">
                    <span className="text-white font-bold text-sm max-md:text-xs">Y</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800 max-md:text-xs">{t('blog.post2.author')}</p>
                    <p className="text-xs text-gray-500 max-md:text-[10px]">{t('blog.post2.date')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className={`bg-white rounded-lg shadow-md overflow-hidden card-hover ${
                isVisible ? 'animate-scaleIn delay-800' : 'initial-hidden'
              }`}
            >
              <img
                src={blog22}
                alt={t('blog.post3.alt')}
                className="w-full h-40 md:h-48 lg:h-48 object-cover"
              />
              <div className="p-4 md:p-6">
                <h2 className="text-xl md:text-2xl font-bold text-green-600 mb-2 md:mb-3 max-md:text-lg">{t('blog.post3.title')}</h2>
                <p className="text-gray-900 text-sm md:text-base leading-relaxed mb-3 md:mb-4">
                  {t('blog.post3.desc')}
                </p>
                <span className="inline-block bg-gray-200 text-gray-900 text-xs px-3 py-1 rounded-lg font-medium max-md:text-[10px] max-md:px-2 max-md:py-0.5">
                  {t('blog.post3.category')}
                </span>
                <div className="flex items-center mt-3 md:mt-4">
                  <div className="w-8 h-8 bg-gray-400 rounded-full mr-3"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-800 max-md:text-xs">{t('blog.post3.author')}</p>
                    <p className="text-xs text-gray-500 max-md:text-[10px]">{t('blog.post3.date')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PLR;