import React from "react";
import classes from "./AuthorisationRegistration.module.css";
import { NavLink } from "react-router-dom";

const RegistrationForm = () => {
  return (
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
          <span>Уже есть аккаунт</span>
        </div>
        <button className={classes.btn}>Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
