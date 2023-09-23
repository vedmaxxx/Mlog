import React from "react";
import classes from "./AuthorisationRegistration.module.css";

const AuthorisationForm = () => {
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
            placeholder="Введите имя"
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
          />
        </div>
        <div className={classes.hint}>
          <span>Забыли пароль</span> / <span>Не зарегистрированы</span>
        </div>
        <button className={classes.btn}>Войти</button>
      </form>
    </div>
  );
};

export default AuthorisationForm;
