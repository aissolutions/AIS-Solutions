import React, { useEffect, useRef, useState } from "react";
import "./Testimonial.css";

const testimonials = [
  {
    id: 1,
    msg: "The internship at AIS Solutions Pvt. Ltd. was an incredible learning experience. The hands-on training, personal mentorship, and doubt-clearing sessions made complex concepts easy to grasp. AIS’s focus on programming and industry trends helped me gain valuable skills. Grateful to Mr. Prajyot Patil Sir for his guidance. Highly recommended!",
    author: "Aboli Patil",
    img: "/reviews/user/user.png",
    rating: 5,
    reviewurl: "https://g.co/kgs/Co7xTti",
  },
  {
    id: 2,
    msg: "I recently attended a Power BI workshop, and I have to say, it was an incredible experience. The instructor was knowledgeable, patient, and made even the most complex concepts easy to understand. I appreciated how hands-on the workshop was — we didn't just sit and listen; we actively worked through real-world examples...",
    author: "Sugandh Chaturvedi",
    img: "/reviews/user/sugandh.png",
    rating: 5,
    reviewurl: "https://g.co/kgs/BHBMuAt",
  },
  {
    id: 3,
    msg: "I had an incredible experience interning at AIS Solutions Pvt Ltd ,Pune for three months. The company provided me with a comprehensive learning experience, and I was able to apply theoretical concepts to real-world problems.I would highly recommend  to anyone seeking a comprehensive internship experience. The company's commitment to learning and development is evident...",
    author: "Archana Jadhav",
    img: "/reviews/user/archana.png",
    rating: 5,
    reviewurl: "https://maps.app.goo.gl/vbQXhLpRWwqiAcNs8",
  },
  {
    id: 4,
    msg: "AIS Solutions offers a dynamic learning environment where interns are encouraged to explore new technologies and improve their problem-solving skills. The mentors provide excellent guidance, ensuring that we understand concepts thoroughly and apply them effectively in projects.This internship has been a transformative experience, equipping me with both technical expertise and professional skills...",
    author: "Shubham Nirmal",
    img: "/reviews/user/user.png",
    rating: 5,
    reviewurl: "https://maps.app.goo.gl/mpnQtgZzkRgNMoSX7",
  },
  {
    id: 5,
    msg: "My internship under Prajyot Patil Sir was an enriching experience. I worked on real-world projects involving Python, MS Excel, and Power BI, enhancing my analytical and problem-solving skills. With a supportive team and valuable mentorship from colleagues, I gained hands-on experience in data analysis. We also enjoyed extracurricular activities, making the experience even more memorable...",
    author: "Kranti Pawar",
    img: "/reviews/user/user.png",
    rating: 5,
    reviewurl: "https://maps.app.goo.gl/hoEsrouaCrZZdKK2A",
  },
  {
    id: 6,
    msg: "I had an incredible internship experience at #AIS Solution Pvt. Ltd.! The supportive and knowledgeable team helped me develop valuable skills in Python programming, AI, and ML. The company's infrastructure was impressive, and the culture was exceptional. I highly recommend this internship to others. Overall, it was a fantastic learning experience that exceeded my expectations!",
    author: "Dipti Salunkhe",
    img: "/reviews/user/diptisalunkhe.png",
    rating: 5,
    reviewurl: "https://maps.app.goo.gl/8K1rufSrtgDX3bYG6",
  },
  {
    id: 7,
    msg: "I had a wonderful experience as an intern at AIS solution Pvt Ltd. In just a few days we acquired significant knowledge of python, machine learning algorithms and power BI was extremely  beneficial. Throughout this experience, we enhanced our teamwork and had the opportunity to assess our skills and improvements through various sessions. Being an intern at AIS was a great experience. Thank you sir, for sharing your valuable knowledge with us.",
    author: "Snehal Ranmode",
    img: "/reviews/user/user.png",
    rating: 5,
    reviewurl: "https://maps.app.goo.gl/oKuARcUP5x9VedfL9",
  },
  {
    id: 8,
    msg: "The workshop was incredibly engaging and exceptionally valuable. It provided a comprehensive journey from the fundamentals of Python to advanced concepts, various machine learning algorithms. What truly set this workshop use of real-life examples to illustrate these concepts, making the learning experience not only informative but also highly relatable. Overall, this workshop was a tremendous learning opportunity, and I couldn't be more pleased with the knowledge and skills I've gained",
    author: "Shreyas Hapase",
    img: "/reviews/user/shreyashapase.png",
    rating: 5,
    reviewurl: "https://maps.app.goo.gl/2Hnwtp9Wywt9vzJx6",
  },
  {
    id: 9,
    msg: "Learning experience is outstanding and I totally enjoyed it. I learn something more than i knew. This workshop is very useful for my studies and also for new job apportunities in future. All statistical concepts are cleared and i learn alot.",
    author: "Prajakta Kamble",
    img: "/reviews/user/prajaktakamble.png",
    rating: 5,
    reviewurl: "https://maps.app.goo.gl/Dn6yeudXLXiLuxAGA",
  },
  {
    id: 10,
    msg: "Sir has a very Friendly Nature. He makes concepts easy to understand. Helped us with our doubts, solved our most of the problems. Thank You so much sir for providing us a project which enhanced our skills in coding. I can gladly say that problem solving skills have been improved by working on this project. Thank you so much Sir.",
    author: "Rajas Zelkar",
    img: "/reviews/user/rajaszelkar.png",
    rating: 5,
    reviewurl: "https://maps.app.goo.gl/mY3uPzrc7EPzECiX8",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  // Auto-rotate testimonials (pauses on hover)
  useEffect(() => {
    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 2000);
    };

    startInterval();

    return () => clearInterval(intervalRef.current);
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 2000);
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  const getVisibleTestimonials = () => {
    const length = testimonials.length;
    return [
      testimonials[(currentIndex - 1 + length) % length],
      testimonials[currentIndex],
      testimonials[(currentIndex + 1) % length],
    ];
  };

  const renderStars = (rating) => {
    return Array.from({ length: rating }).map((_, i) => (
      <img
        key={i}
        src="/reviews/user/star.png"
        alt="star"
        className="star"
      />
    ));
  };

  return (
    <section className="testimonial-section">
      <div className="section-header">
        <h2>What Our Students Say</h2>
      </div>

      <div className="carousel-container" ref={carouselRef}>
        <div className="carousel-track">
          {getVisibleTestimonials().map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className={`testimonial-card-wrapper ${
                index === 1 ? "center-card-wrapper" : ""
              }`}
            >
              <div
                className={`testimonial-card ${
                  index === 1 ? "center-card slide-in" : ""
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="card-content">
                  <div className="testimonial-text">"{testimonial.msg}"</div>
                  <div className="rating-container">
                    <div className="stars">
                      {renderStars(testimonial.rating)}
                    </div>
                    <button
                      className="review-button"
                      onClick={() => window.open(testimonial.reviewurl)}
                    >
                      <img
                        src="/reviews/user/search.png"
                        alt="View review"
                      />
                      <span>Full Review</span>
                    </button>
                  </div>
                  <div className="author-info">
                    <img
                      src={testimonial.img}
                      alt={testimonial.author}
                      className="author-image"
                    />
                    <div>
                      <h3 className="author-name">{testimonial.author}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-controls">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`control-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
