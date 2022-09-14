import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { onChangeUserData, SignIn } from 'store/UserSlice.js'
import LoginContainer, { Button, Input, InputContainer, Label, LoginWrapper, Title } from "styles/components/pages/Login/Login"

const Login = () => {
    const user = useSelector(state => state.user)

    const [userData, setUserData] = useState({ username: '', password: '' })

    const dispatch = useDispatch()

    const onKeyDown = (e) => {
        if (e.keyCode == 13) {
            dispatch(SignIn(userData))
        }
    }

    useEffect(() => {
        dispatch(onChangeUserData())
    }, [userData])


    return (
        <LoginWrapper>
            <LoginContainer onKeyDown={onKeyDown}>
                <Title>Autorization</Title>
                <InputContainer>
                    <Label>login</Label>
                    <Input type="text" value={userData.username} onChange={(e) => { setUserData({ ...userData, username: e.target.value }) }} wrongData={user.wrongData.username} />
                </InputContainer>
                <InputContainer>
                    <Label>password</Label>
                    <Input type="password" value={userData.password} onChange={(e) => { setUserData({ ...userData, password: e.target.value }) }} wrongData={user.wrongData.password} />
                </InputContainer>
                <Button onClick={() => { dispatch(SignIn(userData)) }}>Submit</Button>
            </LoginContainer>
        </LoginWrapper>
    )
}
export default Login
