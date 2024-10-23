'use client';

import React, { useState } from 'react';
import BlogsLatestBlogs from './BlogsLatestBlogs';
import CompanyCulture from './CompanyCulture';
import CompanyCultureTwo from './CompanyCulture2';
import { useLanguage } from './LanguageContext';

const BlogsFilters: React.FC = () => {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>(
    language === 'mk' ? 'Сите' : 'All'
  );
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filters =
    language === 'mk'
      ? [
          'Сите',
          'Регрутирање',
          'Компензации',
          'HR согласност',
          'Организациска структура',
          'Обучување',
          'Развој',
          'Менаџмент на перформанси',
        ]
      : [
          'All',
          'Recruitment',
          'Compensation',
          'HR Compliance',
          'Organizational Structure',
          'Training',
          'Development',
          'Performance Management',
        ];

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const searchFilter = (text: any) => {
    if (typeof text === 'string') {
      return text.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return false;
  };

  const filtersMapping: Record<string, () => JSX.Element> = {
    Сите: () => (
      <>
        <BlogsLatestBlogs searchFilter={searchFilter} />
        <CompanyCulture searchFilter={searchFilter} />
        <CompanyCultureTwo searchFilter={searchFilter} />
      </>
    ),
    Регрутирање: () => (
      <>
        <CompanyCulture searchFilter={searchFilter} />
      </>
    ),
    Компензации: () => <CompanyCultureTwo searchFilter={searchFilter} />,
    'HR согласност': () => <BlogsLatestBlogs searchFilter={searchFilter} />,
    'Организациска структура': () => (
      <BlogsLatestBlogs searchFilter={searchFilter} />
    ),
    Обучување: () => (
      <>
        <CompanyCulture searchFilter={searchFilter} />
      </>
    ),
    Развој: () => <CompanyCultureTwo searchFilter={searchFilter} />,
    'Менаџмент на перформанси': () => (
      <BlogsLatestBlogs searchFilter={searchFilter} />
    ),
    All: () => (
      <>
        <BlogsLatestBlogs searchFilter={searchFilter} />
        <CompanyCulture searchFilter={searchFilter} />
        <CompanyCultureTwo searchFilter={searchFilter} />
      </>
    ),
    Recruitment: () => (
      <>
        <CompanyCulture searchFilter={searchFilter} />
      </>
    ),
    Compensation: () => <CompanyCultureTwo searchFilter={searchFilter} />,
    'HR Compliance': () => <BlogsLatestBlogs searchFilter={searchFilter} />,
    'Organizational Structure': () => (
      <BlogsLatestBlogs searchFilter={searchFilter} />
    ),
    Training: () => (
      <>
        <CompanyCulture searchFilter={searchFilter} />
      </>
    ),
    Development: () => <CompanyCultureTwo searchFilter={searchFilter} />,
    'Performance Management': () => (
      <BlogsLatestBlogs searchFilter={searchFilter} />
    ),
  };

  const renderBlogs = () => {
    return filtersMapping[activeFilter] ? filtersMapping[activeFilter]() : null;
  };

  const shouldShowTitle =
    activeFilter === 'Сите' || activeFilter === 'All' || searchTerm;

  return (
    <div className="blogs-filters">
      <div className="blogs-filters-container">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-button ${
              activeFilter === filter ? 'active' : ''
            }`}
            onClick={() => handleFilterClick(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="blogs-filters-title-container">
        {shouldShowTitle && (
          <h2 className="conference-title">
            {language === 'mk' ? 'Најнови блогови' : 'Latest Blogs'}
          </h2>
        )}
        <div className="search-container">
          <input
            type="text"
            id="searchContainer"
            name="searchContainer"
            className="search-input"
            placeholder={language === 'mk' ? 'Пребарај' : 'Search'}
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {renderBlogs()}
    </div>
  );
};

export default BlogsFilters;
