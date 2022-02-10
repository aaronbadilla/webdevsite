import React from 'react'
import './profile.styles.scss'
import AaronCircle from "../../../images/AaronCircle.png";
import { useInView } from 'react-intersection-observer';

const Profile = () => {
  
  const { ref, inView} = useInView({
    threshold: .5,
    triggerOnce: true,
  });

  return (
    <div className="profile-container" id="about">
      <div ref={ref} className={`profile ${inView ? 'animate-profile' : null}`}>
        <img src={AaronCircle} alt="Aaron"/>

        <h2>Hello</h2>
        <p>
          I am a full stack web developer with a focus on front-end development. I come from an acting and music background and love finding ways to connect my love of the arts with my passion for coding.
        </p>
      </div>
    </div>
  )
}


export default Profile