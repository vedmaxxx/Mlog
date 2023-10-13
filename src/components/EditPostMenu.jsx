import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { Editor } from "@tinymce/tinymce-react";
import classes from "./EditPostMenu.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const EditPostMenu = () => {
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const [announcement, setAnnouncement] = useState("");
  const [image, setImage] = useState();

  // Отслеживание изменения значения поля редактора и сохранение его в body
  const handleEditorChange = (e) => {
    setBody(e.target.getContent());
  };

  // Отправка поста
  const handlePostClick = (e) => {
    e.preventDefault();
    console.log("Заголовок: " + title);
    console.log("Анонс: " + announcement);
    console.log("Картинка: " + image);
    console.log("Текст: " + body);
  };

  return (
    <Container className={classes.container}>
      <Form>
        <div className={classes.title}>Новый пост</div>
        <div className={classes.grid}>
          <div>Заголовок поста</div>
          <div>
            <input
              className={classes.input}
              type="text"
              placeholder="Введите заголовок поста..."
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>Анонс</div>
          <div>
            <input
              className={classes.input}
              type="text"
              placeholder="Введите небольшое описание текста..."
              onChange={(e) => setAnnouncement(e.target.value)}
            />
          </div>

          <div>Обложка</div>
          <div>
            <Form.Group>
              <Form.Control
                type="file"
                className={classes.file_input}
                onChange={(e) => setImage(e.target.value)}
              />
            </Form.Group>
          </div>
          <div></div>

          <div>
            <Editor
              content="<p>This is the initial content of the editor</p>"
              config={{
                plugins: "autolink link image lists print preview",
                toolbar:
                  "undo redo | bold italic | alignleft aligncenter alignright",
              }}
              onChange={handleEditorChange}
            />
          </div>
          <div></div>
          <button className={classes.post_btn} onClick={handlePostClick}>
            Опубликовать
          </button>
        </div>
      </Form>
    </Container>
  );
};

export default EditPostMenu;
