//conference page
'use client';

import React from 'react';
import ConferenceHeroBanner from '../components/ConferenceHeroBanner';
import Carousel from '../components/Carousel';
import Breadcrumb from '../components/Breadcrump';
import ConferenceMachrEvent from '../components/ConferenceMachrEvent';
import ConferenceStats from '../components/ConferenceStats';
import SpecialGuests from '../components/SpecialGuests';
import ConferenceAgenda from '../components/ConferenceAgenda';
import MikeVazauski from '../components/MikeVazauski';
import SubscriptionPlans from '../components/SubscriptionPlans';
import Maps from '../components/Maps';
import LatestBlogs from '../components/LatestBlogs';
import ConferenceSimilarEvents from '../components/ConferenceSimilarEvents';

const ConferencePage: React.FC = () => {
  return (
    <div>
      <ConferenceHeroBanner />
      <Carousel extraMarginLeft={true} />
      <Breadcrumb
        items={[
          { name: 'Почетна', href: '/' },
          { name: 'Годишна конференција' },
        ]}
      />
      <ConferenceMachrEvent />
      <ConferenceStats />
      <SpecialGuests />
      <ConferenceAgenda />
      <MikeVazauski />
      <SubscriptionPlans />
      <Maps />
      <LatestBlogs />
      <ConferenceSimilarEvents />
    </div>
  );
};

export default ConferencePage;
