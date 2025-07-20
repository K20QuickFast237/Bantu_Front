import React, { useEffect, useRef } from 'react';
import { Facebook } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Partenaires = () => {
  const { t } = useTranslation();
  const scrollRef = useRef(null);

  const partners = [
    {
      name: "Google",
      logo: (
        <div className="flex items-center">
          <span className="text-2xl md:text-4xl font-normal">
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
        <div className="flex items-center gap-1 md:gap-2">
          <Facebook className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
          <span className="text-xl md:text-3xl font-normal text-blue-600">facebook</span>
        </div>
      )
    },
    {
      name: "UNICEF",
      logo: (
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-800 rounded-full flex items-center justify-center mb-1">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center">
              <div className="w-3 h-3 md:w-4 md:h-4 bg-blue-800 rounded-full"></div>
            </div>
          </div>
          <span className="text-xs md:text-sm font-medium text-blue-800">unicef</span>
        </div>
      )
    },
    {
      name: "Microsoft",
      logo: (
        <div className="flex items-center gap-1 md:gap-2">
          <div className="grid grid-cols-2 gap-0.5 md:gap-1 w-5 h-5 md:w-6 md:h-6">
            <div className="bg-red-500 w-2 h-2 md:w-2.5 md:h-2.5"></div>
            <div className="bg-green-500 w-2 h-2 md:w-2.5 md:h-2.5"></div>
            <div className="bg-blue-500 w-2 h-2 md:w-2.5 md:h-2.5"></div>
            <div className="bg-yellow-500 w-2 h-2 md:w-2.5 md:h-2.5"></div>
          </div>
          <span className="text-lg md:text-2xl font-normal text-gray-700">Microsoft</span>
        </div>
      )
    },
    {
      name: "Apple",
      logo: (
        <div className="flex items-center gap-1 md:gap-2">
          <div className="w-6 h-6 md:w-8 md:h-8 bg-black rounded-full flex items-center justify-center">
            <div className="w-4 h-4 md:w-6 md:h-6 bg-white rounded-full relative">
              <div className="absolute top-0 right-0.5 md:right-1 w-1.5 h-1.5 md:w-2 md:h-2 bg-black rounded-full"></div>
            </div>
          </div>
          <span className="text-lg md:text-2xl font-normal text-gray-700">Apple</span>
        </div>
      )
    }
  ];

  const extendedPartners = [...partners, ...partners, ...partners];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 1;
    const itemWidth = 300;
    const totalWidth = partners.length * itemWidth;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= totalWidth) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
    };

    const intervalId = setInterval(scroll, 16);
    return () => clearInterval(intervalId);
  }, [partners.length]);

  return (
    <div className="bg-blue-50 py-12 px-5 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          
          {/* Titre */}
          <div className="flex-shrink-0">
            <h2 className="text-2xl md:text-4xl font-bold text-green-600 leading-snug">
              {t('partenaires.title')}
            </h2>
          </div>

          {/* Logos en défilement */}
          <div className="w-full overflow-hidden">
            <div
              ref={scrollRef}
              className="flex gap-6 md:gap-8 overflow-x-hidden"
              style={{ scrollBehavior: 'auto', WebkitOverflowScrolling: 'touch' }}
            >
              {extendedPartners.map((partner, index) => (
                <div key={index} className="flex-shrink-0 w-56 md:w-72 flex items-center justify-center h-20">
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