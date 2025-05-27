import React, { useEffect, useState } from 'react';
import blog22 from "../assets/images/blog22.png";
import blog23 from "../assets/images/blog23.png";

const PLR = () => {
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

      <div className="bg-gray-200  mt-[-30px] pt-20 md:pt-20 lg:pt-20 max-md:pt-16">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
          <h1
            className={`text-4xl sm:text-5xl md:text-5xl font-bold text-green-500 mb-15 max-md:text-3xl max-md:mb-10 text-shadow-2xs ${
              isVisible ? 'animate-fadeInUp delay-200' : 'initial-hidden'
            }`}
          >
            Posts les plus récents
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
                <h2 className="text-xl md:text-2xl font-bold text-green-600 mb-2 md:mb-3 max-md:text-lg">Smashing Magazine</h2>
                <p className="text-gray-900 text-sm md:text-base leading-relaxed mb-3 md:mb-4">
                  Depuis sa création en 2006, Smashing Magazine est une référence incontournable pour les développeurs et designers web. Il offre une mine d'or d'articles approfondis sur des sujets variés...
                </p>
                <span className="inline-block bg-gray-200 text-gray-900 text-xs px-3 py-1 rounded-lg font-medium max-md:text-[10px] max-md:px-2 max-md:py-0.5">
                  [inch class]
                </span>
                <div className="flex items-center mt-3 md:mt-4">
                  <div className="w-8 h-8 bg-gray-400 rounded-full mr-3"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-800 max-md:text-xs">Miranda Belviane</p>
                    <p className="text-xs text-gray-500 max-md:text-[10px]">03/11/2027</p>
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
                alt="A List Apart office"
                className="w-full h-40 md:h-48 lg:h-48 object-cover"
              />
              <div className="p-4 md:p-6">
                <h2 className="text-xl md:text-2xl font-bold text-green-600 mb-2 md:mb-3 max-md:text-lg">A List Apart</h2>
                <p className="text-gray-900 text-sm md:text-base leading-relaxed mb-3 md:mb-4">
                  A List Apart est un blog qui se concentre sur les normes du web, l'accessibilité, la conception centrée sur l'utilisateur et les meilleures pratiques en matière de développement web.
                </p>
                <span className="inline-block bg-gray-200 text-gray-900 text-xs px-3 py-1 rounded-lg font-medium max-md:text-[10px] max-md:px-2 max-md:py-0.5">
                  [inch class]
                </span>
                <div className="flex items-center mt-3 md:mt-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full mr-3 flex items-center justify-center">
                    <span className="text-white font-bold text-sm max-md:text-xs">Y</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800 max-md:text-xs">Miranda Belviane</p>
                    <p className="text-xs text-gray-500 max-md:text-[10px]">03/11/2027</p>
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
                alt="Frontend Masters team"
                className="w-full h-40 md:h-48 lg:h-48 object-cover"
              />
              <div className="p-4 md:p-6">
                <h2 className="text-xl md:text-2xl font-bold text-green-600 mb-2 md:mb-3 max-md:text-lg">Frontend Masters</h2>
                <p className="text-gray-900 text-sm md:text-base leading-relaxed mb-3 md:mb-4">
                  Frontend Masters est une plateforme d'apprentissage en ligne qui propose des cours approfondis sur des sujets tels que JavaScript, React, CSS et le développement front-end en général. Le blog occ...
                </p>
                <span className="inline-block bg-gray-200 text-gray-900 text-xs px-3 py-1 rounded-lg font-medium max-md:text-[10px] max-md:px-2 max-md:py-0.5">
                  [inch class]
                </span>
                <div className="flex items-center mt-3 md:mt-4">
                  <div className="w-8 h-8 bg-gray-400 rounded-full mr-3"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-800 max-md:text-xs">Alica Cassandra</p>
                    <p className="text-xs text-gray-500 max-md:text-[10px]">03/10/2020</p>
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