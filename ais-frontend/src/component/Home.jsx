import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation, useNavigate } from "react-router-dom";

import { sendEnquiry } from "../api/formApi";

import "./Home.css";
import ComboPack from "./ComboPack";
import LollipopBarChart from "./LollipopBarChart";
import Testimonial from "./Testimonial";
import Faq from "./Faq";
import FloatingSettings from "./Socials/FloatingSettings";
import Alumini from "./Alumini/Alumini";
import Founder from "./Founder/Founder";
import Gallery from "./Gallery/Gallery";

// const courseCard

function Type() {
  const words = [
    "Data Science",
    "Artificial Intelligence",
    "Data Analytics",
    "Machine Learning",
    "Generative AI",
  ];
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    let timeout;
    if (forward) {
      if (charIndex < words[wordIndex].length) {
        timeout = setTimeout(() => setCharIndex(charIndex + 1), 70);
      } else {
        timeout = setTimeout(() => setForward(false), 1200);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => setCharIndex(charIndex - 1), 30);
      } else {
        setForward(true);
        setWordIndex((wordIndex + 1) % words.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIndex, forward, wordIndex, words]);

  return <span>{words[wordIndex].slice(0, charIndex)}</span>;
}

function useCountUpOnVisible(to, duration = 1200) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef();

  useEffect(() => {
    let observer;
    if (ref.current) {
      observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !started) {
            setStarted(true);
          }
        },
        { threshold: 0.4 }
      );
      observer.observe(ref.current);
    }
    return () => observer && observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const increment = to / (duration / 4);
    let frame;
    function animate() {
      start += increment;
      if (start < to) {
        setCount(Math.floor(start));
        frame = requestAnimationFrame(animate);
      } else {
        setCount(to);
      }
    }
    animate();
    return () => cancelAnimationFrame(frame);
  }, [to, duration, started]);

  return [count, ref];
}

