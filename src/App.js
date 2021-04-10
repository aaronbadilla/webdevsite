import React, {useState} from "react";
import "./App.css"
import AaronCircle from "./images/AaronCircle.png";
import computer from "./images/computer.png";
import contract from "./images/contract.png";
import mountain from "./images/mountain.png";
import diceegame from "./images/diceegame.png";
import drumkit from "./images/drumkit.png";
import blogwebsite from "./images/blogwebsite.png";
import memoryapp from "./images/memoryapp.png";
import teladog from "./images/teladog.png";
import secretsapp from "./images/secretsapp.png";
import resume from "./images/resume.png";
import linkedin from "./images/linkedin.png";
import twitter from "./images/twitter.png";
import {Fade, Grid, Slide} from "@material-ui/core";
import ProjectCard from "./components/ProjectCard";

export default function App(props) {
  const year = new Date().getFullYear();

  return (<div>
    <Slide direction="down" in={true} timeout={{
        enter: 500
      }} style={{
        transitionDelay: 2500
      }}>
      <header>
        <div className="action-bar">
          <div className="header-title">
            <h5>Aaron Badilla</h5>
          </div>
          <div className="header-nav">
            <h4>
              <a href="#about">About Me</a>{" "}
            </h4>
            <h4>
              <a href="#projects">Projects</a>
            </h4>
            <h4>
              <a href="#skills">Skills</a>
            </h4>
            <h4>
              <a href="#contact">Contact</a>
            </h4>
          </div>
        </div>
      </header>
    </Slide>
    <div className="top-container">

      <div className="header-text">

        <Fade in={true} style={{
            transitionDelay: "500ms"
          }} timeout={{
            enter: 500
          }}>
          <h1>I'm Aaron</h1>
        </Fade>


        <Fade in={true} 
              style={{
                transitionDelay: "1500ms"
              }} 
             timeout={{
                enter: 500
             }}>
          <h2>a full stack web developer</h2>
        </Fade>
      </div>

      <Fade in={true} timeout={{
          enter: 1000,
        }} style={{
          transitionDelay: 2500,
        }} >
      <div className="sun">
        <i class="fas fa-sun fa-10x"></i>
      </div>
      </Fade>

      <Slide direction="left" in={true} timeout={{
          enter: 100000,
        }} style={{
          transitionDelay: 2500
        }} mountOnEnter={true}>
        <div className="top-cloud" {...props}>
          <i className="fas fa-cloud fa-7x cloud"></i>
        </div>
      </Slide>

      <Slide direction="left" in={true} timeout={{
          enter: 80000,
        }} style={{
          transitionDelay: 2500
        }} mountOnEnter={true}>
        <div className="lowest-cloud" {...props}>
          <i className="fas fa-cloud fa-5x cloud"></i>
        </div>
      </Slide>

      <Slide direction="right" in={true} timeout={{
          enter: 90000
        }} style={{
          transitionDelay: 2500
        }} >
        <div className="bottom-cloud" {...props}>
          <i className="fas fa-cloud fa-4x cloud"></i>
        </div>
      </Slide>

      <div className="mountain">
        <Fade direction="up" in={true} timeout={{
            enter: 500
          }} style={{
            transitionDelay: 2500
          }} mountOnEnter="mountOnEnter">
          <img src={mountain} alt="mountain-img"/>
        </Fade>
      </div>
    </div>
    <div className="profile-container" id="about">
      <div className="profile">
        <img src={AaronCircle} alt="Aaron"/>

        <h2>Hello</h2>
        <p>
          I am a MERN stack web developer with a background in acting and writing continuing to create and tell stories through code!
        </p>
      </div>
    </div>

    <div className="portfolio-container" id="projects">
      <div className="portfolio">
        <h2>My Projects</h2>
        <h3>Check out some of my completed projects!</h3>
        <hr/>

        <Grid container="container" direction="row" justify="center" alignItems="center" spacing={2}>
          <ProjectCard title="Dice Game Web App" webLink="https://aaronbadilla.github.io/dicegame/" image={diceegame} blurb="A simple dice rolling game." writtenWith="Written with: VanillaJS." githubLink="https://github.com/aaronbadilla/dicegame"/>
          <ProjectCard title="Drum Kit Web App" webLink="https://aaronbadilla.github.io/drumkit/" image={drumkit} blurb="A keyboard controlled drum kit!" writtenWith="Written with: VanillaJS." githubLink="https://github.com/aaronbadilla/drumkit"/>
          <ProjectCard title="Demo Blog Website" webLink="https://hidden-brushlands-47558.herokuapp.com/" image={blogwebsite} blurb="A website to blog about anything!" writtenWith="Written with: Node.js, Express, EJS" githubLink="https://github.com/aaronbadilla/blogwebsite"/>
          <ProjectCard title="Memory Game Web App" webLink="https://aaronbadilla.github.io/memoryapp/" image={memoryapp} blurb="A zen memory game" writtenWith="Written with: Javascript, jQuery." githubLink="https://github.com/aaronbadilla/memoryapp"/>
          <ProjectCard title="Teladog Website Mockup" webLink="https://aaronbadilla.github.io/teladog/" image={teladog} blurb='A mockup website for "Teladog"' writtenWith="Written with: CSS, Bootstrap." githubLink="https://github.com/aaronbadilla/teladog"/>
          <ProjectCard title="Secrets App" webLink="https://aaron-secrets-app.herokuapp.com/" image={secretsapp} blurb="Share and read secrets!" writtenWith="Written with: Javascript, Node.Js, EJS" githubLink="https://github.com/aaronbadilla/secrets-app"/>
        </Grid>
      </div>
    </div>

    <div className="skills" id="skills">
      <h2>My Skills</h2>
      <hr/>
      <div className="skill-row">
        <img className="computer-img" src={computer} alt="Computer"/>
        <h3>Web Development</h3>
        <p className="skill-description">
          My knowledge and experience with many coding languages, libraries, and frameworks allows me to build web applications that deliver an inspiring user experience and provide a wide range of server-side functionality.{" "}
        </p>
      </div>
      <div className="skill-row">
        <img className="pen-img" src={contract} alt="Book"/>
        <div>
          <h3>Story Analysis and Communication</h3>
          <p>
            My many years as an actor and writer have taught me how to find clear, focused, and engaging ways of communicating ideas, emotions, and stories. These skills allow me to understand and integrate the needs and desires of clients, collaborators, and co-workers into clean and concise code.{" "}
          </p>
        </div>
      </div>
      <div className="employment-resources">
        <a href="https://drive.google.com/file/d/18P1W9d_ekjFFm3zh0xbFhadNxmOP951Y/view?usp=sharing" className="resume" target="_blank" rel="noopener noreferrer">
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
    </div>

    <div className="contact-me" id="contact">
      <div className="contact-container">
        <h2>Get In Touch</h2>
        <hr/>
        <div className="contact">
          <div className="explain-contact">
            <img src={AaronCircle} alt="Aaron"/>
            <div className="email-cta">
              <h3>
                Need a web application built, want to collaborate, or just feel like saying hi? Don't hesitate to reach out!
              </h3>
            </div>
          </div>
          <div className="email-form">
            <a href="mailto:aarondbadilla@gmail.com" className="email-button">Email Me</a>
          </div>
        </div>
      </div>
    </div>

    <div className="bottom-container">
      <div className="footer-link">
        <a className="footer-link" href="https://www.linkedin.com/in/aaron-badilla-76076b144/" target="_blank" rel="noopener noreferrer">
          LinkedIn
          <i className="fab fa-linkedin"></i>
        </a>
        <a className="footer-link" href="https://twitter.com/aarondbadilla" target="_blank" rel="noopener noreferrer">
          Twitter
          <i className="fab fa-twitter"></i>
        </a>
        <a className="footer-link" href="https://www.instagram.com/aaronbadilla/" target="_blank" rel="noopener noreferrer">
          Instagram
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <div className="image-credit">
        <div>
          Icons made by{" "}
          <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">
            Pixel perfect,
          </a>{" "}
          <a href="https://www.freepik.com" title="Freepik">
            Freepik,
          </a>{" "}
          <a href="https://www.flaticon.com/authors/xnimrodx" title="xnimrodx">
            xnimrodx,
          </a>{" "}
          <a href="https://www.flaticon.com/free-icon/graphic-designer_3048189" title="photo3idea_studio">
            photo3idea_studio,
          </a>{" "}
          and{" "}
          <a href="https://www.flaticon.com/authors/dinosoftlabs" title="DinosoftLabs">
            DinosoftLabs
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            {" "}
            www.flaticon.com
          </a>
        </div>
        <div className="footer-copyright">
          <p>© {year}
            Aaron Badilla</p>
        </div>
      </div>
    </div>
  </div>);
}
