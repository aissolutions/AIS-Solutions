import React from "react";
import "./Alumini.css";

const alumniList = [
  {
    name: "Akshay Shirsat",
    image: "/alumini/akshayshirsat.jpg",
    position: "Data Analyst",
    testimonial:
      "AIS gave me real industry exposure. I highly recommend AIS to anyone looking to build a strong foundation in tech.",
    logo: "/alumini/annalect2.png",
    LPA: " 11 LPA",
  },
  {
    name: "Priti Lahare",
    image: "/alumini/PRITI LAHARE.jpg",
    position: "Data scientist",
    testimonial:
      "Hands-on projects helped me gain confidence in my skills. The community is very encouraging and helpful.",
    logo: "/alumini/capgemini.png",
    LPA: " 9 LPA",
  },
  {
    name: "Rashmi Kulkarni",
    image: "/alumini/Rashmi Kulkarni.jpg",
    position: "Consultant ",
    testimonial:
      "Thanks to AIS, I learned industry-relevant skills that made me stand out in interviews. The mentorship was truly life-changing.",
    logo: "/alumini/capgemini.png",
    LPA: " 25 LPA",
  },
  {
    name: "Shubham Bhosale",
    image: "/alumini/shubhambhosale.jpeg",
    position: "Program Associate ",
    testimonial:
      "AIS provided me with the right skills and confidence to excel in my career. The projects and mentorship were top-notch.",
    logo: "/alumini/unnamed2.png",
    LPA: " 6 LPA",
  },
  {
    name: "Tanmay Bankar",
    image: "/alumini/Tanmay Bankar.jpg",
    position: "Supply Chain Analyst ",
    testimonial:
      "The exposure to real-world projects at AIS made my transition to the IT industry smooth and easy.",
    logo: "/alumini/eton-removebg-preview.png",
    LPA: " 11 LPA",
  },
  {
    name: "Ganesh Kharad",
    image: "/alumini/Ganesh Kharad.jpg",
    position: "Tech. Lead Data Science ",
    testimonial:
      "The best place to start your tech journey. The guidance and mentorship at AIS are unmatched.",
    logo: "/alumini/wiprobg.png",
    LPA: " 25 LPA",
  },
  {
    name: "Suraj Dhumal",
    image: "/alumini/surajdhumal.jpeg",
    position: "Data Analyst",
    testimonial:
      "Hands-on projects helped me gain confidence in my skills. The community is very encouraging and helpful.",
    logo: "/alumini/demandbase.png",
    LPA: " 14 LPA",
  },
  {
    name: "Akash Kaingade",
    image: "/alumini/akash.jpg",
    position: "SAS Developer",
    testimonial:
      "Choosing AIS was the best decision. The mentors were always there to guide me, and the results speak for themselves.",
    logo: "/alumini/axion.png",
    LPA: " 12 LPA",
  },
  {
    name: "Netraja Patil",
    image: "/alumini/natraja.jpg",
    position: "Sr. Data Analyst",
    testimonial:
      "The learning experience at AIS was exceptional. I'm now working in a core tech role, thanks to their practical training approach.",
    logo: "/alumini/epsilon.png",
    LPA: " 15 LPA",
  },
  {
    name: "Smaran Maske",
    image: "/alumini/smaran maske.jpeg",
    position: "Catastrophic Modeller ",
    testimonial:
      "The best part about AIS is the personal attention. They care about every student’s journey and placement.",
    logo: "/alumini/genpact.jpg",
    LPA: " 10 LPA",
  },
];

