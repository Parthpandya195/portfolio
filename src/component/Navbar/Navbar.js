import React, { useRef } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navbar.css';
import menu_open from '../../assets/images/icons8-drop-down-100.png';
import menu_close from '../../assets/images/icons8-close-100.png';

const Navbar = () => {
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.classList.add('menu-open');
  };

  const closeMenu = () => {
    menuRef.current.classList.remove('menu-open');
  };

  return (
    <div>
      <div className="navbar" id="navbar">
        <h1>Parth Pandya</h1>
        <img src={menu_open} onClick={openMenu} alt="Open Menu" className="nav-menu-open" />
        <ul ref={menuRef} className="nav-menu">
          <img src={menu_close} alt="Close Menu" onClick={closeMenu} className="nav-menu-close" />
          <li><AnchorLink className="anchor-link" offset={-80} href="#hero"><p>Home</p></AnchorLink></li>
          <li><AnchorLink className="anchor-link" offset={-80} href="#about"><p>About Me</p></AnchorLink></li>
          <li><AnchorLink className="anchor-link" offset={-80} href="#services"><p>Services</p></AnchorLink></li>
          <li><AnchorLink className="anchor-link" offset={-80} href="#work"><p>Portfolio</p></AnchorLink></li>
          <li><AnchorLink className="anchor-link" offset={-80} href="#contact"><p>Contact</p></AnchorLink></li>
          <li><AnchorLink className="anchor-link" offset={-80} href="#social"><p>Social Links</p></AnchorLink></li>
        </ul>
        <div className="nav-connect">
          <AnchorLink className="anchor-link" offset={-80} href="#contact">Connect With Me</AnchorLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
