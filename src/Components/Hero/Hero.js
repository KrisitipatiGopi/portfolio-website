import React from 'react';
import './Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src="" alt="" />
      <h1><span>I'm Kristipati Gopi,</span> a frontend developer from Hyderabad.</h1>
      <p>I have over 2 years of experience in frontend development, specializing in React JS.</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
        </div>
        <div className="hero-resume">
          <a href='/gopi.pdf' target='_blank' rel="noopener noreferrer">My Resume</a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
