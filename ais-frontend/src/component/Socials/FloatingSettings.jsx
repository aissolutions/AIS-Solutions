import React, { useState } from "react";
import "./FloatingSettings.css";

const socials = [
  {
    name: "Instagram",
    icon: (
      <img
        src="/course logo/instagram.png"
        alt="Instagram"
        style={{ width: 28, height: 28, borderRadius: "50%" }}
      />
    ),
    url: "https://www.instagram.com/ais.solutions/?igsh=MWx0b25sMXJnM3NrNg%3D%3D#",
  },
  {
    name: "LinkedIn",
    icon: (
      <img
        src="/course logo/linkedin.png"
        alt="LinkedIn"
        style={{ width: 28, height: 28, borderRadius: "50%" }}
      />
    ),
    url: "https://www.linkedin.com/company/aissolutions/?originalSubdomain=in",
  },
  {
    name: "WhatsApp",
    icon: (
      <img
        src="/course logo/whatsapp.png"
        alt="WhatsApp"
        style={{ width: 28, height: 28, borderRadius: "50%" }}
      />
    ),
    url: "https://wa.me/919765707273?text=Hey%20AIS%20%7C%20Applied%20Insights%2C%20can%20you%20share%20more%20details%20about%20the%20course%3F ",
  },
];

const FloatingSettings = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`floating-settings${open ? " open" : ""}`}>
      <button
        className="settings-btn"
        onClick={() => setOpen((v) => !v)}
        aria-label="Open Socials"
      >
        <span className="settings-icon">
          <svg
            className="my-icon"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
          >
            <path
              d="M8 12H8.01M12 12H12.01M16 12H16.01M21.0039 12C21.0039 16.9706 16.9745 21 12.0039 21C9.9675 21 3.00463 21 3.00463 21C3.00463 21 4.56382 17.2561 3.93982 16.0008C3.34076 14.7956 3.00391 13.4372 3.00391 12C3.00391 7.02944 7.03334 3 12.0039 3C16.9745 3 21.0039 7.02944 21.0039 12Z"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      {socials.map((s, i) => (
        <a
          key={s.name}
          className={`social-btn social-btn-${i}`}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          title={s.name}
          style={{ pointerEvents: open ? "auto" : "none" }}
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
};

export default FloatingSettings;
