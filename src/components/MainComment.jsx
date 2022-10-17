//import React, { useEffect } from "react";
import "./style.css";
import { FaPaperPlane, FaRegMoneyBillAlt } from "react-icons/fa";
import { useState } from "react";

function MainComment({ handleSbmit, setCurrentComment }) {
  const [text, setText] = useState("");

  const onsubmit = (e) => {
    e.preventDefault();
    handleSbmit(text);
    // const data = JSON.parse(localStorage.getItem("links"));

    console.log(text);
    e.target.reset();
    setText("");

    setCurrentComment(null);

    //console.log("text:", text);
  };
  const isInputDisabled = text.length === 0;

  return (
    <div>
      <form onSubmit={onsubmit} className="main--comment">
        <FaPaperPlane className="paper-plane" />
        <input
          type="text"
          placeholder="Add a Comment"
          id="text"
          name="text"
          onChange={(e) => setText(e.target.value)}
        />
        <button className="post" disabled={isInputDisabled}>
          POST
        </button>
      </form>
    </div>
  );
}

export default MainComment;
