'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useLanguage } from './LanguageContext';

const BlogPostDetails: React.FC = () => {
  const [details, setDetails] = useState<any>(null);
  const { language } = useLanguage();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(
          'http://localhost:5000/theBlogPostDetails'
        );
        const data = await response.json();
        setDetails(data);
      } catch (error) {
        console.error('Error fetching blog post details:', error);
      }
    };

    fetchDetails();
  }, []);

  if (!details) {
    return <p>Loading...</p>;
  }

  return (
    <div className="blog-post-details">
      <div className="profile-section">
        <div className="profile-image">
          <Image
            src="/images/blog-post-details/blog-post-details-image.png"
            alt="Profile Image"
            width={376}
            height={376}
            className="profile-image-circle"
          />
        </div>
        <div className="profile-info">
          <div className="profile-name">
            <h3 className="content-title">
              {language === 'mk' ? details.author.mk : details.author.en}
            </h3>
            <a
              href={details.authorLinkedIn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/social-media/linkedIn-light-blue.png"
                alt="LinkedIn"
                width={16}
                height={16}
                className="linkedIn-light-blue"
              />
            </a>
          </div>
        </div>
        <div className="social-share-buttons">
          <span>
            {language === 'mk'
              ? 'Сподели со колегите!'
              : 'Share with colleagues!'}
          </span>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/social-media/facebook-white.png"
                alt="Facebook"
                width={23.25}
                height={22.25}
              />
            </a>
            <a
              href="https://x.com/?lang=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/social-media/x-white.png"
                alt="X"
                width={22.25}
                height={22.25}
              />
            </a>
            <a
              href="https://mk.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/social-media/linkedin-white.png"
                alt="LinkedIn"
                width={22.25}
                height={22.25}
              />
            </a>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h4 className="content-title">
          {language === 'mk' ? 'Кратка содржина' : 'Summary'}
        </h4>
        <ul className="content-list">
          {details.contentSummary[language].map(
            (item: string, index: number) => (
              <li key={index}>{item}</li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default BlogPostDetails;
