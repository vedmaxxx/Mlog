import React, { useContext, useState } from "react";
import classes from "./AuthReg.module.css";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../index";
import { Container, Form } from "react-bootstrap";
import { client } from "../API";
import { register } from "../API/userAPI";

const RegistrationForm = () => {
  const { users } = useContext(Context);
  const navigate = useNavigate();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatarpath, setAvatarpath] = useState("");

  const selectFile = async (e) => {
    const avatarData = new FormData();
    avatarData.append("file", e.target.files[0]);
    const response = await client.post("/file", avatarData);
    setAvatarpath(response.data.filename);
  };

  const registerUser = async (e) => {
    e.preventDefault();
    const user = {
      id: Date.now(),
      role: "user",
      first_name: firstname,
      last_name: lastname,
      email: email,
      username: username,
      password: password,
      avatar: avatarpath,
    };

    try {
      const response = await register(user);
      console.log("Ответ на регистрацию:", response);
      users.setLoggedIn(true);
      navigate("/posts");
    } catch (error) {
      alert("Ошибка! проверьте введенные данные");
    }
  };

  return (
    <Form>
      <Container>
        <div className={classes.container}>
          <div className={classes.title}>
            Регистрация
            <div className={classes.line}></div>
          </div>
          <form className={classes.form} action="">
            <div className={classes.input_container}>
              <label htmlFor="" className={classes.label}>
                Имя
              </label>
              <input
                className={classes.input}
                type="text"
                placeholder="Введите имя"
                value={firstname}
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
              />
            </div>
            <div className={classes.input_container}>
              <label htmlFor="" className={classes.label}>
                Фамилия
              </label>
              <input
                className={classes.input}
                type="text"
                placeholder="Введите фамилию"
                value={lastname}
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
              />
            </div>
            <div className={classes.input_container}>
              <label htmlFor="" className={classes.label}>
                Email
              </label>
              <input
                className={classes.input}
                type="email"
                placeholder="Введите email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className={classes.input_container}>
              <label htmlFor="" className={classes.label}>
                Логин
              </label>
              <input
                className={classes.input}
                type="text"
                placeholder="Введите логин"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className={classes.input_container}>
              <label htmlFor="" className={classes.label}>
                Пароль
              </label>
              <input
                className={classes.input}
                type="text"
                placeholder="Введите пароль"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className={classes.input_container}>
              <label htmlFor="" className={classes.label}>
                Аватар
              </label>

              <Form.Group className={classes.file_input}>
                <Form.Control type="file" onChange={selectFile} />
              </Form.Group>
            </div>
            <div>
              <Link className={classes.hint} to={"/auth"}>
                Уже есть аккаунт
              </Link>
            </div>
            <button className={classes.btn} onClick={registerUser}>
              Зарегистрироваться
            </button>
          </form>
        </div>
      </Container>
    </Form>
  );
};

export default RegistrationForm;
