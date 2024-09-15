import React from 'react'
import './Education.css'

function Education() {
  return (
    <div className="educationContainer" id="education-sectionId">
      <h2 className="educationHeading">Education</h2>
      <span className="educationSubHeading">Insightful Pursuits</span>
      <div className="educationContent">
        <div className="educationItem">
            <label className="educationDuration">2019-2022</label>
            <h2 className="educationCourse">Bachelor of Science in Computer Science</h2>
            <span className="collegeName">M.E.S College</span>
        </div>
        <div className="educationItem">
            <label className="educationDuration">2017-2019</label>
            <h2 className="educationCourse">PCMC (Physics, Chemistry, Mathematics, and Computer Science)</h2>
            <span className="collegeName">St.Claret PU College</span>
        </div>
      </div>
    </div>
  )
}

export default Education
