'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from './LanguageContext';

interface BreadcrumbProps {
  items: {
    name: string;
    href?: string;
  }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const { language } = useLanguage();

  const translatedItems = items.map((item) => {
    if (item.name === 'Почетна') {
      return {
        ...item,
        name: language === 'mk' ? 'Почетна' : 'Home',
      };
    }
    if (item.name === 'Блогови') {
      return {
        ...item,
        name: language === 'mk' ? 'Блогови' : 'Blogs',
      };
    }
    if (item.name === 'Блог Пост') {
      return {
        ...item,
        name: language === 'mk' ? 'Блог Пост' : 'Blog Post',
      };
    }
    return item;
  });

  return (
    <nav className="breadcrumb">
      {translatedItems.map((item, index) => (
        <React.Fragment key={index}>
          {item.href ? (
            <Link href={item.href} className="breadcrumb-link">
              {item.name}
            </Link>
          ) : (
            <span className="breadcrumb-current">{item.name}</span>
          )}
          {index < translatedItems.length - 1 && (
            <Image
              src="/icons/chevron_right.png"
              alt="chevron"
              width={7.54}
              height={9.7}
              className="breadcrumb-chevron"
            />
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
