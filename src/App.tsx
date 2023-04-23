import { FC, useState, useMemo } from 'react';

import './styles/app.css';

import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/MySelect/MySelect';
import MyInput from './components/UI/MyInput/MyInput';

const App: FC = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Всем привет', body: 'Это мой первый пост' },
    { id: 2, title: 'React', body: 'Нужно выучить React' },
    { id: 3, title: 'Node', body: 'Нужно изучить backend' },
  ]);
  const [selectedSort, setSelectedSort] = useState<''|'title'|'body'>('');
  const [searchQuery, setSearchQuery] = useState('');

  const getSortedPosts =useMemo(() => {
    if (selectedSort){
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts
  },[posts, selectedSort]) 
  const deletePost = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id));
  };


  return (
    <div className="App">
      <PostForm posts={posts} setPosts={setPosts} />
      <hr style={{margin:'10px 0'}}/>
      <MyInput value={searchQuery} onChange={e=>setSearchQuery(e.target.value)}/>
      <MySelect setSelectedSort={setSelectedSort}
        value={selectedSort}
        options={[
          { value: 'title', name: 'По названию' },
          { value: 'body', name: 'По описанию' },
        ]}
        defaultValue="Сортировка по:"
      />
      <PostList posts={getSortedPosts} deletePost={deletePost} />
    </div>
  );
};

export default App;
