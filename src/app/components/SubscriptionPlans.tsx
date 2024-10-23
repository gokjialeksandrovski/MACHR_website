import React from 'react';
import Image from 'next/image';

const SubscriptionPlans: React.FC = () => {
  return (
    <div className="subscription-plans-container">
      <h2 className="conference-title-2">Пакети за поединци и корпорации</h2>
      <div className="rectangles-container">
        <div className="subscription-plans-rectangles">
          <div className="subscription-plan-rectangle">
            <h2 className="conference-title-2">Поединци</h2>
            <h3 className="conference-title-2">1500ден</h3>
            <ul className="subscription-perks">
              <li>1 седиште</li>
              <li>Пауза за ручек</li>
              <li>WiFi</li>
            </ul>
            <button>КУПИ КАРТА</button>
          </div>
          <div className="subscription-plan-rectangle">
            <h2 className="conference-title-2">Корпорации</h2>
            <h3 className="conference-title-2">20 000ден</h3>
            <ul className="subscription-perks">
              <li>20 седишта</li>
              <li>Паузи за чај и кафе</li>
              <li>Пауза за ручек</li>
              <li>WiFi</li>
            </ul>
            <button>КУПИ КАРТА</button>
          </div>
        </div>
        <button className="subscription-plans-button">
          Предложи на пријател
        </button>
      </div>
      <Image
        src="/images/subscription-plans/subscription-plans-dots-1.png"
        alt="Dot background"
        width={410}
        height={2086}
        className="subscription-plans-dots-1"
      />
      <Image
        src="/images/subscription-plans/subscription-plans-dots-2.png"
        alt="Dot background"
        width={563}
        height={183}
        className="subscription-plans-dots-2"
      />
      <Image
        src="/images/subscription-plans/subscription-plans-dots-3.png"
        alt="Dot background"
        width={410}
        height={2092}
        className="subscription-plans-dots-3"
      />
    </div>
  );
};

export default SubscriptionPlans;
