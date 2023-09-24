import { makeAutoObservable } from "mobx";

class userStore {
  // Текущий пользователь
  _user = {};
  // Авторизован ли пользователь
  _loggedIn = false;

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

export default new userStore();
