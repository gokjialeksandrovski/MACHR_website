'use client';

import React from 'react';
import Image from 'next/image';
import SocialRectangle from './SocialRectangle';
import { useLanguage } from './LanguageContext';

const BlogHeroBanner: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="conference-hero-banner blog-hero-banner">
      <Image
        src="/images/blog-hero-banner/featured-blog-image.png"
        alt={language === 'mk' ? 'Конференциска слика 1' : 'Conference Image 1'}
        width={1861}
        height={752}
        className="conference-hero-banner-image"
      />
      <div className="conference-hero-banner-titles">
        <h2>{language === 'mk' ? 'Блог' : 'Blog'}</h2>
        <h1 style={{ width: '60%' }}>
          {language === 'mk'
            ? 'Како до најдобар избор при процесот на регрутација'
            : 'How to Make the Best Choice During the Recruitment Process'}
        </h1>
        <h3>
          {language === 'mk' ? 'Од' : 'By'}{' '}
          <span className="highlight-orange">
            {language === 'mk' ? 'Ѓоко Вукановски' : 'Gjoko Vukanovski'}
            &nbsp;
          </span>
          | {language === 'mk' ? '20 Јуни, 2024' : 'June 20, 2024'}
        </h3>
      </div>
      <SocialRectangle />
      <Image
        src="/images/conference-hero-banner/conference-dots-1.png"
        alt={language === 'mk' ? 'Конференциска слика 2' : 'Conference Image 2'}
        width={301.1}
        height={350.54}
        className="conference-dot-1"
      />
      <Image
        src="/images/conference-hero-banner/conference-dots-1.png"
        alt={language === 'mk' ? 'Конференциска слика 3' : 'Conference Image 3'}
        width={316}
        height={454.54}
        className="conference-dot-2"
      />
    </div>
  );
};
export default BlogHeroBanner;
