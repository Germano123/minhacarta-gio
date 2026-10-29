export interface RelationshipConfig {
  partnerName: string;
  startDate: string; // ISO format: YYYY-MM-DD
  title: string;
  declaration: string[];
}

export interface TimeElapsed {
  years: number;
  weeks: number;
  remainingDays: number;
  totalDays: number;
  hours: number;
  minutes: number;
  seconds: number;
  isFuture: boolean;
}

export interface CarouselPhoto {
  id: number;
  src: string;
  alt: string;
  caption?: string;
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  iconName?: 'heart' | 'sparkles' | 'calendar' | 'camera' | 'star' | 'gift' | 'music' | 'compass';
}
