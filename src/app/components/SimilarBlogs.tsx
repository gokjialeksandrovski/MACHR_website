'use client';

import React from 'react';
import FeatureCard from './FeatureCard';
import { useLanguage } from './LanguageContext';

const SimilarBlogs: React.FC = () => {
  const { language } = useLanguage();
  const featureCardIds = [7, 2, 8, 3];

  return (
    <div className="feature-cards-container similar-blogs-container">
      <h2 className="about-us-title feature-cards-title">
        {language === 'mk' ? 'Слични блогови' : 'Similar Blogs'}
      </h2>
      <div className="feature-cards-grid">
        {featureCardIds.map((id) => (
          <FeatureCard key={id} id={id} />
        ))}
      </div>
    </div>
  );
};

export default SimilarBlogs;
