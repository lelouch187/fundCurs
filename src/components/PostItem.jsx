import { MyButton } from "./UI/button/MyButton"
import {useNavigate} from 'react-router-dom'


export const PostItem = ({ post,removePost }) => {

    const router = useNavigate()


    return (
        <div className="post">
            <div className="post__content">
                <h3>{post.id} {post.title}</h3>
                <p>{post.body}</p>
            </div>
            <div className="post__btn">
                <MyButton onClick={()=>router(`/posts/${post.id}`)}>Открыть</MyButton>
                <MyButton onClick={()=>removePost(post.id)}>Удалить</MyButton>
            </div>
        </div>
    )
}