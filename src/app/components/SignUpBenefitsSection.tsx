import React from 'react';
import Image from 'next/image';

const SignUpBenefitsSection: React.FC = () => {
  return (
    <div className="signup-benefits-section">
      <div className="benefits-container">
        <div className="corporate-benefits">
          <Image
            src="/images/sign-up-benefits-section/sign-up-benefits-image-01.png"
            alt="Corporate Benefits"
            width={785}
            height={400}
            className="circle-image"
          />

          <div className="benefits-text-container benefits-text-1">
            <h2 className="about-us-title benefit-title">
              Бенефити од корпоративно зачленување
            </h2>
            <ul className="benefit-list">
              <li>Претставник на корпоративниот одбор на МАЧР</li>
              <li>Можност за користење на нашата платформа</li>
              <li>Широк спектар на ресурси релевантни за индустријата</li>
              <li>Попусти на настани, обуки, конференции и сл.</li>
              <li>И многу повеќе</li>
            </ul>
          </div>
        </div>

        <div className="individual-benefits">
          <div className="benefits-text-container benefits-text-2">
            <h2 className="about-us-title benefit-title">
              Бенефити од индивидуално зачленување
            </h2>
            <ul className="benefit-list benefit-list-2">
              <li>Едукативни настани</li>
              <li>Најнови информации и случувања</li>
              <li>Ширење на мрежата на контакти</li>
              <li>Вклученост во работата на МАЧР</li>
              <li>И многу повеќе</li>
            </ul>
          </div>
          <Image
            src="/images/sign-up-benefits-section/sign-up-benefits-image-02.png"
            alt="Corporate Benefits"
            width={820}
            height={399}
            className="benefits-image-2"
          />
        </div>
      </div>
      <Image
        src="/images/sign-up-benefits-section/sign-up-benefits-dots-1.png"
        alt="Decorative Dots"
        width={254}
        height={358.3}
        className="sign-up-dots sign-up-dots-1"
      />

      <Image
        src="/images/sign-up-benefits-section/sign-up-benefits-dots-2.png"
        alt="Decorative Dots"
        width={323}
        height={358.3}
        className="sign-up-dots sign-up-dots-2"
      />

      <Image
        src="/images/sign-up-benefits-section/sign-up-benefits-dots-3.png"
        alt="Decorative Dots"
        width={300}
        height={358.3}
        className="sign-up-dots sign-up-dots-3"
      />
    </div>
  );
};

export default SignUpBenefitsSection;
