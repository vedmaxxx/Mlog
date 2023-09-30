import React from "react";
import classes from "./Post.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import { Link, NavLink } from "react-router-dom";

const PostSmall = () => {
  return (
    <div className={classes.post_small}>
      <NavLink>
        <img
          className={classes.image_small + " " + classes.navlink}
          src="https://image.mel.fm/i/i/iCp9WAF4mZ/590.jpg"
          alt=""
        />
      </NavLink>

      <div className={classes.info_container_small}>
        <div className={classes.header}>
          <div className={classes.category}>text</div>
          <Link to="/" className={classes.title}>
            Очень длинный заголовок
          </Link>
          <div>Анонс-текст, посвященный чемуто-там</div>
        </div>
        <div className={classes.footer}>
          <div className={classes.rating}>
            <div className={classes.icon_box}>
              <FontAwesomeIcon icon={faEye} />
              <span> 253</span>
            </div>
            <div className={classes.icon_box}>
              <FontAwesomeIcon icon={faHeart} />
              <span> 10</span>
            </div>
          </div>
          <div className={classes.date}>30.09.2023</div>
        </div>
      </div>
    </div>
  );
};

export default PostSmall;
