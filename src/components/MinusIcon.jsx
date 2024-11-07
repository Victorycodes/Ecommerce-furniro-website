import React from "react";

const MinusIcon = ({ className, onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="2"
      viewBox="0 0 8 2"
      fill="none"
      className={className}
      onClick={onClick}
    >
      <path 
        d="M7.312 0.52V1.752H0.928V0.52H7.312Z" 
        fill="black" 
      />
    </svg>
  );
};

export default MinusIcon;
