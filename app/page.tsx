// import { useState, useEffect } from 'react';
import { RenderComment } from './component/RenderComment/RenderComment';
import { CommentT } from './types';
import { getCommentsFromApi } from './apiManagement/apiHandler';
// import './App.css';
import Reply from './component/Reply/Reply';
// import { fetchAllComments } from './apiManagement/apiHandler';
// import { getCommentArrayByParentId } from './db/dbHandlers';

// const initialObject = {
//   id: '',
//   parentId: '',
//   userId: '',
//   text: 'Loading...',
//   likes: 0,
// };
//Refresh top level?

const App = async () => {
  console.log('We are in App');
  // const [initialComments, setInitialComments] = useState<CommentT[]>([]);
  // const [childrenArray, setChildrenArray] = useState<CommentT[]>([]);
  // useEffect(() => {
  //   (async () => {
  //     console.log('We are in USE EFFECT');

  //     const topLevelArray = await getCommentArrayByParentId('');
  //     console.log('top level array', topLevelArray);
  //     setChildrenArray(await getCommentArrayByParentId(topLevelArray[0]._id));
  //     console.log(childrenArray);
  //     setInitialComments(topLevelArray);
  //   })();
  // }, []);
  //check if the array is empty, if so we only return a reply component
  const initialComments = await getCommentsFromApi('setup');
  console.log('Here is inital comments', initialComments);
  const childrenArray = await getCommentsFromApi(initialComments[0]._id);
  console.log('Here is the childrenArray', childrenArray);
  return (
    <>
      {initialComments.map((comment: CommentT) => {
        return (
          <RenderComment
            parentComment={comment}
            childrenArray={childrenArray}
          />
        );
      })}
      <Reply parentId=""></Reply>
    </>
  );
};

export default App;
