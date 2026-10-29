import React, { useState, useEffect } from 'react';
import { HeartIcon } from '../atoms/HeartIcon';

export interface HeaderProps {
  partnerName: string;
}

export const Header: React.FC<HeaderProps> = ({ partnerName }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-md shadow-sm border-b border-lavender-100 py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a
          href="#inicio"
          className="group flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-lavender-400 rounded-lg p-1"
        >
          <HeartIcon size="sm" variant="filled" color="purple" animate />
          <span className="font-serif font-bold text-lg sm:text-xl text-romantic-deep tracking-tight group-hover:text-romantic-purple transition-colors">
            Para <span className="text-romantic-purple">{partnerName}</span>
          </span>
        </a>

        <nav className="flex items-center gap-2 sm:gap-6 text-xs sm:text-sm font-medium text-slate-700">
          <a
            href="#declaracao"
            className="hover:text-romantic-purple transition-colors px-2 py-1 rounded-md focus:outline-none focus:ring-1 focus:ring-lavender-400"
          >
            Carta
          </a>
          <a
            href="#contador"
            className="hover:text-romantic-purple transition-colors px-2 py-1 rounded-md focus:outline-none focus:ring-1 focus:ring-lavender-400"
          >
            Nosso Tempo
          </a>
          <a
            href="#galeria"
            className="hover:text-romantic-purple transition-colors px-2 py-1 rounded-md focus:outline-none focus:ring-1 focus:ring-lavender-400"
          >
            Momentos
          </a>
          <a
            href="#historia"
            className="hover:text-romantic-purple transition-colors px-2 py-1 rounded-md focus:outline-none focus:ring-1 focus:ring-lavender-400"
          >
            História
          </a>
        </nav>
      </div>
    </header>
  );
};
