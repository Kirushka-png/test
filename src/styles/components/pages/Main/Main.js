import styled from "styled-components";

const PostsWrapper = styled.div`
    justify-self: center;
    grid-template-columns: 1fr 1fr;
    display: grid;
    gap: 20px 13px;
    padding: 20px 0;
    @media (max-width: 1000px) {
        gap: 25px;
        padding: 25px 0;
    }
    @media (max-width: 680px) {
        grid-template-columns: 1fr;
        gap: 10px;
        padding: 10px 0;
    }
`

export default PostsWrapper