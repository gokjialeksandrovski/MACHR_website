//Blog Listing
'use client';

import BlogHeroBanner from '@/app/components/BlogHeroBanner';
import BlogPost from '@/app/components/BlogPost';
import BlogComment from '@/app/components/BlogPostComment';
import Breadcrumb from '@/app/components/Breadcrump';
import Carousel from '@/app/components/Carousel';
import SimilarBlogs from '@/app/components/SimilarBlogs';
import React from 'react';

const BlogPage: React.FC = () => {
  return (
    <div>
      <BlogHeroBanner />
      <Carousel />
      <Breadcrumb
        items={[
          { name: 'Почетна', href: '/' },
          { name: 'Блогови' },
          { name: 'Блог Пост' },
        ]}
      />
      <BlogPost />
      <SimilarBlogs />
    </div>
  );
};

export default BlogPage;
