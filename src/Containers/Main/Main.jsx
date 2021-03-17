import React from 'react';
import Divider from '../../Components/Divider/Divider';
import "./Main.scss";

const Main = () => {
  return (
    <main id="Main">
      <img src="./Images/background.jpeg" alt="main-background-img" className="background-img"/>
      <div className="main-info">
        <h1>FRONT-END DEVELOPER</h1>
        <Divider />
        <p>
          안녕하세요! 주니어 웹 프론트앤드 개발자 <strong>김태형</strong> 의 포트폴리오 입니다.<br />
          <strong>Javascript, React</strong>를 주로 사용하며, 
          <strong> 트랜디한 UI</strong>와 <strong>효율적인 로직</strong>을 지향합니다.
        </p>
      </div>
      <div className="down-container" color="white">
        <button className="down-btn">+&nbsp;내려가기</button>
        <p className="down-arrow">⌄</p>
      </div>
    </main>
  )
}

export default Main
