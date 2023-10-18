import React, { useContext, useEffect, useState } from "react";
import classes from "./PostList.module.css";
import PostListItem from "./PostListItem";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { deletePost, getPosts } from "../API/postAPI";
import Select from "./Select";

const PostList = observer(() => {
  const { posts } = useContext(Context);
  const { users } = useContext(Context);
  const navigate = useNavigate();

  // const [sortType, setSortType] = useState("");

  const removePost = async (post_id) => {
    try {
      const response = await deletePost(post_id);
      posts.removePost(post_id);
    } catch (error) {
      alert("Не удалось удалить пост: ", error);
    }
  };

  const getPostList = async () => {
    try {
      const response = await getPosts();
      posts.setPosts(response.data);
    } catch (error) {
      alert("Не удалось загрузить список постов");
    }
  };

  useEffect(() => {
    getPostList();
  }, []);

  //

  // const sortList = (sortBy) => {
  //   const sortedList = [...posts.postList];
  //   // console.log(sortedList);

  //   if (sortedList.find((obj) => typeof obj[sortBy] !== "number")) {
  //     console.log("Сортируем строки");
  //     return sortedList.sort((a, b) =>
  //       a[sortBy].toString().localeCompare(b[sortBy])
  //     );
  //   } else {
  //     console.log("Сортируем числа");

  //     return sortedList.sort((a, b) =>
  //       a[sortBy].toString().localeCompare(b[sortBy])
  //     );
  //   }
  //   sortedList.sort((a, b) => {});

  //   setSortType(sortBy);
  // };

  return (
    <Container>
      {/* <Select value={sortType} onChange={sortList} /> */}
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
          onClick={() => {
            if (users.loggedIn) {
              navigate("/create");
            } else {
              alert("Вы не авторизованы");
            }
          }}
        >
          Написать пост...
        </button>
      </div>
    </Container>
  );
});

export default PostList;
