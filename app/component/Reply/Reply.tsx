'use client';
import { useRef } from 'react';
// import { postCommentToDatabase } from '../../apiManagement/apiHandler';

const Reply = (props: { parentId: string }) => {
  const replyContent = useRef<HTMLTextAreaElement>(null);

  return (
    <form>
      <textarea
        name=""
        id=""
        cols={30}
        rows={5}
        placeholder="Write comment here"
        ref={replyContent}
      ></textarea>
      <input
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          console.log('This is replyContent', replyContent.current?.value);
          console.log('', replyContent, props.parentId);
          // postCommentToDatabase(
          //   replyContent.current?.value || '',
          //   props.parentId
          // );
        }}
      />
    </form>
  );
};

export default Reply;
