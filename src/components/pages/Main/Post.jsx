import PostContainer, { Photo, SmallTextContainer, PostBodyContainer, MainInfo, TitleContainer } from "styles/components/pages/Main/Post"
import { useGetPhotosQuery, useGetUsersQuery } from "API/posts"
import { useMediaQuery } from "react-responsive";

const Post = ({ data }) => {

    const isMobile = useMediaQuery({ query: "(max-width: 680px)" });

    const { data: users = [], isLoading: isUsersLoading } = useGetUsersQuery()
    const { data: photos = [], isLoading: isPhotosLoading } = useGetPhotosQuery()

    return (
        <PostContainer>
            {!isPhotosLoading && !isMobile && <Photo src={photos[data.id].thumbnailUrl} />}
            <MainInfo>
                {!isUsersLoading &&
                    <>
                        <SmallTextContainer>{`Autor: ${users[data.userId - 1].name}`}</SmallTextContainer>
                        <SmallTextContainer>{`Company: ${users[data.userId - 1].company.name}`}</SmallTextContainer>
                    </>}
            </MainInfo>
            <TitleContainer>{`Title:${data.title}`}</TitleContainer>
            {!isMobile && <PostBodyContainer>{data.body}</PostBodyContainer>}
        </PostContainer>
    )
}

export default Post