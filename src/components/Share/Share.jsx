import React from "react";
import style from "./Share.module.scss";
// interface shareProp {
//   url: string;
//   title: string;
// }
const Share = (prop) => {
  const imgClickedHandler = (event) => {
    event.stopPropagation();
    const value = event.target.getAttribute("data-value");
    const postUrl = encodeURI(prop.url);
    const postTitle = encodeURI(prop.title);
    if (value === "facebook") {
      window.open(`https://www.facebook.com/sharer.php?u=${postUrl}`);
    } else if (value === "twitter") {
      window.open(`https://twitter.com/share?url=${postUrl}&text=${postTitle}`);
    } else if (value === "whatsapp") {
      window.open(`https://wa.me/?text=${postTitle} ${postUrl}`);
    } else {
      return null;
    }
  };
  return (
    <div className={style.shareBtnContainer}>
      <span
        className={`${style.icon} icon-facebook2`}
        data-value="facebook"
        onClick={imgClickedHandler}
      ></span>
      <span
        className={`${style.icon} icon-twitter`}
        data-value="twitter"
        onClick={imgClickedHandler}
      ></span>
      <span
        className={`${style.icon} icon-whatsapp`}
        data-value="whatsapp"
        onClick={imgClickedHandler}
      ></span>
    </div>
  );
};

export default Share;
