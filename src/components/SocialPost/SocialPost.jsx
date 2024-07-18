import React, { Fragment, useState } from "react";
import "./SocialPost.css";
import { AiTwotoneLike } from "react-icons/ai";
import { AiTwotoneDislike } from "react-icons/ai";


function SocialPost() {
  const [counterState, setCounterState] = useState(0);
  const [counterDState, setCounterDState] = useState(0);
  function handleIncrement() {
    setCounterState(counterState + 1);
  }
  function handledecrement() {
    setCounterDState(counterDState + 1);
  }
  return (
    <div className="wrapper">
        <h2>Social Post</h2>
    
      <div className="wrap">
        <h1>{counterDState}</h1>
        <h1 className="">{counterState}</h1>

      </div>

      <button className="btn-i btn-like" onClick={handledecrement}> Likes <AiTwotoneLike className="like"/> </button>
      <button className="btn-i btn-dis" onClick={handleIncrement}>Dislikes <AiTwotoneDislike className="like dislike"/>  </button>
    </div>
  );
}

export default SocialPost;
