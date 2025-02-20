import React from "react";
import "./Footer.css";
// import userimg from "..//..//assets/images/footericon.png";
function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-top">
          <div className="footer-top-left">
            <h1>parth pandya</h1>
            <p>web designer and developer</p>
          </div>
          {/* <div className="fooer-top-right">
            <div className="footer-email-input">
              <img src={userimg} alt="" />
              <input type="email" placeholder="Enter Your Email" name="email" />
            </div>
            <div className="footer-subscribe">Subscirbe</div>
          </div> */}
        </div>
        <hr />
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p> © 2025 Parth Pandya. All rights reserved.</p>
          </div>
          <div className="footer-bottom-right">
            <p>Term Services</p>
            <p>Privacy policy</p>
            <p>Connect With Me</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
