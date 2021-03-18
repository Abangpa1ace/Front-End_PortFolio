import React from 'react';
import "./Divider.scss";

const Divider = ({ background }) => {
  return (
    <div className="divider" style={{ background: background }} />
  )
}

export default Divider
