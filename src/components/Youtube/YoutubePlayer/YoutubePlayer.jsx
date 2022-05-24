import { useState, useContext } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { YoutubeData } from "../YoutubeData";
import style from "./YoutubePlayer.module.scss";
import { Context } from "../../../context";

function YoutubeIframe() {
  const {
    localisationStore: [state],
    dictionary,
  } = useContext(Context);

  const { selectedLanguage } = state;

  const TITLE = dictionary[selectedLanguage].translation._VIDEO;
  const url = "https://youtube-v31.p.rapidapi.com/search?channelId=UCmAfIm28uJsFDKquZTfZvkw&part=snippet%2Cid&order=date&maxResults=60";
  const youtubeItems = YoutubeData(url);
  //let f = youtubeItems[0].id.videoId;
  const [video, setVideo] = useState("IapkugbI5MY");
  const clickHandler = (videoId) => {
    setVideo(videoId);
  };

  const responsive = { 
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 1,
    },
  };
  return (
    <div id="video" className={style.videoContainer}>
      <h2>{TITLE}</h2>
      <div className={style.video}>
        <iframe
          src={`https://www.youtube.com/embed/${video}?autoplay=1`}
          title="video"
        > </iframe>
      </div>

      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true}
        additionalTransfrom={0}
        arrows
        autoPlay={false}
        autoPlaySpeed={300000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
      >
        {youtubeItems.map((item, index) => {
          return (
            <div key={index} className={style.item}>
              <img
                className={""}
                src={item.snippet.thumbnails.high.url}
                alt={item.snippet.title}
                onClick={() =>
                  clickHandler(
                    item.id.videoId,
                    item.snippet.thumbnails.high.url
                  )
                }
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default YoutubeIframe;
