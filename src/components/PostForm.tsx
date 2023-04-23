import React, { ChangeEvent, FC, MouseEvent, useState } from 'react';
import MyInput from './UI/MyInput/MyInput';
import MyButton from './UI/MyButton/MyButton';
import { Post } from '../types/post';

interface PostFormProps {
  posts: Post[];
  setPosts: Function;
}

const PostForm: FC<PostFormProps> = ({ posts, setPosts }) => {
  const [post, setPost] = useState({ title: '', body: '' });

  const addPost = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({ title: '', body: '' });
  };
  return (
    <form>
      <MyInput
        value={post.title}
        onChange={(event: ChangeEvent<HTMLInputElement>): void =>
          setPost({ ...post, title: event.target.value })
        }
      />
      <MyInput
        value={post.body}
        onChange={(event: ChangeEvent<HTMLInputElement>): void =>
          setPost({ ...post, body: event.target.value })
        }
      />
      <MyButton onClick={(e: MouseEvent<HTMLButtonElement>) => addPost(e)}>Добавить</MyButton>
    </form>
  );
};

export default PostForm;
