'use client';

import React from 'react';
import FeatureCard from './FeatureCard';

const ConferenceSimilarEvents: React.FC = () => {
  const featureCardIds = [9, 12, 17, 20];

  return (
    <div className="feature-cards-container feature-cards-similar-events">
      <h2 className="about-us-title feature-cards-title">Најнови блогови</h2>
      <div className="feature-cards-grid">
        {featureCardIds.map((id) => (
          <FeatureCard key={id} id={id} />
        ))}
      </div>
    </div>
  );
};

export default ConferenceSimilarEvents;
