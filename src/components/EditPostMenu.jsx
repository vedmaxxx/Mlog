import React from "react";
import { Container } from "react-bootstrap";
import classes from "./EditPostMenu.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const EditPostMenu = () => {
  return (
    <Container className={classes.container}>
      <div className={classes.title}>Новый пост</div>
      <div className={classes.grid}>
        <div>Заголовок поста</div>
        <div>
          <input
            className={classes.input}
            type="text"
            placeholder="Введите заголовок поста..."
          />
        </div>
        <div>Анонс</div>
        <div>
          <input
            className={classes.input}
            type="text"
            placeholder="Введите небольшое описание текста..."
          />
        </div>
      </div>
    </Container>
  );
};

export default EditPostMenu;
