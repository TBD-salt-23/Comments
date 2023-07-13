'use client';
import React, { useState, useEffect } from 'react';
import { CommentT } from '../../types';
import Reply from '../Reply/Reply';
import { getCommentsFromApi } from '@/app/apiManagement/apiHandler';

type RenderCommentProps = {
  parentComment: CommentT;
  childrenArray: CommentT[];
};

export const RenderComment = (props: RenderCommentProps) => {
  const { parentComment, childrenArray } = props;
  const { userId, _id, text, likes } = parentComment;
  const [replyIsClicked, setReplyIsClicked] = useState(false);
  const [expandIsClicked, setExpandIsClicked] = useState(false);
  const handleReplyClicked = () => setReplyIsClicked(!replyIsClicked);
  const handleExpandIsClicked = () => setExpandIsClicked(!expandIsClicked);
  const [arrayToRender, setArrayToRender] = useState<CommentT[]>([]);
  const [futureChildrenArray, setFutureChildrenArray] = useState<CommentT[]>(
    []
  );

  useEffect(() => {
    (async () => {
      const resArray = await getCommentsFromApi(_id);
      console.log('who is this guy', resArray);
      setArrayToRender(resArray);
    })();
  }, []);

  return (
    <>
      <div>
        <header>{userId}</header>
        <p>{text}</p>
        <footer>
          <p>{likes}</p>
          <button onClick={handleExpandIsClicked}>
            {`Expand (${childrenArray.length}...)`}
          </button>
          <button onClick={handleReplyClicked}>Reply</button>
        </footer>
      </div>
      {replyIsClicked && <Reply parentId={_id} />}
      {expandIsClicked &&
        arrayToRender.map((comment) => {
          return (
            <RenderComment
              parentComment={comment}
              childrenArray={futureChildrenArray}
            />
          );
        })}
    </>
  );
};
