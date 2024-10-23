'use client';

import React from 'react';
import UserProfile from '../components/UserProfile';
import Carousel from '../components/Carousel';
import UserProgression from '../components/UserProgression';
import Calendar from '../components/Calendar';

const UserDashboardPage: React.FC = () => {
  return (
    <div>
      <UserProfile />
      <Carousel />
      <UserProgression />
      <Calendar className="custom-calendar-class" />
    </div>
  );
};

export default UserDashboardPage;
