'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from './LanguageContext';
import Mark from 'mark.js';

const Header: React.FC = () => {
  const [showInformativeDropdown, setShowInformativeDropdown] = useState(false);
  const [showEducationalDropdown, setShowEducationalDropdown] = useState(false);
  const [showEventsDropdown, setShowEventsDropdown] = useState(false);
  const [showNotificationPopup, setShowNotificationPopup] = useState(false);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { language, toggleLanguage } = useLanguage();
  const markInstance = useRef<Mark | null>(null);

  useEffect(() => {
    markInstance.current = new Mark(document.body);
  }, []);

  const switchToMK = () => {
    if (language !== 'mk') toggleLanguage();
  };

  const switchToEN = () => {
    if (language !== 'en') toggleLanguage();
  };

  const toggleNotificationPopup = () => {
    setShowNotificationPopup(!showNotificationPopup);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value;
    setSearchTerm(searchQuery);

    markInstance.current?.unmark();

    if (searchQuery) {
      markInstance.current?.mark(searchQuery, {
        element: 'span',
        className: 'highlight-header',
      });
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link href="/">
            <Image
              src="/icons/logo/machr-logo-1.png"
              alt="MACHR Logo"
              width={50}
              height={62}
            />
          </Link>
        </div>
        <nav className="nav">
          <div
            className="nav-item"
            onMouseEnter={() => setShowInformativeDropdown(true)}
            onMouseLeave={() => setShowInformativeDropdown(false)}
          >
            <Link href="/">
              {language === 'mk'
                ? 'Информативни Содржини'
                : 'Informative Contents'}
            </Link>
            {showInformativeDropdown && (
              <div className="dropdown">
                <Link href="/about">
                  {language === 'mk' ? 'За Нас' : 'About Us'}
                </Link>
                <Link href="/signup">
                  {language === 'mk' ? 'Членство' : 'Membership'}
                </Link>
                <Link href="/">
                  {language === 'mk' ? 'Огранок на Коучинг' : 'Coaching Branch'}
                </Link>
                <Link href="/">
                  {language === 'mk' ? 'Галерии' : 'Galleries'}
                </Link>
                <Link href="/">
                  {language === 'mk' ? 'Огласи за Работа' : 'Job Ads'}
                </Link>
                <Link href="/">
                  {language === 'mk' ? 'HR Награди' : 'HR Awards'}
                </Link>
                <Link href="/">
                  {language === 'mk' ? 'Е-весник' : 'E-Newsletter'}
                </Link>
                <Link href="/">{language === 'mk' ? 'Архива' : 'Archive'}</Link>
                <Link href="/">{language === 'mk' ? 'FAQ' : 'FAQ'}</Link>
              </div>
            )}
          </div>
          <div
            className="nav-item"
            onMouseEnter={() => setShowEducationalDropdown(true)}
            onMouseLeave={() => setShowEducationalDropdown(false)}
          >
            <Link href="/">
              {language === 'mk'
                ? 'Едукативни Содржини'
                : 'Educational Contents'}
            </Link>
            {showEducationalDropdown && (
              <div className="dropdown">
                <Link href="/">
                  {language === 'mk' ? 'Статии' : 'Articles'}
                </Link>
                <Link href="/">
                  {language === 'mk' ? 'Истражувања' : 'Research'}
                </Link>
                <Link href="/">
                  {language === 'mk' ? 'Интервјуа' : 'Interviews'}
                </Link>
                <Link href="/">
                  {language === 'mk' ? 'Обуки' : 'Trainings'}
                </Link>
                <Link href="/">
                  {language === 'mk'
                    ? 'Македонски Академии'
                    : 'Macedonian Academies'}
                </Link>
                <Link href="/">
                  {language === 'mk' ? 'Проекти' : 'Projects'}
                </Link>
                <Link href="/">
                  {language === 'mk' ? 'Експерти' : 'Experts'}
                </Link>
                <Link href="/">
                  {language === 'mk' ? 'Трендови' : 'Trends'}
                </Link>
              </div>
            )}
          </div>
          <Link href="/conference">
            {language === 'mk' ? 'Годишна Конференција' : 'Annual Conference'}
          </Link>
          <div
            className="nav-item"
            onMouseEnter={() => setShowEventsDropdown(true)}
            onMouseLeave={() => setShowEventsDropdown(false)}
          >
            <Link href="/events">
              {language === 'mk' ? 'Настани' : 'Events'}
            </Link>
            {showEventsDropdown && (
              <div className="dropdown">
                <Link href="/events/single-event">
                  {language === 'mk' ? 'HR Кафе' : 'HR Coffee'}
                </Link>
                <Link href="/events/single-event">
                  {language === 'mk' ? 'HR Викенд' : 'HR Weekend'}
                </Link>
                <Link href="/events/single-event">
                  {language === 'mk' ? 'HR Вебинар' : 'HR Webinar'}
                </Link>
                <Link href="/events/single-event">
                  {language === 'mk' ? 'HR Конференции' : 'HR Conferences'}
                </Link>
              </div>
            )}
          </div>
          <Link href="/blog">{language === 'mk' ? 'Блог' : 'Blog'}</Link>
          <div
            className="nav-item search-item"
            onMouseEnter={() => setShowSearchDropdown(true)}
          >
            <Image
              className="search-bar"
              src="/icons/search.png"
              alt="Search"
              width={15.13}
              height={15.13}
              onClick={() => {
                setShowSearchDropdown(true);
                setTimeout(() => {
                  const searchInput = document.querySelector(
                    '.search-input'
                  ) as HTMLInputElement;
                  searchInput?.focus();
                }, 0);
              }}
            />
            {showSearchDropdown && (
              <div className="dropdown search-dropdown">
                <input
                  id="searchThePage"
                  name="searchThePage"
                  type="text"
                  placeholder={language === 'mk' ? 'Пребарај...' : 'Search...'}
                  className="search-input"
                  autoFocus
                  onChange={handleSearch}
                />
              </div>
            )}
          </div>
        </nav>
        <div className="actions">
          <div className="action-item">
            <Image
              src="/icons/bell.png"
              alt={language === 'mk' ? 'Известувања' : 'Notifications'}
              width={31}
              height={31}
              onClick={toggleNotificationPopup}
            />
          </div>
          <div className="language">
            <span
              className={language === 'mk' ? 'active' : ''}
              onClick={switchToMK}
            >
              MK
            </span>
            /
            <span
              className={language === 'en' ? 'active' : ''}
              onClick={switchToEN}
            >
              EN
            </span>
          </div>
          <Link href="/signup">
            <button>{language === 'mk' ? 'ЗАЧЛЕНИ СЕ' : 'SIGN UP'}</button>
          </Link>
        </div>
      </div>
      {showNotificationPopup && (
        <div
          className="page-blur-overlay header-popup-overlay"
          onClick={toggleNotificationPopup}
        >
          <div className="header-popup" onClick={(e) => e.stopPropagation()}>
            <button
              className="header-close-btn"
              onClick={toggleNotificationPopup}
            >
              <Image
                src="/icons/x.png"
                alt="Close Icon"
                width={20.35}
                height={20.35}
              />
            </button>
            <div className="header-popup-content">
              <div className="header-popup-image">
                <Image
                  src="/images/header/header-notification.png"
                  alt="Ticket Notification"
                  width={331}
                  height={364}
                />
              </div>
              <div className="header-popup-text">
                <p>
                  {language === 'mk'
                    ? 'Уште само 5 дена до:'
                    : 'Only 5 days left to:'}
                </p>
                <h2 className="conference-title">
                  {language === 'mk'
                    ? 'HR кафе: Потребата од зајакнување на соработ...'
                    : 'HR Caffee: The Need to Strengthen Collaborations...'}
                </h2>
                <p className="header-popup-date">
                  {language === 'mk'
                    ? '25.07.2024 Лабораториум, Скопје'
                    : '25.07.2024 Laboratory, Skopje'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