const Home = () => {
  const [activeCard, setActiveCard] = useState("a");
  const [fabOpen, setFabOpen] = useState(false);
  const [coursesCount, coursesRef] = useCountUpOnVisible(22);
  const [learnersCount, learnersRef] = useCountUpOnVisible(5000);
  const [internsCount, internsRef] = useCountUpOnVisible(11000);
  const [networkCount, networkRef] = useCountUpOnVisible(220);

  const [showModal, setShowModal] = useState(false);
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
        course: course?.courseName || "Internship",
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

  const dataScience = [
    {
      id: 1,
      courseName: "Power BI",
      url: "/course logo/powerbi.png",
      // data: [
      //   {
      //     id: 1,
      //     title: "Session 1: Introduction & Power BI Basics",
      //     details: [
      //       {
      //         id: 1,
      //         data: "Introduction to Business Intelligence and Power BI",
      //       },
      // ]}]}
    },
    {
      id: 2,
      courseName: "SQL",
      url: "/course logo/sql.png",
    },
    {
      id: 3,
      courseName: "Python",
      url: "/course logo/python.png",
    },
    {
      id: 4,
      courseName: "Excel",
      url: "/course logo/excel.png",
    },
    {
      id: 5,
      courseName: "Tableau",
      url: "/course logo/tablueu.png",
    },
    {
      id: 6,
      courseName: "Machine Learning",
      url: "/course logo/machine.png",
    },
    {
      id: 7,
      courseName: "Deep Learning",
      url: "/course logo/deep.png",
    },
    {
      id: 8,
      courseName: "NLP",
      url: "/course logo/nlp.png",
    },
    {
      id: 9,
      courseName: "Gen AI",
      url: "/course logo/ai.png",
    },
    {
      id: 10,
      courseName: "Agentic AI",
      url: "/course logo/agentic.png",
    },
    {
      id: 11,
      courseName: "Statistics",
      url: "/course logo/description.png",
    },
  ];

  const internCourses = [
    {
      id: 1,
      courseName: "Data Science",
      msg: "Use AI & ML for predictive modeling.",
      url: "/course logo/datascience.png",
    },
    {
      id: 2,
      courseName: "Data Analyst",
      msg: "Extract insights from data for business growth.",
      url: "/course logo/dataanalyst.png",
    },
    {
      id: 3,
      courseName: "Web Developer",
      msg: "Design and develop modern, responsive websites.",
      url: "/course logo/webdev.png",
    },
    {
      id: 4,
      courseName: "Statistician",
      msg: "Analyze and interpret complex data for decision-making.",
      url: "/course logo/description.png",
    },
    {
      id: 5,
      courseName: "AI & Machine Learning",
      msg: "Build intelligent models to automate tasks.",
      url: "/course logo/aiml.png",
    },
    {
      id: 6,
      courseName: " Business Analytics",
      msg: "Turn data into strategic business decisions.",
      url: "/course logo/businessanalytics.png",
    },
    {
      id: 7,
      courseName: " Human Resources",
      msg: "Manage talent, recruitment, and employee growth.",
      url: "/course logo/hr.png",
    },
    {
      id: 8,
      courseName: "Generative AI",
      msg: "Create innovative solutions using Gen AI tools.",
      url: "/course logo/genai.png",
    },
  ];

  const Extra = [
    {
      id: 1,
      courseName: "Foundation and Orientation",
      msg: "Use AI & ML for predictive modeling.",
      url: "/course logo/foundation 2.png",
    },
    {
      id: 2,
      courseName: "Basic Understanding Of Technical Skills",
      msg: "Extract insights from data for business growth.",
      url: "/course logo/book.png",
    },
    {
      id: 3,
      courseName: " Personal Branding Through Media",
      msg: "Design and develop modern, responsive websites.",
      url: "/course logo/reputation.png",
    },
    {
      id: 4,
      courseName: " Data Handling & Storytelling",
      msg: "Analyze and interpret complex data for decision-making.",
      url: "/course logo/document-management.png",
    },
    {
      id: 5,
      courseName: "Core Communication & Writing Skills",
      msg: "Build intelligent models to automate tasks.",
      url: "/course logo/core.png",
    },
    {
      id: 6,
      courseName: " Client Simulation Project (Phase 1)    ",
      msg: "Turn data into strategic business decisions.",
      url: "/course logo/businessanalytics.png",
    },
    {
      id: 7,
      courseName: " Client Simulation Project (Phase 2)",
      msg: "Manage talent, recruitment, and employee growth.",
      url: "/course logo/hr.png",
    },
    {
      id: 8,
      courseName: "Writing & Presentation Skills",
      msg: "Create innovative solutions using Gen AI tools.",
      url: "/course logo/ebook.png",
    },
    {
      id: 8,
      courseName: "Product Style Discussion & Requirement Gathering",
      msg: "Create innovative solutions using Gen AI tools.",
      url: "/course logo/checklist.png",
    },
    {
      id: 8,
      courseName: "Final Simulation & Graduation activity",
      msg: "Create innovative solutions using Gen AI tools.",
      url: "/course logo/education.png",
    },
  ];

  //     function CardA() {
  //   return (

  //      <div className="bc-chips-cont">
  //        {dataScience.map((item)=>(
  //         <div className="cc-cont pointer" key={item.id}>
  //                     <img
  //                       src={item.url}
  //                       alt="card"
  //                     />
  //                     <div>{item.courseName}</div>
  //                 </div>

  //       ))}
  //      </div>
  //   );
  // }

  function Map() {
    return (
      <div className="p-0 w-100 rounded contact-map">
        <iframe
          style={{ width: "100%", height: "400px" }}
          className="rounded w-100 h-100"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.3980305153953!2d73.8211175!3d18.4724242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2aba0ce6e5%3A0xd56c149411578bac!2sAIS%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1644923456789"
          loading="lazy"
        ></iframe>
      </div>
    );
  }

  function CardA() {
    const navigate = useNavigate();
    return (
      <div className="bc-chips-cont ">
        {dataScience.map((item) => (
          <div
            className="cc-cont pointer hover1"
            key={item.id}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              navigate(`/course/${item.id}`, { state: item });
            }}
          >
            <img src={item.url} alt="card" />
            <div>{item.courseName}</div>
          </div>
        ))}
      </div>
    );
  }

  // function CardB() {
  //   const navigate = useNavigate();
  //   return (
  //     <div className="bc-chips-cont">
  //       {webCourses.map((item) => (
  //         <div
  //           className="cc-cont pointer hover1"
  //           key={item.id}
  //           onClick={() => navigate(`/course/${item.id}`, { state: item })}
  //         >
  //           <img src={item.url} alt="card" />
  //           <div>{item.courseName}</div>
  //         </div>
  //       ))}
  //     </div>
  //   );
  // }

  const [showInternship, setShowInternship] = useState(false);

  function CardC() {
    const navigate = useNavigate();
    return (
      <>
        <div className="bc-chips-cont">
          {internCourses.map((item) => (
            <div className="cc-cont pointer hover1" key={item.id}>
              <img src={item.url} alt="card" />
              <div>{item.courseName}</div>
              <p>{item.msg}</p>
            </div>
          ))}
        </div>
        <div
          className="hero-enroll-btn"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setShowModal(true);
          }}
        >
          Enquiry
        </div>
      </>
    );
  }

  const [showExtra, setShowExtra] = useState(false);

  function CardD() {
    const navigate = useNavigate();
    return (
      <>
        <div className="bc-chips-cont">
          {Extra.map((item) => (
            <div className="cc-cont pointer hover1" key={item.id}>
              <img src={item.url} alt="card" />
              <div>{item.courseName}</div>
              {/* <p>{item.msg}</p> */}
            </div>
          ))}
        </div>
        {/* <div
          className="hero-enroll-btn"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            navigate("/internship");
          }}
        >
          Apply For Internship
        </div> */}
      </>
    );
  }
  const [ourSoft, setOurSoft] = useState(false);
  // Disable scroll when any modal is open

  function OurSoftModal() {
    const navigate = useNavigate();
    return (
      <div
        className="fixed inset-0 z-10 w-100 flex items-center justify-center bg-transparent bg-opacity-50 backdrop-blur-sm"
        onClick={() => {
          setOurSoft(false);
        }}
        role="dialog"
        aria-modal="true"
      >
        <div
          className="relative z-50 w-fit h-100 rounded-lg bg-white shadow-lg   transform transition-all"
          onClick={(e) => e.stopPropagation()}
          style={{ padding: "1rem" }}
        >
          <div className="grid grid-cols-12 justify-between align-middle content-center">
            <p className=" text-4xl ml-14 col-span-12 center font-semibold text-gray-800">
              Our Softwares
            </p>

            <svg
              onClick={() => {
                setOurSoft(false);
              }}
              className=" text-red-600 absolute right-3.5 hover:text-gray-900 mt-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="flex gap-7 justify-center w-full ">
            <div className=" flex flex-col  bg-white  border border-gray-200 shadow-2xs rounded-xl ">
              <p className=" text-lg relative top-1">QuizHub Portal</p>
              <div className="flex flex-col justify-start">
                <div className="flex content-center">
                  <svg
                    class="w-4 h-4 text-black-800 dark:black-white p-0 m-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>

                  <p className=" content-center">
                    Practice quizzes and tests anytime
                  </p>
                </div>
                <div className="flex content-center">
                  <svg
                    class="w-4 h-4 text-black-800 dark:black-white p-0 m-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>

                  <p className=" content-center">
                    Instant score and performance tracking
                  </p>
                </div>
                <div className="flex justify-start content-center">
                  <svg
                    class="w-4 h-4 text-black-800 dark:black-white p-0 m-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>

                  <p className=" content-center">
                    Topic-wise and full-length practice
                  </p>
                </div>
                <div className="flex content-center">
                  <svg
                    class="w-4 h-4 text-black-800 dark:black-white p-0 m-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>

                  <p className=" content-center">
                    Simple and user-friendly interface
                  </p>
                </div>
                <div className="flex content-center w-full justify-center ">
                  <div
                    className="w-1/2 text-center cursor-pointer"
                    onClick={() => {
                      window.open(
                        "https://quiz-module.vercel.app/",
                        "_blank",
                        "noopener,noreferrer"
                      );
                    }}
                  >
                    <button className="flex w-full justify-center content-center text-center bg-neutral-secondary-medium box-border border border-gray-200 bg-blue-300 hover:bg-blue-400  hover:text-heading  shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5">
                      <p className="w-full text-lg">Quiz Hub</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex flex-col bg-white  border border-gray-200  rounded-xl ">
              <p className=" text-lg relative top-1">SkillHub Portal</p>
              <div className="flex flex-col justify-start">
                <div className="flex content-center">
                  <svg
                    class="w-4 h-4 text-black-800 dark:black-white p-0 m-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>

                  <p className=" content-center">
                    Access class recordings anytime
                  </p>
                </div>
                <div className="flex content-center">
                  <svg
                    class="w-4 h-4 text-black-800 dark:black-white p-0 m-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>

                  <p className=" content-center">
                    Download notes and learning material
                  </p>
                </div>
                <div className="flex justify-start content-center">
                  <svg
                    class="w-4 h-4 text-black-800 dark:black-white p-0 m-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>

                  <p className=" content-center">
                    View fee details and payment status
                  </p>
                </div>
                <div className="flex content-center">
                  <svg
                    class="w-4 h-4 text-black-800 dark:black-white p-0 m-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>

                  <p className=" content-center">
                    Check daily schedules & class updates
                  </p>
                </div>
                <div className="flex content-center w-full justify-center ">
                  <div
                    className="w-1/2 text-center cursor-pointer"
                    onClick={() => {
                      window.open(
                        "https://ais-solutions.vercel.app/",
                        "_blank",
                        "noopener,noreferrer"
                      );
                    }}
                  >
                    <button className="flex w-full justify-center content-center text-center bg-neutral-secondary-medium box-border border border-gray-200 hover:bg-purple-500 bg-purple-400  hover:text-heading  shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5">
                      <p className="w-full text-lg">Skill Hub</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div id="root" className={ourSoft ? "filter backdrop-blur-sm" : ""}>
        <div>
          <Helmet>
            <title>
              Home | AIS Solutions - AI, ML, Data Science & Internships in Pune
            </title>
            <meta
              name="description"
              content="AIS Solutions offers industry-driven courses and internships in AI, ML, Data Science, and related tools like Python, Power BI, Tableau, SQL in Pune."
            />
            <meta
              name="keywords"
              content="AI courses Pune, ML internship, Data Science classes, Python, SQL, Power BI, Tableau, AIS Solutions, applied insights"
            />
            <link rel="canonical" href="https://appliedinsights.in/" />
          </Helmet>
          <div className="home-hero-cont">
            <div className="home-hero-main-cont ">
              <div className="home-hero-main-top gap-5">
                <div className="home-hero-left">
                  <div className="home-hero-head">
                    <p className="home-hero-head-col">
                      {/* <img
                        src="https://storage.googleapis.com/test694/Images/levelup.webp"
                        alt="levelup"
                        className="home-hero-levelup"
                      /> */}
                    </p>

                    <h2 className="hero-text">
                      Kickstart your career with AIS{" "}
                      <div className="mobileview">
                        {" "}
                        <br />
                      </div>{" "}
                      In the world of <br />
                      <div className="dynamic">
                        <span className="highlight extra-bold slide-fade">
                          <Type />
                        </span>
                        <span className="typewriter-cursor">|</span>
                      </div>
                      {/* with <strong>AIS</strong> */}
                    </h2>
                  </div>
                  {/* <div className="home-hero-text">
                    <span className="title"> Together we achieve more...</span>
                  </div> */}

                  <div className="hero-google-cont-parent">
                    <a href="http://www.google.com/maps/place/AIS+solutions+Pvt.+Ltd./@18.4724242,73.8185426,826m/data=!3m2!1e3!4b1!4m18!1m9!3m8!1s0x3bc2bf2aba0ce6e5:0xd56c149411578bac!2sAIS+solutions+Pvt.+Ltd.!8m2!3d18.4724242!4d73.8211175!9m1!1b1!16s%2Fg%2F11g0gmtm52!3m7!1s0x3bc2bf2aba0ce6e5:0xd56c149411578bac!8m2!3d18.4724242!4d73.8211175!9m1!1b1!16s%2Fg%2F11g0gmtm52?hl=en&entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D">
                      <div className="hero-google-cont">
                        <div>
                          <img
                            src="https://storage.googleapis.com/test694/Images/google-svg.webp"
                            alt="Google"
                          />
                        </div>
                        <div className="hero-google-left-cont">
                          <div className="hero-stars-cont">
                            <div className="hero-stars-text">4.9/5</div>
                            <div>
                              <img
                                src="https://storage.googleapis.com/test694/Images/stars-svg.webp"
                                alt="stars"
                              />
                            </div>
                          </div>
                          <div className="hero-reviews">Google Ratings</div>
                        </div>
                      </div>
                    </a>

                    <a href="https://www.justdial.com/Pune/AIS-Solutions-Pvt-Ltd--Nr-Bramha-HotelOpp-Mulchand-Mill-Manik-Baug/020PXX20-XX20-180514142124-D7Y9_BZDET?auto=1&trkid=4902792228&term=Ais%20solu">
                      <div className="hero-google-cont">
                        <div>
                          <img src="/reviews/JD.png" alt="Google" />
                        </div>
                        <div className="hero-google-left-cont">
                          <div className="hero-stars-cont">
                            <div className="hero-stars-text">4.8/5</div>
                            <div>
                              <img
                                src="https://storage.googleapis.com/test694/Images/stars-svg.webp"
                                alt="stars"
                              />
                            </div>
                          </div>
                          <div className="hero-reviews">Justdial Ratings</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    className="flex w-full gap-7 justify-items-start content-start justify-self-start"
                    style={{ marginBottom: "5rem" }}
                  >
                    <a href="#courses" className="addtwobtn w-1/3">
                      <div className="home-hero-cta addtwobtn ">
                        Explore Courses
                      </div>
                    </a>
                    <button
                      type="button"
                      className="addtwobtn w-1/3"
                      onClick={() => {
                        setOurSoft(true);
                      }}
                    >
                      <div className="home-hero-cta addtwobtn ">
                        Our Softwares
                      </div>
                    </button>
                  </div>
                </div>
                <div className="home-hero-right">
                  {/* <FloatingTechSpace /> */}
                  <LollipopBarChart />
                </div>
              </div>
            </div>
            <div className="home-hero-main-btm">
              <div className="home-hero-card ">
                <img
                  className="teacher"
                  src="/course logo/teacher2.png"
                  alt="hero-img"
                />
                <div className="home-hero-card-det" ref={coursesRef}>
                  {coursesCount}+<p className="institute">Courses</p>
                </div>
              </div>
              <div className="home-hero-card">
                <img
                  className="learners2"
                  src="/course logo/learners2.png"
                  alt="hero-img"
                />
                <div className="home-hero-card-det" ref={learnersRef}>
                  {learnersCount}+<p className="institute">Learners</p>
                </div>
              </div>
              <div className="home-hero-card">
                <img src="/course logo/learners.jpeg" alt="hero-img" />
                <div className="home-hero-card-det" ref={internsRef}>
                  {internsCount}+<p className="institute">Interns </p>
                </div>
              </div>
              <div className="home-hero-card" style={{ border: "none" }}>
                <img
                  className="learners2"
                  src="/course logo/chatimgbg.png"
                  alt="hero-img"
                />
                <div className="home-hero-card-det" ref={networkRef}>
                  {networkCount}+<p className="institute"> Network </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bc-cont" id="courses">
              <div className="home-wu-top">
                <div className="home-hr-head headings-col">
                  Browse our Courses
                </div>
                <div className="home-wu-text">
                  Start your learning journey with courses that are Engaging,
                  Simple and Effective.
                </div>
              </div>
              <div className="bc-mid-parent">
                <div className="bc-mid">
                  <button
                    className={`bc-mid-chip pointer hoverbtn ${
                      activeCard === "a" ? "chip-active" : ""
                    }`}
                    onClick={() => setActiveCard("a")}
                  >
                    Courses
                  </button>
                  {/* <button
                    className={`bc-mid-chip pointer hoverbtn ${
                      activeCard === "b" ? "chip-active" : ""
                    }`}
                    onClick={() => setActiveCard("b")}
                  >
                    Web Devlopment
                  </button> */}
                  <button
                    className={`bc-mid-chip pointer hoverbtn ${
                      activeCard === "c" ? "chip-active" : ""
                    }`}
                    onClick={() => setActiveCard("c")}
                  >
                    Internship
                  </button>
                  <button
                    className={`bc-mid-chip pointer hoverbtn ${
                      activeCard === "d" ? "chip-active" : ""
                    }`}
                    onClick={() => setActiveCard("d")}
                  >
                    <h1>+</h1> Extra Activities
                  </button>
                </div>
                {activeCard === "a" && <CardA className="chip-active" />}
                {/* {activeCard === "b" && <CardB className="chip-active" />} */}
                {activeCard === "c" && <CardC className="chip-active" />}
                {activeCard === "d" && <CardD className="chip-active" />}
              </div>
            </div>
          </div>
        </div>

        <ComboPack />

        <div className="home-wu-cont">
          <div className="home-wu-top">
            <div className="home-hr-head headings-col">Why Choose US ?</div>
            <div className="home-wu-text">
              Get instant Mentorship, internship opportunities and a supportive
              learning community.
            </div>
          </div>
          <div className="home-wu-btm-cont">
            <div className="home-wu-pointer">
              <img
                src="https://storage.googleapis.com/test694/Images/acceptwu-svg.webp"
                alt="homepointerwu"
              />
              1 : 1 Mentorship
            </div>
            <div className="home-wu-pointer">
              <img
                src="https://storage.googleapis.com/test694/Images/acceptwu-svg.webp"
                alt="homepointerwu"
              />
              Live Projects
            </div>
            <div className="home-wu-pointer">
              <img
                src="https://storage.googleapis.com/test694/Images/acceptwu-svg.webp"
                alt="homepointerwu"
              />
              Internship Opportunities
            </div>
            <div className="home-wu-pointer">
              <img
                src="https://storage.googleapis.com/test694/Images/acceptwu-svg.webp"
                alt="homepointerwu"
              />
              Industrial Experts
            </div>
          </div>
        </div>
        <div className="hd-cont">
          <div className="home-hr-head headings-col">
            How are we different from others ?
          </div>
          <div className="hd-tb-cont">
            <div className="hd-tb">
              <div className="hd-tb-td hd-first-w hd-tb-head hd-head-title">
                Features
              </div>
              <div className="hd-tb-td">
                <img
                  src="/logo.png"
                  style={{ height: "100px", width: "100px" }}
                  alt="logo"
                  className="feature-logo"
                />
              </div>
            </div>
            <div className="hd-tb">
              <div className="hd-tb-td hd-first-w">Affordability</div>
              <div className="hd-tb-td hd-tick">
                <img
                  src="https://storage.googleapis.com/test694/Images/present-svg.webp"
                  alt="logo"
                />
              </div>
            </div>
            <div className="hd-tb">
              <div className="hd-tb-td hd-first-w">HR Team For Placement</div>
              <div className="hd-tb-td hd-tick">
                <img
                  src="https://storage.googleapis.com/test694/Images/present-svg.webp"
                  alt="logo"
                />
              </div>
            </div>

            <div className="hd-tb">
              <div className="hd-tb-td hd-first-w">
                Flexibility : Online / Offline / Recording
              </div>
              <div className="hd-tb-td hd-tick">
                <img
                  src="https://storage.googleapis.com/test694/Images/present-svg.webp"
                  alt="logo"
                />
              </div>
            </div>

            <div className="hd-tb">
              <div className="hd-tb-td hd-first-w">
                Communication <br /> (Daily HR Call)
              </div>
              <div className="hd-tb-td hd-tick">
                <img
                  src="https://storage.googleapis.com/test694/Images/present-svg.webp"
                  alt="logo"
                />
              </div>
            </div>
            <div className="hd-tb">
              <div className="hd-tb-td hd-first-w">Instant Doubt Solving</div>
              <div className="hd-tb-td hd-tick">
                <img
                  src="https://storage.googleapis.com/test694/Images/present-svg.webp"
                  alt="logo"
                />
              </div>
            </div>
            <div className="hd-tb">
              <div className="hd-tb-td hd-first-w">Personal Mentorship</div>
              <div className="hd-tb-td hd-tick">
                <img
                  src="https://storage.googleapis.com/test694/Images/present-svg.webp"
                  alt="logo"
                />
              </div>
            </div>
            <div className="hd-tb">
              <div className="hd-tb-td hd-first-w">Dedicated Projects</div>
              <div className="hd-tb-td hd-tick">
                <img
                  src="https://storage.googleapis.com/test694/Images/present-svg.webp"
                  alt="logo"
                />
              </div>
            </div>
            <div className="hd-tb">
              <div className="hd-tb-td hd-first-w">Internship</div>
              <div className="hd-tb-td hd-tick">
                <img
                  src="https://storage.googleapis.com/test694/Images/present-svg.webp"
                  alt="logo"
                />
              </div>
            </div>
          </div>
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
      </div>
      <Founder />
      <Alumini />
      <Testimonial />
      <FloatingSettings />
      <Faq />
      <Gallery />
      <Map />
      {ourSoft && <OurSoftModal />}
    </div>
  );
};

export default Home;
