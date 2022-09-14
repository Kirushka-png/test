import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: { isLogin: false, username: '', wrongData: { username: false, password: false } },
  reducers: {
    SignIn: (
      state,
      { payload: { username, password } }
    ) => {
      state.wrongData.password = password !== 'password'
      state.wrongData.username = username !== 'username'
      state.isLogin = (!state.wrongData.password && !state.wrongData.username)
      if (state.isLogin) state.username = username
    },
    SignOut: (
      state
    ) => {
      state.isLogin = false
      state.username = ''
    },
    onChangeUserData: (
      state
    ) => {
      state.wrongData = { username: false, password: false }
    }
  },
})

export const { SignIn, SignOut, onChangeUserData } = userSlice.actions

export default userSlice.reducer

export const selectCurrentUser = (state) => state.user
