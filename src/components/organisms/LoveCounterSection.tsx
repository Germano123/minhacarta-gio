import React, { useState, useEffect } from 'react';
import { SectionHeader } from '../molecules/SectionHeader';
import { CounterCard } from '../molecules/CounterCard';
import { TotalDaysBadge } from '../molecules/TotalDaysBadge';
import { calculateTimeElapsed } from '../../utils/timeCalculator';
import { Clock } from 'lucide-react';
import { TimeElapsed } from '../../types';

export interface LoveCounterSectionProps {
  startDate: string;
  partnerName: string;
}

export const LoveCounterSection: React.FC<LoveCounterSectionProps> = ({
  startDate,
  partnerName,
}) => {
  const [time, setTime] = useState<TimeElapsed>(() => calculateTimeElapsed(startDate));

  useEffect(() => {
    // Atualização automática em tempo real a cada segundo
    const interval = setInterval(() => {
      setTime(calculateTimeElapsed(startDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <section id="contador" className="py-16 px-4 sm:px-6 bg-lavender-100/40 relative">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          tag="Tempo do nosso amor"
          tagIcon={<Clock size={14} className="text-romantic-purple" />}
          title="Contador da nossa jornada"
          subtitle="Cada segundo compartilhado constrói a história mais bonita que eu poderia sonhar em viver."
        />

        {/* Destaque Especial: Total Acumulado de Dias */}
        <div className="mb-10">
          <TotalDaysBadge
            totalDays={time.totalDays}
            partnerName={partnerName}
          />
        </div>

        {/* Grid com Anos completos, Semanas e Dias restantes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
          <CounterCard
            value={time.years}
            label={time.years === 1 ? 'Ano' : 'Anos'}
            sublabel="de relacionamento"
          />
          <CounterCard
            value={time.weeks}
            label={time.weeks === 1 ? 'Semana completa' : 'Semanas completas'}
            sublabel="transcorridas no ciclo atual"
          />
          <CounterCard
            value={time.remainingDays}
            label={time.remainingDays === 1 ? 'Dia restante' : 'Dias restantes'}
            sublabel="após contabilizar semanas"
          />
        </div>

        {/* Detalhe adicional sutil: Horas, minutos e segundos em tempo real */}
        <div className="mt-8 text-center text-xs text-lavender-700/80 font-medium tracking-wide">
          <span className="inline-flex items-center gap-2 bg-white/70 px-4 py-1.5 rounded-full border border-lavender-200/60 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Atualizando ao vivo: {String(time.hours).padStart(2, '0')}h : {String(time.minutes).padStart(2, '0')}m : {String(time.seconds).padStart(2, '0')}s
          </span>
        </div>
      </div>
    </section>
  );
};
