import React, { useContext, useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { Editor } from "@tinymce/tinymce-react";
import { loggedInClient } from "../API";
import { useNavigate, useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

import classes from "./EditPostMenu.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../images/logo.jpg";
import { createPost, getPost, updatePost } from "../API/postAPI";

const EditPostMenu = observer(({ mode }) => {
  const { posts } = useContext(Context);
  const { users } = useContext(Context);

  console.log("Текущий пользователь: ", users.user);

  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const [announcement, setAnnouncement] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [userId, setUserId] = useState(users.user.id);
  const [likes, setLikes] = useState(0);
  const [views, setViews] = useState(0);

  const navigate = useNavigate();
  const params = useParams();

  const handleEditorChange = (e) => {
    setBody(e.target.getContent());
  };

  useEffect(() => {
    if (mode == "edit") {
      getCurrentPost(params.id);
    }
  }, []);

  const handlePostClick = (e) => {
    e.preventDefault();
    if (mode == "edit") {
      updateCurrentPost();
    }
    if (mode == "create") {
      createNewPost();
    }
    navigate("/posts");
  };

  const selectFile = async (e) => {
    const imageData = new FormData();
    imageData.append("file", e.target.files[0]);
    const response = await loggedInClient.post("/file", imageData);
    setImage(response.data.filename);
  };

  const updateCurrentPost = async () => {
    // PUT-запрос
    const post = {
      id: params.id,
      userId: userId,
      title: title || "Заголовок",
      body: body || "Текст",
      announcement: announcement || "Анонс",
      category: category,
      views: views,
      likes: likes,
      date: date,
      image: image,
    };

    const response = await updatePost(params.id, post);
    console.log(response);
  };

  // Получаем c сервера?(можно ли из стора?) данные о посте, который редактируем
  const getCurrentPost = async (post_id) => {
    const response = await getPost(post_id);

    setTitle(response.data.title);
    setBody(response.data.body);
    setAnnouncement(response.data.announcement);
    setImage(response.data.image);
    setDate(response.data.date);
    setCategory(response.data.category);
    setUserId(response.data.userId);
  };

  const createNewPost = async () => {
    // добавить разделение лонгрид/шорт
    console.log("users.user.id, :", users.user.id);
    const newPost = {
      userId: users.user.id,
      title: title || "Заголовок",
      body: body || "Текст",
      announcement: announcement || "Анонс",
      category: "short",
      views: 0,
      likes: 0,
      date: new Date().toISOString().slice(0, 10),
      image:
        image ||
        "https://cdnn21.img.ria.ru/images/151683/46/1516834602_0:161:3071:1888_1920x0_80_0_0_00f3d0ffc928e8b53c892093bbe5cac7.jpg",
    };
    try {
      const response = await createPost(newPost);
      posts.addPost(response.data);
    } catch (error) {
      alert("Не удалось добавить пользователя");
    }
  };

  function getTitle() {
    if (mode == "edit") {
      return "Редактирование поста";
    }
    if (mode == "create") {
      return "Создание нового поста";
    }
  }

  return (
    <Container className={classes.container}>
      <Form>
        <div className={classes.title}>{getTitle()}</div>
        <div className={classes.grid}>
          <div>Заголовок поста</div>
          <div>
            <input
              className={classes.input}
              type="text"
              placeholder="Введите заголовок поста..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>Анонс</div>
          <div>
            <input
              className={classes.input}
              type="text"
              placeholder="Введите небольшое описание текста..."
              value={announcement}
              onChange={(e) => setAnnouncement(e.target.value)}
            />
          </div>

          <div>Обложка</div>
          <div>
            <Form.Group>
              <Form.Control
                type="file"
                className={classes.file_input}
                onChange={selectFile}
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
              initialValue={body}
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
});

export default EditPostMenu;
