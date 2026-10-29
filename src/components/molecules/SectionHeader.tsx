import React from 'react';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { Badge } from '../atoms/Badge';
import { Divider } from '../atoms/Divider';

export interface SectionHeaderProps {
  tag?: string;
  tagIcon?: React.ReactNode;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  withDivider?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  tag,
  tagIcon,
  title,
  subtitle,
  align = 'center',
  withDivider = true,
  className = '',
}) => {
  return (
    <div className={`mb-8 sm:mb-12 ${align === 'center' ? 'text-center mx-auto' : ''} ${className}`}>
      {tag && (
        <div className="mb-3">
          <Badge variant="lavender" icon={tagIcon}>
            {tag}
          </Badge>
        </div>
      )}
      <Heading as="h2" variant="title" align={align}>
        {title}
      </Heading>
      {subtitle && (
        <Text variant="muted" align={align} className="mt-2.5 max-w-xl mx-auto font-normal text-base text-lavender-700">
          {subtitle}
        </Text>
      )}
      {withDivider && <Divider className="mt-4 mb-2 max-w-xs mx-auto" />}
    </div>
  );
};
