import React, { useContext } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CarouselMusicData } from "./CarouselMusicData";
import style from "./CarouselMusic.module.scss";
import { Context } from "../../context";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 710 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 710, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
function CarouselMusic() {
  const itunesItems = CarouselMusicData();
  const {
    localisationStore: [state],
    dictionary,
  } = useContext(Context);

  const { selectedLanguage } = state;

  const TITLE = dictionary[selectedLanguage].translation._MUSIC;

  return (
    <>
      <h2 id="music">{TITLE}</h2>
      <div className={style.carouselWrapper}>
        
        <Carousel
          swipeable={true}
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
          {itunesItems.map((item, index) => {
            let srcImg = item.artworkUrl100;
            if (srcImg !== undefined) {
              srcImg = srcImg.replace("100x100bb.jpg", "300x300bb.jpg");
            }

            return (
              <div key={index} className={style.carouselItem}>
                <a target="_blank" href={item.collectionViewUrl}>
                  <img src={srcImg} />
                </a>
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}

export default CarouselMusic;
