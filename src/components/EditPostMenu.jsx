import React from "react";
import { Container } from "react-bootstrap";

const EditPostMenu = () => {
  return (
    <Container>
      <div>
        <div>Название поста</div>
        <div>
          <input type="text" />
        </div>
        <div>Анонс</div>
        <div>
          <input type="text" />
        </div>
      </div>
    </Container>
  );
};

export default EditPostMenu;
