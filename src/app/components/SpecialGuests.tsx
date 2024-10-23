import React from 'react';
import Image from 'next/image';

const SpecialGuests: React.FC = () => {
  return (
    <div className="special-guests">
      <h2 className="conference-title special-guests-title">
        Специјални гости
      </h2>
      <p className="conference-description special-guests-description">
        Ова се луѓе од кои дефинитивно има што да се научи. Нивните достигнувања
        се огромни и со нивна помош секторот на HR успеа да достигне нови
        височини. Не пропуштајте ја оваа прилика да ка слушнете, а и да научите
        нешто од нивната мудрост.
      </p>
      <div className="special-guests-cards">
        <Image
          src="/images/special-guests/special-guests-image-01.png"
          alt="Special guest 1"
          width={648}
          height={655}
        />
        <Image
          src="/images/special-guests/special-guests-image-02.png"
          alt="Special guest 2"
          width={648}
          height={655}
        />
        <div className="conference-rectangle-link link-1">
          <div className="orange-circle-with-icon">
            <Image
              src="/icons/social-media/linkedIn-white-2.png"
              alt="LinkedIn icon"
              width={42}
              height={42}
              className="conference-linkedIn"
            />
          </div>
          <div className="conference-rectangle-link-text">
            <h3>Мајк Вазауски</h3>
            <span>CEO на “Монстер Инк”</span>
          </div>
        </div>
        <div className="conference-rectangle-link link-2">
          <div className="conference-rectangle-link-text">
            <h3>Оливиа Оил</h3>
            <span>CO на “Спинак”</span>
          </div>
          <div className="orange-circle-with-icon">
            <Image
              src="/icons/social-media/linkedIn-white-2.png"
              alt="LinkedIn icon"
              width={42}
              height={42}
              className="conference-linkedIn"
            />
          </div>
        </div>
      </div>
      <div className="special-guests-cards">
        <Image
          src="/images/special-guests/special-guests-image-03.jpg"
          alt="Special guest 3"
          width={648}
          height={655}
        />
        <Image
          src="/images/special-guests/special-guests-image-04.jpg"
          alt="Special guest 4"
          width={648}
          height={655}
        />
        <div className="conference-rectangle-link link-3">
          <div className="orange-circle-with-icon">
            <Image
              src="/icons/social-media/linkedIn-white-2.png"
              alt="LinkedIn icon"
              width={42}
              height={42}
              className="conference-linkedIn"
            />
          </div>
          <div className="conference-rectangle-link-text">
            <h3>Џејмс Суливан</h3>
            <span>Основач на “М.И.”</span>
          </div>
        </div>
        <div className="conference-rectangle-link link-4">
          <div className="conference-rectangle-link-text">
            <h3>Една Моде</h3>
            <span>Oсновач на “E”</span>
          </div>
          <div className="orange-circle-with-icon">
            <Image
              src="/icons/social-media/linkedIn-white-2.png"
              alt="LinkedIn icon"
              width={42}
              height={42}
              className="conference-linkedIn"
            />
          </div>
        </div>
      </div>
      <button>Сите спикери</button>
      <Image
        src="/images/special-guests/special-guests-dots.png"
        alt="Dots Background"
        width={2079.07}
        height={365}
        className="special-guests-dots"
      />
    </div>
  );
};

export default SpecialGuests;
