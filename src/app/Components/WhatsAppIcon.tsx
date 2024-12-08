"use client";
import React from "react";
import Image from "next/image";

const WhatsAppIcon: React.FC = () => {
  const whatsappNumber = "92320438215"; // Replace with your WhatsApp number in international format

  return (
    <footer style={footerStyle}>
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
        aria-label="Contact us on WhatsApp"
      >
        <Image
          src="/whatsapp-icon.png"
          width={50}
          height={50}
          alt="WhatsApp"
          style={iconStyle}
          className="hover:scale-110 transition-transform duration-200 bg-white rounded-full"
        />
      </a>
    </footer>
  );
};

// Inline styles
const footerStyle: React.CSSProperties = {
  position: "fixed",
  bottom: 0,
  right: 20,
  zIndex: 1000,
  backgroundColor: "transparent",
};

const linkStyle: React.CSSProperties = {
  textDecoration: "none",
  display: "inline-block",
};

const iconStyle: React.CSSProperties = {
  width: "50px",
  height: "50px",
  cursor: "pointer",
};

export default WhatsAppIcon;
