import { useState, useEffect } from 'react';
import Button from './Button';
import slide1 from '../assets/images/slide1.jpg';
import slide2 from '../assets/images/slide21.jpeg';
import slide3 from '../assets/images/slide3.jpeg';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HeroCarousel = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  const slides = [
    {
      id: 0,
      title: t('hero.title1'),
      color: "text-blue-500",
      overlayColor: "bg-blue-950",
      overlayOpacity: "opacity-40",
      subtitle: t('hero.subtitle1'),
      description: t('hero.description.solutions'),
      backgroundImage: `url(${slide1})`
    },
    {
      id: 1,
      title: t('hero.title2'),
      color: "text-white",
      overlayColor: "",
      overlayOpacity: "opacity-40",
      subtitle: t('hero.subtitle2'),
      description: t('hero.description.sustainable'),
      backgroundImage: `url(${slide2})`
    },
    {
      id: 2,
      title: t('hero.title3'),
      color: "text-green-500",
      overlayColor: "bg-green-950",
      overlayOpacity: "opacity-40",
      subtitle: t('hero.subtitle3'),
      description: t('hero.description.community'),
      backgroundImage: `url(${slide3})`
    }
  ];

  useEffect(() => {
    let startTime = Date.now();
    const totalDuration = 10000; // 10 secondes

    const interval = setInterval(() => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      
      if (elapsed >= totalDuration) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setProgress(0);
        startTime = currentTime;
      } else {
        setProgress((elapsed / totalDuration) * 100);
      }
    }, 16);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  return (
    <div className="relative overflow-hidden pt-20 md:pt-32 lg:pt-50 pb-16 md:pb-24 lg:pb-32">
      {/* Background Images with transitions */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: slide.backgroundImage }}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80"></div>
          <div className={`absolute inset-0 ${slide.overlayColor} ${slide.overlayOpacity}`}></div>
        </div>
      ))}

      {/* Animated overlay elements */}
      <div className="absolute inset-0 z-10">
        {/* Tech grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
            {Array.from({ length: 96 }).map((_, i) => (
              <div key={i} className="border border-gray-200 border-opacity-20"></div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-30 h-full flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="mb-2 md:mb-4">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="min-w-full">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl max-w-[80%] font-bold mb-4 md:mb-6 lg:mb-8">
                    {slide.title.split('   ').map((word, index) => (
                      <span key={index} className={`${slide.color}`}>{word}</span>
                    ))}
                  </h1>
                </div>
              ))}
            </div>
          </div>
          
          <div className="overflow-hidden h-20 sm:h-24 md:h-28">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="min-w-full">
                  <p className="text-white text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed">
                    {slide.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <Link to="/projets">
            <Button variant="filled" color="blue" className="w-full sm:w-auto">
              {t('hero.discover')}
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="bordered" color="white" className="w-full sm:w-auto">
              {t('hero.contact')}
            </Button>
          </Link>
        </div>
      </div>

      {/* Bottom cards with active indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-full px-20 z-40 hidden sm:block">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`
                relative cursor-pointer p-4 sm:p-6 border transition-all duration-500 transform hover:scale-105 overflow-hidden
                ${currentSlide === index 
                  ? 'border-green-400 text-white shadow-lg shadow-green-500/30' 
                  : 'border-r-white text-gray-300 hover:bg-opacity-60'
                }
              `}
            >
              {/* Progressive fill background */}
              {currentSlide === index && (
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500"
                  style={{ 
                    clipPath: `inset(0 ${100 - progress}% 0 0)`,
                  }}
                ></div>
              )}
              
              <div className="relative z-10 text-center">
                <h3 className="font-semibold text-lg mb-2">
                  {t(slide.subtitle)}
                </h3>
              </div>
              
              {/* Top border indicator */}
              {currentSlide === index && (
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-t-lg"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroCarousel;