import { useGetPostsQuery } from "API/posts"
import Post from "components/pages/Main/Post"
import PostsWrapper from "styles/components/pages/Main/Main"

const Main = () => {

    const { data: posts = [] } = useGetPostsQuery()

    return (
        <PostsWrapper>
            {posts.map((data, idx) => <Post data={data} key={idx} />)}
        </PostsWrapper>
    )
}
export default Main