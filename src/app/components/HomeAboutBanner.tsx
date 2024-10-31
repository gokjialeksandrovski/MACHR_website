'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import BuyTicket from './BuyTicket';
import Link from 'next/link';
import { useLanguage } from './LanguageContext';

const HomeAboutBanner: React.FC = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentBannerRef = bannerRef.current;

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

    if (currentBannerRef) {
      observer.observe(currentBannerRef);
    }

    return () => {
      if (currentBannerRef) {
        observer.unobserve(currentBannerRef);
      }
    };
  }, []);

  return (
    <div ref={bannerRef} className="home-about-banner">
      <div className="home-about-container">
        <div
          className={`home-about-section-1 ${
            isVisible
              ? 'animate__animated animate__bounceInLeft animate__slow'
              : ''
          }`}
        >
          <Image
            src="/images/mission-and-vision/mission-and-vision-image-01.png"
            alt="Mission and Vision Image 1"
            width={464}
            height={578}
          />
          <h2 className="about-us-title">
            {language === 'mk'
              ? 'Дознај повеќе за нас и нашите цели и задачи!'
              : 'Learn More About Us, Our Goals, and Our Tasks!'}
          </h2>
          <p>
            {language === 'mk'
              ? 'Нашиот огранок за коучинг е формиран 22 април 2019 година и е првата мрежа за професионални ментори во земјава.'
              : 'Our coaching branch was established on April 22, 2019, and is the first professional mentoring network in the country.'}
          </p>
          <Link href={'./about'}>
            <div className="about-button home-about-button">
              {language === 'mk' ? 'Повеќе за нас' : 'More About Us'}
            </div>
          </Link>
        </div>
        <div
          className={`home-about-section-2 ${
            isVisible
              ? 'animate__animated animate__bounceInRight animate__slow'
              : ''
          }`}
        >
          <Image
            src="/images/mission-and-vision/mission-and-vision-image-02.png"
            alt="Mission and Vision Image 2"
            width={455.9}
            height={577.45}
          />
        </div>
      </div>
      <div
        className={`home-about-grey-rectangle home-about-rectangle ${
          isVisible
            ? 'animate__animated animate__bounceInLeft animate__slow'
            : ''
        }`}
      >
        <span>
          {language === 'mk'
            ? 'Сакаш да бидеш во тек со нас и најновите содржини што ги споделуваме?'
            : 'Want to stay up to date with us and the latest content we share?'}
        </span>
      </div>
      <div
        className={`home-about-orange-rectangle home-about-rectangle ${
          isVisible
            ? 'animate__animated animate__bounceInRight animate__slow'
            : ''
        }`}
      >
        <span>
          {language === 'mk'
            ? 'Претплати се на нашиот информативен билтен и никогаш повеќе не пропуштај важни настани и известувања'
            : 'Subscribe to our newsletter and never miss important events and announcements again.'}
        </span>
      </div>
      <BuyTicket
        version={2}
        className={`home-about-buy-ticket ${
          isVisible
            ? 'animate__animated animate__bounceInRight animate__slow'
            : ''
        }`}
      />
      <Image
        src="/images/home-about-banner/home-about-dots-1.png"
        alt="Dots background"
        width={1577}
        height={614.21}
        className={`home-about-dots top-dots ${
          isVisible
            ? 'animate__animated animate__bounceInRight animate__slow'
            : ''
        }`}
      />
      <Image
        src="/images/home-about-banner/home-about-dots-2.png"
        alt="Dots background"
        width={1554.43}
        height={632.21}
        className={`home-about-dots bottom-dots ${
          isVisible
            ? 'animate__animated animate__bounceIn animate__slow animate__delay-1s'
            : ''
        }`}
      />
    </div>
  );
};

export default HomeAboutBanner;
