'use client';

import React from 'react';
import FeatureCard from './FeatureCard';
import { useLanguage } from './LanguageContext';

interface CompanyCultureTwoProps {
  searchFilter?: (title: string) => boolean;
}

const CompanyCultureTwo: React.FC<CompanyCultureTwoProps> = ({
  searchFilter,
}) => {
  const { language } = useLanguage();
  const featureCardIds = [6, 7, 2, 8];

  return (
    <div className="company-culture company-culture-2">
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
    </div>
  );
};

export default CompanyCultureTwo;
