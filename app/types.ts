export type CommentT = {
  _id: string;
  parentId: string | null;
  userId: string;
  text: string;
  likes: number;
  childrenArray?: CommentT[];
};
