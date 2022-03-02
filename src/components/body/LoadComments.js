import React from "react";
// import dateFormat from "dateFormat";

const LoadComments = (props) => {
  return props.comments.map((comment) => {
    return (
      <div key={comment.id}>
        <h5>{comment.author}</h5>
        <p>{comment.comment}</p>
        <p>{comment.date}</p>
      </div>
    );
  });
};

export default LoadComments;
