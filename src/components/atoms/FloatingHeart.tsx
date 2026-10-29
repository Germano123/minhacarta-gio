import React from 'react';
import { Heart } from 'lucide-react';

export interface FloatingHeartProps {
  size?: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  opacity?: number;
  delay?: string;
  duration?: string;
  className?: string;
}

export const FloatingHeart: React.FC<FloatingHeartProps> = ({
  size = 20,
  top,
  left,
  right,
  bottom,
  opacity = 0.25,
  delay = '0s',
  duration = '6s',
  className = '',
}) => {
  return (
    <div
      className={`absolute pointer-events-none transition-all hidden sm:block motion-reduce:hidden ${className}`}
      style={{
        top,
        left,
        right,
        bottom,
        opacity,
        animation: `float ${duration} ease-in-out infinite`,
        animationDelay: delay,
      }}
      aria-hidden="true"
    >
      <Heart
        size={size}
        fill="#be9be2"
        stroke="#a374d3"
        strokeWidth={1}
      />
    </div>
  );
};
