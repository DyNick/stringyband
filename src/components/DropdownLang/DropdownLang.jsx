import React, { useContext} from "react";
import { Context } from '../../context';

const langs = [
  { shortCode: 'UA', label: 'UA' },
  { shortCode: 'EN', label: 'EN' },
];


function DropdownLang() {

  const {
    localisationStore: [ state, dispatch ]
  } = useContext(Context);

  //const selectedLanguage  = state;

  const handleSelected = (e) => {
    const { target: { value } } = e;
    dispatch({ type: 'LANGUAGE_UPDATE', payload: value });
  }

  function getOptions(langs) {
    return langs.map(({ shortCode, label },index) => {
      return <option key = {index} value={shortCode}>{label}</option>
    });
  }

  return (
    <select onChange={handleSelected}>
      {getOptions(langs)}
    </select>
  );

}

export default DropdownLang;