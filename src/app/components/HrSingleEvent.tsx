import React from 'react';
import Image from 'next/image';
import BuyTicket from './BuyTicket';

const HrSingleEvent: React.FC = () => {
  return (
    <div className="hr-single-event">
      <h3 className="conference-title">HR кафе</h3>
      <p className="single-event-title hr-single-event-topic">
        ТЕМА: „ПОТРЕБАТА ОД ЗАЈАКНУВАЊЕ НА СОРАБОТКАТА ПОМЕЃУ HR ОДДЕЛОТ И
        ПРЕТСТАВНИКОТ НА ВРАБОТЕНИТЕ (СИНДИКАТОТ), СО ЦЕЛ УНАПРЕДУВАЊЕ НА
        РАБОТНАТА ОРГАНИЗАЦИЈА“
      </p>
      <div className="hr-single-event-container">
        <div className="hr-single-event-text">
          <div className="hr-single-event-description">
            <h4 className="single-event-title">Опис:</h4>
            <p>
              Опис: Овој настан има за цел да ја истакне важноста од тесната
              соработка меѓу HR одделот и претставникот на вработените
              (синдикатот) во организациите. Преку овој настан ќе ги разгледаме
              најдобрите практики, предизвиците и можностите кои се јавуваат при
              заедничката работа на овие две страни, со цел подобрување на
              работната атмосфера и организациската ефикасност. Учесниците ќе
              имаат можност да слушнат од експерти во областа, да дискутираат за
              своите искуства и да пронајдат нови начини за унапредување на
              соработката.
            </p>
          </div>
          <div className="hr-single-event-goal">
            <h4 className="single-event-title">Цел:</h4>
            <p>
              Целта на овој HR кафе настан е да се создаде платформа за отворена
              комуникација и размена на идеи која ќе придонесе за подобра
              соработка меѓу HR одделот и синдикатот, што ќе резултира со
              позитивни промени во работната организација.
            </p>
          </div>
        </div>
        <Image
          src="/images/hr-single-event/hr-single-event-image-01.png"
          alt="Conference Image 1"
          width={551.25}
          height={895.66}
        />
        <BuyTicket className="hr-single-event-container-buy-ticket" />
      </div>
      <Image
        src="/images/calendar/calendar-dots.png"
        alt="Dots background"
        className="calendar-dots hr-single-event-dots"
        width={1095}
        height={615}
      />
    </div>
  );
};

export default HrSingleEvent;
