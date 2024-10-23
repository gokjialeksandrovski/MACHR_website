'use client';

import React from 'react';
import Image from 'next/image';
import SocialRectangle from './SocialRectangle';
import Link from 'next/link';

const AboutUsHeroBanner: React.FC = () => {
  return (
    <div className="about-us-hero-banner">
      <div className="image-left">
        <Image
          src="/images/about-us-hero-banner/about-us-hero-banner-image-01.png"
          alt="About Us Image 1"
          width={512}
          height={702}
        />
      </div>
      <div className="about-us-rectangle about-us-rectangle-style">
        <h1>Запознај го тимот</h1>
        <p>Македонска Асоцијација за Човечки Ресурси</p>
      </div>
      <div className="about-us-rectangle-2 about-us-rectangle-style">
        <p>Придружи ни се:</p>

        <Link href={'./signup'}>
          <div className="about-button about-button-2">Прочитај повеќе</div>
        </Link>
      </div>
      <div className="image-right">
        <Image
          src="/images/about-us-hero-banner/about-us-hero-banner-image-02.png"
          alt="About Us Image 2"
          width={784}
          height={496}
        />
      </div>
      <SocialRectangle />
      <Image
        src="/images/about-us-hero-banner/about-us-dots.png"
        alt="About Us Image 3"
        width={1915}
        height={398}
        className="about-us-dots"
      />
    </div>
  );
};
export default AboutUsHeroBanner;
