import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTitle({ children, className = '' }: SectionTitleProps) {
  return (
    <h2 className={`text-4xl font-bold mb-12 text-center ${className}`}>
      {children}
    </h2>
  );
}