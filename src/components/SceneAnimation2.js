import React, { useState, useEffect } from 'react';
import './SceneAnimation2.css';

function SceneAnimation2() {
  const [minScroll, setMinScroll] = useState(window.innerWidth<=768?1500:2800);
  const [maxScroll, setMaxScroll] = useState(window.innerWidth<=768?3000:4000);
  const [croppedHeight, setCroppedHeight] = useState(window.innerWidth <= 768 ? '73.5vh' : '100vh');
  const [parallaxOffset, setParallaxOffset] = useState(0); 
  const [h2ParallaxOffset, setH2ParallaxOffset] = useState(0); 

  const updateInitialScroll = () => {
    if (window.innerWidth <= 768) {
      setMinScroll(1500);
      setMaxScroll(3000);
    } else {
      setMinScroll(2800);
      setMaxScroll(4000);
    }
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    
  
    const parallaxSpeed = 0.1; 
    const h2ParallaxSpeed = 1; 
    
    setParallaxOffset(scrollTop * parallaxSpeed);
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
    updateInitialScroll();
    window.addEventListener('resize', updateInitialScroll);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', updateInitialScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [minScroll, maxScroll]);

  return (
    <div className="scene2" style={{height:croppedHeight}} >
      <img
        src="/images/scene2.jpeg"
        className="sceneImage2"
        alt="Scenery"
        style={{ transform: `translateY(${-parallaxOffset}px)`}} 
      />
      <h2 
        style={{ 
          position: 'absolute',
          top: window.innerWidth<=768?'1850px':'3280px',
          color: 'white',
          transform: `translateY(${-h2ParallaxOffset}px)` ,
          fontSize:window.innerWidth<=768?'40px':'180px'
        }} 
      >
        &  C O N Q U E R
      </h2>
    </div>
  );
}

export default SceneAnimation2;
