'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SocialRectangle from './SocialRectangle';
import { useLanguage } from './LanguageContext';

const HomeHeroBanner: React.FC = () => {
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
        threshold: 0.1,
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
    <div ref={bannerRef} className="about-us-hero-banner home-page-hero-banner">
      <div
        className={`image-left ${
          isVisible
            ? 'animate__animated animate__bounceInDown animate__slow animate__delay-1s'
            : ''
        }`}
      >
        <Image
          src="/images/home-page-hero-banner/home-page-hero-banner-image-01.png"
          alt="Home Page Image 1"
          width={512}
          height={702}
        />
      </div>
      <div
        className={`about-us-rectangle about-us-rectangle-style ${
          isVisible ? 'animate__animated animate__fadeIn animate__slower' : ''
        }`}
      >
        <h1>{language === 'mk' ? 'Луѓето пред се!' : 'People above all!'}</h1>
        <p>
          {language === 'mk'
            ? 'Македонска Асоцијација за Човечки Ресурси'
            : 'Macedonian Association for Human Resources'}
        </p>
      </div>
      <div
        className={`about-us-rectangle-2 about-us-rectangle-style home-rectangle-2 ${
          isVisible ? 'animate__animated animate__fadeIn animate__slower' : ''
        }`}
      >
        <p>{language === 'mk' ? 'Придружи ни се:' : 'Join Us:'}</p>
        <Link href={'./signup'}>
          <div className="about-button home-button">
            {language === 'mk' ? 'Зачлени се' : 'Join Now'}
          </div>
        </Link>
      </div>
      <div
        className={`image-right ${
          isVisible
            ? 'animate__animated animate__bounceInDown animate__slow animate__delay-1s'
            : ''
        }`}
      >
        <Image
          src="/images/home-page-hero-banner/home-page-hero-banner-image-02.png"
          alt="Home Page Image 2"
          width={784}
          height={496}
        />
      </div>
      <SocialRectangle />
      <Image
        src="/images/about-us-hero-banner/about-us-dots.png"
        alt="Dots background"
        width={1915}
        height={398}
        className={`about-us-dots ${
          isVisible
            ? 'animate__animated animate__bounceInUp animate__slow animate__delay-1s'
            : ''
        }`}
      />
    </div>
  );
};

export default HomeHeroBanner;
