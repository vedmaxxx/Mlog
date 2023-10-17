import React from "react";
import EditPostMenu from "../components/EditPostMenu";

const EditPostPage = ({ mode }) => {
  // добавить разделение на режимы create и edit
  return <EditPostMenu mode={mode} />;
};

export default EditPostPage;
