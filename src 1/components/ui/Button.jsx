import React from 'react';

function Button({ children, variant = 'primary', className = '', onClick }) {
  const baseStyles = "px-8 py-3 rounded-full transition-colors";
  const variantStyles = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-white text-black hover:bg-gray-100"
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;