import { commentModel } from '@/app/db/db';
import { CommentT } from '../types';

export const getCommentArrayByParentId = async (parentId: string) => {
  try {
    if (parentId) {
      return (await commentModel.find({ parentId })) as CommentT[];
    }

    return (await commentModel.find({ parentId: null })) as CommentT[];
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
