import React, { useContext, useState } from "react";
import classes from "./AuthReg.module.css";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import { Container } from "react-bootstrap";
import { login } from "../API/userAPI";

const AuthForm = observer(() => {
  const { users } = useContext(Context);
  const navigate = useNavigate();

  const [username, setUsername] = useState("georgegeorge");
  const [password, setPassword] = useState("qwerty1");

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const response = await login(username, password);
      console.log("ответ на авторизацию ", response);
      navigate("/posts");
      users.setLoggedIn(true);
      users.setUser(response.data);
      console.log("Авторизован: ", users.loggedIn);
    } catch (error) {
      if (error.response.status == 301) {
        alert("Неверный логин или пароль");
      }
    }
  };

  return (
    <Container>
      <div className={classes.container}>
        <div className={classes.title}>
          Вход
          <div className={classes.line}></div>
        </div>
        <form className={classes.form} action="">
          <div className={classes.input_container}>
            <label htmlFor="" className={classes.label}>
              Имя пользователя
            </label>
            <input
              className={classes.input}
              type="text"
              placeholder="Введите имя..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={classes.input_container}>
            <label htmlFor="" className={classes.label}>
              Пароль
            </label>
            <input
              className={classes.input}
              type="password"
              placeholder="Введите пароль..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <Link className={classes.hint}>Забыли пароль</Link> /{" "}
            <Link className={classes.hint} to={"/registration"}>
              Не зарегистрированы
            </Link>
          </div>
          <button className={classes.btn} onClick={(e) => loginUser(e)}>
            Войти
          </button>
        </form>
      </div>
    </Container>
  );
});

export default AuthForm;
