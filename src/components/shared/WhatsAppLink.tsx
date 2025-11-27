import React from 'react';
import Image from 'next/image';

const WhatsAppLink: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <a
        href=" https://api.whatsapp.com/message/CMDRQ64SEDXBH1?autoload=1&app_absent=0" // Replace with your WhatsApp number in international format
        target="_blank" // Opens link in a new tab
        rel="noopener noreferrer" // Ensures security
        style={{ textDecoration: 'none' }}
      >
        <Image
          src="/whatsapp-icon.png" // Path to your WhatsApp icon image
          alt="WhatsApp Icon"
          width={80}
          height={80}
        />
      </a>
    </div>
  );
};

export default WhatsAppLink;
