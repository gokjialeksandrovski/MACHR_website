'use client';

import React, { useEffect, useState } from 'react';
import { useLanguage } from './LanguageContext';

interface BlackCardProps {
  fetchUrl: string;
  className?: string;
  searchFilter?: (text: string) => boolean;
}

interface CardData {
  backgroundImage: string;
  title: {
    mk: string;
    en: string;
  };
  subtitle: {
    mk: string;
    en: string;
  };
  month: {
    mk: string;
    en: string;
  };
  day: string;
}

const BlackCard: React.FC<BlackCardProps> = ({
  fetchUrl,
  className,
  searchFilter,
}) => {
  const [cardData, setCardData] = useState<CardData | null>(null);
  const { language } = useLanguage();

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const response = await fetch(fetchUrl);
        const data = await response.json();
        setCardData(data);
      } catch (error) {
        console.error('Error fetching card data:', error);
      }
    };

    fetchCardData();
  }, [fetchUrl]);

  if (
    !cardData ||
    (searchFilter &&
      !searchFilter(cardData.title[language]) &&
      !searchFilter(cardData.subtitle[language]))
  )
    return null;

  return (
    <div
      className={`carousel-card black-card ${className || ''}`}
      style={{
        backgroundImage: `url(${cardData.backgroundImage})`,
      }}
    >
      <div className={`carousel-content black-card-content`}>
        <h3>{language === 'mk' ? 'Предложен настан:' : 'Suggested Event:'}</h3>
        <div className="carousel-titles">
          <h4 className="carousel-title">{cardData.title[language]}</h4>
          <p className="carousel-subtitle">{cardData.subtitle[language]}</p>
        </div>
        <div className="carousel-date black -card-date">
          <span className="carousel-month">{cardData.month[language]}</span>
          <span className="carousel-day">{cardData.day}</span>
        </div>
        <a href="#" className="feature-card-read-more black-card-read-more">
          {language === 'mk' ? 'Прочитај повеќе' : 'Read more'}
        </a>
      </div>
    </div>
  );
};

export default BlackCard;
