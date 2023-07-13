import axios from 'axios';
import generateUserId from '../component/Reply/generateUserId';
import { CommentT } from '../types';
const BASE_URL = 'http://localhost:3000/api/comments';

export const fetchAllComments = async (parentId: string): Promise<any> => {
  const result = (await axios({
    method: 'get',
    url: `?parentId=${parentId}`, //CHANGE THIS LATER
    baseURL: BASE_URL,
  })) as CommentT[];
  return result;
};

export const postCommentToDatabase = async (text: string, parentId: string) => {
  const uniqueId = generateUserId();
  const reqBody = {
    userId: uniqueId,
    text,
    parentId,
  };
  const result = await axios({
    method: 'post',
    url: '',
    baseURL: BASE_URL,
    data: reqBody,
  });
  console.log(result);
  return result;
};
