import React from 'react'
import './Work.css';

function Work() {
  return (
    <>
      <div className="workContainer" id="work-sectionId">
        <div className="workHeader">
        <h2 className="workHeading">Work</h2>
        <span className="workSubHeading">My Journey in Code</span>
        </div>
        <div className="workContent">
        <div className="workItem">
        <label className="workDuration">July 2024 – Present</label>
            <h2 className="roleHeading">Frontend Developer</h2> 
            <h2 className="companyHeading">Payfin</h2>
            <p className="workDescription">During my time at Payfin, I worked as a frontend developer, building dynamic onboarding forms and admin portals. I used React, TypeScript, and Tailwind CSS to create responsive UIs, implemented role-based access, and integrated secure APIs, gaining practical experience in fintech applications.</p>
        </div>
        <div className="workItem">
        <label className="workDuration">May 2023 – June 2024</label>
          <h2 className="roleHeading">Frontend Developer</h2>
            <h2 className="companyHeading">Zero Gravity</h2>
            <p className="workDescription">At Zero Gravity, I built and optimized e-commerce components, focusing on user experience and performance. Collaborating with design and backend teams, I sharpened my React and JavaScript skills, making significant contributions to our platform’s success.</p>
        </div>
        </div>
        </div>
    </>
  )
}

export default Work
