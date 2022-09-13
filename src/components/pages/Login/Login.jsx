import { useState } from "react"
import { useDispatch } from "react-redux"
import { SignIn } from 'store/UserSlice.js'
import LoginContainer, { Button, Input, InputContainer, Label, LoginWrapper, Title } from "styles/components/pages/Login/Login"

const Login = () => {

    const [userData, setUserData] = useState({ username: '', password: '' })

    const dispatch = useDispatch()

    const onKeyDown = (e) => {
        if (e.keyCode == 13) {
            dispatch(SignIn(userData))
        }
    }

    return (
        <LoginWrapper>
            <LoginContainer onKeyDown={onKeyDown}>
                <Title>Autorization</Title>
                <InputContainer>
                    <Label>login</Label>
                    <Input type="text" value={userData.username} onChange={(e) => { setUserData({ ...userData, username: e.target.value }) }} />
                </InputContainer>
                <InputContainer>
                    <Label>password</Label>
                    <Input type="password" value={userData.password} onChange={(e) => { setUserData({ ...userData, password: e.target.value }) }} />
                </InputContainer>
                <Button onClick={() => { dispatch(SignIn(userData)) }}>Submit</Button>
            </LoginContainer>
        </LoginWrapper>
    )
}
export default Login
