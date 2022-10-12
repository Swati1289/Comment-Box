import React, { useEffect } from "react";

function Comment({ root, handleReply }) {
  const onclick = () => {
    handleReply(root.id);
  };

  const currentDate = new Date().getTime();
  return (
    <div>
      <div className="userBox">
        <img className="useImage" src={root.userImg} alt="" />
        <span className="user">{root.user}</span>
        <span className="comment">{root.comment}</span>
        <div className="reply--block">
          <span>
            {Math.ceil((root.dateCreated - currentDate) / (1000 * 360 * 24))}d
          </span>
          <button onClick={onclick}>reply</button>
        </div>
      </div>
    </div>
  );
}

export default Comment;
