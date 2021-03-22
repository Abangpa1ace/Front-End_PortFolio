import React from 'react';
import AboutInfoItem from '../AboutInfoItem/AboutInfoItem';
import { ABOUT_INFO_LIST } from '../../../Data/config';
import "./AboutInfo.scss";

const AboutInfo = ({ isShow }) => {
  return (
    <ul className={`about-info ${ isShow ? 'show' : ''}`}>
      {ABOUT_INFO_LIST.map(item => <AboutInfoItem item={item} />)}
    </ul>
  )
}

export default AboutInfo
