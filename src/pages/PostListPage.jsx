import React from "react";
import PostListItem from "../components/PostListItem";
import PostList from "../components/PostList";

const PostListPage = () => {
  return (
    <div style={{ display: "flex" }}>
      <PostList />

      {/* <PostSmall />
      <PostSmall />
      <PostSmall />
      <PostSmall /> */}
    </div>
  );
};

export default PostListPage;
