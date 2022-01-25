import React from "react";

const CircleCounter = ({ data }) => (
  <div className="circle">
    <span>{data}</span>
    <style>
    {`
      .circle {
        margin: 0 auto;
      }
    `}
  </style>
  </div>
  
);

export default CircleCounter;
