'use client';

import React, { ReactNode } from 'react';
import Image from 'next/image';
import { useLanguage } from './LanguageContext';

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  href,
  children,
  className,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
};

interface BuyTicketProps {
  className?: string;
  version?: number;
}

const BuyTicket: React.FC<BuyTicketProps> = ({ className, version }) => {
  const { language } = useLanguage();

  return (
    <ExternalLink
      href={
        version === 2
          ? 'https://www.mhra.mk/pocetna/bilten'
          : 'https://www.mhra.mk/pocetna/clenstvo.nspx'
      }
      className={`conference-event-ticket conference-rectangle-link ${className}`}
    >
      <div className="orange-circle-with-icon">
        <Image
          src="/images/13-machr-conference/conference-attach.png"
          alt="Ticket Icon"
          width={45.63}
          height={45.64}
        />
      </div>
      <div className="ticket-link">
        <h3>
          {version === 2
            ? language === 'mk'
              ? 'МАЧР билтен'
              : 'The MHRA Newsletter'
            : language === 'mk'
              ? 'КУПИ КАРТА'
              : 'BUY A TICKET'}
        </h3>
        <span>machrconference.com</span>
      </div>
    </ExternalLink>
  );
};

export default BuyTicket;
