import React from 'react';

export interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  children: React.ReactNode;
  variant?: 'display' | 'title' | 'subtitle' | 'card';
  className?: string;
  align?: 'left' | 'center' | 'right';
}

export const Heading: React.FC<HeadingProps> = ({
  as: Component = 'h2',
  children,
  variant = 'title',
  className = '',
  align = 'center',
}) => {
  const alignStyles = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const variantStyles = {
    display: 'font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-romantic-deep leading-tight',
    title: 'font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-romantic-purple tracking-normal',
    subtitle: 'font-serif text-xl sm:text-2xl font-semibold text-romantic-deep',
    card: 'font-serif text-lg sm:text-xl font-semibold text-slate-800',
  };

  return (
    <Component className={`${alignStyles[align]} ${variantStyles[variant]} ${className}`}>
      {children}
    </Component>
  );
};
