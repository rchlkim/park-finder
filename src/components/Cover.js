import React from 'react';
import cover from '../images/CoverImg.jpeg';
import './Cover.css'

const Cover = () => {
  return (
      <div className = "cover">
          <img src={cover} alt="img" />
      </div>
  )
}

export default Cover;