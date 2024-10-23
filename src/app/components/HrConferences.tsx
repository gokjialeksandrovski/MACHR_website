'use client';

import React, { useState } from 'react';
import FeatureCard from './FeatureCard';
import CustomAlert from './CustomAlert';

interface HrConferencesProps {
  searchFilter?: (title: string) => boolean;
}

const HrConferences: React.FC<HrConferencesProps> = ({ searchFilter }) => {
  const featureCardIds = [21, 22, 23, 24];
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const handleConferencesAlert = () => {
    setShowAlert(true);
  };

  return (
    <div className="feature-cards-container">
      <div className="feature-cards-title-container margin-top-150">
        <h2 className="about-us-title feature-cards-title">
          <span className="hr-bold">hr</span>&nbsp;конференции
        </h2>
        <a
          className="feature-card-title-container-link"
          onClick={handleConferencesAlert}
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

export default HrConferences;
