import React from 'react';
import { galleryData } from '../data/portfolioData';
import { InteractiveGallery } from './InteractiveGallery';

export const Gallery: React.FC = () => {
  return (
    <div id="visual-library-root" className="w-full">
      <InteractiveGallery items={galleryData} type="gallery" />
    </div>
  );
};
