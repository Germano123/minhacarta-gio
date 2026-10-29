import React from 'react';
import { Heart } from 'lucide-react';

export interface HeartIconProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'outline' | 'filled' | 'gentle';
  color?: 'purple' | 'lavender' | 'rose' | 'white';
  className?: string;
  animate?: boolean;
}

const sizeMap = {
  sm: 16,
  md: 22,
  lg: 32,
  xl: 48,
};

const colorMap = {
  purple: {
    fill: '#7c3aed',
    stroke: '#6d28d9',
    className: 'text-romantic-purple',
  },
  lavender: {
    fill: '#a374d3',
    stroke: '#8955be',
    className: 'text-lavender-500',
  },
  rose: {
    fill: '#f43f5e',
    stroke: '#e11d48',
    className: 'text-rose-500',
  },
  white: {
    fill: '#ffffff',
    stroke: '#ffffff',
    className: 'text-white',
  },
};

export const HeartIcon: React.FC<HeartIconProps> = ({
  size = 'md',
  variant = 'filled',
  color = 'purple',
  className = '',
  animate = false,
}) => {
  const pixelSize = sizeMap[size];
  const colorConfig = colorMap[color];

  return (
    <Heart
      size={pixelSize}
      fill={variant === 'filled' ? colorConfig.fill : 'none'}
      stroke={colorConfig.stroke}
      strokeWidth={variant === 'filled' ? 0.5 : 2}
      className={`inline-block transition-transform duration-300 ${colorConfig.className} ${
        animate ? 'animate-pulse-gentle' : ''
      } ${className}`}
      aria-hidden="true"
    />
  );
};
