import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Calkulator from "./components/calculator/Calkulator";
import Tab from "./components/Tabs/Tabs";
import SocialPost from "./components/SocialPost/SocialPost";
import GameFinder from "./components/gamesFinder/GameFinder";
import ProgressBar from "./components/ProgressBar/ProgressBar";

function App() {

  return (
    <>
      <Calkulator/>  
      <Tab/>
      <SocialPost/>
      <GameFinder/>
      <ProgressBar/>
   </>
  );
}

export default App;
