import React from 'react';

const colorStyles = {
  blue: {
    base: 'text-blue-600 border-blue-600',
    hover: 'hover:text-blue-800 hover:border-blue-800',
    filled: 'bg-blue-600 text-white border-blue-600 hover:bg-blue-800',
  },
  green: {
    base: 'text-green-500 border-green-500',
    hover: 'hover:text-green-600 hover:border-green-600',
    filled: 'bg-green-600 text-white border-green-600 hover:bg-green-800',
  },
  gray: {
    base: 'text-gray-600 border-gray-600',
    hover: 'hover:text-gray-800 hover:border-gray-800',
    filled: 'bg-gray-600 text-white border-gray-600 hover:bg-gray-800',
  },
  white: {
    base: 'text-white border-white',
    hover: 'hover:text-gray-300 hover:border-gray-300',
    filled: 'bg-white text-blue-600 border-white hover:bg-gray-100',
  },
};

const Button = ({
  type,  
  children,
  variant = 'bordered', 
  color = 'blue',
  className = '',
  onClick,
}) => {
  const style = colorStyles[color] || colorStyles.blue;

  const commonClasses = 'px-5 py-2 rounded-md font-medium transition-colors duration-300 border cursor-pointer';

  const finalClasses =
    variant === 'filled'
      ? `${commonClasses} ${style.filled} ${className}`
      : `${commonClasses} ${style.base} ${style.hover} bg-transparent ${className}`;

  return (
    <button className={finalClasses} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
