import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'icon';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-lavender-400 focus:ring-offset-2 active:scale-95 disabled:opacity-50 disabled:pointer-events-none select-none';

  const variantStyles = {
    primary: 'bg-romantic-purple hover:bg-romantic-deep text-white shadow-romantic hover:shadow-romantic-lg',
    secondary: 'bg-white hover:bg-lavender-50 text-romantic-purple border border-lavender-200 shadow-sm hover:border-lavender-300',
    ghost: 'text-lavender-800 hover:text-romantic-purple hover:bg-lavender-100/60',
    icon: 'p-2.5 rounded-full bg-white/90 hover:bg-white text-romantic-purple border border-lavender-200/80 shadow-romantic hover:scale-110 active:scale-90 transition-all',
  };

  const sizeStyles = {
    sm: variant === 'icon' ? 'p-2' : 'text-xs px-3 py-1.5 gap-1.5',
    md: variant === 'icon' ? 'p-3' : 'text-sm px-5 py-2.5 gap-2',
    lg: variant === 'icon' ? 'p-4' : 'text-base px-6 py-3.5 gap-2.5',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
      {children && <span>{children}</span>}
      {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
    </button>
  );
};
