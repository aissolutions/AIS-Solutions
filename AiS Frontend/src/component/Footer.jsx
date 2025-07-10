import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="tutedude-footer-section1">
        <div className="tutedude-footer-mainlink-section">
          <img
            src="/logo.png"
            alt="Tutedude Logo"
            className="tutedude-footer-logo logoadjust"
          />
          <a href="/about" className="tutedude-footer-link">
            About us
          </a>
          <a className="tutedude-footer-link" style={{ cursor: "pointer" }}>
            Contact us
          </a>
          <a href="/privacy" className="tutedude-footer-link">
            Privacy Policy
          </a>
          <a href="/terms-condition" className="tutedude-footer-link">
            Terms of Use
          </a>
          <div className="tutedude-footer-social-section tutedude-footer-social-media-large">
            <a href="https://www.linkedin.com/company/aissolutions/?originalSubdomain=in">
              <img
                src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%3e%3cg%20clip-path='url(%23clip0_1966_1958)'%3e%3cpath%20d='M0%202.32966C0%201.15506%200.976054%200.203125%202.18035%200.203125H27.5095C28.7138%200.203125%2029.6899%201.15506%2029.6899%202.32966V27.7665C29.6899%2028.9411%2028.7138%2029.893%2027.5095%2029.893H2.18035C0.976054%2029.893%200%2028.9411%200%2027.7665V2.32966ZM9.17231%2025.0573V11.6504H4.71698V25.0573H9.17231ZM6.94557%209.81893C8.49872%209.81893%209.4655%208.79092%209.4655%207.50312C9.43766%206.18749%208.50058%205.18731%206.97526%205.18731C5.44995%205.18731%204.45348%206.18934%204.45348%207.50312C4.45348%208.79092%205.42026%209.81893%206.91588%209.81893H6.94557ZM16.0529%2025.0573V17.5698C16.0529%2017.169%2016.0826%2016.7682%2016.2014%2016.4824C16.5224%2015.6827%2017.2554%2014.8532%2018.4875%2014.8532C20.1%2014.8532%2020.7439%2016.0816%2020.7439%2017.8853V25.0573H25.1993V17.3676C25.1993%2013.2481%2023.0022%2011.3331%2020.0703%2011.3331C17.7063%2011.3331%2016.6467%2012.632%2016.0529%2013.5469V13.5933H16.0232L16.0529%2013.5469V11.6504H11.5995C11.6551%2012.9085%2011.5995%2025.0573%2011.5995%2025.0573H16.0529Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1966_1958'%3e%3crect%20y='0.203125'%20width='29.6899'%20height='29.6899'%20rx='5.56685'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                alt="Linkedin"
              />
            </a>
            <a href="https://www.instagram.com/ais.solutions/?igsh=MWx0b25sMXJnM3NrNg%3D%3D#">
              <img
                src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='36'%20height='36'%20viewBox='0%200%2036%2036'%20fill='none'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8.964%202.34766C7.22521%202.34766%205.5576%203.03821%204.32786%204.26749C3.09812%205.49676%202.40692%207.1641%202.40625%208.90289V26.3902C2.40625%2028.1294%203.09715%2029.7974%204.32697%2031.0272C5.55679%2032.2571%207.22478%2032.948%208.964%2032.948H26.4513C28.1901%2032.9473%2029.8575%2032.2561%2031.0867%2031.0264C32.316%2029.7966%2033.0066%2028.129%2033.0066%2026.3902V8.90289C33.0059%207.16454%2032.315%205.49757%2031.0858%204.26838C29.8566%203.03918%2028.1897%202.34832%2026.4513%202.34766H8.964ZM28.3376%208.91296C28.3376%209.41389%2028.1386%209.8943%2027.7844%2010.2485C27.4301%2010.6027%2026.9497%2010.8017%2026.4488%2010.8017C25.9479%2010.8017%2025.4675%2010.6027%2025.1133%2010.2485C24.759%209.8943%2024.5601%209.41389%2024.5601%208.91296C24.5601%208.41203%2024.759%207.93162%2025.1133%207.57741C25.4675%207.2232%2025.9479%207.02421%2026.4488%207.02421C26.9497%207.02421%2027.4301%207.2232%2027.7844%207.57741C28.1386%207.93162%2028.3376%208.41203%2028.3376%208.91296ZM17.7102%2012.4084C16.3209%2012.4084%2014.9886%2012.9603%2014.0063%2013.9426C13.0239%2014.925%2012.472%2016.2573%2012.472%2017.6465C12.472%2019.0358%2013.0239%2020.3681%2014.0063%2021.3505C14.9886%2022.3328%2016.3209%2022.8847%2017.7102%2022.8847C19.0994%2022.8847%2020.4318%2022.3328%2021.4141%2021.3505C22.3964%2020.3681%2022.9483%2019.0358%2022.9483%2017.6465C22.9483%2016.2573%2022.3964%2014.925%2021.4141%2013.9426C20.4318%2012.9603%2019.0994%2012.4084%2017.7102%2012.4084ZM9.95119%2017.6465C9.95119%2015.5894%2010.7684%2013.6165%2012.223%2012.1619C13.6776%2010.7073%2015.6505%209.89007%2017.7077%209.89007C19.7648%209.89007%2021.7377%2010.7073%2023.1923%2012.1619C24.6469%2013.6165%2025.4641%2015.5894%2025.4641%2017.6465C25.4641%2019.7037%2024.6469%2021.6766%2023.1923%2023.1312C21.7377%2024.5858%2019.7648%2025.403%2017.7077%2025.403C15.6505%2025.403%2013.6776%2024.5858%2012.223%2023.1312C10.7684%2021.6766%209.95119%2019.7037%209.95119%2017.6465Z'%20fill='black'/%3e%3c/svg%3e"
                alt="Instagram"
              />
            </a>
            <a href="https://www.facebook.com/AISTATICS?mibextid=wwXIfr&rdid=coDQErhrxgjLydfe&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15mNYRuwyG%2F%3Fmibextid%3DwwXIfr#">
              <img
                src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='37'%20height='36'%20viewBox='0%200%2037%2036'%20fill='none'%3e%3cpath%20d='M29.0498%203.28516H7.96959C5.54569%203.28516%203.5625%205.26835%203.5625%207.69225V28.7747C3.5625%2031.1986%205.54569%2033.1817%207.96959%2033.1817H29.052C31.4759%2033.1817%2033.4591%2031.1986%2033.4591%2028.7747V7.69225C33.4569%205.26835%2031.4759%203.28516%2029.0498%203.28516ZM28.7666%2019.2421H25.2189V32.0778H19.9106V19.2421H17.2553V14.8174H19.9106V12.1621C19.9106%208.55273%2021.409%206.40537%2025.6729%206.40537H29.2173V10.829H27.0005C25.3434%2010.829%2025.2333%2011.4493%2025.2333%2012.6028L25.2189%2014.8174H29.2349L28.7666%2019.2421Z'%20fill='black'/%3e%3c/svg%3e"
                alt="Facebook"
              />
            </a>
          </div>
        </div>
        <div className="tutedude-footer-registered-section">
          <p className="tutedude-footer-link-head">Registered Office</p>
          <p className="tutedude-footer-link">
            Office No 2, 1st Floor, Kudale Patil Palace
            <br />
            Sinhgad Rd, near SS store, Bramha Hotel, Manikbag, Pune,
            <br />
            Maharashtra, 411051
          </p>
          <div className="tutedude-footer-contact-section">
            <p className="tutedude-footer-link-head">Contact Us</p>
            <div className="tutedude-footer-contact-section-inner">
              <a
                href="mailto:info@aissolutions.netm"
                className="tutedude-footer-link contact"
              >
                <img src="/social/email.png" alt="" />
                info@aissolutions.net
              </a>
              <a
                className="tutedude-footer-link contact"
                href="tel:+91 9975707273"
              >
                <img src="/social/phone.png" alt="" />
                +91 9975707273
              </a>
            </div>
          </div>
        </div>

        {/* <div className="tutedude-footer-registered-section">
          
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
