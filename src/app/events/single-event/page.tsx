'use client';

import Breadcrumb from '@/app/components/Breadcrump';
import Carousel from '@/app/components/Carousel';
import ConferenceSimilarEvents from '@/app/components/ConferenceSimilarEvents';
import HrSingleEvent from '@/app/components/HrSingleEvent';
import SingleEventAgenda from '@/app/components/SingleEventAgenda';
import SingleEventHeroBanner from '@/app/components/SingleEventHeroBanner';
import SingleEventPageSpeakers from '@/app/components/SingleEventPageSpeakers';
import SingleEventPageSubscriptions from '@/app/components/SingleEventPageSubscriptions';
import React from 'react';

const SingleEventPage: React.FC = () => {
  return (
    <div>
      <SingleEventHeroBanner />
      <Carousel />
      <Breadcrumb
        items={[
          { name: 'Почетна', href: '/' },
          { name: 'Настани', href: '/' },
          { name: 'HR кафе', href: '/' },
          { name: 'Информации за настан' },
        ]}
      />
      <HrSingleEvent />
      <SingleEventAgenda />
      <SingleEventPageSpeakers />
      <SingleEventPageSubscriptions />
      <ConferenceSimilarEvents />
    </div>
  );
};

export default SingleEventPage;
