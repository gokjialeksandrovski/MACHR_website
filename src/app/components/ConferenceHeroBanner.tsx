'use client';

import React from 'react';
import Image from 'next/image';
import SocialRectangle from './SocialRectangle';

const ConferenceHeroBanner: React.FC = () => {
  return (
    <div className="conference-hero-banner">
      <Image
        src="/images/conference-hero-banner/conference-hero-banner-image.png"
        alt="Conference Image 1"
        width={1861}
        height={752}
        className="conference-hero-banner-image"
      />
      <div className="conference-hero-banner-titles">
        <h2>Настан</h2>
        <h1>13та меѓународна МАЧР конференција</h1>
        <h3>l 24-25 Декември, 2024</h3>
      </div>
      <SocialRectangle />
      <Image
        src="/images/conference-hero-banner/conference-dots-1.png"
        alt="Conference Image 2"
        width={301.1}
        height={350.54}
        className="conference-dot-1"
      />
      <Image
        src="/images/conference-hero-banner/conference-dots-1.png"
        alt="Conference Image 3"
        width={316}
        height={454.54}
        className="conference-dot-2"
      />
    </div>
  );
};
export default ConferenceHeroBanner;
