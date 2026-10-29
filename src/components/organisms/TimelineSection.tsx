import React, { useState } from 'react';
import { SectionHeader } from '../molecules/SectionHeader';
import { TimelineMarker } from '../molecules/TimelineMarker';
import { TimelineCard } from '../molecules/TimelineCard';
import { Bookmark, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { TimelineEvent } from '../../types';

export interface TimelineSectionProps {
  events: TimelineEvent[];
}

const INITIAL_VISIBLE_COUNT = 3;
const INCREMENT_COUNT = 3;

export const TimelineSection: React.FC<TimelineSectionProps> = ({ events }) => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  const visibleEvents = events.slice(0, visibleCount);
  const hasMore = visibleCount < events.length;
  const remainingCount = events.length - visibleCount;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + INCREMENT_COUNT, events.length));
  };

  const handleCollapse = () => {
    setVisibleCount(INITIAL_VISIBLE_COUNT);
    const element = document.getElementById('historia');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="historia" className="py-16 sm:py-24 px-4 sm:px-6 bg-lavender-100/30 relative">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          tag="Capítulos do Nosso Amor"
          tagIcon={<Bookmark size={14} className="text-romantic-purple" />}
          title="Nossa história"
          subtitle="Momentos que marcaram nossa jornada"
        />

        {/* Linha do tempo vertical */}
        <div className="relative mt-12">
          {/* Linha vertical centralizada em desktop e à esquerda em mobile */}
          <div
            className="absolute top-4 bottom-4 left-5 sm:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-lavender-300 via-romantic-purple/40 to-lavender-300"
            aria-hidden="true"
          />

          <div className="space-y-12 sm:space-y-16">
            {visibleEvents.map((event, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={event.id}
                  className="relative flex flex-col sm:flex-row items-start sm:items-center group transition-all duration-500 animate-fadeIn"
                >
                  {/* Ponto/Marcador central */}
                  <div className="absolute left-5 sm:left-1/2 -translate-x-1/2 z-20">
                    <TimelineMarker
                      iconName={event.iconName}
                      isFirst={index === 0}
                    />
                  </div>

                  {/* Lado Esquerdo (em telas grandes para itens pares) */}
                  <div
                    className={`w-full sm:w-1/2 pl-14 sm:pl-0 ${
                      isEven ? 'sm:pr-12 sm:text-right' : 'sm:order-2 sm:pl-12 text-left'
                    }`}
                  >
                    <TimelineCard
                      date={event.date}
                      title={event.title}
                      description={event.description}
                      align={isEven ? 'right' : 'left'}
                    />
                  </div>

                  {/* Espaçador para o lado oposto em telas grandes */}
                  <div
                    className={`hidden sm:block w-1/2 ${
                      isEven ? 'order-2 pl-12' : 'order-1 pr-12'
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Área de Ação: Botão Flutuante "Ver mais" ou Final da Linha */}
          <div className="relative z-30 flex flex-col items-center justify-center mt-12 pt-6">
            {hasMore ? (
              <div className="flex flex-col items-center gap-3">
                {/* Botão com animação flutuante */}
                <button
                  type="button"
                  onClick={handleLoadMore}
                  aria-label={`Ver mais 3 momentos da linha do tempo. Restam ${remainingCount}.`}
                  className="group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-romantic-purple hover:bg-romantic-deep text-white font-medium text-sm sm:text-base shadow-romantic-lg hover:shadow-romantic-glow transition-all duration-300 transform hover:scale-105 active:scale-95 animate-float-medium cursor-pointer"
                >
                  <span>Ver mais</span>
                  <ChevronDown size={18} className="group-hover:translate-y-0.5 transition-transform" />
                  <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full font-sans">
                    +{Math.min(INCREMENT_COUNT, remainingCount)}
                  </span>
                </button>
                <span className="text-xs text-lavender-700">
                  Mostrando {visibleCount} de {events.length} momentos
                </span>
              </div>
            ) : (
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-9 h-9 rounded-full bg-lavender-200/90 border border-lavender-300 flex items-center justify-center text-romantic-purple shadow-sm">
                  <Sparkles size={18} />
                </div>
                <p className="text-xs sm:text-sm font-serif italic text-lavender-800">
                  Todos os {events.length} momentos exibidos • E muitos outros capítulos a serem escritos...
                </p>

                {events.length > INITIAL_VISIBLE_COUNT && (
                  <button
                    type="button"
                    onClick={handleCollapse}
                    className="inline-flex items-center gap-1.5 text-xs text-romantic-purple hover:text-romantic-deep bg-white/80 hover:bg-white px-3 py-1.5 rounded-full border border-lavender-200 shadow-sm transition-all duration-200 mt-2"
                  >
                    <ChevronUp size={14} />
                    <span>Recolher linha do tempo</span>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
