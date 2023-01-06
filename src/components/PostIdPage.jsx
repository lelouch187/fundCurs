import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostServices from '../API/PostServices'
import { useFetching } from '../hooks/useFetching'
import { Loader } from './UI/loader/Loader'

export const PostIdPage = () => {
   const params = useParams()
   const [post, setPost] = useState({})
   const [comments, setComments] = useState([])
   const [fetchPostById, loading, error] = useFetching(async () => {
      const response = await PostServices.getPostById(params.id)
      setPost(response.data)
   })
   const [fetchCommentsById, comLoading, comError] = useFetching(async () => {
      const response = await PostServices.getCommentsByPostId(params.id)
      setComments(response.data)
   })
   useEffect(() => {
      fetchPostById(params.id)
      fetchCommentsById(params.id)
   },[])
   return (
      <>
         <div>Это страница поста - {params.id}</div>
         {error&&<h1>{error}</h1>}
         {loading
         ? 
         <Loader />
         :
         <div>{post.id}. {post.title}</div>   
         }
         <h2>Комментарии</h2>
         {comError&&<h1>{comError}</h1>}
         {comLoading
         ?
         <Loader />
         :comments.map(com=>{
            return   <div key={com.id}>
            <div>{com.email}</div>
            <div>{com.body}</div>
            </div>
         })}
       
         
      </>
   )
}
