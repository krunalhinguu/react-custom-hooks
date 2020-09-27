import { useState, useEffect } from "react";
import axios from "axios";

// API KEY
const API_KEY = process.env.REACT_APP_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
  const [gif, setGif] = useState("");

  const fetchGIF = async (tag) => {
    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);

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

  return { gif, fetchGIF };
};

export default useGif;
