import React, { useContext } from "react";
import classes from "./PostList.module.css";
import PostListItem from "./PostListItem";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

const PostList = observer(() => {
  const { posts } = useContext(Context);
  const navigate = useNavigate();

  const removePost = (post_id) => {
    posts.removePost(post_id);
  };

  return (
    <Container>
      <div className={classes.post_list}>
        {posts.postList.map((post) => (
          <PostListItem
            key={post.id}
            id={post.id}
            title={post.title}
            image={post.image}
            category={post.category}
            announcement={post.announcement}
            views={post.views}
            likes={post.likes}
            date={post.date}
            onDelete={removePost}
          />
        ))}
        <button
          className={classes.create_btn}
          onClick={() => navigate("/edit")}
        >
          Написать пост...
        </button>
      </div>
    </Container>
  );
});

export default PostList;
