import React, { useContext } from "react";
import classes from "./AuthReg.module.css";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../index";
import { observer } from "mobx-react-lite";

const AuthForm = observer(() => {
  const { users } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        Вход
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
            placeholder="Введите имя..."
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
          />
        </div>
        <div>
          <Link className={classes.hint}>Забыли пароль</Link> /{" "}
          <Link className={classes.hint} to={"/registration"}>
            Не зарегистрированы
          </Link>
        </div>
        <button
          className={classes.btn}
          onClick={() => {
            users.setLoggedIn(true);
            navigate("/posts");
          }}
        >
          Войти
        </button>
      </form>
    </div>
  );
});

export default AuthForm;
