import React from 'react';
import { HeartIcon } from './HeartIcon';

export interface DividerProps {
  className?: string;
  withHeart?: boolean;
}

export const Divider: React.FC<DividerProps> = ({
  className = '',
  withHeart = true,
}) => {
  return (
    <div className={`flex items-center justify-center my-6 sm:my-8 ${className}`} role="separator">
      <div className="h-px bg-gradient-to-r from-transparent via-lavender-300 to-transparent flex-1 max-w-xs" />
      {withHeart && (
        <div className="mx-3 flex items-center justify-center text-lavender-400">
          <HeartIcon size="sm" variant="filled" color="lavender" />
        </div>
      )}
      <div className="h-px bg-gradient-to-r from-transparent via-lavender-300 to-transparent flex-1 max-w-xs" />
    </div>
  );
};
