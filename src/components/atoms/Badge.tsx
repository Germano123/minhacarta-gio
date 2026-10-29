import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'lavender' | 'purple' | 'outline' | 'subtle';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'lavender',
  size = 'md',
  icon,
  className = '',
}) => {
  const variantStyles = {
    lavender: 'bg-lavender-100 text-romantic-purple border border-lavender-200/80',
    purple: 'bg-romantic-purple text-white shadow-sm',
    outline: 'border border-lavender-300 text-lavender-800 bg-white/60 backdrop-blur-sm',
    subtle: 'bg-lavender-50/80 text-lavender-700 border border-lavender-100',
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 gap-1.5',
    md: 'text-sm px-3.5 py-1 gap-2',
  };

  return (
    <span
      className={`inline-flex items-center font-medium rounded-full transition-all duration-200 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
