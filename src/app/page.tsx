'use client';

import React, { useEffect, useRef } from 'react';
import HomeHeroBanner from './components/HomeHeroBanner';
import Carousel from './components/Carousel';
import HomePageCatchyBanner from './components/HomePageCatchyBanner';
import HomeBenefits from './components/HomeBenefits';
import HomeCurrentEvents from './components/HomeCurrentEvents';
import HomePopularResearch from './components/HomePopularResearch';
import HomeEvent from './components/HomeEvent';
import HomeAboutBanner from './components/HomeAboutBanner';

const Home: React.FC = () => {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const currentSections = sectionsRef.current;

    const options = {
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          target.style.visibility = 'visible';
          observer.unobserve(entry.target);
        }
      });
    }, options);

    currentSections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      currentSections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div>
      <div
        ref={(el) => {
          sectionsRef.current[1] = el;
        }}
        style={{ visibility: 'hidden' }}
      >
        <HomeHeroBanner />
      </div>
      <Carousel />
      <div
        ref={(el) => {
          sectionsRef.current[2] = el;
        }}
        style={{ visibility: 'hidden' }}
      >
        <HomePageCatchyBanner />
      </div>
      <div
        ref={(el) => {
          sectionsRef.current[3] = el;
        }}
        style={{ visibility: 'hidden' }}
      >
        <HomeBenefits />
      </div>
      <div
        ref={(el) => {
          sectionsRef.current[4] = el;
        }}
        style={{ visibility: 'hidden' }}
      >
        <HomeCurrentEvents />
      </div>
      <div
        ref={(el) => {
          sectionsRef.current[5] = el;
        }}
        style={{ visibility: 'hidden' }}
      >
        <HomeEvent />
      </div>
      <div
        ref={(el) => {
          sectionsRef.current[6] = el;
        }}
        style={{ visibility: 'hidden' }}
      >
        <HomePopularResearch />
      </div>
      <div
        ref={(el) => {
          sectionsRef.current[7] = el;
        }}
        style={{ visibility: 'hidden' }}
      >
        <HomeAboutBanner />
      </div>
    </div>
  );
};

export default Home;
