import React ,{ useState, useEffect } from "react";
export function CarouselMusicData() {

    const [itunesItem, setItunesitem] = useState([]);
    const fetchData = React.useCallback(() => {
      const options = {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        },
      };
  
      fetch("https://api.band.link/itunes-albums/1448873951",
        options
      )
        .then((response) => response.json())
        .then((response) => setItunesitem(response.data.results))
        .catch((err) => console.error(err));
    }, []);
    React.useEffect(() => {
      fetchData()
    }, [fetchData])

    return itunesItem

}


