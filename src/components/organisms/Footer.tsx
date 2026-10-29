import React from 'react';
import { HeartIcon } from '../atoms/HeartIcon';
import { Divider } from '../atoms/Divider';

export interface FooterProps {
  partnerName: string;
}

export const Footer: React.FC<FooterProps> = ({ partnerName }) => {
  return (
    <footer className="pt-12 pb-16 px-4 sm:px-6 bg-lavender-100/60 border-t border-lavender-200/60 text-center relative overflow-hidden">
      <div className="max-w-xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-4">
          <HeartIcon size="md" variant="filled" color="rose" animate />
        </div>

        <p className="font-serif italic text-lg sm:text-xl text-romantic-deep font-semibold">
          "Amar você também é escolher continuar conquistando seu coração."
        </p>

        <p className="text-sm text-lavender-800 mt-2">
          Feito com todo amor para <span className="font-semibold text-romantic-purple">{partnerName}</span>
        </p>

        <Divider className="my-6 max-w-xs mx-auto" withHeart={false} />

        <p className="text-xs text-lavender-600">
          Iniciado em 25 de abril de 2025 • Para todo o sempre
        </p>
      </div>
    </footer>
  );
};
