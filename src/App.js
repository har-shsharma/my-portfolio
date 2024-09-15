import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SceneAnimation from './components/SceneAnimation';
import SceneAnimation2 from './components/SceneAnimation2';
import SkillAnimation from './components/SkillAnimation';
import Work from './components/Work';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TextAnimation from './components/TextAnimation';
import PreLoader from './components/PreLoader';

function App() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleOpacity = () => {
    setIsVisible(prev => !prev);
    setTimeout(()=>{
      setIsVisible(prev=>!prev);
    },1000);
  };


  return (
    <>
    <PreLoader/>
    <div className={`App app-container ${isVisible?'':'opacityAnimation'}`}>
      <Navbar toggleOpacity={toggleOpacity} />
      <Home />
      <TextAnimation />
      <SceneAnimation />
      <SceneAnimation2 />
      <SkillAnimation />
      <Work />
      <Education />
      <Contact />
      <Footer />
    </div>
    </>
  );
}

export default App;
