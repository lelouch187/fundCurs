import { FC, useState } from "react";

import './styles/app.css';

import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

const App:FC =() => {
  const [posts, setPosts] = useState([
    {id:1, title:'Всем привет',body:'Это мой первый пост'},
    {id:2, title:'React',body:'Нужно выучить React'},
    {id:3, title:'Node',body:'Нужно изучить backend'},
  ])
 
  
  return (
    <div className="App">
      <PostForm posts={posts} setPosts={setPosts} />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
