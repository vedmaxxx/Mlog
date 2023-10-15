import { client, loggedInClient } from "./index";

export const getPosts = async () => {
  const res = await client.get("/posts");
  return res;
};

export const createPost = async (post) => {
  const res = await loggedInClient.post("/posts", post);
  return res;
};

export const deletePost = async (post_id) => {
  const res = await loggedInClient.delete(`/posts/${post_id}`);
};
