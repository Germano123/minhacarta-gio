import React from 'react';
import { Heart, Sparkles, Calendar, Camera, Star, Gift, Music, Compass } from 'lucide-react';

export interface TimelineMarkerProps {
  iconName?: 'heart' | 'sparkles' | 'calendar' | 'camera' | 'star' | 'gift' | 'music' | 'compass';
  isFirst?: boolean;
}

export const TimelineMarker: React.FC<TimelineMarkerProps> = ({
  iconName = 'heart',
  isFirst = false,
}) => {
  const renderIcon = () => {
    const size = 18;
    switch (iconName) {
      case 'sparkles':
        return <Sparkles size={size} />;
      case 'calendar':
        return <Calendar size={size} />;
      case 'camera':
        return <Camera size={size} />;
      case 'star':
        return <Star size={size} />;
      case 'gift':
        return <Gift size={size} />;
      case 'music':
        return <Music size={size} />;
      case 'compass':
        return <Compass size={size} />;
      case 'heart':
      default:
        return <Heart size={size} fill="currentColor" />;
    }
  };

  return (
    <div className="relative flex items-center justify-center">
      <div
        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 z-10 ${
          isFirst
            ? 'bg-romantic-purple text-white shadow-romantic-glow ring-4 ring-lavender-200'
            : 'bg-white text-romantic-purple border-2 border-lavender-300 shadow-romantic'
        }`}
      >
        {renderIcon()}
      </div>
    </div>
  );
};
