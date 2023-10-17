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
  return res;
};

export const updatePost = async (post_id, post) => {
  const res = await loggedInClient.put(`/posts/${post_id}`, post);
  return res;
};

export const getPost = async (post_id) => {
  const res = await loggedInClient.get(`/posts/${post_id}`);
  return res;
};
