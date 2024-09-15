import React, { useEffect, useState } from 'react';
import './Contact.css';
import ContactForm from './ContactForm';

function Contact() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = window.innerWidth <= 768 ? 2450 : 3100;

      const videoElement = document.querySelector('.videoBackground video');

      if (scrollPosition > triggerPosition) {
        if (!isVideoLoaded) {
          setIsVideoLoaded(true); 
        }
      } else {
        setIsVideoLoaded(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); 
    };
  }, [isVideoLoaded]);

  return (
    <div className="contactContainer">
      <ContactForm />
      <div className="videoBackground">
        {isVideoLoaded && (
          <video muted loop  autoPlay preload="none">
            <source src="/images/sceneVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
}

export default Contact;
