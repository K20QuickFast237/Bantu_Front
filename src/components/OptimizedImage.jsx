import React, { useState } from 'react';
import PropTypes from 'prop-types';
 
const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlZWUiLz48L3N2Zz4=',
  loading = 'lazy', // 'lazy' or 'eager'
  sizes = '100vw',
  fallbackSrc = null, // New prop for error fallback
  imageFormats = ['avif', 'webp'], // New prop for desired formats
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Helper to add/update query parameters to a URL
  const addOrUpdateQueryParam = (url, key, value) => {
    const urlObj = new URL(url, 'http://dummy.com'); // Use a dummy base for relative URLs
    urlObj.searchParams.set(key, value);
    return urlObj.pathname + urlObj.search; // Return path + query string
  };

  // Générer les différentes tailles d'images pour srcset
  const generateSrcSet = (imageSrc, format = null) => {
    const sizes = [320, 640, 960, 1280];
    return sizes
      .map(size => {
        let url = addOrUpdateQueryParam(imageSrc, 'width', size);
        if (format) {
          url = addOrUpdateQueryParam(url, 'format', format);
        }
        return `${url} ${size}w`;
      })
      .join(', ');
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setError(true);
    setIsLoaded(true); // Hide placeholder even on error
  };

  // Calculate aspect ratio for placeholder to prevent layout shifts
  // This requires both width and height to be known.
  const aspectRatio = width && height ? (height / width) * 100 : null;

  return (
    <div
      // The outer div now controls the overall dimensions and aspect ratio.
      // `className` is applied here for external styling.
      className={`relative overflow-hidden ${className || ''}`}
      style={{ 
        // Set width based on prop, default to 100% for responsiveness.
        width: width ? `${width}px` : '100%', 
        // If aspect ratio is calculated, height is 0 and paddingBottom controls it.
        // Otherwise, use explicit height prop or 'auto'.
        height: aspectRatio ? 0 : (height ? `${height}px` : 'auto'), 
        // Padding-bottom hack to maintain aspect ratio.
        // This creates a vertical padding equal to the percentage of the width,
        // effectively reserving space based on the image's aspect ratio.
        paddingBottom: aspectRatio ? `${aspectRatio}%` : '0', 
        // Ensure relative positioning for absolute children (image and placeholder).
        position: 'relative', 
      }}
    >
      <picture>
        {/* AVIF source for modern browsers */}
        {imageFormats.includes('avif') && (
          <source
            type="image/avif"
            srcSet={generateSrcSet(src, 'avif')}
            sizes={sizes}
          />
        )}
        {/* WebP source as a widely supported next-gen format */}
        {imageFormats.includes('webp') && (
          <source
            type="image/webp"
            srcSet={generateSrcSet(src, 'webp')}
            sizes={sizes}
          />
        )}
        {/* Version originale comme fallback */}
        <img
          src={src}
          srcSet={generateSrcSet(src)}
          sizes={sizes}
          alt={alt}
          width={width} // Provide width/height for browser layout calculations
          height={height} // Provide width/height for browser layout calculations
          loading={loading} // 'lazy' or 'eager' for browser-level lazy loading
          onLoad={handleLoad}
          onError={handleError}
          className={`
            // Position the image absolutely to fill the parent div (which has aspect ratio padding)
            absolute inset-0 w-full h-full object-cover
            // Smooth for opacity changes
            transition-opacity duration-300 ease-in-out
            // Hide image until loaded or if there's an error
            ${isLoaded && !error ? 'opacity-100' : 'opacity-0'}
          `}
          {...props}
        />
      </picture>
      
      {/* Placeholder pendant le chargement */}
      {/* Show placeholder only if not loaded AND no error */}
      {!isLoaded && !error && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{ backgroundImage: `url(${placeholder})`, backgroundSize: 'cover' }}
        />
      )}

      {/* Fallback en cas d'erreur de chargement */}
      {/* Display a specific fallback image if provided */}
      {error && fallbackSrc && (
        <img
          src={fallbackSrc}
          alt={`Error loading ${alt}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      {/* Display a generic error message if no fallbackSrc is provided */}
      {error && !fallbackSrc && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-300 text-gray-600 text-sm">
          Error
        </div>
      )}
    </div>
  );
};

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number, // Required for aspect ratio calculation to prevent layout shifts
  height: PropTypes.number, // Required for aspect ratio calculation to prevent layout shifts
  className: PropTypes.string, // Class for the outer container div, allows external styling
  placeholder: PropTypes.string, // Base64 SVG or URL for placeholder image shown during loading
  loading: PropTypes.oneOf(['lazy', 'eager']), // Browser's native loading strategy for the image
  sizes: PropTypes.string, // The 'sizes' attribute for responsive images, e.g., "100vw"
  fallbackSrc: PropTypes.string, // URL for an image to display if the main image fails to load
  imageFormats: PropTypes.arrayOf(PropTypes.oneOf(['avif', 'webp', 'jpeg', 'png'])), // Array of desired image formats to try (in order of preference)
};

export default OptimizedImage; 