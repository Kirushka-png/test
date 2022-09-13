import styled from "styled-components"
import color from 'utils/color'
import {ReactComponent as logo} from 'images/Logo.svg';
import {ReactComponent as logout} from 'images/Logout.svg';
import {ReactComponent as untitledLogo} from 'images/UntitledLogo.svg'

export const HeaderContainer = styled.div`
    height: 118px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 41px;
    background-color: ${color.CREAM};
`
export const Logo = styled(logo)`
    height:63px;
`
export const UntitledLogo = styled(untitledLogo)`
    height:63px;
`

export const Logout = styled(logout)`
    fill: ${color.BLUE_WATER};
    cursor: pointer;
`

export const Username = styled.p`
    font-family: 'Inter', sans-serif;
    font-size: 24px;
`

export const InfoContainer = styled.div`
    display:flex;
    align-items: center;
    gap: 34px;
`


export default HeaderContainer