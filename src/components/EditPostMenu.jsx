import React from "react";
import { Container } from "react-bootstrap";
import classes from "./EditPostMenu.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Editor } from "@tinymce/tinymce-react";

const EditPostMenu = () => {
  const handleEditorChange = (e) => {
    console.log(e.target.getContent());
  };

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
        <div>Обложка</div>
        <div>
          <input
            className={classes.file_input}
            type="file"
            placeholder="Введите небольшое описание текста..."
          />
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
            onChange={console.log("заработало")}
          />
        </div>
        <div></div>
        <button className={classes.post_btn}>Опубликовать</button>
      </div>
    </Container>
  );
};

export default EditPostMenu;
