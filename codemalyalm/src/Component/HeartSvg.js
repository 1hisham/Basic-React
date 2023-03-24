import React, { useState, useEffect } from "react";
import "./../styles.css";
let heartBtn = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    width="24"
    height="24"
  >
    <path
      d="M12,21C10.349,21,2,14.688,2,9,2,5.579,4.364,3,7.5,3A6.912,6.912,0,0,1,12,5.051,6.953,6.953,0,0,1,16.5,3C19.636,3,22,5.579,22,9,22,14.688,13.651,21,12,21ZM7.5,5C5.472,5,4,6.683,4,9c0,4.108,6.432,9.325,8,10,1.564-.657,8-5.832,8-10,0-2.317-1.472-4-3.5-4-1.979,0-3.7,2.105-3.721,2.127L11.991,8.1,11.216,7.12C11.186,7.083,9.5,5,7.5,5Z"
      fill="#222222"
    ></path>
  </svg>
);
let redHeart = (
  <svg
    Xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    fill="#A61A2E"
  >
    <path d="M16.5,3A6.953,6.953,0,0,0,12,5.051,6.912,6.912,0,0,0,7.5,3C4.364,3,2,5.579,2,9c0,5.688,8.349,12,10,12S22,14.688,22,9C22,5.579,19.636,3,16.5,3Z"></path>
  </svg>
);

function HeartSvg() {
  let [heartSvg, setSvg] = useState(heartBtn);

  let clickHandler = (op) => {
    console.log(op.target);
    if (heartSvg == heartBtn) {
      setSvg(redHeart);
    } else {
      setSvg(heartBtn);
    }
  };

  return (
    <div className="heart-btn " onClick={clickHandler}>
      {heartSvg}
    </div>
  );
}

export default HeartSvg;
