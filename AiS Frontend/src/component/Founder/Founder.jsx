// Founder.jsx
import React, { useState, useEffect } from "react";
import "./Founder.css";
import backImage from "./../../assets/founder/back.png";
import image1 from "./../../assets/founder/sir1.png";
import image2 from "./../../assets/founder/sir2.png";
import image5 from "./../../assets/founder/sir5.png";

const rotatingImages = [image1, image2, image5];

// Social media links
const socialLinks = [
  {
    href: "https://www.instagram.com/prof_prajyot_patil?igsh=OGwxMXVoYnh6Zmdj",
    label: "Instagram",
    icon: (
      <svg
        height="200px"
        width="200px"
        viewBox="0 0 551.034 551.034"
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
        stroke="#000000"
      >
        <defs>
          <linearGradient
            id="grad1"
            x1="275.517"
            y1="4.5714"
            x2="275.517"
            y2="549.7202"
            gradientTransform="matrix(1 0 0 -1 0 554)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#E09B3D" />
            <stop offset="0.3" stopColor="#C74C4D" />
            <stop offset="0.6" stopColor="#C21975" />
            <stop offset="1" stopColor="#7024C4" />
          </linearGradient>
        </defs>
        <g>
          <path
            fill="url(#grad1)"
            d="M386.878,0H164.156C73.64,0,0,73.64,0,164.156v222.722
        c0,90.516,73.64,164.156,164.156,164.156h222.722c90.516,0,164.156-73.64,164.156-164.156V164.156
        C551.033,73.64,477.393,0,386.878,0z M495.6,386.878c0,60.045-48.677,108.722-108.722,108.722H164.156
        c-60.045,0-108.722-48.677-108.722-108.722V164.156c0-60.046,48.677-108.722,108.722-108.722h222.722
        c60.045,0,108.722,48.676,108.722,108.722V386.878z"
          />
          <path
            fill="url(#grad1)"
            d="M275.517,133C196.933,133,133,196.933,133,275.516
        s63.933,142.517,142.517,142.517S418.034,354.1,418.034,275.516S354.101,133,275.517,133z
        M275.517,362.6c-48.095,0-87.083-38.988-87.083-87.083s38.989-87.083,87.083-87.083
        c48.095,0,87.083,38.988,87.083,87.083C362.6,323.611,323.611,362.6,275.517,362.6z"
          />
          <circle fill="url(#grad1)" cx="418.306" cy="134.072" r="34.149" />
        </g>
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/prajyot-s-patil-73a99a112?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    label: "LinkedIn",
    icon: (
      <svg
        height="200px"
        width="200px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 382 382"
        xmlSpace="preserve"
        fill="#0077B7"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            // style="fill:#0077B7;"
            d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889 C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056 H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806 c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1 s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73 c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079 c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426 c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472 L341.91,330.654L341.91,330.654z"
          ></path>{" "}
        </g>
      </svg>
    ),
  },
  {
    href: "https://aissolutions.net/",
    label: "AIS Solutions",
    icon: (
      <svg
        version="1.1"
        id="_x32_"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
        fill="#000000"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g id="SVGRepo_iconCarrier">
          {" "}
          <style
            type="text/css"
            dangerouslySetInnerHTML={{ __html: "  .st0{fill:#000000;}  " }}
          />{" "}
          <g>
            {" "}
            <path
              className="st0"
              d="M463.203,105.688c-3.047-4.25-6.234-8.406-9.609-12.484C406.641,36.313,335.531,0,256,0 C176.484,0,105.359,36.313,58.406,93.203c-3.375,4.078-6.563,8.234-9.594,12.484C18.078,147.922,0,199.844,0,256 c0,56.313,18.156,108.484,49.031,150.719c3.125,4.328,6.406,8.563,9.844,12.656C105.844,475.922,176.719,512,256,512 c79.688,0,150.813-36.406,197.75-93.438c3.453-4.078,6.734-8.313,9.781-12.641C494.078,363.766,512,312,512,256 C512,199.844,493.922,147.922,463.203,105.688z M471.688,247.969H385.75c-0.625-32.563-5.031-63.438-12.5-91.219 c21.156-7.219,40.594-16.359,57.781-27.063C455.328,163.156,470.047,203.938,471.688,247.969z M263.984,41.906 c37.375,5.188,70.438,46.109,89.297,104.281c-27.469,7.828-57.594,12.406-89.297,13.094V41.906z M247.984,41.906v117.375 c-31.703-0.688-61.828-5.266-89.297-13.094C177.547,88.016,210.609,47.094,247.984,41.906z M247.984,175.266v72.703H142.219 c0.625-30.766,4.891-60.094,11.984-86.516C183.094,169.75,214.703,174.594,247.984,175.266z M247.984,263.969v72.703 c-33.234,0.797-64.828,5.734-93.703,14.094c-7.141-26.484-11.422-55.922-12.063-86.797H247.984z M247.984,352.656v117.375 c-37.297-5.172-70.313-45.938-89.188-103.938C186.625,358.031,216.734,353.453,247.984,352.656z M263.984,470.031V352.625 c31.703,0.563,61.859,5.094,89.359,12.875C334.5,423.813,301.406,464.844,263.984,470.031z M263.984,336.625v-72.656H369.75 c-0.625,30.625-4.859,59.859-11.891,86.188C328.938,341.938,297.281,337.188,263.984,336.625z M263.984,247.969v-72.703 c33.281-0.672,64.891-5.5,93.797-13.797c7.078,26.406,11.344,55.75,11.969,86.5H263.984z M421.281,117.203 c-15.656,9.547-33.344,17.703-52.563,24.266c-13.219-40.938-33.266-74-57.406-94.219 C354.906,58.797,393.156,83.609,421.281,117.203z M200.656,47.25c-24.141,20.234-44.188,53.281-57.406,94.203 c-19.188-6.563-36.891-14.703-52.531-24.25C118.844,83.625,157.063,58.813,200.656,47.25z M80.969,129.688 c17.188,10.703,36.609,19.828,57.75,27.063c-7.469,27.781-11.875,58.656-12.5,91.219H40.313 C41.953,203.938,56.688,163.156,80.969,129.688z M40.313,263.969h85.906c0.625,32.688,5.063,63.688,12.594,91.563 c-21.094,7.25-40.469,16.359-57.609,27.031C56.75,348.984,41.938,308.109,40.313,263.969z M91.125,395.203 c15.875-9.703,33.484-17.797,52.281-24.297c13.219,40.781,33.25,73.703,57.344,93.844 C157.344,453.25,119.219,428.594,91.125,395.203z M311.219,464.75c24.25-20.25,44.359-53.438,57.578-94.547 c19.281,6.547,37.047,14.719,52.734,24.281C393.313,428.234,354.938,453.156,311.219,464.75z M431.359,381.922 c-17.266-10.734-36.781-19.859-58.016-27.063c7.406-27.703,11.781-58.453,12.406-90.891h85.938 C470.078,307.859,455.5,348.438,431.359,381.922z"
            />{" "}
          </g>{" "}
        </g>
      </svg>
    ),
  },
];

const Founder = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === rotatingImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  return (
    <div className="founder">
      <h1>
        <span className="highlight ">Meet Our Founder</span>
      </h1>
      <div className="founder-container">
        <div className="founder-text">
          <p>

            At AIS | Applied Insights, we’re committed to shaping future-ready
            talent. As the founder, I bring over 8+ years of experience in Data
            Science, Machine Learning, and Statistics to help students and
            professionals unlock real-world skills.

          </p>
          <p>
            AIS also offers expert consulting services in ML model development,
            statistical analysis, dashboards and data-driven decision-making.
            Our mission is to empower students and organizations with practical
            knowledge, tools and mentorship to thrive in today’s data-driven
            world.
          </p>

          <div className="lining-main">
            <div className="lining"></div>
          </div>
          <div className="founder-name">
            <h2>Mr. Prajyot Patil</h2>{" "}
            <span>
              {" "}
              Founder & CEO <br />
              AIS Solutions Pvt. Ltd.
            </span>
            <h3 className="web">
              {/* <img src="src/assets/social/globe.png"  alt="" /> */}
              aissolutions.net
            </h3>
          </div>
          <nav
            aria-label="Social media links"
            style={{ display: "flex", gap: "1rem" }}
          >
            {socialLinks.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  color: "#4361ee",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "32px",
                  height: "32px",
                  backgroundColor: "#dbe2ff",
                  borderRadius: "6px",
                  transition: "background-color 0.3s ease, color 0.3s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#4361ee";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#dbe2ff";
                  e.currentTarget.style.color = "#4361ee";
                }}
              >
                {" "}
                {icon}{" "}
              </a>
            ))}{" "}
          </nav>
        </div>
        <div className="founder-image">
          <img src={backImage} alt="Background" className="background-img" />
          <img
            src={rotatingImages[currentImageIndex]}
            alt={`Founder ${currentImageIndex + 1}`}
            className="rotating-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Founder;
