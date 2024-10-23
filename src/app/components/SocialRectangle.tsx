'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from './LanguageContext';

interface SocialRectangleProps {
  className?: string;
}

const SocialRectangle: React.FC<SocialRectangleProps> = ({ className }) => {
  const { language } = useLanguage();
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const handleMouseEnter = (iconName: string) => {
    setHoveredIcon(iconName);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  return (
    <div className={`social-rectangle ${className ? className : ''}`}>
      <div className="social-content">
        <h2>
          {language === 'mk'
            ? 'Заследи не на социјалните медиуми'
            : 'Follow us on social media'}
        </h2>
        <div className="social-icons-container">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => handleMouseEnter('linkedin')}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              className={
                hoveredIcon === 'linkedin'
                  ? 'animate__animated animate__pulse animate__fast'
                  : ''
              }
              src="/icons/social-media/linkedIn-white.png"
              alt="LinkedIn"
              width={28.5}
              height={27.75}
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => handleMouseEnter('instagram')}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              className={
                hoveredIcon === 'instagram'
                  ? 'animate__animated animate__pulse animate__fast'
                  : ''
              }
              src="/icons/social-media/instagram-white.png"
              alt="Instagram"
              width={28.5}
              height={27.75}
            />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => handleMouseEnter('facebook')}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              className={
                hoveredIcon === 'facebook'
                  ? 'animate__animated animate__pulse animate__fast'
                  : ''
              }
              src="/icons/social-media/facebook-white.png"
              alt="Facebook"
              width={29.25}
              height={28.5}
            />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => handleMouseEnter('youtube')}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              className={
                hoveredIcon === 'youtube'
                  ? 'animate__animated animate__pulse animate__fast'
                  : ''
              }
              src="/icons/social-media/youtube-white.png"
              alt="YouTube"
              width={28.8}
              height={28.8}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialRectangle;
