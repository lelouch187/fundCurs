import React, { FC } from 'react';
import { Post } from '../types/post';
import PostItem from './PostItem';

interface PostListProps {
  posts: Post[];
  deletePost: (id: number) => void;
}

const PostList: FC<PostListProps> = ({ posts, deletePost }) => {
  return (
    <div className="PostList">
      {posts.length ? (
        posts.map((postItem, index) => {
          return (
            <PostItem deletePost={deletePost} key={postItem.id} post={postItem} index={index + 1} />
          );
        })
      ) : (
        <h2 style={{ marginTop: '20px' }}>Посты не найдены!</h2>
      )}
    </div>
  );
};

export default PostList;
