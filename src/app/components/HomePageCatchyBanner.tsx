'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from './LanguageContext';

const HomePageCatchyBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef<HTMLDivElement | null>(null);
  const { language } = useLanguage();

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
    <div
      ref={bannerRef}
      className="about-us-hero-banner home-page-catchy-banner"
    >
      <Image
        src="/images/home-page-catchy-banner/home-page-catchy-banner-image-01.png"
        alt="Home Page Catchy Image 1"
        width={408}
        height={480}
        className={`catchy-banner-image-1 ${
          isVisible
            ? 'animate__animated animate__bounceInLeft animate__slow'
            : ''
        }`}
      />
      <div
        className={`catchy-banner-text-container ${
          isVisible
            ? 'animate__animated animate__bounceInRight animate__slow'
            : ''
        }`}
      >
        <h2 className="conference-title">
          {language === 'mk'
            ? 'Кажи ги своите мислења и поврзи се со останатите HR ентузијасти'
            : 'Share your opinions and connect with other HR enthusiasts'}
        </h2>
        <p
          dangerouslySetInnerHTML={{
            __html:
              language === 'mk'
                ? 'Во нашиот <span>блог</span> одсега ке можеш да разменуваш мислења на актуелни теми со останатите корисници'
                : 'In our <span>blog</span>, from now on, you can exchange opinions on current topics with other users',
          }}
        />
      </div>
      <div
        className={`about-us-rectangle-style catchy-banner-rectangle ${
          isVisible
            ? 'animate__animated animate__bounceInLeft animate__slow'
            : ''
        }`}
      >
        <p>{language === 'mk' ? 'Упати се сега кон:' : 'Head over to:'}</p>
        <Link href={'./blog'}>
          <div className="about-button home-button catchy-button">
            {language === 'mk' ? 'Нашиот блог' : 'Our Blog'}
          </div>
        </Link>
      </div>
      <Image
        src="/images/home-page-catchy-banner/home-page-catchy-banner-image-02.png"
        alt="Home Page Catchy Image 2"
        width={562}
        height={562}
        className={`catchy-banner-image-2 ${
          isVisible
            ? 'animate__animated animate__bounceInLeft animate__slow'
            : ''
        }`}
      />
      <Image
        src="/images/home-page-catchy-banner/home-page-catchy-banner-image-03.png"
        alt="Home Page Catchy Image 3"
        width={376}
        height={376}
        className={`catchy-banner-image-3 ${
          isVisible
            ? 'animate__animated animate__bounceInRight animate__slow'
            : ''
        }`}
      />
      <Image
        src="/images/home-page-catchy-banner/home-page-catchy-banner-mini-dots.png"
        alt="Dot background"
        width={106.09}
        height={117.68}
        className={`catchy-banner-mini-dots ${
          isVisible
            ? 'animate__animated animate__bounceInLeft animate__slow'
            : ''
        }`}
      />
      <Image
        src="/images/home-page-catchy-banner/home-page-catchy-banner-dots.png"
        alt="Dot background"
        width={2053}
        height={433}
        className={`catchy-banner-dots ${
          isVisible ? 'animate__animated animate__bounceInUp animate__slow' : ''
        }`}
      />
    </div>
  );
};

export default HomePageCatchyBanner;
