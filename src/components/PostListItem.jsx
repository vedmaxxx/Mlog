import React, { useContext } from "react";
import classes from "./PostListItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Context } from "../index";
import { observer } from "mobx-react-lite";

const PostListItem = observer(
  ({
    id,
    title,
    image,
    announcement,
    category,
    views,
    likes,
    date,
    onDelete,
  }) => {
    const navigate = useNavigate();
    const { users } = useContext(Context);

    return (
      <div className={classes.post_small}>
        <NavLink to={`/posts/${id}`}>
          <img
            className={classes.image_small + " " + classes.navlink}
            src={process.env.REACT_APP_BASE_URL + image}
            alt="а где фото..."
          />
        </NavLink>
        <div className={classes.info_container_small}>
          <div className={classes.header}>
            <div className={classes.category}>{category}</div>
            <Link to={`/posts/${id}`} className={classes.title}>
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
        {users.isCurrentUserAdmin() && (
          <button
            className={classes.delete_btn + " end-0"}
            onClick={() => {
              onDelete(id);
            }}
          >
            Удалить
          </button>
        )}
        {users.isCurrentUserAdmin() && (
          <button
            className={classes.edit_btn + " start-0"}
            onClick={() => {
              console.log(`Нажали на редактировать`);
              navigate(`/edit/${id}`);
            }}
          >
            Редактировать
          </button>
        )}
      </div>
    );
  }
);

export default PostListItem;
