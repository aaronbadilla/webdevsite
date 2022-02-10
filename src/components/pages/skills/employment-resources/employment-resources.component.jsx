import React from 'react'
import './employment-resources.styles.scss'

import resume from "../../../../images/resume.png";
import linkedin from "../../../../images/linkedin.png";
import twitter from "../../../../images/twitter.png";

import { useInView } from 'react-intersection-observer';

const EmploymentResources = () => {

    const { ref, inView} = useInView({
        threshold: .5,
        triggerOnce: true,
      });

    return (
        <div ref={ref} className={`employment-resources ${inView ? 'animate-employment-resources' : null}`}>
        <a href="https://drive.google.com/file/d/1DkuJeur7syIlSL9f3rPys67qgNuXkE5M/view?usp=sharing" className="resume" target="_blank" rel="noopener noreferrer">
          <div className="resume">
            <img src={resume} alt="" className="resume-pic"/>
            <h3>
              Want a more in-depth look at my skills? Check out my resume!
            </h3>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/aaron-badilla-76076b144/" className="linkedin" target="_blank" rel="noopener noreferrer">
          <div className="linkedin">
            <img src={linkedin} alt="" className="linkedin-pic"/>
            <h3>Connect with me on LinkedIn!</h3>
          </div>
        </a>
        <a href="https://twitter.com/aarondbadilla" target="_blank" rel="noopener noreferrer" className="twitter">
          <div className="twitter">
            <img src={twitter} alt="" className="twitter-pic"/>
            <h3>Follow along with my coding journey on Twitter!</h3>
          </div>
        </a>
      </div>
    )
}

export default EmploymentResources