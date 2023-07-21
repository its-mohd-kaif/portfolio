import React, { useState, useRef } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import './MyHexButton.css';

const HexButton = ({ href, icon }) => {
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 1000);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const getButtonClass = () => {
    if (isHovered) {
      return 'hex-btn spinning-clockwise';
    } else {
      return 'hex-btn spinning-anticlockwise';
    }
  };

  return (
    <a
      className={getButtonClass()}
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {icon === 'github' ? <AiFillGithub className="icon" /> : <AiFillLinkedin className="icon" />}
    </a>
  );
};

export default HexButton;
