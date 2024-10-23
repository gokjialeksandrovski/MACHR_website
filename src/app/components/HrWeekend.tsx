'use client';

import React, { useState } from 'react';
import FeatureCard from './FeatureCard';
import CustomAlert from './CustomAlert';

interface HrWeekendProps {
  searchFilter?: (title: string) => boolean;
}

const HrWeekend: React.FC<HrWeekendProps> = ({ searchFilter }) => {
  const featureCardIds = [13, 14, 15, 16];
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const handleWeekendAlert = () => {
    setShowAlert(true);
  };

  return (
    <div className="feature-cards-container">
      <div className="feature-cards-title-container margin-top-150">
        <h2 className="about-us-title feature-cards-title">
          <span className="hr-bold">hr</span>&nbsp;викенд
        </h2>
        <a
          className="feature-card-title-container-link"
          onClick={handleWeekendAlert}
        >
          Види ги сите
        </a>
      </div>
      <div className="feature-cards-grid">
        {featureCardIds.map((id) => (
          <FeatureCard key={id} id={id} searchFilter={searchFilter} />
        ))}
      </div>
      {showAlert && <CustomAlert onClose={() => setShowAlert(false)} />}
    </div>
  );
};

export default HrWeekend;
