import React from 'react';

/**
 * Affiche une image. Ce composant est concu pour etre flexible et fonctionner
 * avec tailwind CSS.
 * 
 * Il ne force pas les attributs `width` et `height`, vous permettant de
 * contrôler les dimensions via `className` pour un design responsive.
 *
 * @param {object} props - Les props du composant.
 * @param {string} props.src - Le chemin vers l'image originale (ex: /assets/image.png).
 * @param {string} props.alt - Le texte alternatif pour l'image.
 * @param {string} [props.className] - Les classes CSS (ex: Tailwind) à appliquer à l'image.
 */
const OptimizedImage = ({ src, alt, ...props }) => {
  // Si la source est vide, invalide, ou juste des espaces, ne rien afficher pour éviter les erreurs.
  if (!src || typeof src !== 'string' || src.trim() === '') {
    return null;
  }

  return (
    <picture>
      <img src={src} alt={alt} {...props} loading="lazy" />
    </picture>
  );
};

export default OptimizedImage;