import React, { useState } from "react";
import "./ComboPack.css";
import { useNavigate } from "react-router-dom";

const AnimatedText = ({ text }) => (
  <span className="snake-anim-text">
    {text.split("").map((char, i) => (
      <div
        key={i}
        className="snake-char"
        style={{ animationDelay: `${i * 0.01}s` }}
      >
        {char === " " ? "\u00A0" : char}
      </div>
    ))}
  </span>
);

// Reusable ComboCardSlider component
const ComboCardSlider = ({
  comboKey,
  show,
  setShow,
  mainTitle,
  mainImg,
  courses,
  extraBenefits,
  total,
  discount,
  colorClass = "",
}) => (
  <div className="card-slider-container">
    {/* Main Card */}
    <div
      className={`afternoon-card combo-card ${
        show === comboKey ? "hidecard" : "showcard"
      }`}
    >
      <div className="afternoon-card-top">
        <div className="afternoon-card-main-img">
          <img src={mainImg} alt={mainTitle} />
        </div>
        <div className="afternoon-card-heading">
          <h3>{mainTitle}</h3>
        </div>
      </div>

      <div className="afternoon-card-middle combo-middle">
        <div className="combo-middle-top">
          {courses.map((item) => (
            <div className="afternoon-card-company" key={item.id}>
              <div className="afternoon-card-company-img">
                <img src={item.url} alt={item.courseName} />
              </div>
              <p className="afternoon-card-company-title">{item.courseName}</p>
            </div>
          ))}
        </div>
        {/* Move Bonus Study Material here, before validity */}

        <div className="combo-bottom">
          <div className="afternoon-bottom-validity">
            <div className="afternoon-bottom-validity-para">
              <p
                style={{
                  color: "rgb(51 1 8)",
                  margin: 10,
                  fontWeight: 800,
                  fontSize: 18,
                  textAlign: "left",
                }}
              >
                Bonus Courses
              </p>
              {extraBenefits.map((item) => (
                <span className="afternoon-card-company" key={item.id}>
                  <span className="afternoon-card-company-img">
                    <img src={item.url} alt={item.name} />
                  </span>
                  <span className="afternoon-card-company-title">
                    {item.name}
                  </span>
                </span>
              ))}
            </div>
          </div>
          <p
            className="afternoon-bottom-know pointer"
            onMouseEnter={() => setShow(comboKey)}
          >
            <div className="combo-total">Total: {total}</div>
            <div className="combo-pop-text">
              <AnimatedText text="See Spacial Offer" />
            </div>

            {/* <p>See Discounted Price</p> */}
          </p>
        </div>
      </div>
    </div>
    {/* Sliding Card */}
    <div
      className={`afternoon-card ${colorClass} ${
        show === comboKey ? "showcard slideup" : "hidecard"
      }`}
      onMouseLeave={() => setShow(null)}
    >
      <div class={`firework hide ${show === comboKey ? "show" : "hide"}`}></div>
      <div class={`firework hide ${show === comboKey ? "show" : "hide"}`}></div>
      <div class={`firework hide ${show === comboKey ? "show" : "hide"}`}></div>
      <div className="afternoon-card-top btn-back-white ">
        <div className="afternoon-card-main-img">
          <img src={mainImg} alt={mainTitle} />
        </div>
        <div className="afternoon-card-heading">
          <h3>{mainTitle}</h3>
        </div>
      </div>
      <div className="afternoon-card-middle combo-slider-middle flex-col ">
        <div className="combo-slider-middle-top">
          {courses.map((item) => (
            <div className="priceCombo" key={item.id}>
              <div className="afternoon-card-company">
                <div className="afternoon-card-company-img">
                  <img src={item.url} alt={item.courseName} />
                </div>
                <p
                  className="afternoon-card-company-title"
                  style={{
                    color: "white",
                  }}
                >
                  {item.courseName}
                </p>
              </div>
              <div>
                {" "}
                <span className="combo-total">{item.price}/-</span>{" "}
                <div>6,000/-</div>
              </div>
              {/* <div>6000/-</div> */}
            </div>
          ))}
        </div>
        <div
          className="combo-slider-middle-bottom"
          onClick={() => setShow(null)}
        >
          <p
            className="afternoon-bottom-know pointer"
            style={{ backgroundColor: "white", color: "black" }}
          >
            <span className="combo-span ">
              Total: &nbsp; <div className="combo-total-hover">{total}</div>/-
            </span>
            <b>Price After Discount {discount}/-</b>
          </p>
        </div>
      </div>
    </div>
  </div>
);