// Second alumni list for the second slider
const alumniList2 = [
  {
    name: "Rohit Hawaldar",
    image: "/alumini/Rohit Hawaldar.jpeg",
    position: "Business Analyst",
    testimonial:
      "AIS provided me with the right skills and confidence to excel in my career. The projects and mentorship were top-notch.",
    logo: "/alumini/conmove.png",
    LPA: " 4.5 LPA",
  },
  {
    name: "Asmita Margaje",
    image: "/alumini/Asmita Margaje.jpg",
    position: "Python Developer ",
    testimonial:
      "The learning environment at AIS is amazing. I got placed in my dream company thanks to their support.",
    logo: "/alumini/techneai.jpeg",
    LPA: " 6 LPA",
  },
  {
    name: "Pranita Patel",
    image: "/alumini/pranita patel.jpg",
    position: "Data Eng.",
    testimonial:
      "AIS's internship is very practical and industry-oriented. The faculty is always ready to help.",
    logo: "/alumini/hoonartek.png",
    LPA: " 13 LPA",
  },
  {
    name: "shreya Mane",
    image: "/alumini/shreya.jpg",
    position: " Sr. Data analyst ",
    testimonial:
      "AIS doesn't just teach, they empower. I gained hands-on experience and secured a job I once only dreamed of.",
    logo: "/alumini/j&j2.png",
    LPA: " 6 LPA",
  },
  {
    name: "Seema Dhorke",
    image: "/alumini/Seema Dhorke.jpg",
    position: "Senior consultant",
    testimonial:
      "AIS helped me build a strong foundation in tech and soft skills. Highly recommended!",
    logo: "/alumini/exl2.png",
    LPA: " 20 LPA",
  },
  {
    name: "Aarti Jadhav",
    image: "/alumini/Aarti Jadhav.jpg",
    position: "Software Eng.",
    testimonial:
      "The learning environment at AIS is amazing. I got placed in my dream company thanks to their support.",
    logo: "/alumini/avhan2.png",
    LPA: " 5 LPA",
  },
  {
    name: "Mayur Mate ",
    image: "/alumini/mayur.jpg",
    position: "Data Science",
    testimonial:
      "The best part about AIS is the continuous support and guidance even after placement.",
    logo: "/alumini/exl2.png",
    LPA: " 10.67 LPA",
  },
  {
    name: "Reddam Lakshmi",
    image: "/alumini/female.png",
    position: "Statistical Programmer II",
    testimonial:
      "The project-based learning at AIS prepared me for real-world challenges. Today, I work with a top MNC.",
    logo: "/alumini/syneos.png",
    LPA: " 6.5 LPA",
  },
  {
    name: "Sunil devkate",
    image: "/alumini/sunil.jpg",
    position: "SAS Programmer ",
    testimonial:
      "What sets AIS apart is the personal attention and placement support.",
    logo: "/alumini/wphicacy.png",
    LPA: " 30 LPA",
  },
];

const Alumini = () => (
  <div className="alumini-section">
    <h2 className="alumini-title">Our Proud Alumni</h2>
    {/* First slider (right to left) */}
    <div className="alumini-carousel-outer">
      <div className="alumini-carousel-inner">
        {alumniList.concat(alumniList).map((alum, idx) => (
          <div className="alumini-card stylish-card" key={`slider1-${idx}`}>
            <div className="alumini-card-header">
              <div className="alumini-img-wrapper">
                <img
                  src={alum.image}
                  alt={alum.name}
                  loading="lazy"
                  className="alumini-img"
                />
                <img
                  src={alum.logo}
                  loading="lazy"
                  alt=""
                  className="alumini-logo-inlin"
                  style={{
                    height: "60px",
                    width: "80px",
                  }}
                />
              </div>
              <div className="vertical"></div>
              <div className="names-div alumini-info">
                <h3>{alum.name}</h3>
                <h3 className="alumini-position">{alum.position}</h3>
              </div>
            </div>
            <div className="alumini-info">
              <div>"{alum.testimonial}"</div>
              <h3>{alum.LPA}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
    {/* Second slider (left to right) */}
    <div className="alumini-carousel-outer">
      <div className="alumini-carousel-inner reverse-scroll">
        {alumniList2.concat(alumniList2).map((alum, idx) => (
          <div className="alumini-card stylish-card" key={`slider2-${idx}`}>
            <div className="alumini-card-header">
              <div className="alumini-img-wrapper">
                <img
                  src={alum.image}
                  alt={alum.name}
                  loading="lazy"
                  className="alumini-img"
                />
                <img
                  loading="lazy"
                  src={alum.logo}
                  alt=""
                  className="alumini-logo-inlin"
                  style={{
                    height: "60px",
                    width: "80px",
                  }}
                />
              </div>
              <div className="vertical"></div>
              <div className="names-div alumini-info">
                <h3>{alum.name}</h3>
                <h3 className="alumini-position">{alum.position}</h3>
              </div>
            </div>
            <div className="alumini-info">
              <div>"{alum.testimonial}"</div>
              <h3>{alum.LPA}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Alumini;
