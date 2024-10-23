'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from './LanguageContext';

const BlogsBeActive: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="blogs-be-active">
      <div className="blogs-be-active-container">
        <Image
          src="/images/blogs-be-active/blogs-be-active-image.png"
          alt="Blogs Be Active Image"
          width={376}
          height={564}
          className="blogs-be-active-image"
        />
        <div className="blogs-be-active-text">
          <p className="single-event-title hr-single-event-topic">
            {language === 'mk' ? 'Биди ' : 'Be '}
            <span className="highlight-orange">
              {language === 'mk' ? 'активен/на' : 'active'}
            </span>
            {language === 'mk'
              ? ', споделувај настани на социјалните медиуми, собирај поени, добивај значки и рамки, кани пријатели на настани и освојувај попусти за следната купена карта'
              : ', share events on social media, collect points, earn badges and frames, invite friends to events, and win discounts on your next ticket purchase'}
          </p>
          <p className="blogs-be-active-p">
            {language === 'mk'
              ? 'Доколку овој месец си најактивен/а во форумот добиваш награди за да го направиш твојот профил уникатен, а ако каниш пријатели и тие купат карта преку твојот линк за покана добиваш попуст на следната купена карта за настан.'
              : 'If you are the most active in the forum this month, you will receive rewards to make your profile unique. If you invite friends and they purchase a ticket through your invitation link, you will receive a discount on the next event ticket purchase.'}
          </p>
        </div>
      </div>
      <Image
        src="/images/blogs-be-active/blogs-be-active-dots.png"
        alt="Dots background"
        width={107}
        height={118}
        className="blogs-be-active-dots"
      />
    </div>
  );
};

export default BlogsBeActive;
