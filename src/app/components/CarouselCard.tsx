import React from 'react';
import { useLanguage } from './LanguageContext';

interface CarouselCardProps {
  backgroundImage: string;
  title: { mk: string; en: string };
  subtitle: { mk: string; en: string };
  month: { mk: string; en: string };
  day: string;
}

const CarouselCard: React.FC<CarouselCardProps> = ({
  backgroundImage,
  title,
  subtitle,
  month,
  day,
}) => {
  const { language } = useLanguage();

  return (
    <div
      className="carousel-card"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="carousel-content">
        <div className="carousel-titles">
          <h3 className="carousel-title">{title[language]}</h3>
          <p className="carousel-subtitle">{subtitle[language]}</p>
        </div>
        <div className="carousel-date">
          <span className="carousel-month">{month[language]}</span>
          <span className="carousel-day">{day}</span>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
