'use client';

import React from 'react';
import FeatureCard from './FeatureCard';
import Image from 'next/image';
import { useLanguage } from './LanguageContext';

interface CompanyCultureProps {
  searchFilter?: (title: string) => boolean;
}

const CompanyCulture: React.FC<CompanyCultureProps> = ({ searchFilter }) => {
  const { language } = useLanguage();
  const featureCardIds = [3, 1, 4, 5];

  return (
    <div className="blogs-filters-dots-alignment company-culture">
      <div className="feature-cards-container">
        <h2 className="about-us-title feature-cards-title">
          {language === 'mk'
            ? 'Тема: Култура во компанијата'
            : 'Topic: Company Culture'}
        </h2>
        <div className="feature-cards-grid">
          {featureCardIds.map((id) => (
            <FeatureCard key={id} id={id} searchFilter={searchFilter} />
          ))}
        </div>
      </div>
      <Image
        src="/images/blogs-filters/blogs-filters-dots.png"
        alt="About Us Image 3"
        width={2053}
        height={433}
        className="blogs-filters-dots"
      />
    </div>
  );
};

export default CompanyCulture;
