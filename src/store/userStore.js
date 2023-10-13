import { makeAutoObservable } from "mobx";

class UserStore {
  users = [
    {
      id: 1,
      role: "admin",
      email: "george.bluth@reqres.in",
      username: "georgegeorge",
      password: "qwerty1",
      first_name: "George",
      last_name: "Bluth",
      avatar: "https://reqres.in/img/faces/1-image.jpg",
    },
    {
      id: 2,
      role: "user",
      email: "janet.weaver@reqres.in",
      username: "janet",
      password: "qwerty2",
      first_name: "Janet",
      last_name: "Weaver",
      avatar: "https://reqres.in/img/faces/2-image.jpg",
    },
    {
      id: 3,
      role: "user",
      email: "emma.wong@reqres.in",
      username: "emma",
      password: "qwerty3",
      first_name: "Emma",
      last_name: "Wong",
      avatar: "https://reqres.in/img/faces/3-image.jpg",
    },
    {
      id: 4,
      role: "editor",
      email: "eve.holt@reqres.in",
      username: "eve",
      password: "qwerty4",
      first_name: "Eve",
      last_name: "Holt",
      avatar: "https://reqres.in/img/faces/4-image.jpg",
    },
    {
      id: 5,
      role: "editor",
      email: "charles.morris@reqres.in",
      username: "charles",
      password: "qwerty5",
      first_name: "Charles",
      last_name: "Morris",
      avatar: "https://reqres.in/img/faces/5-image.jpg",
    },
    {
      id: 6,
      role: "user",
      email: "tracey.ramos@reqres.in",
      username: "tracey",
      password: "qwerty6",
      first_name: "Tracey",
      last_name: "Ramos",
      avatar: "https://reqres.in/img/faces/6-image.jpg",
    },
    {
      email: "charles.morris@reqres.in",
      role: "user",
      username: "charles123",
      password: "qwerty5",
      first_name: "Charles",
      last_name: "Morris",
      avatar: "https://reqres.in/img/faces/5-image.jpg",
      id: 7,
    },
  ];

  // Текущий пользователь
  _user = {};
  // Авторизован ли пользователь
  _loggedIn = true;

  constructor() {
    makeAutoObservable(this);
  }

  setUser(user) {
    this._user = user;
  }
  setLoggedIn(loggedIn) {
    this._loggedIn = loggedIn;
  }

  get user() {
    return this._user;
  }
  get loggedIn() {
    return this._loggedIn;
  }
}

export default UserStore;
