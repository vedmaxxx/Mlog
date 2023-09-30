import React from "react";
import classes from "./PostList.module.css";
import PostListItem from "./PostListItem";

const PostList = () => {
  return (
    <div className={classes.post_list}>
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
    </div>
  );
};

export default PostList;
