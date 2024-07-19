import React, { useState } from "react";
import "./Tab.css";
import { GoArrowDown } from "react-icons/go";
import { GoArrowDownLeft } from "react-icons/go";
import { GoArrowDownRight } from "react-icons/go";

function Tabs() {
  const [info, setInfo] = useState("this is HOME page");
  
  function handleHome (){
    setInfo("this is HOME page")
  }
  function handleNews () {
    setInfo("this is News page")
  }
  function handleLocation () {
    setInfo("this is Location page")
  }

  return (  
    <div className="tab-wr">
      <h2 className="tab-title">Click one of Tabs </h2>
      <GoArrowDownLeft  className="arrow"/>
      <GoArrowDown className="arrow" />
      <GoArrowDownRight className="arrow" />
      <div className="wrraa">
        <button onClick={handleHome} className="btn">Home</button>
        <button onClick={handleNews} className="btn">News</button>
        <button onClick={handleLocation} className="btn">Location</button>
      </div>
      <div className="title-wr">
        <h1 className="title">{info}</h1>
      </div>
    </div>
  );
}

export default Tabs;
