import React from 'react';
import "./AboutProfile.scss";

const AboutProfile = ({ isShow }) => {
  return (
    <div className={`about-profile ${ isShow ? 'show' : ''}`}>
      <div className="profile-img">
          <img src="./Images/profile-img.jpeg" alt="profile-img" />
      </div>
      <div className="profile-desc">
        <p>김태형 (TaeHyung Kim)</p>
        <p>1993. 08. 30.</p>
        <p>(Mobile) 010-4136-8349</p>
        <p>(email) dyek72731@gmail.com</p>
      </div>
    </div>
  )
}

export default AboutProfile
