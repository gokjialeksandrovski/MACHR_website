'use client';

import React from 'react';
import Image from 'next/image';
import SocialRectangle from './SocialRectangle';
import Link from 'next/link';

const SignUpHeroBanner: React.FC = () => {
  return (
    <div className="about-us-hero-banner sign-up-hero-banner">
      <div className="image-left">
        <Image
          src="/images/sign-up-hero-banner/sign-up-hero-banner-image-01.png"
          alt="Sign up Image 1"
          width={512}
          height={702}
        />
      </div>
      <div className="about-us-rectangle about-us-rectangle-style sign-up-container">
        <h1>Придружи ни се!</h1>
        <div className="sign-up-rectangle">
          <p>Сакаш да се информираш подетално за бенефитите?</p>
        </div>
        <Link href={'./'}>
          <div className="about-button sign-up-button">Прочитај повеќе</div>
        </Link>
      </div>

      <div className="image-right">
        <Image
          src="/images/sign-up-hero-banner/sign-up-hero-banner-image-02.png"
          alt="Sign up Image 2"
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

export default SignUpHeroBanner;
