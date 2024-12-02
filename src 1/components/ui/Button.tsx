import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick 
}: ButtonProps) {
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