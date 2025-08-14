import React from "react";
import "./Gallery.css";

const images = Array.from(
  { length: 23 },
  (_, i) => `/photogallery/${i + 1}.jpg`
);

const Gallery = () => {
  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Our Photo Gallery</h2>
      <div className="gallery-track-wrapper">
        <div className="gallery-track">
          {[...images, ...images].map((src, index) => (
            <div className="gallery-item" key={index}>
              <img src={src} alt={`Gallery ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
