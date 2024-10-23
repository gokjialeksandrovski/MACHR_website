'use client';

import React, { ReactNode } from 'react';
import Image from 'next/image';
import BuyTicket from './BuyTicket';

const ConferenceMachrEvent: React.FC = () => {
  return (
    <div className="conference-event-container">
      <div className="conference-event-text">
        <h1 className="conference-title conference-event-title">
          13та меѓународна МАЧР конференција
        </h1>
        <div className="conference-details">
          <div className="details-item">
            <Image
              src="/icons/calendar/calendar-black.png"
              alt="Calendar Icon"
              width={20}
              height={20}
            />
            <span>24-25 Декември, 2024</span>
          </div>
          <div className="details-item">
            <Image
              src="/icons/pin.png"
              alt="Location Icon"
              width={20}
              height={20}
            />
            <span>Хотел Континентал, Скопје</span>
          </div>
        </div>
        <p className="conference-description">
          Годишната меѓународна HR конференција, организирана од страна на
          Македонска асоцијација за човечки ресурси, има за цел да ги истражи и
          презентира најновите трендови и практики во областа на човечките
          ресурси кои ќе помогнат на организациите да станат "future fit". Оваа
          конференција ќе ги собере најдобрите умови и лидери во HR за да
          дискутираат и разменат идеи на прогресивни стратегии кои можат да ја
          трансформираат работната сила и да ја зголемат организациската
          ефикасност.
        </p>
        <BuyTicket />
      </div>
      <div
        className="conference-images"
        style={{
          backgroundImage: `url('/images/13-machr-conference/conference-rectangle.png')`,
        }}
      >
        <Image
          src="/images/13-machr-conference/conference-circle-1.png"
          alt="Conference Circle 1"
          width={274}
          height={274}
          className="conference-circle-1"
        />
        <Image
          src="/images/13-machr-conference/conference-circle-2.png"
          alt="Conference Circle 2"
          width={377}
          height={376}
          className="conference-circle-2"
        />
        <Image
          src="/images/13-machr-conference/conference-13-dots-image-01.png"
          alt="Dots Background"
          width={155}
          height={165.69}
          className="conference-black-dots"
        />
      </div>
      <Image
        src="/images/13-machr-conference/conference-13-dots-image-02.png"
        alt="Dots Background"
        width={430}
        height={352}
        className="conference-dots"
      />
    </div>
  );
};

export default ConferenceMachrEvent;
