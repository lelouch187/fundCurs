import { useState, useEffect } from "react";
import PostServices from "./API/PostServices";
import { PostFilter } from "./components/PostFilter";
import { PostForm } from "./components/PostForm";
import { PostList } from "./components/PostList";
import { MyButton } from "./components/UI/button/MyButton";
import { Loader } from "./components/UI/loader/Loader";
import { MyModal } from "./components/UI/MyModal/MyModal";
import { useFetching } from "./hooks/useFetching";
import { usePosts } from "./hooks/usePosts";

import './styles/app.css'


function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort:'', query:''})
  const [modal, setModal] = useState(false)
  const [fetchPosts, loading, error] = useFetching(async ()=> {
    const posts = await PostServices.getAll()
    setPosts(posts)
  })
  
  
  const searchAndSortedPosts = usePosts(posts, filter.sort, filter.query)

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }
  const removePost = (id) => {
    setPosts(posts.filter(post=>post.id !== id))
  }

  useEffect(() => {
    fetchPosts()
  }, [])
  

  return (
    <div className="app">
      <MyButton style={{margin:10}} onClick={()=>setModal(true)}>Добавить пост</MyButton>
      <MyModal setValue={setModal}
      value={modal}>
        <PostForm create={createPost} />
      </MyModal>
      <PostFilter setFilter={setFilter}
      filter={filter} />
      {error&&<h1>Произошла ошибка {error}</h1>}
      {loading
      ?<Loader />
      :<PostList removePost={removePost}
      posts={searchAndSortedPosts} 
      title='Посты про React' />
      }
    </div>
  );
}

export default App;
