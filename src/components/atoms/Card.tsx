import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  variant?: 'elevated' | 'soft' | 'highlight' | 'outlined';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  rounded?: 'lg' | 'xl' | '2xl' | '3xl';
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'elevated',
  padding = 'lg',
  rounded = '3xl',
  className = '',
  onClick,
}) => {
  const variantStyles = {
    elevated: 'bg-white/95 backdrop-blur-sm border border-lavender-200/70 shadow-romantic',
    soft: 'bg-lavender-100/50 backdrop-blur-sm border border-lavender-200/60 shadow-sm',
    highlight: 'bg-gradient-to-br from-lavender-100 via-white to-lavender-50 border-2 border-lavender-300/80 shadow-romantic-lg',
    outlined: 'bg-white/60 border border-lavender-200 backdrop-blur-sm',
  };

  const paddingStyles = {
    none: 'p-0',
    sm: 'p-3 sm:p-4',
    md: 'p-4 sm:p-6',
    lg: 'p-6 sm:p-8',
    xl: 'p-8 sm:p-12',
  };

  const roundedStyles = {
    lg: 'rounded-xl',
    xl: 'rounded-2xl',
    '2xl': 'rounded-2xl sm:rounded-3xl',
    '3xl': 'rounded-3xl',
  };

  return (
    <div
      onClick={onClick}
      className={`transition-all duration-300 ${variantStyles[variant]} ${paddingStyles[padding]} ${roundedStyles[rounded]} ${className}`}
    >
      {children}
    </div>
  );
};
