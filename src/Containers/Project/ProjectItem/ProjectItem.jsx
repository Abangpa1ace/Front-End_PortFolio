import React from 'react';
import { PROJECT_ICONS } from '../../../Data/config';
import "./ProjectItem.scss";

const ProjectItem = ({ item }) => {
  const { id, img, title, summary, team, learnedList, links } = item;

  return (
    <li key={id} className="project-item">
      <div className="project-img">
        <img src={img} alt="project-img" />
      </div>
      <div className="project-desc">
        <h3><span>{title.category}</span> {title.text}</h3>
        <p className="project-summary">
          {summary}<br />
          {team}
        </p>
        <ul className="project-learned">
          <h4>&lt; What I Learned &gt;</h4>
          {learnedList && learnedList.map((learned, idx) => 
            <li key={idx}>{learned}</li>
          )}
        </ul>
        <div className="project-link">
          {Object.entries(links).map((link, idx) => {
            return (
              <span>
                <a href={link[1]} target="_blank" rel="noreferrer">
                  {PROJECT_ICONS[link[0]]}{link[0]}
                </a>
              </span>
            )
            })}
        </div>
      </div>
    </li>
  )
}

export default ProjectItem
