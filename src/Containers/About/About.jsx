import React from 'react';
import Title from '../../Components/Title/Title';
import AboutProfile from './AboutProfile/AboutProfile';
import AboutInfo from './AboutInfo/AboutInfo';
import "./About.scss";

const About = ({ pageY }) => {
  let isShow = pageY > 400;

  return (
    <section id="About">
      <div className="about-container">
        <Title>About Me</Title>
        <AboutProfile isShow={isShow} />
        <AboutInfo isShow={isShow} />
      </div>
    </section>
  )
}

export default About
