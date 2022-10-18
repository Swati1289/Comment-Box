import React, { useEffect } from "react";
import "./style.css";
import { useState } from "react";
import Comment from "./Comment";
import MainComment from "./MainComment";

function Box(currentUserId) {
  const [localcomment, setLocalComment] = useState([]);

  /*useEffect(() => {
    
      /*{
        id: Math.floor(Math.random() * 10),
        user: "Ramesh",
        parentId: 1,
        comment: "second comment",
        userImg:
          "https://play-lh.googleusercontent.com/Zo6-6_sxZz6E_gVBYUfLQpU6HpYUcRUmPml9sIwtg-D1p25b5EkJfuVANJXUmZIfhKI=w526-h296-rw",
      },
      {
        id: Math.floor(Math.random() * 10),
        user: "Intercontinental",
        parentId: null,
        comment: "3rd comment",
        userImg:
          "https://play-lh.googleusercontent.com/Zo6-6_sxZz6E_gVBYUfLQpU6HpYUcRUmPml9sIwtg-D1p25b5EkJfuVANJXUmZIfhKI=w526-h296-rw",
        createdAt: new Date().getDate(),
      },
    ];
    
  }, []);

  const rootComment = localcomment.filter((com) => com.parentId === null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("links"));
    setLocalComment(data);
  }, []);
  console.log(localcomment);*/

  /*const comments = [
    {
      id: Math.floor(Math.random() * 10),
      user: "Suresh",
      parentId: 1,
      comment: "first comment",
      dateCreated: new Date().getTime(),
      userImg:
        "https://play-lh.googleusercontent.com/Zo6-6_sxZz6E_gVBYUfLQpU6HpYUcRUmPml9sIwtg-D1p25b5EkJfuVANJXUmZIfhKI=w526-h296-rw",
      createdAt: new Date().getDate(),
    },
  ];
  /*useEffect(() => {
    localStorage.setItem("links", JSON.stringify(comments));
  }, []);

  localStorage.setItem("links", JSON.stringify(localcomment));*/
  useEffect(() => {
    localcomment.length &&
      localStorage.setItem("links", JSON.stringify(localcomment));

    if (!localStorage.getItem("links") && localcomment.length === 0) {
      localStorage.setItem("links", JSON.stringify([]));
    }
  }, [localcomment]);

  const returnComment = (text, parentId = null, user = "Intercontinental") => {
    const curDate = new Date().getTime();
    localStorage.setItem("date", curDate);
    console.log(curDate);

    return {
      id: Math.random().toString(36).substr(2, 9),
      comment: text,
      parentId: parentId,
      user: user,
      dateCreated: localStorage.getItem("date"),
      reply: [],
      userImg:
        "https://play-lh.googleusercontent.com/Zo6-6_sxZz6E_gVBYUfLQpU6HpYUcRUmPml9sIwtg-D1p25b5EkJfuVANJXUmZIfhKI=w526-h296-rw",
    };
  };

  /*const returnReplyComment = (id) => {
    const returnData = JSON.parse(localStorage.getItem("links")).filter(
      (data) => data.id === id
    );

    return returnData;
  };

  /*const addReply = (id) => {
    const replyToComment = returnReplyComment(id);
    replyToComment.parentId = id;
    return replyToComment;
    //console.log("reply", replyToComment);
  };
*/
  /*const getCurrentId = (id) => {
    //const currentComment = returnReplyComment(id);
    const returnData = JSON.parse(localStorage.getItem("links"));
    const [curIdData] = returnData.filter((data) => data.id === id);
    console.log(curIdData);
    const curId = curIdData.id;
    console.log(curId);
  };*/

  let data;
  const addComment = (text, parentId) => {
    data = returnComment(text, parentId);
    const commentData = JSON.parse(localStorage.getItem("links"));
    console.log("comment:", commentData);
    console.log("data", data);
    const combineComment = [data, ...commentData];
    console.log(combineComment);
    localStorage.setItem("links", JSON.stringify(combineComment));
    //console.log(localcomment);
    const newComment = JSON.parse(localStorage.getItem("links"));
    setLocalComment(newComment);
    //window.location.reload();
    console.log("newComment:", newComment);
  };

  const newData = JSON.parse(localStorage.getItem("links")) || [];

  const rootData = newData.filter((data) => data.parentId === null);

  const fetchReplies = (Id) => {
    return JSON.parse(localStorage.getItem("links")).filter(
      (local) => local.parentId === Id
    );

    /*const realData = dataGot.filter((data) => (data.id = commentId));
    console.log("real", realData);*/
  };

  console.log(newData);
  return (
    <>
      <div className="box-container">
        {console.log(localcomment)}
        {console.log("length", newData.length)}
        {rootData.length > 0
          ? rootData.map((root, i) => (
              <Comment
                root={root}
                key={i}
                replies={fetchReplies(root.id)}
                fetchReplies={fetchReplies}
                addComment={addComment}
                // newData={localcomment}
                parentId={root.parentId}
              />
            ))
          : ""}
      </div>
      <MainComment handleSbmit={addComment} rootKey={1} />
    </>
  );
}

export default Box;
