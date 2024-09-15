import React, { useState ,useRef} from 'react';
import { Link ,animateScroll as scroll} from 'react-scroll'
import './Navbar.css';

function Navbar({toggleOpacity}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu=()=>{
    buttonRef.current.click();
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="brand-logo">ZEUS CODE</span>
        <span className="brand-tagline">Dimension Drift</span>
      </div>
      <div className={`navElements ${isMenuOpen ? 'open' : ''}`}>
        <button ref={buttonRef} className="menu-toggle" onClick={toggleMenu}>
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>

        <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <li><Link className="navLinkItems" to="home-sectionId" smooth={true}
          duration={400} // Duration of the scroll in ms
          offset={-70} onClick={()=>{toggleOpacity(); closeMenu();}}>Home</Link></li>
        <li><Link className="navLinkItems" to="work-sectionId" smooth={true}
          duration={400} // Duration of the scroll in ms
          offset={-70} onClick={()=>{toggleOpacity(); closeMenu();}}>Work</Link></li>
        <li><Link className="navLinkItems" to="education-sectionId" smooth={true}
          duration={400} // Duration of the scroll in ms
          offset={-70} onClick={()=>{toggleOpacity(); closeMenu();}}>Education</Link></li>
        <li><Link className="navLinkItems" to="skills-sectionId" onClick={() => {
          toggleOpacity();
          closeMenu();
          scroll.scrollTo(window.innerWidth <= 768 ? 1950 : 3900, {
            duration: 400,
            delay: 0,
            smooth: 'easeInOutQuart'
          })
        }} >Tech Stack</Link></li>
      </ul>

      <div className={`navbar-social ${isMenuOpen ? 'open' : ''}`}>
        <a href="https://github.com/har-shsharma"
          target="_blank"
          rel="noopener noreferrer"><i className="fa-brands fa-github" style={{ "color": "#ffffff" }}></i></a>
        <a href="https://www.linkedin.com/in/harsh-sharma-240279272/"
          target="_blank"
          rel="noopener noreferrer"><i className="fab fa-linkedin" style={{ "color": "#ffffff" }}></i></a>
        <a href="https://www.instagram.com/_harshsharma___"
          target="_blank"
          rel="noopener noreferrer"><i className="fab fa-instagram" style={{ "color": "#ffffff" }}></i></a>
      </div>
      <div className={`button-container ${isMenuOpen ? 'open' : ''}`}>
        <button className={`navbar-button ${isMenuOpen ? 'open' : ''}`} onClick={() => { window.location.href = 'mailto:harshsharma6521@gmail.com?subject=Get in Touch&body=Hello, I would like to get in touch with you.'; }}>Get In Touch</button>
      </div>
    </div>
    </nav >
  );
}

export default Navbar;
