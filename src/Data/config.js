import { FaGithubSquare, FaYoutube, FaLink } from 'react-icons/fa';
import { BsPerson } from 'react-icons/bs';
import { GrPersonalComputer } from 'react-icons/gr';
import { IoMdPaperPlane } from 'react-icons/io';

export const NAVBAR_MENU = [
  {
    id: 1,
    text: "About",
    scroll: 1010,
  },
  {
    id: 2,
    text: "Project",
    scroll: 2020,
  },
  {
    id: 3,
    text: "Contact",
    scroll: 3470,
  },
]

export const ABOUT_INFO_LIST = [
  {
    id: "0",
    subject: "carrier",
    title: "Carrier",
    desc: {
      intro: "끊임없이 도전하며 인생의 발자취를 남기고 있습니다.",
      content: [
        "육군 20사단 ROTC 장교로 복무하며, 용사 및 간부와 소통하며 부대교육훈련을 추진했습니다. 포스코 광양제철소 엔지니어로 2년간 근무하며, 담당라인 생산성 향상과 설비 고도화에 기여했습니다. 주도적인 성장성과 유망한 비전에 매료되어 개발자 커리어 전환에 새로이 도전하게 되었습니다.",
        "좋은 환경과 동료 개발자분들을 만나, 다양한 서비스와 새로운 기술에 즐겁게 도전하고 싶습니다."
      ],
    },
  },
  {
    id: "1",
    subject: "developer",
    title: "Front-End Developer",
    desc: {
      intro: "프론트앤드 개발자로 성장하기 위해 끊임없이 공부중입니다.",
      content: [`HTML5 + CSS3 마크업은 물론, 최신 ES6 기준 Javascript를 능숙하게 다룰 수 있습니다.
      학습과 프로젝트를 통해 React 웹 개발역량을 길렀으며, Sass, Styled-Components와 같은 스타일링부터
      Redux, Redux-Saga 상태관리까지 다양한 라이브러리를 경험하고 있습니다.
      최근에는, Typescript와 Vue에 관심을 가지고 공부하고 있습니다.`],
    },
  },
  {
    id: "2",
    subject: "motto",
    title: "Motto",
    desc: {
      intro: "세련된 UI 디자인과 효율적인 코딩 스타일을 추구합니다.",
      content: [
        "CSS 및 라이브러리를 통해 유려하면서도 섬세한 스타일링을 구현하고, React State를 활용한 동적 애니메이션 구현에 대한 고민과 시도를 지향합니다.",
        "간결하면서도 재활용성 높은 로직을 구현하기 위해, Javascript 공식문서 학습과 데일리 알고리즘을 통해 메서드 숙련도와 객체/함수활용 역량을 향상시키고 있습니다.",
      ],
    },
  },
]

export const ABOUT_INFO_ICONS = {
  carrier: <BsPerson />,
  developer: <GrPersonalComputer />,
  motto: <IoMdPaperPlane />,
}

export const PROJECT_LIST = [
  {
    id: "1",
    img: "./Images/PJT1-baemin-main.png",
    title: {
      category: "[#1. Group]",
      text: "배민문방구 클론 프로젝트",
    },
    summary: "React 클래스형 컴포넌트와 Sass를 활용한 첫 웹페이지 개발경험이자, Django 백엔드와 협업한 팀 프로젝트입니다.",
    team: "* 팀원 : [프론트앤드] 김병진(PM), 김태형, 김동하 / [백앤드] 정지원, 이혜성",
    learnedList: [
      "Class Component 숙달과 LifeCycle 함수의 이해 및 적용",
      "Sass(SCSS)를 활용한 Nested Styling",
      "React-Router를 활용한 SPA 라우팅, withRouterHOC 조건부 라우팅",
      "fetch 함수를 통한 Django 서버 HTTP 요청/응답 처리",
    ],
    links: {
      github: "https://github.com/Abangpa1ace/React-PJT1-Baemin",
      영상: "https://www.youtube.com/watch?v=AaUEtWd0aq4",
    }
  },
  {
    id: "2",
    img: "./Images/PJT2-airbnb-main.png",
    title: {
      category: "[#2. Personal]",
      text: "에어비앤비 클론 프로젝트",
    },
    summary: "React 함수형 컴포넌트와 Styled-Components를 활용했으며, Express.js로 직접 서버를 구현한 개인 프로젝트입니다.",
    learnedList: [
      "Functional Component와 React Hooks API 숙달",
      "Context API(useContext)를 활용한 전역 State 관리",
      "Styled-Components를 활용한 CSS-in-JS 및 컴포넌트 재활용 경험",
      "KAKAO Maps 지도API, react-dates 서드파티 라이브러리 등 다양한 툴 활용",
      "Express.js 서버: RESTful API 구현, 미들웨어 활용(bcrypt, cors, jsonwebtoken)",
    ],
    links: {
      github: "https://github.com/Abangpa1ace/React-PJT2-AirTnT",
      영상: "/",
      "사이트 링크": "https://inspiring-mcnulty-061b47.netlify.app",
    }
  },
  {
    id: "3",
    img: "./Images/PJT3-nike-main.png",
    title: {
      category: "[#3. Personal]",
      text: "나이키 클론 프로젝트",
    },
    summary: "React와 Redux & Redux-Saga를 조합하여, Store 전역상태 관리 및 비동기 요청 숙달에 중점을 둔 프로젝트입니다.",
    learnedList: [
      "Functional Component와 React Hooks API 숙달",
      "Redux, React-Redux Hooks를 활용한 Store 전역상태 참조 및 디스패치",
      "Redux-Saga, Axios 라이브러리를 통한 비동기 서버 요청",
      "Custom Hooks 제작 및 상태값에 따른 스크롤 애니메이션 구현",
      "Express.js 서버: POST Request 검사 및 false 시 Error Response 반환 (Redux 에러처리 연계)",
    ],
    links: {
      github: "https://github.com/Abangpa1ace/React-PJT3-Nikel",
      영상: "/",
      "사이트 링크": "http://ec2-54-180-151-69.ap-northeast-2.compute.amazonaws.com",
    }
  },
]

export const PROJECT_ICONS = {
  github: <FaGithubSquare />,
  영상: <FaYoutube />,
  "사이트 링크": <FaLink />,
}