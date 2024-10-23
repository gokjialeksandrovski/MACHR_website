'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import CustomAlert from './CustomAlert';

const SignUpForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [isSubscribedToNews, setIsSubscribedToNews] = useState<boolean>(false);
  const [isMemberOfMHIP, setIsMemberOfMHIP] = useState<boolean>(false);
  const router = useRouter();

  const handleEmailSignIn = () => {
    if (email === 'mhra@primer.com') {
      sessionStorage.setItem('userEmail', email);

      router.push('/user-dashboard');
    } else {
      alert('Внесовте погрешен е-маил. Ве молиме пробајте повторно.');
    }
  };

  const handleGoogleSignIn = () => {
    setShowAlert(true);
  };

  return (
    <div className="signup-form">
      <h2 className="signup-title">
        Најави се <span className="signup-or">или</span> Регистрирај се
      </h2>

      <div
        className="google-signin-btn sign-up-border sign-up-shadow sign-up-font-2"
        onClick={handleGoogleSignIn}
      >
        <Image src="/icons/google.png" alt="Google" width={40} height={40} />
        <span>Продолжи со Google</span>
      </div>

      <div className="signup-divider sign-up-font">Или</div>

      <label htmlFor="email" className="label-email sign-up-font">
        е-маил
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="mhra@primer.com"
        className="signup-input sign-up-border sign-up-shadow sign-up-font-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        className="signup-email-btn sign-up-shadow sign-up-font-2"
        onClick={handleEmailSignIn}
      >
        Продолжи со овој email
      </button>

      <p className="signup-terms sign-up-font">
        Со кликнување на 'Продолжи со Google/Email', се согласувате со
        нашите&nbsp;
        <a href="#" onClick={handleGoogleSignIn}>
          Услови на користење
        </a>{' '}
        и&nbsp;
        <a href="#" onClick={handleGoogleSignIn}>
          Политика за приватност
        </a>
      </p>

      <div className="checkbox-container sign-up-font">
        <input
          type="checkbox"
          checked={isMemberOfMHIP}
          id="membersCheckbox"
          name="membersCheckbox"
          onChange={() => setIsMemberOfMHIP(!isMemberOfMHIP)}
        />
        <label className="signup-checkbox" htmlFor="membersCheckbox">
          Сакам да станам член на МАЧР
        </label>{' '}
      </div>

      <div className="checkbox-container sign-up-font">
        <input
          type="checkbox"
          checked={isSubscribedToNews}
          id="newsCheckbox"
          name="newsCheckbox"
          onChange={() => setIsSubscribedToNews(!isSubscribedToNews)}
        />
        <label htmlFor="newsCheckbox">
          Сакам редовно да добивам информации на е-маил
        </label>
      </div>
      {showAlert && <CustomAlert onClose={() => setShowAlert(false)} />}
    </div>
  );
};

export default SignUpForm;
