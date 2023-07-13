import axios from 'axios';
// import generateUserId from '../component/Reply/generateUserId';
// import { CommentT } from '../types';
// const BASE_URL = 'http://localhost:3000/api/comments';

// export const fetchAllComments = async (parentId: string): Promise<any> => {
//   console.log('this is parentId from fetchAllComments', parentId);

//   const result = (await axios({
//     method: 'get',
//     url: `${parentId}`, //CHANGE THIS LATER
//     baseURL: BASE_URL,
//   })) as CommentT[];
//   console.log('this is the many result from fetchAllComments', result);

//   return result;
// };

// export const postCommentToDatabase = async (text: string, parentId: string) => {
//   const uniqueId = generateUserId();
//   const reqBody = {
//     userId: uniqueId,
//     text,
//     parentId,
//   };
//   const result = await axios({
//     method: 'post',
//     url: '',
//     baseURL: BASE_URL,
//     data: reqBody,
//   });
//   console.log(result);
//   return result;
// };

export const getCommentsFromApi = async (parentId: string) => {
  console.log('We are in apihandler');
  return (
    await axios({
      method: 'get',
      url: `comments/${parentId}`,
      baseURL: 'http://localhost:3000/api',
    })
  ).data;
};