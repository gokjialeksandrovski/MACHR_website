'use client';

import React from 'react';
import Image from 'next/image';
import SocialRectangle from './SocialRectangle';
import { useLanguage } from './LanguageContext';
import Link from 'next/link';

const BlogsHeroBanner: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="about-us-hero-banner events-hero-banner blogs-hero-banner">
      <div className="image-left">
        <Image
          src="/images/blogs-hero-banner/blogs-hero-banner-image-01.png"
          alt={language === 'mk' ? 'Слика Блогови 1' : 'Blogs Image 1'}
          width={512}
          height={702}
        />
      </div>
      <div className="about-us-rectangle about-us-rectangle-style events-rectangle blogs-rectangle">
        <span>{language === 'mk' ? 'Истакнат блог' : 'Featured Blog'}</span>
        <h1>
          {language === 'mk'
            ? 'Како до најдобар избор при процесот на регрутација'
            : 'How to make the best choice in the recruitment process'}
        </h1>
        <p
          dangerouslySetInnerHTML={{
            __html:
              language === 'mk'
                ? 'Oд <span class="blogs-hero-orange">Ѓоко Вукановски</span> l 20 Јуни, 2024'
                : 'By <span class="blogs-hero-orange">Gjoko Vukanovski</span> l June 20, 2024',
          }}
        />
        <Link href={'./blog/article'}>
          <div className="about-button events-button">
            {language === 'mk' ? 'Прочитај повеќе' : 'Read More'}
          </div>
        </Link>
      </div>

      <div className="image-right">
        <Image
          src="/images/blogs-hero-banner/blogs-hero-banner-image-02.png"
          alt={language === 'mk' ? 'Слика Блогови 2' : 'Blogs Image 2'}
          width={784}
          height={496}
        />
      </div>
      <SocialRectangle className="social-rectangle-events" />
      <Image
        src="/images/about-us-hero-banner/about-us-dots.png"
        alt={language === 'mk' ? 'Точка позадина' : 'Dot background'}
        width={1915}
        height={398}
        className="about-us-dots events-dots"
      />
    </div>
  );
};

export default BlogsHeroBanner;
