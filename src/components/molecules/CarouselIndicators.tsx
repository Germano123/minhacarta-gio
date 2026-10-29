import React from 'react';

export interface CarouselIndicatorsProps {
  total: number;
  current: number;
  onSelect: (index: number) => void;
}

export const CarouselIndicators: React.FC<CarouselIndicatorsProps> = ({
  total,
  current,
  onSelect,
}) => {
  return (
    <div
      className="flex items-center justify-center gap-2 py-3"
      role="tablist"
      aria-label="Indicadores do carrossel de fotos"
    >
      {Array.from({ length: total }).map((_, index) => {
        const isActive = index === current;
        return (
          <button
            key={index}
            role="tab"
            aria-selected={isActive}
            aria-label={`Ir para a foto ${index + 1} de ${total}`}
            onClick={() => onSelect(index)}
            className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-lavender-400 focus:ring-offset-1 ${
              isActive
                ? 'w-8 h-2.5 bg-romantic-purple shadow-sm'
                : 'w-2.5 h-2.5 bg-lavender-300 hover:bg-lavender-400'
            }`}
          />
        );
      })}
    </div>
  );
};
