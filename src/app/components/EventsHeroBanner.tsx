'use client';

import React from 'react';
import Image from 'next/image';
import SocialRectangle from './SocialRectangle';
import Link from 'next/link';

const EventsHeroBanner: React.FC = () => {
  return (
    <div className="about-us-hero-banner events-hero-banner">
      <div className="image-left">
        <Image
          src="/images/events-hero-banner/events-hero-banner-image-01.png"
          alt="Events Image 1"
          width={512}
          height={702}
        />
      </div>
      <div className="about-us-rectangle about-us-rectangle-style events-rectangle">
        <span>Истакнат Настан</span>
        <h1 className="single-event-hero-title-shadow">HR Кафе</h1>
        <p>
          Овој четврток кафе на тема како да примените техники и чекори од селф
          коучинг за подобро да се водите себеси... l 25 Јули, 2024{' '}
        </p>

        <Link href={'./events/single-event'}>
          <div className="about-button events-button">Прочитај повеќе</div>
        </Link>
      </div>

      <div className="image-right">
        <Image
          src="/images/events-hero-banner/events-hero-banner-image-02.png"
          alt="Events Image 2"
          width={784}
          height={496}
        />
      </div>
      <SocialRectangle className="social-rectangle-events" />
      <Image
        src="/images/about-us-hero-banner/about-us-dots.png"
        alt="About Us Image 3"
        width={1915}
        height={398}
        className="about-us-dots events-dots"
      />
    </div>
  );
};
export default EventsHeroBanner;
