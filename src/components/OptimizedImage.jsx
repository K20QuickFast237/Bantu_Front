import React from 'react';

/**
 * Affiche une image en utilisant le format WebP si le navigateur le supporte,
 * avec une image de fallback (PNG, JPG, etc.). Ce composant est conçu pour
 * être flexible et fonctionner avec Tailwind CSS.
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
    // Optionnel : retourner un placeholder ou null
    // Pour l'instant, on ne retourne rien pour éviter une image cassée.
    return null;
  }

  // Gérer les URLs externes (http, https) et les data URIs
  const isExternal = src.startsWith('http') || src.startsWith('data:');

  // En mode DEV, ou pour les SVG, ou pour les URLs externes, on affiche une <img> simple.
  if (import.meta.env.DEV || src.endsWith('.svg') || isExternal) {
    return <img src={src} alt={alt} {...props} loading="lazy" />;
  }

  // En production, on suppose que les versions .avif et .webp ont été générées par le plugin.
  const avifSrc = src.replace(/\.(png|jpe?g)$/i, '.avif');
  const webpSrc = src.replace(/\.(png|jpe?g)$/i, '.webp');

  return (
    <picture>
      <source srcSet={avifSrc} type="image/avif" />
      <source srcSet={webpSrc} type="image/webp" />
      <img src={src} alt={alt} {...props} loading="lazy" />
    </picture>
  );
};

export default OptimizedImage;