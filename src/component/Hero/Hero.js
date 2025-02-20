import React from 'react';
import "./Hero.css";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import mainimage from "../../assets/images/img_parth.jpg";

const Hero = () => {
  const handleDownload = () => {
    const resumeUrl = process.env.PUBLIC_URL + "/parth_pandya_2024_resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Parth_Pandya_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <div className="hero" id="hero">
        <img src={mainimage} alt="Parth Pandya" />
        <h1><span>I'm Parth Pandya</span></h1>
        <h2>Web Developer based in <span id="ind">INDIA</span></h2>
        <p>
          I am a Frontend Developer from Surat, Gujarat, with a strong foundation in web technology.
        </p>
        <div className="hero-action">
          <div className="hero-connect">
            <li>
              <AnchorLink className="anchor-link" offset={50} href="#contact">
                Connect With Me
              </AnchorLink>
            </li>
          </div>
          <div className="hero-resume" onClick={handleDownload}>My Resume</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
