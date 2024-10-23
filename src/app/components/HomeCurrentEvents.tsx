'use client';

import React, { useEffect, useRef, useState } from 'react';
import FeatureCard from './FeatureCard';

const HomeCurrentEvents: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const featureCardIds = [11, 30, 31, 24];

  const animationClasses: { [key: number]: string } = {
    11: 'animate__animated animate__bounceInLeft animate__slow',
    30: 'animate__animated animate__bounceInDown animate__slow',
    31: 'animate__animated animate__bounceInUp animate__slow',
    24: 'animate__animated animate__bounceInRight animate__slow',
  };

  useEffect(() => {
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

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
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
        Current Events
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

export default HomeCurrentEvents;
