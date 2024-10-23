'use client';

import React from 'react';
import Image from 'next/image';
import SocialRectangle from './SocialRectangle';

import Staff from './Staff';

const LastThreeStaff: React.FC = () => {
  return <Staff limit={3} />;
};

const SingleEventPageSpeakers: React.FC = () => {
  return (
    <div className="single-event-page-speakers">
      <div className="single-event-page-speakers-container">
        <h2 className="about-us-title">Говорници на настанот:</h2>
        <LastThreeStaff />
      </div>
      <Image
        src="/images/single-event-page-speakers/single-event-page-speakers-dots.png"
        alt="Dots background"
        className="calendar-dots single-event-page-speakers-dots"
        width={953}
        height={298}
      />
    </div>
  );
};
export default SingleEventPageSpeakers;
