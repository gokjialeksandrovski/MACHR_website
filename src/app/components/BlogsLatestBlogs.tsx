'use client';

import React from 'react';
import FeatureCard from './FeatureCard';
import BlackCard from './BlackCard';
import Image from 'next/image';
import { useLanguage } from './LanguageContext';

interface BlogsLatestBlogsProps {
  searchFilter?: (title: string) => boolean;
}

const BlogsLatestBlogs: React.FC<BlogsLatestBlogsProps> = ({
  searchFilter,
}) => {
  const featureCardIds = [1, 2];
  const filteredFeatureCard = featureCardIds.filter((id) => id === 1);
  const filteredFeatureCard2 = featureCardIds.filter((id) => id === 2);
  const { language } = useLanguage();

  return (
    <div className="blog-filters-cards-wrapper blogs-filters-dots-alignment">
      <div className="blogs-filters-cards-container">
        <div className="blogs-filters-cards-mini-container">
          {filteredFeatureCard.map((id) => (
            <FeatureCard key={id} id={id} searchFilter={searchFilter} />
          ))}

          <BlackCard
            fetchUrl="http://localhost:5000/carouselCards/4"
            className="first-black-card"
            searchFilter={searchFilter}
          />
        </div>

        <div className="blogs-filters-cards-mini-container">
          <BlackCard
            fetchUrl="http://localhost:5000/hrWeekendJune"
            className="second-black-card"
            searchFilter={searchFilter}
          />

          {filteredFeatureCard2.map((id) => (
            <FeatureCard key={id} id={id} searchFilter={searchFilter} />
          ))}
        </div>
      </div>

      {searchFilter &&
        (searchFilter('HR админ') ||
          searchFilter('Практикант') ||
          searchFilter('Извршен менаџер') ||
          searchFilter('HR Практикант') ||
          searchFilter('Management trainee') ||
          searchFilter('Менаџер за HR')) && (
          <div
            className="carousel-card black-card third-black-card"
            style={{
              backgroundImage: `url(/images/blogs-filters/blogs-filters-card-image-02.jpg)`,
            }}
          >
            <div className="carousel-card-content black-card-content third-black-card-content">
              <h3>
                {language === 'mk' ? 'Најнови огласи:' : 'Latest Job Posts:'}
              </h3>
              <div className="hr-roles-container">
                {[
                  {
                    logo: '/icons/logo/machr-logo-3.png',
                    label: language === 'mk' ? 'HR админ' : 'HR Admin',
                    width: 36,
                    height: 45,
                  },
                  {
                    logo: '/icons/firm-icons/titan.png',
                    label: language === 'mk' ? 'Практикант' : 'Intern',
                    width: 73,
                    height: 44,
                  },
                  {
                    logo: '/icons/logo/machr-logo-3.png',
                    label: language === 'mk' ? 'Практикант' : 'Intern',
                    width: 36,
                    height: 45,
                  },
                  {
                    logo: '/icons/logo/machr-logo-3.png',
                    label:
                      language === 'mk'
                        ? 'Извршен менаџер'
                        : 'Executive Manager',
                    width: 36,
                    height: 45,
                  },
                  {
                    logo: '/icons/firm-icons/lean.png',
                    label: language === 'mk' ? 'HR Практикант' : 'HR Intern',
                    width: 77,
                    height: 32,
                  },
                  {
                    logo: '/icons/firm-icons/titan.png',
                    label:
                      language === 'mk'
                        ? 'Management trainee'
                        : 'Management Trainee',
                    width: 73,
                    height: 44,
                  },
                  {
                    logo: '/icons/firm-icons/third-firm-icon.png',
                    label: language === 'mk' ? 'Менаџер за HR' : 'HR Manager',
                    width: 75,
                    height: 26,
                  },
                ].map(
                  (role, index) =>
                    searchFilter &&
                    searchFilter(role.label) && (
                      <div
                        key={index}
                        className={`hr-role ${
                          role.logo.includes('firm') ? 'firm' : ''
                        }`}
                      >
                        <Image
                          src={role.logo}
                          alt={`${role.label} Logo`}
                          width={role.width}
                          height={role.height}
                        />
                        <span className="black-card-text">{role.label}</span>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        )}

      <Image
        src="/images/blogs-filters/blogs-filters-dots.png"
        alt="About Us Image 3"
        width={2053}
        height={433}
        className="blogs-filters-dots"
      />
    </div>
  );
};

export default BlogsLatestBlogs;
