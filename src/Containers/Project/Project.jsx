import React from 'react';
import Title from '../../Components/Title/Title';
import { FaGithubSquare, FaYoutube, FaLink } from 'react-icons/fa';
import "./Project.scss";

const Project = ({ pageY }) => {
  console.log(pageY > 1400)
  return (
    <section id="Project">
        <ul className={`project-container ${pageY > 1500 ? 'show' : ''}`}>
          <Title>My ProJect</Title>
          <li className="project-item">
            <div className="project-img">
              <img src="./Images/PJT1-baemin-main.png" alt="project-img" />
            </div>
            <div className="project-desc">
              <h3><span>[#1. Group]</span> 배민문방구 클론 프로젝트</h3>
              <p className="project-summary">
                React 클래스형 컴포넌트와 Sass를 활용한 첫 웹페이지 개발경험이자, Django 백엔드와 협업한 팀 프로젝트입니다.<br />
                * 팀원 : [프론트앤드] 김병진(PM), 김태형, 김동하 / [백앤드] 정지원, 이혜성
              </p>
              <ul className="project-learned">
                <h4>&lt; What I Learned &gt;</h4>
                <li>Class Component 숙달과 LifeCycle 함수의 이해 및 적용</li>
                <li>Sass(SCSS)를 활용한 Nested Styling</li>
                <li>React-Router를 활용한 SPA 라우팅, withRouterHOC 조건부 라우팅</li>
                <li>fetch 함수를 통한 Django 서버 HTTP 요청/응답 처리</li>
              </ul>
              <div className="project-link">
                <span>
                  <a href="https://github.com/Abangpa1ace/React-PJT1-Baemin" target="_blank" rel="noreferrer">
                    <FaGithubSquare />Github
                  </a>
                </span>
                <span>
                  <a href="https://www.youtube.com/watch?v=AaUEtWd0aq4" target="_blank" rel="noreferrer">
                    <FaYoutube/>영상
                  </a>
                </span>
              </div>
            </div>
          </li>

          <li className="project-item">
            <div className="project-img">
              <img src="./Images/PJT2-airbnb-main.png" alt="project-img" />
            </div>
            <div className="project-desc">
              <h3><span>[#2. Personal]</span> 에어비앤비 클론 프로젝트</h3>
              <p className="project-summary">
                React 함수형 컴포넌트와 Styled-Components를 활용했으며, Express.js로 직접 서버를 구현한 개인 프로젝트입니다.
              </p>
              <ul className="project-learned">
                <h4>&lt; What I Learned &gt;</h4>
                <li>Functional Component와 React Hooks API 숙달</li>
                <li>Context API(useContext)를 활용한 전역 State 관리</li>
                <li>Styled-Components를 활용한 CSS-in-JS 및 컴포넌트 재활용 경험</li>
                <li>KAKAO Maps 지도API, react-dates 서드파티 라이브러리 등 다양한 툴 활용</li>
                <li>Express.js 서버: RESTful API 구현, 미들웨어 활용(bcrypt, cors, jsonwebtoken)</li>
              </ul>
              <div className="project-link">
                <span>
                  <a href="https://github.com/Abangpa1ace/React-PJT2-AirTnT" target="_blank" rel="noreferrer">
                    <FaGithubSquare />Github
                  </a>
                </span>
                <span>
                  <a href="/" target="_blank" rel="noreferrer">
                    <FaYoutube/>영상
                  </a>
                </span>
                <span>
                  <a href="/" target="_blank" rel="noreferrer">
                    <FaLink />사이트 링크
                  </a>
                </span>
              </div>
            </div>
          </li>

          <li className="project-item">
            <div className="project-img">
              <img src="./Images/PJT3-nike-main.png" alt="project-img" />
            </div>
            <div className="project-desc">
              <h3><span>[#3. Personal]</span> 나이키 클론 프로젝트</h3>
              <p className="project-summary">
                React와 Redux & Redux-Saga를 조합하여, Store 전역상태 관리 및 비동기 요청 숙달에 중점을 둔 프로젝트입니다.
              </p>
              <ul className="project-learned">
                <h4>&lt; What I Learned &gt;</h4>
                <li>Functional Component와 React Hooks API 숙달</li>
                <li>Redux, React-Redux Hooks를 활용한 Store 전역상태 참조 및 디스패치</li>
                <li>Redux-Saga, Axios 라이브러리를 통한 비동기 서버 요청</li>
                <li>Custom Hooks 제작 및 상태값에 따른 스크롤 애니메이션 구현</li>
                <li>Express.js 서버: POST Request 검사 및 false 시 Error Response 반환 (Redux 에러처리 연계)</li>
              </ul>
              <div className="project-link">
                <span>
                  <a href="https://github.com/Abangpa1ace/React-PJT3-Nikel" target="_blank" rel="noreferrer">
                    <FaGithubSquare />Github
                  </a>
                </span>
                <span>
                  <a href="/" target="_blank" rel="noreferrer">
                    <FaYoutube/>영상
                  </a>
                </span>
                <span>
                  <a href="/" target="_blank" rel="noreferrer">
                    <FaLink />사이트 링크
                  </a>
                </span>
              </div>
            </div>
          </li>

        </ul>
    </section>
  )
}

export default Project
