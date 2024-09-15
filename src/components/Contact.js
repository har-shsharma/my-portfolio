import React, { useEffect, useState } from 'react';
import './Contact.css';
import ContactForm from './ContactForm';

const Contact = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = window.innerWidth <= 768 ? 2500 : 3100;
      const videoElement = document.querySelector('.videoBackground video');

      if (scrollPosition > triggerPosition && !isVideoPlaying) {
        if (videoElement) {
          videoElement.play().then(() => {
            setIsVideoPlaying(true); 
          }).catch(err => {
            console.log('Error in playing video:', err);
          });
        }
      } else if (scrollPosition <= triggerPosition && isVideoPlaying) {
        if (videoElement) {
          videoElement.pause();
          setIsVideoPlaying(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll); 
    };
  }, [isVideoPlaying]);

  return (
    <div className="contactContainer">
      <ContactForm />
      <div className="videoBackground">
        <video muted loop preload="none">
          <source src="/images/sceneVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Contact;
