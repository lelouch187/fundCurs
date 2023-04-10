import React, { FC } from 'react'
import { Post } from '../types/post'
import PostItem from './PostItem'

interface PostListProps {
   posts:Post[]
}

const PostList:FC<PostListProps> = ({posts}) => {
  return (
    <div className='PostList'>
    {posts.length&&posts.map((postItem, index)=>{
      return <PostItem key={postItem.id}
      post={postItem} 
      index={index+1} />
    })}
    </div>
  )
}

export default PostList