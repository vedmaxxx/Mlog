import { observer } from "mobx-react-lite";
import React from "react";
import { useContext } from "react";
import { Container } from "react-bootstrap";
import { Context } from "../index";

const ProfilePage = observer(() => {
  const { users } = useContext(Context);

  return <Container></Container>;
});

export default ProfilePage;
