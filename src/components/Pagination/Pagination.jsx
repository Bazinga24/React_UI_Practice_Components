import React from "react";
import { useState, useEffect } from "react";
import Posts from "./Posts";
import Page from "./Page";
import "./Pagination.css";

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [postPerPage, setPostPerPage] = useState(8);
  //...........................
  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPosts(data);
    setLoading(false);
  };
  //...........................
  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);
  //............................
  const paginateHandler = (number) => {
    setCurrentPage(number);
  };
  const lastIndex = postPerPage * currentPage;
  const firstIndex = lastIndex - postPerPage;
  const currentPosts = posts.slice(firstIndex, lastIndex);
  return (
    <div>
      <h1>My Blog</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Page
        totalPosts={posts.length}
        postPerPage={postPerPage}
        paginateHandler={paginateHandler}
      />
    </div>
  );
}

export default Pagination;
