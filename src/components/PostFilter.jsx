import { MyInput } from "./UI/MyInput/MyInput"
import { MySelect } from "./UI/select/MySelect"

export const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput onChange={e => setFilter({...filter, query:e.target.value})}
                value={filter.query} />
            <MySelect onChange={sortPosts=>setFilter({...filter, sort: sortPosts})}
                value={filter.sort}
                options={[{ value: 'title', name: 'по названию' },
                { value: 'body', name: 'по описанию' },]}
            />
        </div>
    )
}