import { makeAutoObservable } from "mobx";

class UserStore {
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
