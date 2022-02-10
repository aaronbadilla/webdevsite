import React, {useState} from "react";
import "./App.css"

import Header from './components/header/header.component'
import Homepage from './components/pages/homepage/homepage.component'
import Profile from './components/pages/profile/profile.component'
import Portfolio from './components/pages/portfolio/portfolio.component'
import Skills from './components/pages/skills/skills.component'
import Contact from './components/pages/contact/contact.component'
import Footer from './components/footer/footer.component'

export default function App(props) {
  const year = new Date().getFullYear();

  return (
  <div>
    <Header/>
    <Homepage/>
    <Profile/>
    <Portfolio/>    
    <Skills/>
    <Contact/>
    <Footer/>
  </div>);
}
