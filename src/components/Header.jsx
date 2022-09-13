import HeaderContainer, { Logo, UntitledLogo, Logout, Username, InfoContainer } from "styles/components/Header"
import { useDispatch, useSelector } from "react-redux"
import { SignOut } from 'store/UserSlice.js'
import { useMediaQuery } from "react-responsive";

const Header = () => {
    const user = useSelector(state => state.user)

    const isDesktop = useMediaQuery({ query: "(min-width: 1000px)" });
    const isMobile = useMediaQuery({ query: "(max-width: 680px)" });

    const dispatch = useDispatch()

    return (
        <HeaderContainer>
            {isMobile ? <UntitledLogo /> : <Logo />}
            {user.isLogin &&
                <InfoContainer>
                    {isDesktop && <Username>{user.username}</Username>}
                    <Logout onClick={() => { dispatch(SignOut()) }} />
                </InfoContainer>
            }
        </HeaderContainer>
    )
}
export default Header