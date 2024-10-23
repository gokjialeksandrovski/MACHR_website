'use client';

import React from 'react';
import SignUpHeroBanner from '../components/SignUpHeroBanner';
import SignUpForm from '../components/SignUpForm';
import SignUpBenefitsSection from '../components/SignUpBenefitsSection';

const SignUpPage: React.FC = () => {
  return (
    <div>
      <SignUpHeroBanner />
      <SignUpForm />
      <SignUpBenefitsSection />
    </div>
  );
};

export default SignUpPage;
