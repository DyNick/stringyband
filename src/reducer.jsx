export const initialState = {
    defaultLanguage: 'EN',
    selectedLanguage: 'UA'
  }
  
  export function reducer(state, action) {
    const { type, payload } = action;
    switch (type) {
      case 'LANGUAGE_UPDATE': {
        return { ...state, selectedLanguage: payload };
      }
      default: return state;
    }
  }