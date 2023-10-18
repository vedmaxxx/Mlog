import React, { useContext, useEffect } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import { Link, useNavigate } from "react-router-dom";
import classes from "./NavBar.module.css";
import { HandySvg } from "handy-svg";
import logo from "../images/logo_white.png";

const NavBar = observer(() => {
  const { users } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" className="ms-5">
            <Link to="/main">
              <img className={classes.logo} src={logo} alt="" />
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto ms-3">
            <Link className={classes.nav_link} to="/main">
              Главная
            </Link>
            <Link className={classes.nav_link} to="/about">
              О нас
            </Link>
            {users.loggedIn && (
              <Link className={classes.nav_link} to="/profile">
                Личный кабинет
              </Link>
            )}
          </Nav>
        </Container>
        {users.loggedIn ? (
          <Button
            variant="primary"
            className="me-5"
            onClick={() => {
              users.setLoggedIn(false);
              users.clearUser();
            }}
          >
            Выйти
          </Button>
        ) : (
          <Button
            variant="primary"
            className="me-5"
            onClick={() => {
              navigate("/auth");
            }}
          >
            Авторизоваться
          </Button>
        )}
      </Navbar>
    </div>
  );
});
export default NavBar;
