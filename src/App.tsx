import React,{useReducer} from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Youtube from "./components/Youtube/Youtube";
import CarouselInner from "./components/Carousel/CarouselInner";
import CarouselMusic from "./components/CarouselMusic/CarouselMusic";
import YoutubeIframe from "./components/Youtube/YoutubePlayer/YoutubePlayer";
import SoundCloud from "./components/SoundCloud/SoundCloud";
import dictionary from './dictionary.json';
import { initialState, reducer } from './reducer';
import { Context } from "./context";
import Footer from "./components/Footer/Footer";
function App() {
  const localisationStore = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ localisationStore, dictionary }}>
    <div className="App">
      <Header />
      <CarouselInner />
      <div className="container">
        <About />
        <Youtube />
        <CarouselMusic />
        <YoutubeIframe />
        <SoundCloud />
        
      </div>
      <Footer />
    </div>
    </Context.Provider>
  );
}

export default App;
