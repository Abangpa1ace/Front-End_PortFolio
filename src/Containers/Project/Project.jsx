import React from 'react';
import Title from '../../Components/Title/Title';
import "./Project.scss";

const Project = () => {
  return (
    <section id="Project">
      <div className="about-container">
        <Title>My ProJect</Title>
        <ul className="project-container">
          <li className="project-item">
            <div className="project-img">
              <img src="./Images/background.jpeg" alt="project-img" />
            </div>
            <div className="project-desc">
              <h3><span>[Group]</span> 배민문방구 클론 프로젝트</h3>
            </div>
          </li>

          <li className="project-item">
            <div className="project-img">
              <img src="./Images/background.jpeg" alt="project-img" />
            </div>
            <div className="project-desc">
            <h3><span>[Personal]</span> 에어비앤비 클론 프로젝트</h3>
            </div>
          </li>

          <li className="project-item">
            <div className="project-img">
              <img src="./Images/background.jpeg" alt="project-img" />
            </div>
            <div className="project-desc">
            <h3><span>[Personal]</span> 나이키 클론 프로젝트</h3>
            </div>
          </li>

        </ul>
      </div>
    </section>
  )
}

export default Project
