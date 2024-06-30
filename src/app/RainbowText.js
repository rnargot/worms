// src/RainbowText.js
import React from 'react';
import './RainbowText.css';

const RainbowText = ({ text }) => {
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo'];

  return (
    <div className="rainbow-text">
      {text.split('').map((char, index) => (
        <span
          key={index}
          style={{ color: colors[index % colors.length] }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default RainbowText;
