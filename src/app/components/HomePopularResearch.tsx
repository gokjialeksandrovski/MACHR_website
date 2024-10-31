'use client';

import React, { useEffect, useRef, useState } from 'react';
import FeatureCard from './FeatureCard';
import { useLanguage } from './LanguageContext';

const HomePopularResearch: React.FC = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const featureCardIds = [25, 26, 27, 28];

  const animationClasses: { [key: number]: string } = {
    25: 'animate__animated animate__bounceInLeft animate__slow',
    26: 'animate__animated animate__bounceInDown animate__slow',
    27: 'animate__animated animate__bounceInUp animate__slow',
    28: 'animate__animated animate__bounceInRight animate__slow',
  };

  useEffect(() => {
    const currentContainerRef = containerRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        root: null,
        threshold: 0.3,
      }
    );

    if (currentContainerRef) {
      observer.observe(currentContainerRef);
    }

    return () => {
      if (currentContainerRef) {
        observer.unobserve(currentContainerRef);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="feature-cards-container">
      <h2
        className={`about-us-title feature-cards-title ${
          isVisible
            ? 'animate__animated animate__bounceInLeft animate__slow animate__delay-1s'
            : ''
        }`}
      >
        {language === 'mk' ? 'Популарни истражувања' : 'Popular Research'}
      </h2>
      <div className="feature-cards-grid">
        {featureCardIds.map((id) => (
          <FeatureCard
            key={id}
            id={id}
            className={isVisible ? animationClasses[id] : ''}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePopularResearch;
