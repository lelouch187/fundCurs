import { useState } from "react"
import { MyButton } from "./UI/button/MyButton"
import { MyInput } from "./UI/MyInput/MyInput"


export const PostForm = ({create}) => {
    const [post, setPost] = useState({title:'',body:''})

    const addPost= (e) => {
        e.preventDefault()
        const newPost = {id:Date.now(), ...post}
        create(newPost)
        setPost({title:'', body:''})
    }
  return (
    <form>
        <MyInput onChange={e=>setPost({...post, title: e.target.value})}
        value={post.title}
        type='text'
        placeholder='Введите заголовок' />
        <MyInput onChange={e=>setPost({...post, body: e.target.value})}
        value={post.body}
        type='text'
        placeholder='Введите пост' />
        <MyButton onClick={e=>addPost(e)}>Добавить пост</MyButton>
      </form>
  )
}