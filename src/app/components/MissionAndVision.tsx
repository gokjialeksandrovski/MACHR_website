'use client';

import React from 'react';
import Image from 'next/image';

const MissionAndVision: React.FC = () => {
  return (
    <div className="mission-and-vision">
      <div className="mission-and-vision-section-1 mission-and-vision-section-style">
        <div className="image-left">
          <Image
            src="/images/mission-and-vision/mission-and-vision-image-01.png"
            alt="Mission and Vision Image 1"
            width={464.1}
            height={577.45}
          />
        </div>
        <div className="mission-and-vision-text-1">
          <h1>МИСИЈА И ВИЗИЈА</h1>
          <h2 className="mission-and-vision-second-title about-us-title">
            Македонска Асоцијација за Човечки Ресурси
          </h2>
          <p>
            МАЧР е стручно, невладино, непартиско и непрофитно здружение на
            граѓани формирано на 22 април 2009 година, заради вршење на дејности
            и активности поврзани со развојот на работната сила, промоција на
            управувањето со човечките ресурси, како и унапредување на
            професијата управување со човечки ресурси.
          </p>
          <p>
            <span>Мисија:&nbsp;</span>“Мисија на МАЧР е унапредување и развој на
            професијата менаџмент со човечките ресурси”.
          </p>
          <p>
            <span>Визија:&nbsp;</span>“Визија на МАЧР е развој на луѓето и
            организациите!”
          </p>
        </div>
      </div>

      <div className="mission-and-vision-section-2 mission-and-vision-section-style">
        <div className="mission-and-vision-text-2">
          <h2 className="mission-and-vision-second-title about-us-title">
            Цели и задачи:
          </h2>
          <p>
            <span>ПОДДРШКА&nbsp;</span>на највисоките идеали во областа на
            управувањето со човечки ресурси и посестрано прифаќање и ценење на
            професијата;
          </p>
          <p>
            <span>ПРИЗНАВАЊЕ&nbsp;</span>на управувањето со човечки ресурси
            поради неговиот придонес за успешно работење и зајакнување на
            способноста и кредибилитетот на професијата управување со човечки
            ресурси;
          </p>
          <p>
            <span>СТРЕМЕЖ&nbsp;</span>да бидеме водачи во развојот и
            промовирањето на добрите практики во професијата управување со
            човечки ресурси, што ќе ги применуваат и професионалните членови и
            нивните колеги и да ги поставиме основните национални стандарди за
            управување со човечки ресурси; Лобирање кај владата и поднесување на
            документи во име на членовите и трети лица.
          </p>
        </div>
        <div className="image-right">
          <Image
            src="/images/mission-and-vision/mission-and-vision-image-02.png"
            alt="Mission and Vision Image 2"
            width={455.9}
            height={577.45}
          />
        </div>
      </div>
      <Image
        src="/images/mission-and-vision/mission-and-vision-dots.png"
        alt="Mission And Vision Image 3"
        width={1597}
        height={615}
        className="mission-and-vision-dots"
      />
    </div>
  );
};

export default MissionAndVision;
