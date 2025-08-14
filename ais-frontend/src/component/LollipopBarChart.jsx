import React, { useEffect, useRef, useState } from "react";
import "./LollipopBarChart.css";

const techs = [
  { name: "Python", img: "/course logo/python.png" },
  { name: "Excel", img: "/course logo/excel.png" },
  { name: "SQL", img: "/course logo/sql.png" },
  { name: "Power BI", img: "/course logo/powerbi.png" },
  { name: "ML", img: "/course logo/machine.png" },
];

const BAR_MAX_HEIGHT = 260; // Change this value to adjust everywhere

const MIN_HEIGHT = 40;
const MAX_HEIGHT = BAR_MAX_HEIGHT;

const LollipopBarChart = () => {
  const barRefs = useRef([]);
  const imageRefs = useRef([]);
  const tooltipRefs = useRef([]);
  const [heights, setHeights] = useState(techs.map(() => MIN_HEIGHT));

  useEffect(() => {
    const timeouts = [];

    techs.forEach((_, i) => {
      const animate = () => {
        const nextHeight =
          Math.random() > 0.5
            ? MAX_HEIGHT
            : Math.floor(Math.random() * (MAX_HEIGHT - MIN_HEIGHT)) +
              MIN_HEIGHT;

        setHeights((prev) => {
          const updated = [...prev];
          updated[i] = nextHeight;
          return updated;
        });

        timeouts[i] = setTimeout(animate, Math.random() * 1500 + 800);
      };

      animate();
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    heights.forEach((height, i) => {
      const bar = barRefs.current[i];
      const img = imageRefs.current[i];
      const tip = tooltipRefs.current[i];

      if (bar) bar.style.height = `${height}px`;
      // Move image up by the bar height + half the image wrapper height (35px for 70px circle)
      if (img) img.style.transform = `translateY(-${height + 50}px)`;
      if (tip) tip.innerText = `${Math.round((height / MAX_HEIGHT) * 150)}%`;
    });
  }, [heights]);

  return (
    <div className="lollipopbar-chart-outer">
      <br />
      <div className="lollipopbar-title">Go Applied , Get Insights... </div>
      <div className="lolipopbar-tagline">Together we achieve more...</div>
      {/* <div className="lollipopbar-subtitle">
        with AIS
      </div>
      <div className="lollipopbar-subtitle">AIS Solutions</div> */}

      <div className="lollipopbar-chart-container">
        <div className="lollipopbar-grid">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="grid-line" />
          ))}
        </div>

        {techs.map((tech, i) => (
          <div className="lollipopbar-bar-col" key={tech.name}>
            <div
              className="lollipopbar-image-wrapper"
              ref={(el) => (imageRefs.current[i] = el)}
            >
              <div className="lollipopbar-circle">
                <img
                  src={tech.img}
                  alt={tech.name}
                  className="lollipopbar-img"
                />
              </div>
              {/* <div
                className="lollipopbar-tooltip"
                ref={(el) => (tooltipRefs.current[i] = el)}
              ></div> */}
            </div>
            <div className="lollipopbar-bar-track">
              <div
                className="lollipopbar-bar"
                ref={(el) => (barRefs.current[i] = el)}
              >
                <div className="lollipopbar-dot" />
              </div>
            </div>
            <div className="lollipopbar-label">{tech.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LollipopBarChart;
