import { useState, useEffect } from "react";
export function YoutubeData(url) {
  const [youtubeItem, setYouTubeitem] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
        "X-RapidAPI-Key": "5611f49d25mshecb976592d6b087p1888a1jsn8ebedefe32e9",
      },
    };

    fetch(
      url,
      options
    )
      .then((response) => response.json())
      .then((response) => setYouTubeitem(response.items))
      .catch((err) => console.error(err));
  }, []);
  return youtubeItem;
}
