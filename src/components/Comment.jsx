import React, { useEffect, useState } from "react";
import MainComment from "./MainComment";

function Comment({
  root,
  id,
  replies,
  fetchReplies,
  addComment,
  parentId = null,
}) {
  const [currentComment, setCurrentComment] = useState();
  const Isreply = currentComment && currentComment.id === root.id;
  console.log("reply", replies);

  /* if (replies && Isreply) {
    const rep = root.reply;
    replies.map((re) => rep.push(re));

    console.log("rrrrrrrrrrr", rep);
  }*/
  /* const getCurrentId = (id) => {
    //const currentComment = returnReplyComment(id);
    const returnData = JSON.parse(localStorage.getItem("links"));
    const [curIdData] = returnData.filter((data) => data.id === id);
    // console.log(curIdData);
    const curId = curIdData.id;
    return curId;
    // console.log(curId);
  };*/

  /*const idcur = getCurrentId(root.id);
  console.log(idcur);*/

  const replyId = parentId ? parentId : root.id;
  console.log("r", replies);

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
      {Isreply && (
        <MainComment handleSbmit={(text) => addComment(text, replyId)} id={1} />
      )}
      {replies && replies.length > 0 && (
        <div className="replies">
          {replies.map((reply) => (
            <Comment root={reply} key={root.id} parentId={root.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Comment;
