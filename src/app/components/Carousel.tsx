'use client';

import React, { useEffect, useState } from 'react';
import CarouselCard from './CarouselCard';

interface CarouselCardData {
  id: number;
  backgroundImage: string;
  title: { mk: string; en: string };
  subtitle: { mk: string; en: string };
  month: { mk: string; en: string };
  day: string;
}

interface CarouselProps {
  extraMarginLeft?: boolean;
  extraMarginLeft2?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({
  extraMarginLeft,
  extraMarginLeft2,
}) => {
  const [carouselCards, setCarouselCards] = useState<CarouselCardData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:5000/carouselCards');
      const data = await response.json();
      setCarouselCards(data);
    };
    fetchData();
  }, []);

  return (
    <div
      className={`carousel ${extraMarginLeft ? 'extra-margin-left' : ''} ${extraMarginLeft2 ? 'extra-margin-left-2' : ''}`}
    >
      <div className="carousel-track">
        {carouselCards.concat(carouselCards).map((card, index) => (
          <CarouselCard
            key={index}
            backgroundImage={card.backgroundImage}
            title={card.title}
            subtitle={card.subtitle}
            month={card.month}
            day={card.day}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
