import React, { useState, useEffect } from "react";
import axios from "axios";

// API KEY
const API_KEY = process.env.REACT_APP_API_KEY;

export default function Tag() {
  const [gif, setGif] = useState("");
  const [tag, setTag] = useState("dogs");

  const fetchGIF = async (tag) => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

    const { data } = await axios.get(url);

    const imageSrc = data.data.images.downsized_large.url;
    setGif(imageSrc);
  };

  console.log(API_KEY);
  // COMPONENT DID MOUNT .... first render
  useEffect(() => {
    fetchGIF(tag);
  }, [tag]);

  const handleClick = () => {
    fetchGIF(tag);
  };

  return (
    <div className="container">
      <h1>Random {tag} GIF</h1>
      <img width="500" src={gif} alt="random gif" />
      <input value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={handleClick}>CLICK FOR NEW</button>
    </div>
  );
}
