import React, { useEffect, useState } from "react";
import MainComment from "./MainComment";

function Comment({ root, id, addComment, currentUserId, parentId = null }) {
  const [currentComment, setCurrentComment] = useState();
  const reply = currentComment && currentComment.id === root.id;

  /* const getCurrentId = (id) => {
    //const currentComment = returnReplyComment(id);
    const returnData = JSON.parse(localStorage.getItem("links"));
    const [curIdData] = returnData.filter((data) => data.id === id);
    // console.log(curIdData);
    const curId = curIdData.id;
    return curId;
    // console.log(curId);
  };*/
  const getReplies = (commentId) => {
    return JSON.parse(localStorage.getItem("links")).filter(
      (local) => local.parentId === commentId
    );

    /*const realData = dataGot.filter((data) => (data.id = commentId));
    console.log("real", realData);*/
  };

  /*const idcur = getCurrentId(root.id);
  console.log(idcur);*/
  const replies = getReplies(root.id);
  const replyId = parentId ? parentId : root.id;
  console.log("r", replyId);

  const currentDate = new Date().getTime();

  return (
    <div>
      <div className="userBox">
        <img className="useImage" src={root.userImg} alt="" />
        <span className="user">{root.user}</span>
        <span className="comment">{root.comment}</span>
        <div className="reply--block">
          <span>
            {Math.floor((currentDate - root.dateCreated) / (1000 * 360 * 24))}d
          </span>

          <button
            onClick={() => {
              setCurrentComment({ id: root.id });
            }}
          >
            reply
          </button>
        </div>
      </div>

      {replies.length > 0 && (
        <div className="replies">
          {replies.map((reply) => (
            <Comment
              root={reply}
              key={root.id}
              currentUserId={currentUserId}
              parentId={root.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Comment;
