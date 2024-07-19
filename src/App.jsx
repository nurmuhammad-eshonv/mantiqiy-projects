import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Calkulator from "./components/calculator/Calkulator";
import Tab from "./components/Tabs/Tabs";
import SocialPost from "./components/SocialPost/SocialPost";
import GameFinder from "./components/gamesFinder/GameFinder";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import ImagesG from "./components/ImageGallary/ImagesG";
function App() {

  return (
    <>
      <Calkulator/>  
      <Tab/>
      <SocialPost/>
      <GameFinder/>
      <ProgressBar/>
      <ImagesG/>

   </>
  );
}

export default App;
