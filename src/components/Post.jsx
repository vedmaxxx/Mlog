import React, { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import classes from "./Post.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import { Link, useParams } from "react-router-dom";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import { getPosts } from "../API/postAPI";
import { useState } from "react";

const Post = observer(() => {
  const params = useParams();
  const { posts } = useContext(Context);
  const { users } = useContext(Context);

  const [id, setId] = useState(0);
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const [announcement, setAnnouncement] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [userId, setUserId] = useState(0);
  const [likes, setLikes] = useState(0);
  const [views, setViews] = useState(0);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    getPostList(getCurrentPost, getUsers);
  };

  const getPostList = async (cb1, cb2) => {
    try {
      const response = await getPosts();
      posts.setPosts(response.data);
      await cb1();
      console.log("userId: ", userId);
      await cb2();
    } catch (error) {
      alert("Возникла ошибка при загрузке постов getPostList");
    }
  };

  const getUsers = async () => {
    console.log("getUsers() started ");

    const response = users.getUserById(userId);
    console.log(response);
    console.log("getUsers() ended ");
  };

  const getCurrentPost = () => {
    console.log("getCurrentPost() started ");
    const response = posts.getPost(params.id);
    console.log(response);

    setId(response.id);
    setTitle(response.title);
    setBody(response.body);
    setAnnouncement(response.announcement);
    setImage(response.image);
    setDate(response.date);
    setCategory(response.category);
    setUserId(response.userId);

    console.log("getCurrentPost() ended ");
  };

  return (
    <Container className="w-75">
      <div className={classes.container}>
        <div className={classes.header}>
          <div className={classes.category}>{category}</div>
          <div className={classes.date + " ms-3"}>{date}</div>
          <div className={classes.rating}>
            <div className={classes.icon_box}>
              <FontAwesomeIcon icon={faEye} />
              <span> {views}</span>
            </div>
            <div className={classes.icon_box}>
              <FontAwesomeIcon icon={faHeart} />
              <span> {likes}</span>
            </div>
          </div>
        </div>

        <div className={classes.title}>{title}</div>
        <div className={classes.image_container}>
          <img
            className={classes.image}
            src={process.env.REACT_APP_BASE_URL + image}
            alt=""
          />
        </div>
        <div className={classes.announcement}>{announcement}</div>
        <div
          className={classes.body}
          dangerouslySetInnerHTML={{ __html: body }}
        ></div>
        <div className={classes.footer}>
          <Link className={classes.avatar_container}>
            <img
              className={classes.avatar}
              src="https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663229788_10-mykaleidoscope-ru-p-zloi-pushistik-vkontakte-11.jpg"
              alt=""
            />
          </Link>
          <div>
            <Link to="/" className={classes.author_info}></Link>
            <div className={classes.role}>Редактор</div>
          </div>
        </div>
      </div>
    </Container>
  );
});

export default Post;
