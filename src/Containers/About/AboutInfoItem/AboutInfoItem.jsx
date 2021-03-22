import React from 'react';
import { ABOUT_INFO_ICONS } from '../../../Data/config';
import "./AboutInfoItem.scss";

const AboutInfoItem = ({ item }) => {
  const { id, subject, title, desc } = item;
  return (
    <li key={id} className="info-item">
      <div className="info-icon">
        {ABOUT_INFO_ICONS[subject]}
      </div>
      <h3>{title}</h3>
      <p>
        <strong>{desc.intro}</strong><br />
        {desc.content.map(text => {
          return (
            <>
              {text}<br />
            </>
          )
        })}
      </p>
    </li>
  )
}

export default AboutInfoItem
