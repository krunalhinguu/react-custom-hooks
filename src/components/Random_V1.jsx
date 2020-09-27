import React, { useState, useEffect } from "react";
import axios from "axios";

// API KEY
const API_KEY = process.env.REACT_APP_API_KEY;

export default function Random() {
  const [gif, setGif] = useState("");

  const fetchGIF = async () => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    const { data } = await axios.get(url);

    const imageSrc = data.data.images.downsized_large.url;
    setGif(imageSrc);
  };

  console.log(API_KEY);
  // COMPONENT DID MOUNT .... first render
  useEffect(() => {
    fetchGIF();
  }, []);

  const handleClick = () => {
    fetchGIF();
  };

  return (
    <div className="container">
      <h1>Random GIF</h1>
      <img width="500" src={gif} alt="random gif" />
      <button onClick={handleClick}>CLICK FOR NEW</button>
    </div>
  );
}
