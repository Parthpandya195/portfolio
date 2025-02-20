import React from "react";
import "../About/About.css";
import aboutimg from "../../assets/images/img_parth.jpg";
function About() {
  return (
    <div>
      <div className="about"id="about">
        <div className="about-title">
          <h1>About Me</h1>
        </div>
        <div className="about-sections">
          <div className="about-left">
            <img src={aboutimg} alt="parth pandya" />
          </div>
          <div className="about-right">
            <div className="about-para">
              <p>
                I Am BCA Student From Ambaba commerce collage  
              </p>
              <p> Strong foundation of html and css make me deeply connect with React js</p>
            </div>
            <div className="about-skills">
                <div className="about-skill">
                    <p>HTML</p><hr style={{width:"70%"}} />
                </div>
                <div className="about-skill">
                    <p>CSS</p><hr style={{width:"70%"}} />
                </div>
                <div className="about-skill">
                    <p>JAVASCRIPT</p><hr style={{width:"30%"}} />
                </div>
                <div className="about-skill">
                    <p>REACT JS</p><hr style={{width:"60%"}} />
                </div>
                <div className="about-skill">
                    <p>SQL</p><hr style={{width:"60%"}} />
                </div>
                <div className="about-skill">
                    <p>C/C++</p><hr style={{width:"80%"}} />
                </div>
            </div>
          </div>
        </div>
        <div className="about-achivements">
            <div className="about-achivement">
                <h1>5+</h1>
                <p>WIN Social media Quize</p>
            </div>
            <hr/>
            <div className="about-achivement">
                <h1>3</h1>
                <p>Indivisual Project</p>
            </div>
            <hr/>
            <div className="about-achivement">
                <h1>30+</h1>
                <p>created Web Pages</p>
            </div>
          </div>
      </div>
    </div>
  );
}

export default About;
