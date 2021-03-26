import React from "react";

const Post = ({ post, authorName }) => {

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title"> {post.title} </h5>
        <p className="card-text">{post.body}</p>
        <h6 className="card-subtitle mb-2 text-muted"> {authorName}</h6>
      </div>
    </div>
  );
};

export default Post;
