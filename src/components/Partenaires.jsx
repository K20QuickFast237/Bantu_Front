import React, { useEffect, useRef } from 'react';
import { Facebook } from "lucide-react";

const Partenaires = () => {
  const scrollRef = useRef(null);

  // Données des partenaires
  const partners = [
    {
      name: "Google",
      logo: (
        <div className="flex items-center">
          <span className="text-4xl font-normal">
            <span className="text-blue-500">G</span>
            <span className="text-red-500">o</span>
            <span className="text-yellow-500">o</span>
            <span className="text-blue-500">g</span>
            <span className="text-green-500">l</span>
            <span className="text-red-500">e</span>
          </span>
        </div>
      )
    },
    {
      name: "Facebook",
      logo: (
        <div className="flex items-center gap-2">
          <Facebook className="w-8 h-8 text-blue-600" />
          <span className="text-3xl font-normal text-blue-600">facebook</span>
        </div>
      )
    },
    {
      name: "UNICEF",
      logo: (
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center mb-1">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-blue-800 rounded-full"></div>
            </div>
          </div>
          <span className="text-sm font-medium text-blue-800">unicef</span>
        </div>
      )
    },
    {
      name: "Microsoft",
      logo: (
        <div className="flex items-center gap-2">
          <div className="grid grid-cols-2 gap-1 w-6 h-6">
            <div className="bg-red-500 w-2.5 h-2.5"></div>
            <div className="bg-green-500 w-2.5 h-2.5"></div>
            <div className="bg-blue-500 w-2.5 h-2.5"></div>
            <div className="bg-yellow-500 w-2.5 h-2.5"></div>
          </div>
          <span className="text-2xl font-normal text-gray-700">Microsoft</span>
        </div>
      )
    },
    {
      name: "Apple",
      logo: (
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-white rounded-full relative">
              <div className="absolute top-0 right-1 w-2 h-2 bg-black rounded-full"></div>
            </div>
          </div>
          <span className="text-2xl font-normal text-gray-700">Apple</span>
        </div>
      )
    }
  ];

  // Tripler les partenaires pour un défilement infini fluide
  const extendedPartners = [...partners, ...partners, ...partners];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 1; // Vitesse de défilement (plus le nombre est élevé, plus c'est rapide)
    const itemWidth = 300; // Largeur approximative de chaque élément
    const totalWidth = partners.length * itemWidth;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      
      // Réinitialiser la position quand on atteint la fin du premier set
      if (scrollPosition >= totalWidth) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
    };

    const intervalId = setInterval(scroll, 16); // ~60fps

    // Nettoyer l'intervalle au démontage
    return () => clearInterval(intervalId);
  }, [partners.length]);

  return (
    <div className="bg-blue-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Titre */}
          <div className="flex-shrink-0 mr-12">
            <h2 className="text-4xl  font-bold  text-green-600">
              Nos différents<br />
              partenaires
            </h2>
          </div>

          {/* Container de défilement des logos */}
          <div className="flex-1 overflow-hidden">
            <div 
              ref={scrollRef}
              className="flex gap-8 overflow-x-hidden"
              style={{ 
                scrollBehavior: 'auto',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              {extendedPartners.map((partner, index) => (
                <div key={index} className="flex-shrink-0 w-72 flex items-center justify-center h-20">
                  {partner.logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partenaires;