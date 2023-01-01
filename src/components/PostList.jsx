import { PostItem } from "./PostItem"


export const PostList = ({posts, removePost, title}) => {
  return (
    <div>
        <h1>{title}</h1>
        {posts.length
        ?
        posts.map((post,index)=>{
        return    <PostItem removePost={removePost}
        key={post.id} 
        post={post} 
        index={index} />
        })
        :
        <h2>Постов не найденно</h2>}
    </div>
  )
}