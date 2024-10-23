'use client';
import React from 'react';
import Image from 'next/image';
import AboutUsHeroBanner from '../components/AboutUsHeroBanner';
import Carousel from '../components/Carousel';
import Breadcrumb from '../components/Breadcrump';
import MissionAndVision from '../components/MissionAndVision';
import President from '../components/President';
import Staff from '../components/Staff';

const AboutPage: React.FC = () => {
  return (
    <div>
      <AboutUsHeroBanner />
      <Carousel extraMarginLeft2={true} />
      <Breadcrumb
        items={[
          { name: 'Почетна', href: '/' },
          { name: 'Годишна конференција' },
        ]}
      />
      <MissionAndVision />
      <President />
      <div className="staff-title">
        <h2 className="about-us-title">ОДБОР НА МАЧР</h2>
        <Image
          src="/images/staff/staff-dots.png"
          alt="Staff Image 1"
          width={1607}
          height={614.21}
          className="staff-dots"
        />
      </div>
      <Staff />
    </div>
  );
};

export default AboutPage;
