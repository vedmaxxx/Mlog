import { observer } from "mobx-react-lite";
import React from "react";
import { useContext } from "react";
import { Container } from "react-bootstrap";
import { Context } from "../index";
import { useParams } from "react-router-dom";
import Profile from "../components/Profile";

const ProfilePage = observer(() => {
  const { users } = useContext(Context);
  const params = useParams();

  return (
    <Container>
      <Profile user={users.user} />
    </Container>
  );
});

export default ProfilePage;
