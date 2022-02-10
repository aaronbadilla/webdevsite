import React from 'react'
import './footer.styles.scss'
import Year from '../getYear/getYear.component'

const Footer = () => (
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
          <p>©{Year} Aaron Badilla</p>
        </div>
      </div>
    </div>
)

export default Footer