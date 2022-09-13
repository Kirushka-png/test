import styled from 'styled-components'

const DefaultFontStyle = `
    font-family: 'Inter';
    font-weight: 800;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
`

const PostContainer = styled.div`
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 425px;
    height: 338px;
    gap: 11px 30px;
    @media (max-width: 1000px) {
        flex-direction: column;
        width: 283px;
        height: 420px;
        gap:8px;
    }
    @media (max-width: 680px) {
        flex-direction: column;
        width: 250px;
        height: 150px;
        gap:17px;
    }
    border: 5px solid #27569C;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding: 20px 16px;
`

export const Photo = styled.img`
    width:150px;
    height:150px;
`

export const MainInfo = styled.div`
    flex-direction: column;
    display: flex;
    gap: 11px;
    @media (max-width: 1000px) {
        gap:8px;
    }
`

export const SmallTextContainer = styled.div`
    width: 245px;
    height: 26px;
    ${DefaultFontStyle}
`
export const TitleContainer = styled(SmallTextContainer)`
    width:100%;
    height: 62px;
    align-items: center;
`
export const PostBodyContainer = styled.div`
    ${DefaultFontStyle}
    display: -webkit-box;
    max-width: 100%;
    @media (max-width: 1000px) {
        max-width: 275px;
    }
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`

export default PostContainer