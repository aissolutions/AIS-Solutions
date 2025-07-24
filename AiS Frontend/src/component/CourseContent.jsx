import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import ais2img from "../assets/ais2img.png";
import emailjs from "@emailjs/browser"; // npm install @emailjs/browser
import "./CourseContent.css";
import { sendEnquiry } from "../api/formApi";

function CourseContent() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [openTopics, setOpenTopics] = useState({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  // Form Validations
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    const newErrors = {};

    // Name: only letters and spaces
    if (!form.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (!/^[a-zA-Z\s]+$/.test(form.name)) {
      newErrors.name = "Name can only contain letters.";
    }

    // Email
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email format.";
    }

    // Phone: only digits, 10 characters
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(form.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }

    // Address
    if (!form.address.trim()) {
      newErrors.address = "Address is required.";
    } else if (form.address.length < 5) {
      newErrors.address = "Address must be at least 5 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleAddMoreCourses = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
    navigate("/customize", { state: { selectedCourseIds: [course.id] } });
  };

  const toggleTopic = (id) => {
    setOpenTopics((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  // Disable scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);

  const location = useLocation();
  const course = location.state;

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await sendEnquiry({
        ...form,
        course: course?.courseName || "",
      });
      setSending(false);
      setSuccess(true);
      setTimeout(() => {
        setShowModal(false);
        setSuccess(false);
        setForm({ name: "", email: "", phone: "", address: "" });
      }, 2000);
    } catch (err) {
      setSending(false);
      alert("Failed to send. Please try again.");
    }
  };

  if (!course) {
    return <div>No course data available.</div>;
  }
  return (
    <>
      {/* Main content gets blurred when modal is open */}
      <div className={showModal ? "blurred-bg" : ""}>
        <div className="student-showcase">
          {/* <span>🎓 Bundle Offer: Save More When You Learn More!</span> */}
          Unlock <span>50%</span> Off on Additional Courses
        </div>
        <div className="hero-cont">
          <div className="hero-inner-cont">
            <div className="hero-left-cont">
              <div className="hero-master">
                <h1 className="hero-masterr">
                  Learn <br />
                  <b className="hero-uiux">{course.courseName}</b>
                </h1>
                effectively with<b className="hero-free"> AiS </b>
              </div>
              <div className="hero-yellow-strip1">
                <div className="hero-line-bg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={14}
                    viewBox="0 0 24 14"
                    fill="none"
                    className="hero-line-bg-circle"
                  >
                    <g filter="url(#filter0_f_656_3300)">
                      <path
                        d="M20 7C20 8.65685 18.2944 10 16.1905 10C14.0865 10 4 7 4 7C4 7 14.0865 4 16.1905 4C18.2944 4 20 5.34315 20 7Z"
                        fill="#9C60FF"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_656_3300"
                        x={0}
                        y={0}
                        width={24}
                        height={14}
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation={2}
                          result="effect1_foregroundBlur_656_3300"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div className="hero-yellow-text">Enroll</div>
                <div className="hero-yellow-text">Upskill</div>
              </div>
              <div
                className="hero-cta-cont"
                style={{ display: "flex", gap: 12 }}
              >
                <div className="hero-price-cont">
                  <div className="hero-price">₹10,000</div>
                </div>
                <div className="enroll-btns">
                  <div
                    className="hero-enroll-btn"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      setShowModal(true);
                    }}
                  >
                    Enroll Now
                  </div>
                  <div
                    className="hero-enroll-btn add-more-btn"
                    onClick={handleAddMoreCourses}
                  >
                    Add More Courses
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-rright-cont">
              <div className="hero-right-vid-cont">
                <img
                  className="hero-video-img"
                  src={ais2img}
                  alt="Course Visual"
                  style={{ width: "100%", height: "100%", borderRadius: "5px" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="cf-cont">
          <h2 className="headings-col"> {course.courseName} Course Features</h2>
          <div className="cf-inner-cont">
            {/* ...feature chips... */}
            <div className="cf-chip">
              <img
                src="https://storage.googleapis.com/test694/Images/cf1.webp"
                alt="cf1"
              />
              <div className="cf-det-cont">
                Anyone<span>Can learn (IT/Non IT)</span>
              </div>
            </div>
            <div className="cf-chip">
              <img
                src="https://storage.googleapis.com/test694/Images/cf2.webp"
                alt="cf2"
              />
              <div className="cf-det-cont">
                Mode<span>Online / Offline</span>
              </div>
            </div>
            <div className="cf-chip">
              <img
                src="https://storage.googleapis.com/test694/Images/cf3.webp"
                alt="cf3"
              />
              <div className="cf-det-cont">
                4500+<span>Learners</span>
              </div>
            </div>
            <div className="cf-chip">
              <img
                src="https://storage.googleapis.com/test694/Images/cf4.webp"
                alt="cf4"
              />
              <div className="cf-det-cont">
                Lifetime<span>Course Access</span>
              </div>
            </div>
            <div className="cf-chip">
              <img
                src="https://storage.googleapis.com/test694/Images/cf5.webp"
                alt="cf5"
              />
              <div className="cf-det-cont">
                1 time/ Installment <span>Payment</span>
              </div>
            </div>
            <div className="cf-chip">
              <img
                src="https://storage.googleapis.com/test694/Images/cf6.webp"
                alt="cf6"
              />
              <div className="cf-det-cont">
                22-30Hrs+ <span>Content Duration </span>
              </div>
            </div>
            <div className="cf-chip">
              <img
                src="https://storage.googleapis.com/test694/Images/cf7.webp"
                alt="cf7"
              />
              <div className="cf-det-cont">
                Language <span>English / Marathi / Hindi</span>
              </div>
            </div>
            <div className="cf-chip">
              <img
                src="https://storage.googleapis.com/test694/Images/cf8.webp"
                alt="cf8"
              />
              <div className="cf-det-cont">
                Self Paced <span>Recorded lectures</span>
              </div>
            </div>
          </div>
        </div>
        <div className="new-dur-cont">
          <h2 className="headings-col"> {course.courseName} Course Access</h2>
          <div className="new-dur-lower">
            <div className="new-dur-lower-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={68}
                height={50}
                viewBox="0 0 68 50"
                fill="none"
              >
                <path
                  d="M15.4667 36.1129C7.59027 36.1129 4.96094 30.9268 4.96094 25.7408C4.96094 20.5547 7.59027 15.3687 15.4667 15.3687C25.9754 15.3687 41.734 36.1129 52.2427 36.1129C60.1191 36.1129 62.7485 30.9268 62.7485 25.7408C62.7485 20.5547 60.1191 15.3687 52.2427 15.3687C41.734 15.3687 25.9754 36.1129 15.4667 36.1129V36.1129Z"
                  stroke="#6F1B8A"
                  strokeWidth="8.89039"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="new-dur-lower-text">
                Get <b>lifetime course</b> access.
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="iframevideo-cont" />
        </div>
        {/* <div className="icurr-cont false" id="curric">
          <div className="icurr-inner-cont">
            <h2 className="headings-col">{course.courseName} Curriculum</h2>
            <div className="icurr-details-cont">
              <div className="curr-det-cont">
                <div className="icurr-det-img-cont">
                  <img
                    className="icurr-det-img"
                    src="https://storage.googleapis.com/test694/Images/curr1-svg.webp"
                    alt="curr1"
                  />
                </div>
                <div className="curr-det-head-cont">
                  <div className="curr-det-head">4500+</div>
                  <div className="curr-det-text">learners</div>
                </div>
              </div>
              <div className="curr-det-cont">
                <div className="icurr-det-img-cont">
                  <img
                    className="icurr-det-img"
                    src="https://storage.googleapis.com/test694/Images/curr2-svg.webp"
                    alt="curr2"
                  />
                </div>
                <div className="curr-det-head-cont">
                  <div className="curr-det-head">55h 23m</div>
                  <div className="curr-det-text">Content</div>
                </div>
              </div>
              <div className="curr-det-cont">
                <div className="icurr-det-img-cont">
                  <img
                    className="icurr-det-img"
                    src="https://storage.googleapis.com/test694/Images/curr3-svg.webp"
                    alt="curr3"
                  />
                </div>
                <div className="curr-det-head-cont">
                  <div className="curr-det-head">Language</div>
                  <div className="curr-det-text">Flexible</div>
                </div>
              </div>
            </div>
            <div className="icurr-main-cont">
              <div className="icurr-main-left">
                <div
                  className="curr-90"
                  style={{
                    boxShadow: "rgba(128, 0, 128, 0.12) 0px 1.5px 7px",
                    overflow: "hidden",
                  }}
                >
                  <div className="ileclist-topic ">
                    <div style={{ display: "flex", gap: 12 }}>
                      <div
                        className="curr-btn"
                        onClick={() => setShowModal(true)}
                        style={{ marginRight: 0 }}
                      >
                        Download Brochure
                      </div>
                      <button
                        className="curr-addmore-btn"
                        style={{
                          padding: "8px 18px",
                          background: "#fff",
                          color: "#800080",
                          border: "2px solid #800080",
                          borderRadius: 6,
                          fontWeight: 600,
                          cursor: "pointer",
                        }}
                        onClick={handleAddMoreCourses}
                      >
                        Add More Courses
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      {showModal && (
        <div
          className="enroll-modal-overlay"
          onClick={() => setShowModal(false)}
          tabIndex={-1}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="enroll-modal"
            onClick={(e) => e.stopPropagation()}
            role="document"
          >
            <button
              className="enroll-modal-close"
              onClick={() => setShowModal(false)}
              aria-label="Close"
              type="button"
            >
              {/* &times;
               */}
              X
            </button>
            <h2>Enroll Now</h2>
            {success ? (
              <div className="enroll-success">
                Thank you! Your enrollment was submitted.
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="enroll-form"
                autoComplete="off"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleInputChange}
                  required
                />
                {errors.name && <p className="error">{errors.name}</p>}

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleInputChange}
                  required
                />
                {errors.email && <p className="error">{errors.email}</p>}

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleInputChange}
                  required
                />
                {errors.phone && <p className="error">{errors.phone}</p>}

                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={form.address}
                  onChange={handleInputChange}
                  required
                />
                {errors.address && <p className="error">{errors.address}</p>}

                <button type="submit" disabled={sending}>
                  {sending ? "Sending..." : "Send Request"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default CourseContent;
