import React from 'react';
import blog22 from "../assets/images/blog22.png"
import blog23 from "../assets/images/blog23.png"

const PLR = () => {
  return (
    <div className="bg-gray-200 min-h-screen mt-[-30px] pt-20 ">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl text-shadow-2xs font-bold text-green-500 mb-15">Posts les plus récents</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* cart1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="w-full h-48 bg-gray-500"></div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-green-600 mb-3">Smashing Magazine</h2>
              <p className="text-gray-900  leading-relaxed mb-4">
                Depuis sa création en 2006, Smashing Magazine est une référence incontournable pour les développeurs et designers web. Il offre une mine d'or d'articles approfondis sur des sujets variés...
              </p>
              <span className="inline-block bg-gray-200 text-gray-900 text-xs px-3 py-1 rounded-lg p-5 font-medium">
                [inch class]
              </span>
              <div className="flex items-center mt-4">
                <div className="w-8 h-8 bg-gray-400 rounded-full mr-3"></div>
                <div>
                  <p className="text-sm font-medium text-gray-800">Miranda Belviane</p>
                  <p className="text-xs text-gray-500">03/11/2027</p>
                </div>
              </div>
            </div>
          </div>

          {/* carte2*/}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={blog23} 
              alt="A List Apart office" 
              className="w-full h-48 object-cover  inset-0 size-full"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-green-600 mb-3">A List Apart</h2>
              <p className="text-gray-900  leading-relaxed mb-4">
                A List Apart est un blog qui se concentre sur les normes du web, l'accessibilité, la conception centrée sur l'utilisateur et les meilleures pratiques en matière de développement web.
              </p>
              <span className="inline-block bg-gray-200 text-gray-900 text-xs px-3 py-1 rounded-lg p-5 font-medium">
                [inch class]
              </span>
              <div className="flex items-center mt-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full mr-3 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Y</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">Miranda Belviane</p>
                  <p className="text-xs text-gray-500">03/11/2027</p>
                </div>
              </div>
            </div>
          </div>

          {/* cart3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={blog22} 
              alt="Frontend Masters team" 
              className="w-full h-48   inset-0 size-full object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-green-600 mb-3">Frontend Masters</h2>
              <p className="text-gray-900 leading-relaxed mb-4">
                Frontend Masters est une plateforme d'apprentissage en ligne qui propose des cours approfondis sur des sujets tels que JavaScript, React, CSS et le développement front-end en général. Le blog occ...
              </p>
              <span className="inline-block bg-gray-200 text-gray-900 text-xs px-3 py-1 rounded-lg p-5 font-medium">
                [inch class]
              </span>
              <div className="flex items-center mt-4">
                <div className="w-8 h-8 bg-gray-400 rounded-full mr-3"></div>
                <div>
                  <p className="text-sm font-medium text-gray-800">Alica Cassandra</p>
                  <p className="text-xs text-gray-500">03/10/2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PLR;