'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from './LanguageContext';

const HomeBenefits: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const benefitsRef = useRef<HTMLDivElement | null>(null);
  const { language } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        root: null,
        threshold: 0.3,
      }
    );

    if (benefitsRef.current) {
      observer.observe(benefitsRef.current);
    }

    return () => {
      if (benefitsRef.current) {
        observer.unobserve(benefitsRef.current);
      }
    };
  }, []);

  return (
    <div ref={benefitsRef} className="home-benefits">
      <ul
        className={`home-benefits-list ${
          isVisible ? 'animate__animated animate__fadeInLeftBig' : ''
        }`}
      >
        <li>
          <div className="benefit-title">
            <span>01</span>
            <div className="link-and-title">
              <h3>
                {language === 'mk'
                  ? 'Едукативни настани'
                  : 'Educational Events'}
              </h3>
              <a href="./events" className="benefit-read-more">
                {language === 'mk' ? 'Прочитај повеќе' : 'Read more'}
              </a>
            </div>
          </div>
        </li>
        <li>
          <div className="benefit-title">
            <span>02</span>
            <div className="link-and-title">
              <h3>
                {language === 'mk'
                  ? 'Најнови информации и случувања'
                  : 'Latest Information and Happenings'}
              </h3>
              <a href="./events" className="benefit-read-more">
                {language === 'mk' ? 'Прочитај повеќе' : 'Read more'}
              </a>
            </div>
          </div>
        </li>
        <li>
          <div className="benefit-title">
            <span>03</span>
            <div className="link-and-title">
              <h3>
                {language === 'mk'
                  ? 'Ширењето на мрежата на контакти'
                  : 'Expanding Your Network'}
              </h3>
              <a href="./events" className="benefit-read-more">
                {language === 'mk' ? 'Прочитај повеќе' : 'Read more'}
              </a>
            </div>
          </div>
        </li>
        <li>
          <div className="benefit-title">
            <span>04</span>
            <div className="link-and-title">
              <h3>
                {language === 'mk'
                  ? 'Вклучување во работата на МАЧР'
                  : 'Involvement in the Work of MACHR'}
              </h3>
              <a href="./events" className="benefit-read-more">
                {language === 'mk' ? 'Прочитај повеќе' : 'Read more'}
              </a>
            </div>
          </div>
        </li>
        <li>
          <div className="benefit-title">
            <span>05</span>
            <div className="link-and-title">
              <h3>
                {language === 'mk' ? 'HR огласи за работа' : 'HR Job Listings'}
              </h3>
              <a href="./events" className="benefit-read-more">
                {language === 'mk' ? 'Прочитај повеќе' : 'Read more'}
              </a>
            </div>
          </div>
        </li>
      </ul>
      <div
        className={`home-benefits-text ${
          isVisible ? 'animate__animated animate__fadeInRightBig' : ''
        }`}
      >
        <h2 className="about-us-title">
          {language === 'mk'
            ? 'Бенефити од зачленување во МАЧР'
            : 'Benefits of Joining MACHR'}
        </h2>
        <p>
          {language === 'mk'
            ? 'Македонската асоцијација за човечки ресурси - МАЧР како невладино, непрофитно и непартиско здружение на граѓани, продолжува со остварување на својата мисија за промоција и унапредување на професијата управување со човечките ресурси, како и создавање и имплементирање на највисоките професионални стандарди и развој на човечкиот капитал во Република Македонија како единствен ентитет од овој вид во земјава.'
            : 'The Macedonian Association for Human Resources - MACHR, as a non-governmental, non-profit, and non-partisan citizens association, continues to fulfill its mission of promoting and advancing the human resources management profession, as well as creating and implementing the highest professional standards and developing human capital in the Republic of Macedonia as the only entity of its kind in the country.'}
        </p>
      </div>
    </div>
  );
};

export default HomeBenefits;
