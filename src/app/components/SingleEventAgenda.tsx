'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Session {
  time: string;
  title: string;
  details?: string;
  presenter?: string;
  moderator?: string;
  panelists?: string;
}

interface DayAgenda {
  day: string;
  sessions: Session[];
}

const SingleEventAgenda: React.FC = () => {
  const [agenda, setAgenda] = useState<DayAgenda[]>([]);
  const [selectedDay, setSelectedDay] = useState<number>(0);

  useEffect(() => {
    const fetchAgenda = async () => {
      try {
        const response = await fetch(
          'http://localhost:5000/hrCoffeeConferenceAgenda'
        );
        const data = await response.json();
        setAgenda(data);
      } catch (error) {
        console.error('Error fetching agenda:', error);
      }
    };

    fetchAgenda();
  }, []);

  return (
    <div className="conference-container single-event-container">
      <div className="conference-agenda single-event-agenda">
        <h2 className="single-event-title">Агенда на настанот</h2>
        <div className="conference-days single-event-agenda-days">
          {agenda.map((day, index) => (
            <button
              key={index}
              className={`conference-day ${selectedDay === index ? 'active' : ''}`}
              onClick={() => setSelectedDay(index)}
            >
              {day.day}
            </button>
          ))}
        </div>
        <div className="conference-sessions">
          {agenda[selectedDay]?.sessions.map((session, index) => (
            <div key={index} className="session single-event-session">
              <div className="session-header">
                <h3 className="session-time">{session.time}</h3>
                <h4 className="session-title">
                  <span className="session-orange-indent">|</span>
                  {session.title}
                </h4>
              </div>
              <ul className="session-details">
                {session.presenter && (
                  <li className="session-presenter">
                    Презентер:{' '}
                    <span className="highlight-orange">
                      {session.presenter}
                    </span>
                  </li>
                )}
                {session.moderator && (
                  <li className="session-moderator">
                    Модератор:{' '}
                    <span className="highlight-orange">
                      {session.moderator}
                    </span>
                  </li>
                )}
                {session.panelists && (
                  <li className="session-panelists">
                    Панелисти: {session.panelists}
                  </li>
                )}
                {session.details && (
                  <li className="session-details-text">{session.details}</li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Image
        src="/images/single-event-agenda/single-event-agenda-dots.png"
        alt="Dot background"
        width={441}
        height={2085}
        className="single-event-agenda-dots"
      />
    </div>
  );
};

export default SingleEventAgenda;
