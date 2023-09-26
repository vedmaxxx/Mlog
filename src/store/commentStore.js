import { makeAutoObservable } from "mobx";

class CommentStore {
  comments = [
    {
      postId: 1,
      id: 1,
      userId: 1,
      body: "harum non quasi et ration tempore iure ex voluptates in rationeharum architecto fugit inventore cupiditatevoluptates magni quo et",
    },
    {
      postId: 1,
      id: 2,
      userId: 2,
      body: "harum non quasi et ration tempore iure ex voluptates in rationeharum architecto fugit inventore cupiditatevoluptates magni quo et",
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  // Добавление/удаление комментариев
  addComment(comment) {
    this.comments.push(comment);
  }
  removeComment(comment_id) {
    this.comments = this.comments.filter(
      (comment) => comment.id !== comment_id
    );
  }
}

export default CommentStore;
