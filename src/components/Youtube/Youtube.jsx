import { useState,useContext } from "react";
import style from "./Youtube.module.scss";
import Share from "../Share/Share";
import { YoutubeData } from "./YoutubeData";
import { Context } from "../../context";

const Youtube = () => {
  const [itemsShown, setItemsShown] = useState(6);
  const url =
    "https://youtube-v31.p.rapidapi.com/search?channelId=UCmAfIm28uJsFDKquZTfZvkw&part=snippet%2Cid&order=date&maxResults=60";
  const youtubeItems = YoutubeData(url);

  const showMore = () => {
    if (itemsShown + 3 <= youtubeItems.length) {
      setItemsShown(itemsShown + 3);
    } else {
      setItemsShown(itemsShown);
    }
  };
  const {
    localisationStore: [state],
    dictionary,
  } = useContext(Context);

  const { selectedLanguage } = state;

  const TITLE = dictionary[selectedLanguage].translation._NEWS;
  const SHOWMORE = dictionary[selectedLanguage].translation._SHOWMORE;
  return (
 
    <>
      <h2 id="news">{TITLE}</h2>
      <ul className={style.list}>
        {youtubeItems.slice(0, itemsShown).map((item, index) => {
          let str = item.snippet.publishTime;
          let newStr = str.substring(0, 10);
          return (
            <li key={index} className={style.list__item}>
              <div className={style.list__inner}>
                <p className={style.list__date}>{newStr}</p>
                <img
                  className={style.list__imageBanner}
                  src={item.snippet.thumbnails.high.url}
                  alt={item.snippet.title}
                  onClick={() =>
                    window.open(
                      `https://www.youtube.com/watch?v=${item.id.videoId}`,
                      "_blank"
                    )
                  }
                />
                <h3>{item.snippet.title}</h3>
                <p className={style.list__description}>
                  {item.snippet.description}
                </p>
                <div className={style.shareContainer}>
                  <span
                    className={`${style.list__icon} icon-youtube`}
                    onClick={() =>
                      window.open(
                        `https://www.youtube.com/watch?v=${item.id.videoId}`,
                        "_blank"
                      )
                    }
                  ></span>
                  <Share
                    url={`https://www.youtube.com/watch?v=${item.id.videoId}`}
                    title={item.snippet.title}
                  />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <button className="btn btn--center" onClick={() => showMore()}>
        {SHOWMORE}
      </button>
    </>
  );
};

export default Youtube;
