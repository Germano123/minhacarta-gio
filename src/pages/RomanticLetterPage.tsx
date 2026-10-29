import React from 'react';
import { RomanticLetterLayout } from '../components/templates/RomanticLetterLayout';
import { Header } from '../components/organisms/Header';
import { DeclarationHero } from '../components/organisms/DeclarationHero';
import { LoveCounterSection } from '../components/organisms/LoveCounterSection';
import { PhotoGallerySection } from '../components/organisms/PhotoGallerySection';
import { TimelineSection } from '../components/organisms/TimelineSection';
import { Footer } from '../components/organisms/Footer';

import { relationshipConfig, carouselPhotos } from '../data/relationshipConfig';
import { timelineEvents } from '../data/timelineData';

export const RomanticLetterPage: React.FC = () => {
  return (
    <RomanticLetterLayout
      header={<Header partnerName={relationshipConfig.partnerName} />}
      declarationHero={<DeclarationHero config={relationshipConfig} />}
      loveCounter={
        <LoveCounterSection
          startDate={relationshipConfig.startDate}
          partnerName={relationshipConfig.partnerName}
        />
      }
      photoGallery={<PhotoGallerySection photos={carouselPhotos} />}
      timeline={<TimelineSection events={timelineEvents} />}
      footer={<Footer partnerName={relationshipConfig.partnerName} />}
    />
  );
};
