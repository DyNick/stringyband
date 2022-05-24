import { useContext, useState } from "react";
import styles from "./Navigation.module.scss";
import { Link, animateScroll as scroll } from "react-scroll";
import { Context } from "../../context";
const Navigation = () => {
  const [open, setOpen] = useState(false);

  function openHandler(value) {
    setOpen(value);
    console.log(value);
  }
  const {
    localisationStore: [state],
    dictionary,
  } = useContext(Context);

  const { selectedLanguage } = state;

  const navigation = dictionary[selectedLanguage].translation._NAVIGATION;
  return (
    <nav className={styles.navigation}>
      <ul className={!open ? "" : styles.navMob}>
        {navigation.map((item, index) => {
          return (
            <li>
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to={item.title}
                key={index}
                onClick={() => {
                  openHandler(!open);
                }}
              >
                {item.text}
              </Link>
            </li>
          );
        })}
      </ul>
      <button
        className={!open ? styles.btnMenu : `${styles.btnMenu} ${styles.on} `}
        onClick={() => {
          openHandler(!open);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Navigation;
