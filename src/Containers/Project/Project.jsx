import React from 'react';
import Title from '../../Components/Title/Title';
import ProjectItem from './ProjectItem/ProjectItem';
import { PROJECT_LIST } from '../../Data/config';
import "./Project.scss";

const Project = ({ pageY }) => {
  console.log(pageY > 1400)
  return (
    <section id="Project">
        <ul className={`project-container ${pageY > 1500 ? 'show' : ''}`}>
          <Title>My ProJect</Title>
          {PROJECT_LIST.map(item => <ProjectItem item={item} />)}
        </ul>
    </section>
  )
}

export default Project
