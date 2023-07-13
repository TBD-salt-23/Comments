import { Schema, model, connect, models } from 'mongoose';

export type Comment = {
  text: string;
  parentId: string;
  userId: string;
  likes: number;
};

const commentSchema = new Schema<Comment>(
  {
    text: { type: String, required: true },
    parentId: { type: String },
    userId: { type: String, required: true },
    likes: { type: Number, required: true },
  },
  { versionKey: false }
);

const uri = () => {
  return 'mongodb+srv://joint-backend:1234qwer@cluster0.7cx1m1b.mongodb.net/lab-comments-backend?retryWrites=true&w=majority';
};

export const commentModel =
  models?.comments || model<Comment>('comments', commentSchema);

connect(uri()).then(() => console.log('db connected'));
