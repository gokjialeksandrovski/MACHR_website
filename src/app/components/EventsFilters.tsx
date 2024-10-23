'use client';

import React, { useState } from 'react';
import HrCoffee from './HrCoffee';
import HrWeekend from './HrWeekend';
import HrWebinar from './HrWebinar';
import HrConferences from './HrConferences';

const EventFilters: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('Сите');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filters = [
    'Сите',
    'HR Кафе',
    'HR Викенд',
    'HR Вебинар',
    'HR Конференции',
  ];

  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const renderEvents = () => {
    if (searchTerm) {
      const searchFilter = (title: string) =>
        title.toLowerCase().includes(searchTerm.toLowerCase());

      switch (selectedFilter) {
        case 'HR Кафе':
          return <HrCoffee searchFilter={searchFilter} />;
        case 'HR Викенд':
          return <HrWeekend searchFilter={searchFilter} />;
        case 'HR Вебинар':
          return <HrWebinar searchFilter={searchFilter} />;
        case 'HR Конференции':
          return <HrConferences searchFilter={searchFilter} />;
        default:
          return (
            <>
              <HrCoffee searchFilter={searchFilter} />
              <HrWeekend searchFilter={searchFilter} />
              <HrWebinar searchFilter={searchFilter} />
              <HrConferences searchFilter={searchFilter} />
            </>
          );
      }
    } else {
      switch (selectedFilter) {
        case 'HR Кафе':
          return <HrCoffee />;
        case 'HR Викенд':
          return <HrWeekend />;
        case 'HR Вебинар':
          return <HrWebinar />;
        case 'HR Конференции':
          return <HrConferences />;
        default:
          return (
            <>
              <HrCoffee />
              <HrWeekend />
              <HrWebinar />
              <HrConferences />
            </>
          );
      }
    }
  };

  return (
    <div className="event-filters-container">
      <div className="filter-buttons">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-button ${selectedFilter === filter ? 'active' : ''}`}
            onClick={() => handleFilterClick(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="event-filters-title-container">
        {selectedFilter === 'Сите' && (
          <h2 className="conference-title">Сите настани</h2>
        )}
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Пребарај"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {renderEvents()}
    </div>
  );
};

export default EventFilters;
