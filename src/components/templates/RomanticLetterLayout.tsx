import React from 'react';
import { FloatingHeart } from '../atoms/FloatingHeart';

export interface RomanticLetterLayoutProps {
  header: React.ReactNode;
  declarationHero: React.ReactNode;
  loveCounter: React.ReactNode;
  photoGallery: React.ReactNode;
  timeline: React.ReactNode;
  footer: React.ReactNode;
}

export const RomanticLetterLayout: React.FC<RomanticLetterLayoutProps> = ({
  header,
  declarationHero,
  loveCounter,
  photoGallery,
  timeline,
  footer,
}) => {
  return (
    <div className="min-h-screen bg-lavender-50 text-slate-800 relative selection:bg-lavender-300 selection:text-lavender-900 overflow-x-hidden">
      {/* Elementos decorativos de fundo sutis (corações flutuantes discretos) */}
      <FloatingHeart size={24} top="12%" left="6%" delay="0s" duration="7s" opacity={0.2} />
      <FloatingHeart size={18} top="28%" right="8%" delay="1.5s" duration="6s" opacity={0.15} />
      <FloatingHeart size={26} top="52%" left="4%" delay="3s" duration="8s" opacity={0.18} />
      <FloatingHeart size={20} top="74%" right="5%" delay="2s" duration="7s" opacity={0.22} />

      {/* Cabeçalho */}
      {header}

      {/* Conteúdo principal em fluxo sequencial conforme Seção 3 da especificação:
          1. Apresentação e declaração de amor
          2. Contador de tempo do relacionamento
          3. Galeria de fotografias
          4. Linha do tempo da nossa história
      */}
      <main id="inicio">
        {declarationHero}
        {loveCounter}
        {photoGallery}
        {timeline}
      </main>

      {/* Rodapé */}
      {footer}
    </div>
  );
};
