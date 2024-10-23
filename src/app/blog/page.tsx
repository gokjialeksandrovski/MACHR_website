//Blog creation
'use client';

import React from 'react';
import BlogsHeroBanner from '../components/BlogsHeroBanner';
import Carousel from '../components/Carousel';
import Breadcrumb from '../components/Breadcrump';
import BlogsBeActive from '../components/BlogsBeActive';
import BlogsFilters from '../components/BlogsFilters';

const BlogPage: React.FC = () => {
  return (
    <div>
      <BlogsHeroBanner />
      <Carousel />
      <Breadcrumb
        items={[{ name: 'Почетна', href: '/' }, { name: 'Блогови' }]}
      />
      <BlogsBeActive />
      <BlogsFilters />
    </div>
  );
};

export default BlogPage;
