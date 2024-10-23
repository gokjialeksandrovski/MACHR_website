'use client';

import React from 'react';
import Image from 'next/image';

const ConferenceStats: React.FC = () => {
  const stats = [
    { icon: '/icons/calendar/calendar-2.png', number: 2, label: 'Дена' },
    {
      icon: '/icons/person/person-2.png',
      number: 9,
      label: 'Неверојатни Спикери',
    },
    { icon: '/icons/cup.png', number: 6, label: 'Ресторани' },
    { icon: '/icons/book.png', number: 28, label: 'Едукативни книги' },
  ];

  return (
    <div className="conference-stats">
      <div className="conference-stats-container">
        {stats.map((stat, index) => (
          <div className="stat-item" key={index}>
            <Image
              src={stat.icon}
              alt={stat.label}
              width={40}
              height={40}
              className="stat-icon"
            />
            <div className="stat-info">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          </div>
        ))}
        <Image
          src="/images/conference-stats/conference-stats-dots.png"
          alt="Dots Background"
          width={2079.07}
          height={365}
          className="conference-stats-dots"
        />
      </div>
    </div>
  );
};

export default ConferenceStats;
