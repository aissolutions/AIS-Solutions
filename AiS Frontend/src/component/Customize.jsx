import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import "./Customize.css";
import emailjs from "@emailjs/browser"; // Make sure this is installed

const Customize = () => {
  const courses = [
    {
      id: 1,
      courseName: "Power BI",
      url: "/course logo/powerbi.png",
      price: 10000,
    },
    {
      id: 2,
      courseName: "SQL",
      url: "/course logo/sql.png",
      price: 10000,
    },
    {
      id: 3,
      courseName: "Python",
      url: "/course logo/python.png",
      price: 10000,
    },
    {
      id: 4,
      courseName: "Excel",
      url: "/course logo/excel.png",
      price: 10000,
    },
    {
      id: 5,
      courseName: "Tableau",
      url: "/course logo/tablueu.png",
      price: 10000,
    },
    {
      id: 6,
      courseName: "Machine Learning",
      url: "/course logo/machine.png",
      price: 10000,
    },
    {
      id: 7,
      courseName: "Deep Learning",
      url: "/course logo/deep.png",
      price: 10000,
    },
    {
      id: 8,
      courseName: "NLP",
      url: "/course logo/nlp.png",
      price: 10000,
    },
    {
      id: 9,
      courseName: "Gen AI",
      url: "/course logo/ai.png",
      price: 10000,
    },
    {
      id: 10,
      courseName: "Agentic AI",
      url: "/course logo/agentic.png",
      price: 10000,
    },
    {
      id: 11,
      courseName: "Statistics",
      url: "/course logo/description.png",
      price: 10000,
    },
    {
      id: 12,
      courseName: "HTML",
      url: "/course logo/html.png",
      price: 10000,
    },
    {
      id: 13,
      courseName: "CSS",
      url: "/course logo/css.png",
      price: 10000,
    },
    {
      id: 14,
      courseName: "Java Script",
      url: "/course logo/js.png",
      price: 10000,
    },
    {
      id: 15,
      courseName: "React JS",
      url: "/course logo/react.png",
      price: 10000,
    },
    {
      id: 16,
      courseName: "Spring Boot",
      url: "/course logo/spring.png",
      price: 10000,
    },
    {
      id: 17,
      courseName: "mySQL",
      url: "/course logo/mysql.png",
      price: 10000,
    },
    {
      id: 18,
      courseName: "Data Science",
      url: "/course logo/datascience.png",
      price: 10000,
    },
    {
      id: 19,
      courseName: "Data Analyst",
      url: "/course logo/dataanalyst.png",
      price: 10000,
    },
    {
      id: 20,
      courseName: "Web Developer",
      url: "/course logo/webdev.png",
      price: 10000,
    },
    {
      id: 21,
      courseName: "Statistician",
      url: "/course logo/description.png",
      price: 10000,
    },
    {
      id: 22,
      courseName: "AI & Machine Learning",
      url: "/course logo/aiml.png",
      price: 10000,
    },
    {
      id: 23,
      courseName: "Business Analytics",
      url: "/course logo/businessanalytics.png",
      price: 10000,
    },
    {
      id: 24,
      courseName: "Human Resources",
      url: "/course logo/hr.png",
      price: 10000,
    },
    {
      id: 25,
      courseName: "Generative AI",
      url: "/course logo/genai.png",
      price: 10000,
    },
  ];

  const location = useLocation();
  // Read selectedCourseIds from navigation state, default to []
  const initialSelected = location.state?.selectedCourseIds || [];

  // State to track selected courses
  // const [selected, setSelected] = useState([]);
  const [selected, setSelected] = useState(initialSelected);

  // For scroll to top in this website

  // Add or remove course
  const toggleCourse = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  // Calculate total price
  // ...existing code...

  // Calculate total price with discount logic
  const totalPrice = (() => {
    if (selected.length === 0) return 0;

    // Get selected course objects
    const selectedCourses = selected.map((id) =>
      courses.find((c) => c.id === id)
    );

    // Sort to ensure consistent pricing logic (first selected is full price)
    const validCourses = selectedCourses.filter(Boolean);

    // Apply discount: full price for first, 50% for rest
    const sum = validCourses.reduce((acc, course, index) => {
      if (index === 0) return acc + course.price;
      return acc + course.price * 0.5;
    }, 0);

    return Math.round(sum);
  })();
  // ...existing code...
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    // Get selected course names
    const selectedCourseNames = courses
      .filter((c) => selected.includes(c.id))
      .map((c) => c.courseName)
      .join(", ");
    emailjs
      .send(
        "service_8box73l", // replace with your EmailJS service ID
        "template_w2zq6tv", // replace with your EmailJS template ID
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          address: form.address,
          course: selectedCourseNames,
        },
        "jiPuGmUXUUghKcaJA" // replace with your EmailJS public key
      )
      .then(
        () => {
          setSending(false);
          setSuccess(true);
          setTimeout(() => {
            setShowModal(false);
            setSuccess(false);
            setForm({ name: "", email: "", phone: "", address: "" });
          }, 2000);
        },
        () => {
          setSending(false);
          alert("Failed to send. Please try again.");
        }
      );
  };

  return (
    <>
      <section className="ctm-pack-section ctm-pack-course-section" id="choose">
        <Helmet>
          <title>Customize Your Learning | AIS Solutions</title>
          <meta
            name="description"
            content="Customize your AI, Data Science and ML training path at AIS Solutions."
          />
        </Helmet>
        ;
        <h2 className="ctm-pack-f-48 ctm-pack-fw-400 ctm-pack-text-black ctm-pack-text-center">
          Choose{" "}
          <span className="ctm-pack-fw-700 ctm-pack-text-pink">
            Your Courses
          </span>
        </h2>
        <div className="ctm-pack-courses">
          <div className="ctm-pack-course">
            <div className="ctm-pack-course-heading">All Courses </div>
            <div className="ctm-pack-course-div-outer">
              <div className="ctm-pack-course-div">
                {courses.map((item) => (
                  <div
                    className={`ctm-pack-course-card-div pointer ${
                      selected.includes(item.id) ? "selected" : ""
                    }`}
                    key={item.id}
                  >
                    <div className="ctm-pack-ccd-left">
                      <div className="ctm-pack-ccdl-left">
                        <img src={item.url} alt={item.courseName} />
                      </div>
                      <div className="ctm-pack-ccdl-right">
                        {item.courseName}
                      </div>
                    </div>
                    <div className="ctm-pack-ccd-right">
                      <div
                        className="ctm-pack-ccdr-right"
                        onClick={() => toggleCourse(item.id)}
                        style={{
                          background: selected.includes(item.id)
                            ? "linear-gradient(7deg, #e0a8ff 0%, #9400ff 100%)"
                            : "#fff",
                          color: selected.includes(item.id)
                            ? "#fff"
                            : "#800080",
                          border: "1px solid #800080",
                          borderRadius: "8px",
                          cursor: "pointer",
                          padding: "0.2rem 0.8rem",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {selected.includes(item.id) ? (
                          <svg
                            viewBox="0 0 24 24"
                            width={32}
                            height={33}
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#ffffff"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <path
                                d="M6 12L18 12"
                                stroke="#ffffff"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>{" "}
                            </g>
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={32}
                            height={33}
                            viewBox="0 0 32 33"
                            fill="white"
                          >
                            <g clipPath="url(#clip0_181_1239)">
                              <path
                                d="M25.3346 17.8332H17.3346V25.8332H14.668V17.8332H6.66797V15.1665H14.668V7.1665H17.3346V15.1665H25.3346V17.8332Z"
                                fill={
                                  selected.includes(item.id)
                                    ? "#fff"
                                    : "#800080"
                                }
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_181_1239">
                                <rect
                                  width={32}
                                  height={32}
                                  fill="white"
                                  transform="translate(0 0.5)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        )}

                        <span className="ctm-pack-add">
                          {selected.includes(item.id) ? "Remove" : "Add"}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {selected.length > 0 && (
                <div className="float-s-inner-cont fixed-bottom">
                  <div className="flc-course-cont">
                    {selected.length}
                    <span>Selected Courses</span>
                  </div>
                  <div className="flc-price-cont">
                    ₹ {totalPrice}
                    <span>Total Price</span>
                  </div>
                  <div
                    className="flc-price-cont enroll-btn"
                    onClick={() => setShowModal(true)}
                  >
                    <div>Enroll Now</div>
                  </div>
                </div>
              )}
            </div>
            {showModal && (
              <div
                className="enroll-modal-overlay"
                onClick={() => setShowModal(false)}
              >
                <div
                  className="enroll-modal"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="enroll-modal-close"
                    onClick={() => setShowModal(false)}
                    aria-label="Close"
                    style={{
                      position: "absolute",
                      top: 10,
                      right: 16,
                      background: "none",
                      border: "none",
                      fontSize: "2em",
                      color: "#800080",
                      cursor: "pointer",
                    }}
                  >
                    &times;
                  </button>
                  <h2>Enroll Now</h2>
                  {success ? (
                    <div className="enroll-success">
                      Thank you! Your enrollment was submitted.
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="enroll-form">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={form.name}
                        onChange={handleInputChange}
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleInputChange}
                        required
                      />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={form.phone}
                        onChange={handleInputChange}
                        required
                      />
                      <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={form.address}
                        onChange={handleInputChange}
                        required
                      />
                      <button type="submit" disabled={sending}>
                        {sending ? "Sending..." : "Submit"}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Customize;
