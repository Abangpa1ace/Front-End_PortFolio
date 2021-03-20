import React from 'react';
import { BsPerson } from 'react-icons/bs';
import { GrPersonalComputer } from 'react-icons/gr';
import { IoMdPaperPlane } from 'react-icons/io';
import "./AboutInfo.scss";

const AboutInfo = ({ isShow }) => {
  return (
    <ul className={`about-info ${ isShow ? 'show' : ''}`}>
      <li className="info-item">
        <div className="info-icon">
          <BsPerson />
        </div>
        <h3>Carrier</h3>
        <p>
          <strong>끊임없이 도전하며 인생의 발자취를 남기고 있습니다.</strong><br />
          육군 20사단 ROTC 장교로 복무하며, 용사 및 간부와 소통하며 부대교육훈련을 추진했습니다.
          포스코 광양제철소 엔지니어로 2년간 근무하며, 담당라인 생산성 향상과 설비 고도화에 기여했습니다.
          주도적인 성장성과 유망한 비전에 매료되어 개발자 커리어 전환에 새로이 도전하게 되었습니다.<br />
          좋은 환경과 동료 개발자분들을 만나, 다양한 서비스와 새로운 기술에 즐겁게 도전하고 싶습니다.
        </p>
      </li>

      <li className="info-item">
        <div className="info-icon">
          <GrPersonalComputer />
        </div>
        <h3>Front-End Developer</h3>
        <p>
          <strong>프론트앤드 개발자로 성장하기 위해 끊임없이 공부중입니다.</strong><br />
          HTML5 + CSS3 마크업은 물론, 최신 ES6 기준 Javascript를 능숙하게 다룰 수 있습니다.
          학습과 프로젝트를 통해 React 웹 개발역량을 길렀으며, Sass, Styled-Components와 같은 스타일링부터
          Redux, Redux-Saga 상태관리까지 다양한 라이브러리를 경험하고 있습니다.
          최근에는, Typescript와 Vue에 관심을 가지고 공부하고 있습니다.
        </p>
      </li>

      <li className="info-item">
        <div className="info-icon">
          <IoMdPaperPlane />
        </div>
        <h3>Motto</h3>
        <p>
          <strong>세련된 UI 디자인과 효율적인 코딩 스타일을 추구합니다.</strong><br />
          CSS 및 라이브러리를 통해 유려하면서도 섬세한 스타일링을 구현하고, React State를 활용한 동적 애니메이션 구현에 대한 고민과 시도를 지향합니다.<br />
          간결하면서도 재활용성 높은 로직을 구현하기 위해, Javascript 공식문서 학습과 데일리 알고리즘을 통해 메서드 숙련도와 객체/함수활용 역량을 향상시키고 있습니다.
        </p>
      </li>

    </ul>
  )
}

export default AboutInfo
