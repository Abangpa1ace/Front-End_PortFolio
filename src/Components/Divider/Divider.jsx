import React from 'react';
import "./Divider.scss";

const Divider = ({ color }) => {
  return (
    <div className="divider" style={{ background: color }} />
  )
}

export default Divider