const ComboPack = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(null);

  const extraBenefits = [
    { id: 1, name: "Statistics", url: "/course logo/description.png" },
    { id: 2, name: "Quadratic AI", url: "/extraBenifits/ai.png" },
    { id: 3, name: "Chat GPT", url: "/extraBenifits/chatgpt.png" },
    { id: 4, name: "Communication", url: "/extraBenifits/communication.png" },
  ];

  const dataAnalyticsCombo = [
    {
      id: 1,
      courseName: "Power BI",
      url: "/course logo/powerbi.png",
      price: 10000,
    },
    { id: 2, courseName: "SQL", url: "/course logo/sql.png", price: 10000 },
    { id: 3, courseName: "Excel", url: "/course logo/excel.png", price: 10000 },
    {
      id: 4,
      courseName: "Python",
      url: "/course logo/python.png",
      price: 10000,
    },
  ];

  const aiMLCombo = [
    {
      id: 1,
      courseName: "Machine Learning",
      url: "/course logo/aiml.png",
      price: 10000,
    },
    {
      id: 2,
      courseName: "Deep Learning",
      url: "/course logo/deep.png",
      price: 10000,
    },
    { id: 3, courseName: "NLP", url: "/course logo/nlp.png", price: 10000 },
    {
      id: 4,
      courseName: "Python",
      url: "/course logo/python.png",
      price: 10000,
    },
  ];

  const genAICombo = [
    {
      id: 1,
      courseName: "Machine Learning",
      url: "/course logo/aiml.png",
      price: 10000,
    },
    {
      id: 2,
      courseName: "Deep Learning",
      url: "/course logo/deep.png",
      price: 10000,
    },
    {
      id: 3,
      courseName: "Gen AI",
      url: "/course logo/genai.png",
      price: 10000,
    },
    { id: 4, courseName: "NLP", url: "/course logo/nlp.png", price: 10000 },
    {
      id: 5,
      courseName: "Python",
      url: "/course logo/python.png",
      price: 10000,
    },
  ];

  return (
    <div className="int-cont" id="combo">
      <div className="comboo-bg-oval oval1" />
      <div className="comboo-bg-oval oval2" />
      <div className="comboo-bg-oval oval3" />
      <div className="home-wu-top">
        <div className="home-hr-head headings-col text-white">
          Our Combo Packs with{" "}
          <b className="home-hr-head headings-col-col text-white">
            4 months Duration
          </b>
        </div>
      </div>
      <div className="parent parent1 center">
        <div className="cardssss-cont">
          <ComboCardSlider
            comboKey="analyst"
            show={show}
            setShow={setShow}
            mainTitle="Data Analytics Combo Pack"
            mainImg="https://storage.googleapis.com/test694/Images/Main2.webp"
            courses={dataAnalyticsCombo}
            extraBenefits={extraBenefits}
            total="40,000"
            discount="24,000"
            colorClass="purple font-white"
          />
          <ComboCardSlider
            comboKey="aiml"
            show={show}
            setShow={setShow}
            mainTitle="AI & ML Combo Pack"
            mainImg="https://storage.googleapis.com/test694/Images/Main2.webp"
            courses={aiMLCombo}
            extraBenefits={extraBenefits}
            total="40,000"
            discount="24,000"
            colorClass="purple font-white"
          />
          <ComboCardSlider
            comboKey="genai"
            show={show}
            setShow={setShow}
            mainTitle="Gen AI Combo Pack"
            mainImg="https://storage.googleapis.com/test694/Images/Main2.webp"
            courses={genAICombo}
            extraBenefits={extraBenefits}
            total="50,000"
            discount="30,000"
            colorClass="purple font-white"
          />
        </div>
      </div>
      <div
        className="customize-btn"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          navigate("/customize");
        }}
      > 
        <p className="afternoon-bottom-know pointer">
          <b>Customize Your Pack here</b>
        </p>
      </div>
    </div>
  );
};

export default ComboPack;
