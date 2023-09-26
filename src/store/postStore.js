import { makeAutoObservable } from "mobx";

class PostStore {
  posts = [
    {
      id: 1,
      userId: 1,
      title: "Which programming language is the best?",
      body: "some text",
      watches: 30,
      likes: 10,
      date: "2023-09-10",
      image: "",
    },
    {
      id: 2,
      userId: 2,
      title: "C++ basics",
      body: "some text",
      watches: 14,
      likes: 4,
      date: "2023-09-11",
      image: "",
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  // Добавление/удаление постов
  addPost(post) {
    this.posts.push(post);
  }
  removePost(post_id) {
    this.posts = this.posts.filter((post) => post.id !== post_id);
  }
}

export default PostStore;
