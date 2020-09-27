import React, { useState } from "react";

import useGif from "../useGif.js";

export default function Tag() {
  const [tag, setTag] = useState("dogs");
  const { gif, fetchGIF } = useGif(tag);

  const handleClick = () => fetchGIF();

  return (
    <div className="container">
      <h1>Random {tag} GIF</h1>
      <img width="500" src={gif} alt="random gif" />
      <input value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={handleClick}>CLICK FOR NEW</button>
    </div>
  );
}
