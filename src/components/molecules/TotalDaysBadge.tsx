import React from 'react';
import { Card } from '../atoms/Card';
import { HeartIcon } from '../atoms/HeartIcon';

export interface TotalDaysBadgeProps {
  totalDays: number;
  partnerName: string;
}

export const TotalDaysBadge: React.FC<TotalDaysBadgeProps> = ({
  totalDays,
  partnerName,
}) => {
  return (
    <Card
      variant="highlight"
      padding="lg"
      className="max-w-md mx-auto text-center relative overflow-hidden border-lavender-300 shadow-romantic-lg bg-gradient-to-b from-white via-lavender-50 to-lavender-100/60"
    >
      <div className="absolute top-2 right-3 text-lavender-300 opacity-40">
        <HeartIcon size="lg" variant="filled" color="lavender" />
      </div>
      <div className="text-xs uppercase tracking-widest font-semibold text-romantic-purple mb-2 flex items-center justify-center gap-1.5">
        <HeartIcon size="sm" variant="filled" color="purple" animate />
        Total acumulado de amor
      </div>
      <div className="text-5xl sm:text-6xl md:text-7xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-romantic-purple via-romantic-wine to-romantic-deep my-2 tabular-nums">
        {totalDays}
      </div>
      <div className="text-base sm:text-lg font-serif italic text-slate-700">
        dias compartilhados ao lado de <span className="font-semibold text-romantic-purple">{partnerName}</span>
      </div>
    </Card>
  );
};
