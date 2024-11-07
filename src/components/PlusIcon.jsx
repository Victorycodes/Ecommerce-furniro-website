import React from "react";

const PlusIcon = ({ className, onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="9"
      height="9"
      viewBox="0 0 9 9"
      fill="none"
      className={className}
      onClick={onClick}
    >
      <path
        d="M8.552 4.768H5.144V8.224H3.784V4.768H0.392V3.536H3.784V0.0639992H5.144V3.536H8.552V4.768Z"
        fill="black"
      />
    </svg>
  );
};

export default PlusIcon;
