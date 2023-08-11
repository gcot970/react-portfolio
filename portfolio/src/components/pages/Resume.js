import React from 'react';

function Resume() {
  return (
    <div className='resume-content m-5'>
      <h2>Resume</h2>
      <p>Here's a brief overview of my skills and experience:</p>
      <h3>Skills</h3>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>HTML/CSS</li>
        <li>Node.js</li>
      </ul>
      <h3>Experience</h3>
      <div>
        <h4>Computer Job</h4>
        <p>Company Name - City, State</p>
        <p>June 2020 - Present</p>
        <ul>
          <li>Troubleshooting computers</li>
          <li>Maintaining SMB devices and servers</li>
        </ul>
      </div>
      <div>
      </div>
      <h3>Education</h3>
      <div>
        <h4>Bachelor's Degree in Information Systems</h4>
        <p>University Name - City, State</p>
        <p>Graduated: May 2021</p>
      </div>
    </div>
  );
}

export default Resume;
