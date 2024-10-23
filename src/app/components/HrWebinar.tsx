'use client';

import React, { useState } from 'react';
import FeatureCard from './FeatureCard';
import CustomAlert from './CustomAlert';

interface HrWebinarProps {
  searchFilter?: (title: string) => boolean;
}

const HrWebinar: React.FC<HrWebinarProps> = ({ searchFilter }) => {
  const featureCardIds = [17, 18, 19, 20];
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const handleWebinarAlert = () => {
    setShowAlert(true);
  };

  return (
    <div className="feature-cards-container">
      <div className="feature-cards-title-container margin-top-150">
        <h2 className="about-us-title feature-cards-title">
          <span className="hr-bold">hr</span>&nbsp;вебинар
        </h2>
        <a
          className="feature-card-title-container-link"
          onClick={handleWebinarAlert}
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

export default HrWebinar;
