import React from "react";
import classes from "./Post.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import { Link, NavLink } from "react-router-dom";

const PostListItem = ({
  id,
  title,
  image,
  // body,
  announcement,
  category,
  views,
  likes,
  date,
  onDelete,
}) => {
  return (
    <div className={classes.post_small}>
      <NavLink>
        <img
          className={classes.image_small + " " + classes.navlink}
          src={image}
          alt="а где фото..."
        />
      </NavLink>
      <div className={classes.info_container_small}>
        <div className={classes.header}>
          <div className={classes.category}>{category}</div>
          <Link to="/" className={classes.title}>
            {title}
          </Link>
          <div>{announcement}</div>
        </div>
        <div className={classes.footer}>
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
          <div className={classes.date}>{date}</div>
        </div>
      </div>
      <button
        className={classes.delete_btn + " end-0"}
        onClick={() => {
          onDelete(id);
        }}
      >
        Удалить
      </button>
    </div>
  );
};

export default PostListItem;
