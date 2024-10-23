'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface CalendarProps {
  className?: string;
}

const Calendar: React.FC<CalendarProps> = ({ className }) => {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [currentMonth, setCurrentMonth] = useState<number>(6);
  const [currentYear, setCurrentYear] = useState<number>(2024);

  const eventDates = [25];

  const eventDetails = {
    title: 'HR Кафе',
    duration: '30 минути',
    description:
      'Овој четврток кафе на тема како да примените техники и чекори од селф коучинг за подобро да се водите себеси...',
  };

  const handleDateSelect = (date: number) => {
    setSelectedDate(date);
  };

  const handleMonthChange = (direction: 'prev' | 'next') => {
    setSelectedDate(null);
    if (direction === 'next') {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear((prevYear) => prevYear + 1);
      } else {
        setCurrentMonth((prev) => prev + 1);
      }
    } else {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear((prevYear) => prevYear - 1);
      } else {
        setCurrentMonth((prev) => prev - 1);
      }
    }
  };

  const generateCalendarDays = (month: number, year: number) => {
    if (month === 6 && year === 2024) {
      return [
        '',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
        '31',
      ];
    }

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();

    return Array.from({ length: firstDay }, () => '').concat(
      Array.from({ length: daysInMonth }, (_, i) => (i + 1).toString())
    );
  };

  const monthNames = [
    'Јануари',
    'Февруари',
    'Март',
    'Април',
    'Мај',
    'Јуни',
    'Јули',
    'Август',
    'Септември',
    'Октомври',
    'Ноември',
    'Декември',
  ];

  return (
    <div className={`calendar-and-event-card ${className || ''}`}>
      <div className="calendar-description">
        <h2 className="conference-title">
          Календар со датуми за сите претстојни настани
        </h2>
        <p className="conference-description calendar-description-text">
          Погледни ги сите настани распоредени на календар. Со клик на
          обележаните настани можеш да дознаеш повеќе информации за секој од
          настаните но за целосни информации упатете се до индивидуалната страна
          на настанот.
        </p>
      </div>
      <div className="event-card">
        <div className="event-card-content">
          <div className="event-details">
            {selectedDate === 25 &&
            currentMonth === 6 &&
            currentYear === 2024 ? (
              <div className="event-text-1">
                <div className="event-mini-container">
                  <Image
                    src="/icons/logo/machr-logo-2.png"
                    alt="Machr Logo"
                    className="event-logo"
                    width={80}
                    height={99}
                  />
                  <span className="event-organizer">МАЧР</span>
                  <h2 className="event-title">{eventDetails.title}</h2>
                  <div className="event-duration">
                    <div className="event-time-icon">
                      <Image
                        src="/icons/clock.png"
                        alt="A clock"
                        width={20}
                        height={20}
                      />
                    </div>
                    {eventDetails.duration}
                  </div>
                </div>
                <p className="event-description">{eventDetails.description}</p>
                <a href="./events/single-event" className="read-more-link">
                  Прочитај повеќе
                </a>
              </div>
            ) : (
              <div className="placeholder-text">
                <span>&#8203;</span>
              </div>
            )}
          </div>

          <div className="calendar-section">
            <h3>Избери Дата</h3>
            <div className="calendar-header">
              <Image
                src="/icons/arrow-left.png"
                alt="Arrow left"
                width={8}
                height={14}
                onClick={() => handleMonthChange('prev')}
                style={{ cursor: 'pointer' }}
              />
              <span>
                {monthNames[currentMonth]} {currentYear}
              </span>
              <Image
                src="/icons/arrow-right.png"
                alt="Arrow right"
                width={8}
                height={14}
                onClick={() => handleMonthChange('next')}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <div className="calendar-grid">
              {['Нед', 'Пон', 'Вто', 'Сре', 'Чет', 'Пет', 'Саб'].map(
                (day, index) => (
                  <span key={index} className="calendar-day">
                    {day}
                  </span>
                )
              )}
              {generateCalendarDays(currentMonth, currentYear).map(
                (date, index) => (
                  <button
                    key={index}
                    className={`calendar-date ${
                      currentMonth === 6 &&
                      currentYear === 2024 &&
                      eventDates.includes(Number(date))
                        ? 'event-available'
                        : ''
                    } ${selectedDate === Number(date) ? 'selected-date' : ''}`}
                    onClick={() => handleDateSelect(Number(date))}
                    disabled={!date}
                  >
                    {date}
                  </button>
                )
              )}
            </div>
            {selectedDate === 25 &&
              currentMonth === 6 &&
              currentYear === 2024 && (
                <a href="./events/single-event">
                  <button className="buy-ticket-button">Купи Карта</button>
                </a>
              )}
          </div>
        </div>
      </div>
      <Image
        src="/images/calendar/calendar-dots.png"
        alt="Dots background"
        className="calendar-dots"
        width={1095}
        height={615}
      />
    </div>
  );
};

export default Calendar;
