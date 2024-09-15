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
        <label className="workDuration">May 2023 – June 2024</label>
          <h2 className="roleHeading">Frontend Developer</h2>
            <h2 className="companyHeading">Zero Gravity</h2>
            <p className="workDescription">At Zero Gravity, I built and optimized e-commerce components, focusing on user experience and performance. Collaborating with design and backend teams, I sharpened my React and JavaScript skills, making significant contributions to our platform’s success.</p>
        </div>
        <div className="workItem">
        <label className="workDuration">Aug 2022 – Mar 2023</label>
            <h2 className="roleHeading">Full Stack Trainee</h2> 
            <h2 className="companyHeading">Besant Technology</h2>
            <p className="workDescription">During my time at Besant Technologies, I learned full stack development through hands-on projects, covering everything from front-end to back-end. This training gave me a strong foundation and practical skills that prepared me for real-world coding challenges.</p>
        </div>
        </div>
        </div>
    </>
  )
}

export default Work
