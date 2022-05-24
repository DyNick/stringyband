import React from "react";
import style from "./SoundCloud.module.scss"

function SoundCloud() {
  return (
    <div className={style.soundCloud}>
      <iframe src="https://w.soundcloud.com/player/?url=https://soundcloud.com/stringypunkband/sets/tvoey-podruge-nadoest&color=d81946&theme_color=d81946&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=true&like=false&sharing=false&download=false&buying=false&text_buy_track=false&visual=true" />
    </div>
  );
}

export default SoundCloud;
