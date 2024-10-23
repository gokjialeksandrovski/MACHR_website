'use client';

import React, { useState } from 'react';
import BuyTicket from './BuyTicket';
import CustomAlert from './CustomAlert';

const SingleEventPageSubscriptions: React.FC = () => {
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const handleShareButton = () => {
    setShowAlert(true);
  };
  return (
    <div className="single-event-page-subscriptions">
      <div className="single-event-page-subscriptions-titles">
        <div className="single-event-page-subscriptions-title">
          <h2 className="conference-title">Цена за поединци</h2>
          <h3 className="conference-title">500мкд</h3>
        </div>
        <div className="single-event-page-subscriptions-title">
          <h2 className="conference-title">Цена за компании</h2>
          <h3 className="conference-title">5000мкд</h3>
        </div>
      </div>
      <div
        className="single-event-page-subscriptions-image"
        style={{
          backgroundImage: `url('/images/single-event-page-subscriptions/single-event-page-subscriptions-image.png')`,
        }}
      >
        <BuyTicket className="single-event-page-ticket" />
        <button
          className="single-event-page-subscriptions-button"
          onClick={handleShareButton}
        >
          Предложи на пријател
        </button>
      </div>
      {showAlert && <CustomAlert onClose={() => setShowAlert(false)} />}
    </div>
  );
};
export default SingleEventPageSubscriptions;
