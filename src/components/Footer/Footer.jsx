import {useContext} from "react";
import styles from "./Footer.module.scss";
import { Context } from "../../context";

function Footer() {
  const {
    localisationStore: [state],
    dictionary,
  } = useContext(Context);

  const { selectedLanguage } = state;

  const TITLE = dictionary[selectedLanguage].translation._CONTACT;
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contacts}>
          <h2>{TITLE}</h2>
          <ul >
            <li className="icon-envelop">
              <a href="mailto:PUNKBAND.STRINGY@GMAIL.COM">
                PUNKBAND.STRINGY@GMAIL.COM
              </a>
            </li>
            <li className="icon-phone">
              <a href="tel:380935603746">+38 093 560 37 46</a>
            </li>
            <li className={`${styles.fb} icon-facebook2`}>
              <a href="https://www.facebook.com/illia.dryha/">illia.dryha</a>
              <a href="https://www.facebook.com/punkbandstringy/">
                punkbandstringy
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.sourcesBlock}>
          {/* <h2>All your idols are here</h2> */}
          <ul className={styles.sources}>
            <li>
              <a
                className="icon-youtube"
                href="https://www.youtube.com/channel/UCmAfIm28uJsFDKquZTfZvkw?view_as=subscriber"
              >
                {" "}
              </a>
            </li>
            <li>
              <a className="icon-bandcamp" href="https://stringy.bandcamp.com/">
                {" "}
              </a>
            </li>
            <li>
              <a
                className="icon-soundcloud2"
                href="https://soundcloud.com/stringypunkband"
              >
                {" "}
              </a>
            </li>
            <li>
              <a
                className="icon-facebook2"
                href="https://www.facebook.com/punkbandstringy/"
              >
                {" "}
              </a>
            </li>
            <li>
              <a
                className="icon-google-plus2"
                href="https://play.google.com/store/music/artist/Stringy?id=A2wbpupjouubrsxdcn5m43usen4"
              >
                {" "}
              </a>
            </li>
            <li>
              <a
                className="icon-itunes"
                href="https://itunes.apple.com/us/artist/stringy/1448873951"
              >
                {" "}
              </a>
            </li>
            <li>
              <a
                className="icon-instagram"
                href="https://www.instagram.com/punkbandstringy/"
              >
                {" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
