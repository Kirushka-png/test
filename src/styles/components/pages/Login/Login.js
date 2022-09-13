import styled from "styled-components"
import color from "utils/color"

const DefaultFont = `
    font-family: 'Inter';
    font-size: 24px;
    font-weight: 800;
`

export const LoginWrapper = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
`

const LoginContainer = styled.div`
    display:flex;
    flex-direction: column;
    width: 440px;
    height: 280px;
    border: 5px solid ${color.BLUE_WATER};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    padding: 25px 20px;
    gap: 25px;
    @media (max-width: 680px) {
        width: 210px;
        gap:0px;
        height: 307px;
        padding: 8px 35px;
    }
`
export const Title = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    ${DefaultFont}
    color: ${color.BLUE_WATER};
    height: 70px;
    @media (max-width: 680px) {
        height: 45px;
    }
`

export const InputContainer = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: flex-end;
    @media (max-width: 680px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 13px;
    }
    margin-bottom: 8px;
`

export const Input = styled.input`
    ${DefaultFont}
    width: 287px;
    height: 37px;
    @media (max-width: 680px) {
        height: 31px;
        width: 204px;
    }
    border: 4px solid #27569C;
    border-radius: 10px;
    background-color: ${color.GRAY}
`

export const Label = styled.label`
    ${DefaultFont}
`
export const Button = styled.button`
    ${DefaultFont}
    align-self: center;
    border: none;
    cursor: pointer;
    width: min-content;
    padding: 6px 60px;
    background-color:${color.CREAM};
    border-radius: 5px;
    @media (max-width: 680px) {
        margin-top: 14px;
    }
`

export default LoginContainer