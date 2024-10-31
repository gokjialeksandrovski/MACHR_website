'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import BuyTicket from './BuyTicket';
import { useLanguage } from './LanguageContext';

const HomeEvent: React.FC = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const eventRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentEventRef = eventRef.current;

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

    if (currentEventRef) {
      observer.observe(currentEventRef);
    }

    return () => {
      if (currentEventRef) {
        observer.unobserve(currentEventRef);
      }
    };
  }, []);

  return (
    <div ref={eventRef} className="home-page-event">
      <div
        className={`home-event-items-container ${
          isVisible ? 'animate__animated animate__fadeIn animate__slower' : ''
        }`}
      >
        <div className="home-event-text">
          <h1 className="about-us-title">
            {language === 'mk'
              ? 'Најголемиот HR настан на нашите простори - Годишната HR конференција на МАЧР'
              : 'The Biggest HR Event in Our Region - The Annual HR Conference by MACHR'}
          </h1>
          <p>
            {language === 'mk'
              ? 'Меѓународна размена на искуства во полето на човечки ресурси и константно движење во чекор со светските трендови.'
              : 'An international exchange of experiences in the field of human resources and constantly keeping up with global trends.'}
          </p>
          <div className="home-event-president">
            <Image
              src="/images/home-event/home-event-president.png"
              alt="Home Event Image 1"
              width={66.15}
              height={666.15}
            />
            <div className="home-event-president-text">
              <h2>
                {language === 'mk'
                  ? 'м-р Дарко Петровски'
                  : 'Mr. Darko Petrovski'}
              </h2>
              <span>
                {language === 'mk'
                  ? 'Претседател на МАЧР'
                  : 'President of MACHR'}
              </span>
            </div>
          </div>
        </div>
        <div
          className="home-event-images"
          style={{
            backgroundImage: `url('/images/home-event/home-event-image.png')`,
          }}
        >
          <Image
            src="/images/13-machr-conference/conference-circle-1.png"
            alt="Home Event Circle 1"
            width={274}
            height={274}
            className={`home-event-circle ${
              isVisible
                ? 'animate__animated animate__bounceIn animate__slow animate__delay-1s'
                : ''
            }`}
          />
          <BuyTicket
            className={`home-event-buy-ticket ${
              isVisible
                ? 'animate__animated animate__bounceIn animate__slow animate__delay-1s'
                : ''
            }`}
          />
        </div>
      </div>
      <Image
        src="/images/home-event/home-event-dots.png"
        alt="Dot Background"
        width={1577}
        height={614.21}
        className={`home-event-dots ${
          isVisible
            ? 'animate__animated animate__bounceInLeft animate__slow animate__faster'
            : ''
        }`}
      />
    </div>
  );
};

export default HomeEvent;
