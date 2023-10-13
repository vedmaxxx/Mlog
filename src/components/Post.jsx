import React from "react";
import { Container } from "react-bootstrap";
import classes from "./Post.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const Post = () => {
  return (
    <Container className="w-75">
      <div className={classes.container}>
        <div className={classes.header}>
          <div className={classes.category}>лонгрид</div>
          <div className={classes.date + " ms-3"}>11.10.2023</div>
          <div className={classes.rating}>
            <div className={classes.icon_box}>
              <FontAwesomeIcon icon={faEye} />
              <span> 30</span>
            </div>
            <div className={classes.icon_box}>
              <FontAwesomeIcon icon={faHeart} />
              <span> 20</span>
            </div>
          </div>
        </div>

        <div className={classes.title}>Заголовок</div>
        <div className={classes.image_container}>
          <img
            className={classes.image}
            src="https://snob.ru/indoc/original_images/34e/IMAGE_2023-06-07_221852.jpg"
            alt=""
          />
        </div>
        <div className={classes.announcement}>Текст анонса</div>
        <div className={classes.body}>HTML-ник редактора</div>
        <div className={classes.footer}>
          <Link className={classes.avatar_container}>
            <img
              className={classes.avatar}
              src="https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663229788_10-mykaleidoscope-ru-p-zloi-pushistik-vkontakte-11.jpg"
              alt=""
            />
          </Link>
          <div>
            <Link to="/" className={classes.author_info}>
              Иванов иван иванович
            </Link>
            <div className={classes.role}>Редактор</div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Post;
