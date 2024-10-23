'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface StaffMember {
  id: number;
  image: string;
  name: string;
  workplace: string;
  'social-media-1': string;
  'social-media-2': string;
  'social-media-3': string;
  'social-media-4': string;
}

interface StaffProps {
  limit?: number;
}

const Staff: React.FC<StaffProps> = ({ limit }) => {
  const [staffList, setStaffList] = useState<StaffMember[]>([]);

  useEffect(() => {
    const fetchStaffData = async () => {
      const response = await fetch('http://localhost:5000/machrStaff');
      const data = await response.json();

      if (limit) {
        setStaffList(data.slice(-limit));
      } else {
        setStaffList(data);
      }
    };

    fetchStaffData();
  }, [limit]);

  return (
    <div className={`staff-list ${limit ? 'last-three-staff-list' : ''}`}>
      {staffList.map((staff) => (
        <div key={staff.id} className="staff-card">
          <div className="staff-image">
            <Image
              src={staff.image}
              alt={staff.name}
              width={160}
              height={160}
            />
          </div>
          <div className="staff-info">
            <h3>{staff.name}</h3>
            <p>{staff.workplace}</p>
          </div>
          <div className="social-icons">
            <a
              href={staff['social-media-1']}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/social-media/facebook-2.png"
                alt="Facebook"
                width={16}
                height={16}
              />
            </a>
            <a
              href={staff['social-media-2']}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/social-media/twitter.png"
                alt="Twitter"
                width={16}
                height={17}
              />
            </a>
            <a
              href={staff['social-media-3']}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/social-media/instagram-2.png"
                alt="Instagram"
                width={15}
                height={16}
              />
            </a>
            <a
              href={staff['social-media-4']}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/social-media/linkedin-2.png"
                alt="LinkedIn"
                width={16}
                height={16}
              />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Staff;
