import { makeAutoObservable } from "mobx";

class PostStore {
  postList = [
    {
      id: 1,
      userId: 1,
      title: "Which programming language is the best?",
      body: "some text",
      announcement: "Текст посвщен",
      category: "longread",
      views: 30,
      likes: 10,
      date: "2023-09-10",
      image: "https://image.mel.fm/i/i/iCp9WAF4mZ/590.jpg",
    },
    {
      id: 2,
      userId: 2,
      title: "C++ basics",
      body: "some text",
      announcement: "Текст посвщен",
      category: "short",
      views: 14,
      likes: 4,
      date: "2023-09-11",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
    },
    {
      id: 3,
      userId: 5,
      title: "Крокодилы ходят лёжа?",
      body: "some text",
      announcement: "Древняя тайна, о которой молчат",
      category: "short",
      views: 1352,
      likes: 266,
      date: "2023-09-11",
      image:
        "https://snob.ru/indoc/original_images/34e/IMAGE_2023-06-07_221852.jpg",
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  // Добавление/удаление постов
  addPost(post) {
    this.postList.push(post);
  }
  removePost(post_id) {
    this.postList = this.postList.filter((post) => post.id !== post_id);
  }
}

export default PostStore;
