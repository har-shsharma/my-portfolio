import React, { useState, useEffect } from 'react';
import './SkillAnimation.css';

function SkillAnimation() {
  const [minScroll, setMinScroll] = useState(window.innerWidth<=768?2500:3800);
  const [maxScroll, setMaxScroll] = useState(window.innerWidth<=768?4000:5000);
  const [iconSize,setIconSize]=useState(window.innerWidth<=768?'fa-3x':'fa-5x')
  const [croppedHeight, setCroppedHeight] = useState(window.innerWidth <= 768 ? '73.5vh' : '100vh');
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [h2ParallaxOffset, setH2ParallaxOffset] = useState(0); 

  const updateInitialScroll = () => {
    if (window.innerWidth <= 768) {
      setMinScroll(2500);
      setMaxScroll(4000);
      setIconSize('fa-3x');
    } else {
      setMinScroll(3800);
      setMaxScroll(5000);
      setIconSize('fa-5x');
    }
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    
    const parallaxSpeed = 0.1; 
    const h2ParallaxSpeed = 1.2; 
    
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
    <div className="skillOuterContainer" style={{height:croppedHeight}}>
      <img
        src="/images/skillsBackground.jpeg"
        className="skillBackground"
        alt="Scenery"
        style={{ transform: `translateY(${-parallaxOffset}px)` }}
      />
      <div className="skillContent" id="skills-sectionId" >
      <h2 className="skillHeading" style={{transform:`translateY(${-h2ParallaxOffset}px)`}}>TECH WIZARDRY</h2>
      <div className="skillInnerContainer" >
        <div className="skill" style={{transform:`translateY(${-h2ParallaxOffset}px)`}}>
        <i className={`fa-brands fa-html5 ${iconSize}`}></i>
        <span>HTML5</span>
      </div>
      <div className="skill" style={{transform:`translateY(${-h2ParallaxOffset}px)`}}>
        <i className={`fa-brands fa-css3-alt ${iconSize}`}></i>
        <span>CSS3</span>
      </div>
      <div className="skill" style={{transform:`translateY(${-h2ParallaxOffset}px)`}}>
        <i className={`fa-brands fa-js ${iconSize}`}></i>
        <span>JavaScript</span>
      </div>
      <div className="skill" style={{transform:`translateY(${-h2ParallaxOffset}px)`}}>
        <i className={`fa-brands fa-java ${iconSize}`}></i>
        <span>Java</span>
      </div>
      <div className="skill" style={{transform:`translateY(${-h2ParallaxOffset}px)`}}>
        <i className={`fa-brands fa-python ${iconSize}`}></i>
        <span>Python</span>
      </div>
      <div className="skill" style={{transform:`translateY(${-h2ParallaxOffset}px)`}}>
        <i className={`fa-brands fa-react ${iconSize}`}></i>
        <span>React</span>
      </div>
      <div className="skill" style={{transform:`translateY(${-h2ParallaxOffset}px)`}}>
  <i className={`fa-solid fa-sync-alt ${iconSize}`}></i> 
  <span>Redux</span>
</div>
      <div className="skill" style={{transform:`translateY(${-h2ParallaxOffset}px)`}}>
        <i className={`fa-brands fa-node-js ${iconSize}`}></i>
        <span>Node.js</span>
      </div>
      <div className="skill" style={{transform:`translateY(${-h2ParallaxOffset}px)`}}>
        <i className={`fa-solid fa-server ${iconSize}`}></i>
        <span>Express.js</span>
      </div>
      <div className="skill" style={{transform:`translateY(${-h2ParallaxOffset}px)`}}>
        <i className={`fa-brands fa-bootstrap ${iconSize}`}></i>
        <span>Bootstrap</span>
      </div>
      <div className="skill" style={{transform:`translateY(${-h2ParallaxOffset}px)`}}>
        <i className={`fa-solid fa-database ${iconSize}`}></i>
        <span>MongoDB</span>
      </div>
      <div className="skill" style={{transform:`translateY(${-h2ParallaxOffset}px)`}}>
        <i className={`fa-solid fa-database ${iconSize}`}></i>
        <span>SQL</span>
      </div>
      <div className="skill" style={{transform:`translateY(${-h2ParallaxOffset}px)`}}>
        <i className={`fa-brands fa-aws ${iconSize}`}></i>
        <span>AWS</span>
      </div>
      <div className="skill" style={{transform:`translateY(${-h2ParallaxOffset}px)`}}>
        <i className={`fa-brands fa-github ${iconSize}`}></i>
        <span>GitHub</span>
      </div>
          </div>
      </div>
      </div>
  );
}

export default SkillAnimation;
