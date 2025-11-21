import React from 'react';

export const Button = ({ 
  children, 
  variant = 'primary', 
  onClick,
  className = '' 
}) => {
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
  };

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md font-medium transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};