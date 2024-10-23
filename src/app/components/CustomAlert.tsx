'use client';

import React from 'react';
import Image from 'next/image';

interface CustomAlertProps {
  onClose: () => void;
  message?: string;
}

const CustomAlert: React.FC<CustomAlertProps> = ({
  onClose,
  message = 'Се уште не е достапно.',
}) => {
  return (
    <div className="custom-alert custom-alert-2">
      <Image
        src="/icons/x.png"
        alt="Close"
        className="close-icon"
        width={14}
        height={14}
        onClick={onClose}
      />
      <p>{message}</p>
    </div>
  );
};

export default CustomAlert;
