import React from 'react';
import { Card } from '../atoms/Card';
import { Badge } from '../atoms/Badge';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { Calendar } from 'lucide-react';

export interface TimelineCardProps {
  date: string;
  title: string;
  description: string;
  align?: 'left' | 'right';
}

export const TimelineCard: React.FC<TimelineCardProps> = ({
  date,
  title,
  description,
  align = 'left',
}) => {
  const alignClass = align === 'right' ? 'sm:text-right' : 'text-left';

  return (
    <Card
      variant="elevated"
      padding="md"
      className={`relative hover:shadow-romantic-lg transition-all duration-300 border-lavender-200/90 ${alignClass}`}
    >
      <div className={`flex items-center gap-2 mb-2 ${align === 'right' ? 'sm:justify-end' : 'justify-start'}`}>
        <Badge
          variant="lavender"
          size="sm"
          icon={<Calendar size={13} className="text-romantic-purple" />}
        >
          {date}
        </Badge>
      </div>

      <Heading as="h3" variant="card" align={align} className="text-romantic-deep mb-2 font-serif font-bold text-lg sm:text-xl">
        {title}
      </Heading>

      <Text variant="body" align={align} className="text-slate-600 text-sm sm:text-base leading-relaxed">
        {description}
      </Text>
    </Card>
  );
};
