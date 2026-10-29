import React from 'react';

export interface TextProps {
  as?: 'p' | 'span' | 'div';
  variant?: 'body' | 'lead' | 'romantic' | 'muted' | 'caption';
  children: React.ReactNode;
  className?: string;
  align?: 'left' | 'center' | 'right' | 'justify';
}

export const Text: React.FC<TextProps> = ({
  as: Component = 'p',
  variant = 'body',
  children,
  className = '',
  align = 'left',
}) => {
  const alignStyles = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
  };

  const variantStyles = {
    body: 'text-base text-slate-700 leading-relaxed font-normal',
    lead: 'text-lg sm:text-xl text-slate-700 leading-relaxed font-normal',
    romantic: 'font-serif italic text-base sm:text-lg text-slate-700 leading-relaxed',
    muted: 'text-sm text-lavender-700 leading-normal',
    caption: 'text-xs text-lavender-600 font-medium tracking-wide uppercase',
  };

  return (
    <Component className={`${alignStyles[align]} ${variantStyles[variant]} ${className}`}>
      {children}
    </Component>
  );
};
