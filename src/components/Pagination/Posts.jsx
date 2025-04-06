import React from "react";

function Posts({ posts, loading }) {
  return (
    <>
      {loading && <h1>Loading...........</h1>}
      {!loading && (
        <ul className="post-container">
          {posts.map((post, index) => (
            <li key={index}>{post.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Posts;
