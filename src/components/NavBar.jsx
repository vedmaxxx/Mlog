import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Context } from "../index";

const NavBar = () => {
  const { users } = useContext(Context);

  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" className="ms-5">
            LOGO
          </Navbar.Brand>
          <Nav className="me-auto ms-3">
            <Nav.Link href="#main" to="/main">
              Главная
            </Nav.Link>
            <Nav.Link href="#about" to="/about">
              О нас
            </Nav.Link>
            {users.loggedIn && (
              <Nav.Link href="#profile" to="/profile">
                Личный кабинет
              </Nav.Link>
            )}
          </Nav>
        </Container>
        <Button variant="info" className="me-5">
          {users.loggedIn ? "Выйти" : "Авторизоваться"}
        </Button>
      </Navbar>
    </div>
  );
};

export default NavBar;
