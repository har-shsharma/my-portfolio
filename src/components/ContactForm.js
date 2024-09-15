import React, { useState } from 'react';
import './ContactForm.css'
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [isVisible, setIsiVisible] = useState(false);
  const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    if (form.checkValidity()) {
      emailjs.sendForm(SERVICE_ID,TEMPLATE_ID, form, PUBLIC_KEY)
        .then((response) => {
          console.log('Sent successfully:', response);
          setIsiVisible(true);
          setTimeout(() => {
            setIsiVisible(false);
          }, 3000);
          form.reset(); 
        }, (error) => {
          console.log('Failed to send:', error);
          alert('Failed to send your message.');
        });
    } else {
      form.reportValidity(); 
    }
  };

  return (
    <div className="contact-form">
      <div className="formContainer">
        <h2 className="contactHeading">Reach Out</h2>
        <label htmlFor="gmail" className="contactGmail">harshsharma6521@gmail.com</label>
        <label htmlFor="phoneNumber" className="contactNumber">+91 7019798509</label>
        <form onSubmit={handleSubmit}>
          <div className="formItems">
            <div className="formUserInfo">
              <input
                className="nameInput"
                type="text"
                id="name"
                name="user_name"
                required
                placeholder="Name"
              />

              <input
                className="emailInput"
                type="email"
                id="email"
                name="user_email"
                required
                placeholder="Email"
              />
            </div>
            <textarea
              className="messageInput"
              id="message"
              name="message"
              required
              placeholder="Enter your message"
            ></textarea>

            <button className="submitButton" type="submit">Submit</button>
            {isVisible && <div className="onSubmitMessage">Thanks for submitting</div>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
