'use client';

import React from 'react';
import FeatureCard from './FeatureCard';

const LatestBlogs: React.FC = () => {
  const featureCardIds = [7, 5, 2, 6];

  return (
    <div className="feature-cards-container">
      <h2 className="about-us-title feature-cards-title">Најнови блогови</h2>
      <div className="feature-cards-grid">
        {featureCardIds.map((id) => (
          <FeatureCard key={id} id={id} />
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
