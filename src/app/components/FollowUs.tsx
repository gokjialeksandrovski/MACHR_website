import React from 'react';
import Image from 'next/image';

const FollowUs: React.FC = () => {
  return (
    <div className="follow-us-container">
      <div className="follow-us">
        <h3 className="follow-us-title">Заследи не на социјалните медиуми</h3>
        <div className="follow-us-icons">
          <a href="#" aria-label="LinkedIn">
            <Image
              src="/icons/social-media/linkedin-white.png"
              alt="LinkedIn"
              width={28}
              height={28}
            />
          </a>
          <a href="#" aria-label="Instagram">
            <Image
              src="/icons/social-media/instagram-white.png"
              alt="Instagram"
              width={28}
              height={28}
            />
          </a>
          <a href="#" aria-label="Facebook">
            <Image
              src="/icons/social-media/facebook-white.png"
              alt="Facebook"
              width={28}
              height={28}
            />
          </a>
          <a href="#" aria-label="YouTube">
            <Image
              src="/icons/social-media/youtube-white.png"
              alt="YouTube"
              width={28}
              height={28}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FollowUs;
