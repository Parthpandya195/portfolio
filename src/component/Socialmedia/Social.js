import React from "react";
import "./Social.css";
import { FaWhatsapp, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Social = () => {
  return (
    <div className="s" id="social">

    <div className="social-container" id="so">
      <a
        href="https://wa.me/9016056286"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link whatsapp"
        >
        <FaWhatsapp className="social-icon" /> WhatsApp
      </a>

      <a
        href="https://www.instagram.com/parth._.195/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link instagram"
        >
        <FaInstagram className="social-icon" /> Instagram
      </a>

      <a
        href="https://github.com/Parthpandya195"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link github"
        >
        <FaGithub className="social-icon" /> GitHub
      </a>

      <a
        href="https://linkedin.com/in/parthpandya001"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link linkedin"
        >
        <FaLinkedin className="social-icon" /> LinkedIn
      </a>
    </div>
          </div>
  );
};

export default Social;
