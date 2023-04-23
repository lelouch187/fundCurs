import React, { FC } from 'react';
import { Post } from '../types/post';
import MyButton from './UI/MyButton/MyButton';

interface PostItemProps {
  post: Post;
  index: number;
  deletePost: (id: number) => void;
}

const PostItem: FC<PostItemProps> = ({ post, index, deletePost }) => {
  return (
    <div className="post_item">
      <div>
        <strong className="title">
          {index} {post.title}
        </strong>
      </div>
      <div className="post_body">
        <p className="text">{post.body}</p>
        <MyButton onClick={()=>deletePost(post.id)}>Удалить</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
