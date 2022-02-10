import React from 'react'
import './skill-row-slide-right.styles.scss'
import computer from "../../../../images/computer.png";

import { useInView } from 'react-intersection-observer';

import useCheckMobileScreen from '../../../mobile-checker/mobile-checker.component';

const SkillRowSlideRight = () => {

    const { ref, inView} = useInView({
    threshold: .8,
    triggerOnce: true,
  });



    return (
        <div  className='skill-row' >
        {inView ? (
            <div className={`skill-row-text ${inView ? 'animate-skill-row-text' : null}`}>
              <h3>Web Development</h3>
              <p className="skill-description">
                My knowledge and experience with many coding languages, libraries, and frameworks allows me to build web applications that deliver an inspiring user experience and provide a wide range of server-side functionality.{" "}
              </p>
            </div>
          ) :
          null }
          <img ref={ref}  className="computer-img" src={computer} alt="Computer"/>

        </div>
    )
}

export default SkillRowSlideRight