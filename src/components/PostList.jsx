import React, { useContext } from "react";
import classes from "./PostList.module.css";
import PostListItem from "./PostListItem";
import { Context } from "../index";
import { observer } from "mobx-react-lite";

const PostList = observer(() => {
  const { posts } = useContext(Context);

  const removePost = (post_id) => {
    posts.removePost(post_id);
  };

  return (
    <div className={classes.post_list}>
      {posts.postList.map((post) => (
        <PostListItem
          key={post.id}
          id={post.id}
          title={post.title}
          image={post.image}
          // body={post.body}
          category={post.category}
          announcement={post.announcement}
          views={post.views}
          likes={post.likes}
          date={post.date}
          onDelete={removePost}
        />
      ))}
      <button className={classes.create_btn}>Написать пост...</button>
    </div>
  );
});

export default PostList;
