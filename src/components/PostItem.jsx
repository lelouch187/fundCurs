import { MyButton } from "./UI/button/MyButton"

export const PostItem = ({ post,index,removePost }) => {
    return (
        <div className="post">
            <div className="post__content">
                <h3>{index+1} {post.title}</h3>
                <p>{post.body}</p>
            </div>
            <div className="post__btn">
                <MyButton onClick={()=>removePost(post.id)}>Удалить</MyButton>
            </div>
        </div>
    )
}