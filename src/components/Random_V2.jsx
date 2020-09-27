import React, { useState } from "react";

import useGif from "../useGif.js";
// API KEY
const API_KEY = process.env.REACT_APP_API_KEY;

export default function Random() {
  const { gif, fetchGIF } = useGif(tag);

  const handleClick = () => fetchGIF();

  return (
    <div className="container">
      <h1>Random GIF</h1>
      <img width="500" src={gif} alt="random gif" />
      <button onClick={handleClick}>CLICK FOR NEW</button>
    </div>
  );
}
