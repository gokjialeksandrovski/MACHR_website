'use client';

import React from 'react';
import Image from 'next/image';
import { url } from 'inspector';

const MikeVazauski: React.FC = () => {
  return (
    <div className="mike-vazauski">
      <div className="mike-vazauski-container">
        <div
          className="mike-vazauski-image"
          style={{
            backgroundImage: `url('/images/mike-vazauski/mike-vazauski-circle.png')`,
          }}
        >
          <div
            className="mike-vazauski-himself"
            style={{
              backgroundImage: `url('/images/mike-vazauski/mike-vazauski.png')`,
            }}
          >
            <Image
              src="/images/mike-vazauski/mike-vazauski-quotation-mark.png"
              alt="Quotation mark"
              width={154}
              height={119}
              className="quotation-mark"
            />
            <Image
              src="/images/mike-vazauski/mike-vazauski-dots-1.png"
              alt="Dot background"
              width={155}
              height={165.69}
              className="mike-vazauski-dots-1"
            />
          </div>
        </div>
        <div className="mike-vazauski-text">
          <h2 className="conference-title-2">Mајк Вазауски</h2>
          <h3>CEO на “Монстер Инк”</h3>
          <p className="conference-description mike-vazauski-about">
            Придружете се на нас за оваа исклучителна прилика да бидете дел од
            глобалната HR заедница и да придонесете за создавање на организации
            кои се подготвени за иднината преку проактивни HR стратегии.
            Конференцијата е дизајнирана да обезбеди инспирација, знаење и
            мрежни можности кои ќе им помогнат на HR професионалците да бидат
            подготвени за иднината.
          </p>
          <div className="mike-vazauski-arrows">
            <Image
              src="/icons/arrow-left.png"
              alt="Arrow Left"
              width={12.73}
              height={7.78}
            />
            <span>2 / 8</span>
            <Image
              src="/icons/arrow-right.png"
              alt="Arrow Right"
              width={12.73}
              height={7.78}
            />
          </div>
        </div>
      </div>
      <Image
        src="/images/mike-vazauski/mike-vazauski-dots-2.png"
        alt="Dot background"
        width={1213}
        height={568}
        className="mike-vazauski-dots-2"
      />
    </div>
  );
};
export default MikeVazauski;
