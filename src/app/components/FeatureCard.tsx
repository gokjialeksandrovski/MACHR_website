'use client';

import React, { useEffect, useState } from 'react';
import { useLanguage } from './LanguageContext'; // Import the useLanguage hook

interface FeatureCardProps {
  id: number;
  searchFilter?: (title: string) => boolean;
  className?: string;
}

interface FeatureCardData {
  id: number;
  image: string;
  title: {
    mk: string;
    en: string;
  };
  text: {
    mk: string;
    en: string;
  };
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  id,
  searchFilter,
  className,
}) => {
  const { language } = useLanguage(); // Get the current language from the context
  const [featureCard, setFeatureCard] = useState<FeatureCardData | null>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/featureCards/${id}`
        );
        const data = await response.json();
        setFeatureCard(data);
      } catch (error) {
        console.error('Error fetching feature card:', error);
      }
    };

    fetchData();
  }, [id]);

  if (
    !featureCard ||
    (searchFilter && !searchFilter(featureCard.title[language]))
  ) {
    return null;
  }

  return (
    <div
      className={`feature-card ${className || ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`feature-card-animation`}>
        <div
          className={`feature-card-image ${
            hovered
              ? 'animate__animated animate__fadeOutTopLeft'
              : 'animate__animated animate__fadeInTopLeft'
          }`}
          style={{ backgroundImage: `url(${featureCard.image})` }}
        ></div>
      </div>
      <div className={`feature-card-content ${hovered ? 'hovered' : ''}`}>
        <h3
          className={`${
            hovered
              ? 'animate__animated animate__slideInRight'
              : 'animate__animated animate__slideInLeft'
          }`}
        >
          {featureCard.title[language]}
        </h3>
        <p
          className={`feature-text ${
            hovered
              ? 'animate__animated animate__fadeInRight'
              : 'animate__animated animate__fadeOutRight'
          }`}
        >
          {featureCard.text[language]}
        </p>
        <a className="feature-card-read-more" href="./events/single-event">
          {language === 'mk' ? 'Прочитај повеќе' : 'Read More'}
        </a>
      </div>
    </div>
  );
};

export default FeatureCard;
