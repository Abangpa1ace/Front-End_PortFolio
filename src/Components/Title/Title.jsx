import React from 'react';
import Divider from '../Divider/Divider';
import "./Title.scss";

const Title = ({ children }) => {
  return (
    <div className="title">
      <h2>{children}<span>.</span></h2>
      <Divider background="black" />
    </div>
  )
}

export default Title
