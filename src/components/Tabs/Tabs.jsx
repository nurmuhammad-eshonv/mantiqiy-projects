import React, { useState } from "react";
import "./Tab.css";

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
    <>
      <div className="wrraa">
        <button onClick={handleHome} className="btn">Home</button>
        <button onClick={handleNews} className="btn">News</button>
        <button onClick={handleLocation} className="btn">Location</button>
      </div>
      <div className="title-wr">
        <h1 className="title">{info}</h1>
      </div>
    </>
  );
}

export default Tabs;
