import React from 'react'
import './skills.styles.scss'


import EmploymentResources from './employment-resources/employment-resources.component';
import SkillRowSlideRight from './skill-row-slide-right/skill-row-slide-right.component';
import SkillRowSlideLeft from './skill-row-slide-left/skill-row-slide-left.component'
import { useInView } from 'react-intersection-observer';

const Skills = () => {

  const { ref, inView} = useInView({
    threshold: .5,
    triggerOnce: true,
  });

  return (
    <div className="skills" id="skills">
      <div ref={ref} className={`skills-title ${inView ? 'animate-skills-title' : null}`}>
        <h2>My Skills</h2>
      </div>

      <div className='skill-section'>
        <SkillRowSlideRight/>
        <SkillRowSlideLeft/>
      </div>

      <EmploymentResources/>
      <div className="custom-shape-divider-bottom-1642098290">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z" class="shape-fill"></path>
        </svg>
      </div>
    </div>
  )
}

export default Skills