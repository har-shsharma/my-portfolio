import React from 'react'
import { useState ,useEffect} from 'react';


function Home() {
  const [isVisible,setIsVisible]=useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (window.innerWidth <= 768){
      setIsVisible(scrollPosition < 112);
      }
      else {
      setIsVisible(scrollPosition < 430); 
    }};

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div id="home-sectionId"> 
        <img className="backgroundImage" src="/images/background.png" alt="background" />
        <div className="headline-container">
        <h1 className="mainHeadline" style={{opacity:isVisible?1:0}}>I'm <label className="myName">हर्ष</label>,</h1>
        <h6 className="subHeadline" style={{opacity:isVisible?1:0}}>Crafting the future in code.</h6>
        </div>
        <div className="about-container">
          <h2 className="aboutHeadline">Hello World</h2>
          <p className="aboutSection">I’m a full stack developer who loves turning ideas into reality, crafting code and designs with a touch of creativity and a lot of enthusiasm to make engaging digital experiences.</p>
        </div>
    </div>
  )
}

export default Home
