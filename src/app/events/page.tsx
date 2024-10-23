'use client';

import React from 'react';
import EventsHeroBanner from '../components/EventsHeroBanner';
import Breadcrumb from '../components/Breadcrump';
import Calendar from '../components/Calendar';
import EventFilters from '../components/EventsFilters';

const EventsPage: React.FC = () => {
  return (
    <div>
      <EventsHeroBanner />
      <Breadcrumb
        items={[{ name: 'Почетна', href: '/' }, { name: 'Настани' }]}
      />
      <Calendar />
      <EventFilters />
    </div>
  );
};

export default EventsPage;
