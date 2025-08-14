import React, { useEffect, useRef } from "react";
import "./FloatingTechSpace.css";

const techs = [
  {
    name: "Python",
    img: "/course logo/python.png",
    desc: "A popular programming language for data science, AI, and more.",
  },
  {
    name: "Data Science",
    img: "/course logo/datascience.png",
    desc: "Extracting insights from data using statistics and machine learning.",
  },
  {
    name: "SQL",
    img: "/course logo/sql.png",
    desc: "A language for managing and querying relational databases.",
  },
  {
    name: "Power BI",
    img: "/course logo/powerbi.png",
    desc: "A business analytics tool for interactive visualizations.",
  },
  {
    name: "Machine Learning",
    img: "/course logo/machine.png",
    desc: "Algorithms that learn from data to make predictions.",
  },
  {
    name: "Tableau",
    img: "/course logo/tablueu.png",
    desc: "A powerful data visualization platform.",
  },
];

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

const FloatingTechSpace = () => {
  const techRefs = useRef([]);

  useEffect(() => {
    let frame;
    const baseRadius = 180;
    const animate = () => {
      techRefs.current.forEach((el, i) => {
        if (el) {
          const t = Date.now() / 1800;
          const phase = i * 2.2 + (i % 2 ? 0.7 : 0); // more spread
          const radius = baseRadius + 30 * Math.sin(i + t / 2);
          const angle = t + phase;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius * 0.7; // squish vertically for fit
          el.style.transform = `translate(${x}px, ${y}px)`;
        }
      });
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  // Generate random stars
  const stars = Array.from({ length: 60 }).map((_, i) => ({
    left: `${randomBetween(0, 100)}%`,
    top: `${randomBetween(0, 100)}%`,
    size: randomBetween(1, 2.5),
    opacity: randomBetween(0.4, 1),
    key: i,
  }));

  return (
    <div className="floating-space-card">
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.key}
          className="floating-space-star"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
          }}
        />
      ))}
      {/* Floating techs */}
      {techs.map((tech, i) => (
        <div
          className="floating-tech"
          key={tech.name}
          ref={(el) => (techRefs.current[i] = el)}
        >
          <div className="floating-tech-img-wrap">
            <img src={tech.img} alt={tech.name} className="floating-tech-img" />
          </div>
          <div className="floating-tech-tooltip">
            <div className="floating-tech-tooltip-title">{tech.name}</div>
            <div className="floating-tech-tooltip-desc">{tech.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingTechSpace;
