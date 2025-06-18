import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlZWUiLz48L3N2Zz4=',
  loading = 'lazy',
  sizes = '100vw',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Générer les différentes tailles d'images pour srcset
  const generateSrcSet = (imageSrc) => {
    const sizes = [320, 640, 960, 1280];
    return sizes
      .map(size => `${imageSrc}?width=${size} ${size}w`)
      .join(', ');
  };

  // Convertir l'URL en WebP si possible
  const getWebPSrc = (imageSrc) => {
    if (imageSrc.includes('?')) {
      return `${imageSrc}&format=webp`;
    }
    return `${imageSrc}?format=webp`;
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setError(true);
    setIsLoaded(true);
  };

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{ 
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : 'auto',
        // backgroundColor: '#f5f5f5'
      }}
    >
      <picture>
        {/* Version WebP */}
        <source
          type="image/webp"
          srcSet={generateSrcSet(getWebPSrc(src))}
          sizes={sizes}
        />
        {/* Version originale comme fallback */}
        <img
          src={src}
          srcSet={generateSrcSet(src)}
          sizes={sizes}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          onLoad={handleLoad}
          onError={handleError}
          className={`
            transition-opacity duration-300
            ${isLoaded ? 'opacity-100' : 'opacity-0'}
          `}
          {...props}
        />
      </picture>
      
      {/* Placeholder pendant le chargement */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{ backgroundImage: `url(${placeholder})`, backgroundSize: 'cover' }}
        />
      )}
    </div>
  );
};

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  loading: PropTypes.oneOf(['lazy', 'eager']),
  sizes: PropTypes.string,
};

export default OptimizedImage; 