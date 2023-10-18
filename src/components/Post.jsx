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
  const [likes, setLikes] = useState(0);
  const [views, setViews] = useState(0);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    getPosts().then((gotPosts) => {
      posts.setPosts(gotPosts.data);

      const foundPost = gotPosts.data.find((post) => post.id == params.id);
      setId(foundPost.id);
      setTitle(foundPost.title);
      setBody(foundPost.body);
      setAnnouncement(foundPost.announcement);
      setImage(foundPost.image);
      setDate(foundPost.date);
      setCategory(foundPost.category);
      setViews(foundPost.views);
      setLikes(foundPost.likes);

      const user = users.getUserById(foundPost?.userId);
      setFirstname(user.first_name);
      setLastname(user.last_name);
      setAvatar(user.avatar);
    });
  }, []);

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
            <img className={classes.avatar} src={avatar} alt="" />
          </Link>
          <div>
            <Link to="/" className={classes.author_info}></Link>
            <div>
              {firstname} {lastname}
            </div>
            <div className={classes.role}>Редактор</div>
          </div>
        </div>
      </div>
    </Container>
  );
});

export default Post;
