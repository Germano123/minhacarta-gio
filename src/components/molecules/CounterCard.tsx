import React from 'react';
import { Card } from '../atoms/Card';

export interface CounterCardProps {
  value: number;
  label: string;
  sublabel?: string;
  highlight?: boolean;
}

export const CounterCard: React.FC<CounterCardProps> = ({
  value,
  label,
  sublabel,
  highlight = false,
}) => {
  return (
    <Card
      variant={highlight ? 'highlight' : 'elevated'}
      padding="md"
      className="text-center group hover:scale-[1.02] transition-transform flex flex-col justify-center items-center h-full min-w-[100px] sm:min-w-[120px]"
    >
      <div className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-romantic-purple mb-1 tabular-nums tracking-tight">
        {value}
      </div>
      <div className="text-sm sm:text-base font-semibold text-slate-800 capitalize">
        {label}
      </div>
      {sublabel && (
        <div className="text-xs text-lavender-600 mt-0.5">
          {sublabel}
        </div>
      )}
    </Card>
  );
};
