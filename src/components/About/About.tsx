import React, { useState, useContext } from "react";
import { Context } from "../../context";

const About = () => {
  const [show, setShow] = useState(false);
  const {
    localisationStore: [state],
    dictionary,
  } = useContext(Context);

  const { selectedLanguage } = state;

  const ABOUT_1 = dictionary[selectedLanguage].translation._ABOUT.firstPart;
  const ABOUT_2 = dictionary[selectedLanguage].translation._ABOUT.secondPart;
  const SHOWMORE = dictionary[selectedLanguage].translation._SHOWMORE;
  const SHOWLESS = dictionary[selectedLanguage].translation._SHOWLESS;
  return (
    <div className="">
      <h1 id="about">STRINGY!</h1>
      <p>{ABOUT_1}</p>

      <div className={show ? "show" : "hide"}>
        <p> {ABOUT_2}</p>
      </div>
      <button className="btn" onClick={() => setShow(!show)}>
    
        {show ? SHOWLESS : SHOWMORE}
      </button>
    </div>
  );
};

export default About;
