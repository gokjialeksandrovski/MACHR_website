'use client';

import React, { useState } from 'react';
import FeatureCard from './FeatureCard';
import CustomAlert from './CustomAlert';

interface HrCoffeeProps {
  searchFilter?: (title: string) => boolean;
}

const HrCoffee: React.FC<HrCoffeeProps> = ({ searchFilter }) => {
  const featureCardIds = [9, 10, 11, 12];
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const handleCoffeeAlert = () => {
    setShowAlert(true);
  };

  return (
    <div className="feature-cards-container">
      <div className="feature-cards-title-container">
        <h2 className="about-us-title feature-cards-title">
          <span className="hr-bold">hr</span>&nbsp;кафе
        </h2>
        <a
          className="feature-card-title-container-link"
          onClick={handleCoffeeAlert}
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

export default HrCoffee;
