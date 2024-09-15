import React, { useState, useEffect } from 'react';
import './TextAnimation.css';

function TextAnimation() {
  const [minScroll, setMinScroll] = useState(window.innerWidth<=768?300:900);
  const [maxScroll, setMaxScroll] = useState(window.innerWidth<=768?1000:2000);
  const [croppedHeight, setCroppedHeight] = useState(window.innerWidth <= 768 ? '73.5vh' : '100vh');
  const [h2ParallaxOffset, setH2ParallaxOffset] = useState(0);

  const updateInitialValues = () => {
    if (window.innerWidth <= 768) {
      setMinScroll(300);
      setMaxScroll(1000);
    } else {
      setMinScroll(900);
      setMaxScroll(2000);
    }
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const h2ParallaxSpeed = 1.2; 
    setH2ParallaxOffset(scrollTop * h2ParallaxSpeed);

    if (scrollTop >= minScroll && scrollTop <= maxScroll) {
      const scrollRange = maxScroll - minScroll;
      const scrollPercentage = (scrollTop - minScroll) / scrollRange;
      const newHeight = Math.max((1 - scrollPercentage) * (window.innerWidth <= 768 ? 73.5 : 100), 0);
      setCroppedHeight(`${newHeight}vh`);
    } else if (scrollTop < minScroll) {
      setCroppedHeight(window.innerWidth <= 768 ? '73.5vh' : '100vh');
    }else if(scrollTop >maxScroll){
      setCroppedHeight(0);
    }
  };

  useEffect(() => {
    updateInitialValues();
    window.addEventListener('resize', updateInitialValues);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', updateInitialValues);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ minScroll, maxScroll]);

  return (
    <div className="TextAnimation" style={{ height: croppedHeight }}>
      <img className="idolImage" src="/images/idol.png" alt="greekGod" />
      <h2 
        style={{ 
          position: 'absolute',
          top: window.innerWidth<=768?'710px':'1240px',
          color: 'white',
          transform: `translateY(${-h2ParallaxOffset}px)` ,
          fontSize:window.innerWidth<=768?'120px':'500px',
          zIndex:-1
        }} 
      >R I S E</h2>
    </div>
  );
}

export default TextAnimation;
