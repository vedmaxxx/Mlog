import React from "react";
import classes from "./PostList.module.css";
import { Form } from "react-bootstrap";

const Select = ({ value, onChange }) => {
  return (
    <div className={classes.sort}>
      <div className={classes.sort_title}>Сортировать по: </div>
      <Form.Select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={classes.sort_select}
      >
        <option value="date">Дата</option>
        <option value="title">Заголовок</option>
        <option value="views">Просмотры</option>
        <option value="likes">Лайки</option>
      </Form.Select>
    </div>
  );
};

export default Select;
