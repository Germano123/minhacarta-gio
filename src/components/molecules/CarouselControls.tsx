import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../atoms/Button';

export interface CarouselControlsProps {
  onPrev: () => void;
  onNext: () => void;
  prevDisabled?: boolean;
  nextDisabled?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export const CarouselControls: React.FC<CarouselControlsProps> = ({
  onPrev,
  onNext,
  prevDisabled = false,
  nextDisabled = false,
  children,
  className = '',
}) => {
  return (
    <div className={`flex items-center justify-between w-full gap-2 sm:gap-4 ${className}`}>
      {/* Botão Anterior à esquerda */}
      <Button
        variant="icon"
        size="sm"
        onClick={onPrev}
        disabled={prevDisabled}
        aria-label="Foto anterior"
        title="Foto anterior"
        className="bg-lavender-100/90 hover:bg-romantic-purple hover:text-white text-romantic-purple border border-lavender-200 shadow-sm transition-all duration-200 active:scale-95"
      >
        <ChevronLeft size={20} />
      </Button>

      {/* Região central com os botões/indicadores de transição */}
      {children && (
        <div className="flex-1 flex justify-center items-center">
          {children}
        </div>
      )}

      {/* Botão Próximo à direita */}
      <Button
        variant="icon"
        size="sm"
        onClick={onNext}
        disabled={nextDisabled}
        aria-label="Próxima foto"
        title="Próxima foto"
        className="bg-lavender-100/90 hover:bg-romantic-purple hover:text-white text-romantic-purple border border-lavender-200 shadow-sm transition-all duration-200 active:scale-95"
      >
        <ChevronRight size={20} />
      </Button>
    </div>
  );
};
