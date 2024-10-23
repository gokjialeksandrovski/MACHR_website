'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from './LanguageContext';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailValid(validateEmail(e.target.value));
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleCheckmarkClick = () => {
    if (emailValid && email !== '') {
      setShowSuccessPopup(true);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo">
            <Image
              src="/icons/logo/machr-logo-2.png"
              alt="MACHR Logo"
              width={80}
              height={99}
            />
          </div>
          <div className="footer-info">
            <div className="footer-address">
              <h4>{language === 'mk' ? 'Адреса' : 'Address'}</h4>
              <p>
                {language === 'mk'
                  ? 'Бул. ВМРО бр. 7/1-7'
                  : 'Blvd. VMRO no. 7/1-7'}
              </p>
              <p>
                {language === 'mk'
                  ? '1000 Скопје, Македонија'
                  : '1000 Skopje, Macedonia'}
              </p>
            </div>
            <div className="footer-email">
              <h4>{language === 'mk' ? 'Е-маил' : 'Email'}</h4>
              <p>contact@mhra.mk</p>
            </div>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-newsletter">
            <h4>
              {language === 'mk'
                ? 'Претплати се на билтен'
                : 'Subscribe to the newsletter'}
            </h4>
            <div className="newsletter-input">
              <input
                id="subscribe"
                name="subscribe"
                type="email"
                placeholder={language === 'mk' ? 'Е-маил' : 'Email'}
                value={email}
                onChange={handleInputChange}
              />
              <div className="checkmark-icon" onClick={handleCheckmarkClick}>
                <Image
                  src="/icons/black-checkmark.png"
                  alt="Black Checkmark"
                  width={28.5}
                  height={27.75}
                />
              </div>
            </div>
          </div>
          <div className="footer-social">
            <a
              href="https://www.linkedin.com/"
              aria-label="LinkedIn"
              target="blank"
            >
              <Image
                src="/icons/social-media/linkedin.png"
                alt="LinkedIn"
                width={28.5}
                height={27.75}
              />
            </a>
            <a
              href="https://www.instagram.com/"
              aria-label="Instagram"
              target="blank"
            >
              <Image
                src="/icons/social-media/instagram.png"
                alt="Instagram"
                width={28.5}
                height={27.75}
              />
            </a>
            <a
              href="https://www.facebook.com/"
              aria-label="Facebook"
              target="blank"
            >
              <Image
                src="/icons/social-media/facebook.png"
                alt="Facebook"
                width={29.25}
                height={28.5}
              />
            </a>
            <a
              href="https://www.youtube.com/"
              aria-label="YouTube"
              target="blank"
            >
              <Image
                src="/icons/social-media/youtube.png"
                alt="YouTube"
                width={28.8}
                height={28.8}
              />
            </a>
          </div>
        </div>
      </div>

      {showSuccessPopup && (
        <div
          className="page-blur-overlay footer-popup-overlay"
          onClick={() => setShowSuccessPopup(false)}
        >
          <div className="footer-popup">
            <p>
              {language === 'mk'
                ? 'Честитки, успешно се претплативте на билтенот!'
                : 'Congratulations, you have successfully subscribed to the newsletter!'}
            </p>
            <button onClick={() => setShowSuccessPopup(false)}>OK</button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
