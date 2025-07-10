import { useState } from "react";
import "./Faq.css";
const Faq = () => {
  const [info, setInfo] = useState("");

  return (
    <>
      <div className="ifaq-cont" id="faqss">
        <div className="ifaq-inner-cont">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="ifaq-head">Q & A</div>
            <div className="ifaq-head">From Confusion To Clarity</div>
          </div>
          <div className="ifaq-main-cont">
            <div>
              <div className="quesDiv">
                <p onClick={() => setInfo(info === "first" ? "" : "first")}>
                  <div className="ques">
                    I’m from a non-technical background. Can I learn Python or
                    Data Science?
                  </div>
                  <span className="plus">{info === "first" ? "-" : "+"}</span>
                </p>
                <div className={`ans ${info === "first" ? "show" : "hide"}`}>
                  <h4 className="ifaq-ans">
                    Absolutely! Our courses are designed for beginners and we
                    start from scratch. Many of our successful students came
                    from commerce, arts, or other non-tech streams.
                  </h4>
                </div>
              </div>
            </div>
            <div>
              <div className="quesDiv">
                <p onClick={() => setInfo(info === "second" ? "" : "second")}>
                  <span className="ques">
                    Will I get a certificate after course completion?
                  </span>
                  <span className="plus">{info === "second" ? "-" : "+"}</span>
                </p>
                <div className={`ans ${info === "second" ? "show" : "hide"}`}>
                  <h4 className="ifaq-ans">
                    Yes, we provide an industry-recognized certificate upon
                    successful completion of your course, which you can add to
                    your resume or LinkedIn profile.
                  </h4>
                </div>
              </div>
            </div>
            <div>
              <div className="quesDiv">
                <p onClick={() => setInfo(info === "third" ? "" : "third")}>
                  <span className="ques">
                    Do you provide placement assistance?
                  </span>
                  <span className="plus">{info === "third" ? "-" : "+"}</span>
                </p>
                <div className={`ans ${info === "third" ? "show" : "hide"}`}>
                  <h4 className="ifaq-ans">
                    Yes, we offer 100% placement assistance with a guaranteed
                    placement opportunity. However, there are a few important
                    stages you need to clear — such as assessments, mock
                    interviews, and skill evaluations. Our team will guide and
                    support you through each step to ensure you're job-ready.
                  </h4>
                </div>
              </div>
            </div>
            <div>
              <div className="quesDiv">
                <p onClick={() => setInfo(info === "fourth" ? "" : "fourth")}>
                  <span className="ques">
                    Is communication covered in the training?
                  </span>
                  <span className="plus">{info === "fourth" ? "-" : "+"}</span>
                </p>
                <div className={`ans ${info === "fourth" ? "show" : "hide"}`}>
                  <h4 className="ifaq-ans">
                    Yes! Communication is crucial for job success, so we include
                    daily 5–15 minute calls to help improve speaking, clarity
                    and confidence — preparing you for real interviews and
                    workplace interactions.
                  </h4>
                </div>
              </div>
            </div>
            <div>
              <div className="quesDiv">
                <p onClick={() => setInfo(info === "five" ? "" : "five")}>
                  <div className="ques">
                    Boosting Confidence Through Mock Interviews ?
                  </div>
                  <span className="plus">{info === "five" ? "-" : "+"}</span>
                </p>
                <div className={`ans ${info === "five" ? "show" : "hide"}`}>
                  <h4 className="ifaq-ans">
                    We simulate real interview conditions, helping you
                    practice answers, reduce nervousness and receive expert
                    feedback to improve.
                  </h4>
                </div>
              </div>
            </div>
            <div>
              <div className="quesDiv">
                <p onClick={() => setInfo(info === "six" ? "" : "six")}>
                  <span className="ques">Are there any activities to improve tech skills, like quizzes or challenges?</span>
                  <span className="plus">{info === "six" ? "-" : "+"}</span>
                </p>
                <div className={`ans ${info === "six" ? "show" : "hide"}`}>
                  <h4 className="ifaq-ans">
                   Yes! We offer regular quizzes, coding challenges 
                   and interactive assignments to help reinforce your technical knowledge and keep you sharp.
                  </h4>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="ifaq-head">
            AIS Skill Hub: Empowering You for Success
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Faq;
