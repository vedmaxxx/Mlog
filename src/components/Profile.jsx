import React from "react";
import classes from "./Profile.module.css";

const Profile = ({ user }) => {
  console.log("Текущий пользователь: ", user);

  return (
    <div>
      <img className={classes.image} src={user.avatar} alt="" />
      <div>
        <b>Имя пользователя:</b> {user.username}
      </div>
      <div>
        <b>Имя:</b> {user.first_name}
      </div>
      <div>
        <b>Фамилия:</b> {user.last_name}
      </div>
      <div>
        <b>Email:</b> {user.email}
      </div>
      <div>
        <b>Права:</b> {user.role}
      </div>
    </div>
  );
};

export default Profile;
