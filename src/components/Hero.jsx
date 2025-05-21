'use client';
import React from 'react';
import Button from './Button';

const HeroSection = ({
  image,
  overlayColor = 'bg-green-900',
  overlayOpacity = 'opacity-40',
  title,
  titleColor = 'text-green-500',
  description,
  buttonText,
  buttonColor = 'green',
  onButtonClick,
  className = '',
}) => {
  return (
    <section
      className={`relative flex flex-col items-center pt-32 pb-32 w-full text-base min-h-[681px] max-md:px-5 max-md:pb-24 max-md:max-w-full ${className}`}
    >
      <div className="absolute inset-0 w-full h-full">
        <img
          src={image}
          alt="Hero background"
          className="object-cover absolute inset-0 size-full"
        />
        <div className={`absolute inset-0 ${overlayColor} ${overlayOpacity}`}></div>
      </div>

      <div className="flex flex-col items-start px-20 w-full z-10 max-md:px-5">
        <h1 className={`mt-14 mr-24 text-7xl font-bold leading-snug ${titleColor} max-md:mt-10 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl`}>
          {title}
        </h1>
        <p className="mt-1 text-lg text-white w-[827px] max-md:max-w-full">
          {description}
        </p>
        {buttonText && (
          <Button
            variant="filled"
            color={buttonColor}
            onClick={onButtonClick}
            className="px-5 py-2.5 mt-12 font-semibold rounded-lg"
          >
            {buttonText}
          </Button>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
