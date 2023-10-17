import { client } from "./index";

export const login = async (username, password) => {
  const res = await client.post("/login", {
    username: username,
    password: password,
  });
  return res;
};

export const register = async (user) => {
  const res = await client.post("/users", user);

  return res;
};

export const getUsers = async () => {
  const res = await client.get("/users");
  console.log("getusers: ", res);
  return res;
};
