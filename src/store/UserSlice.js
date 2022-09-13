import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: { isLogin: false, username: '' },
  reducers: {
    SignIn: (
      state,
      { payload: { username, password } }
    ) => {
      state.isLogin = (username === 'username' && password === 'password')
      if (state.isLogin) state.username = username
    },
    SignOut: (
      state
    ) => {
      state.isLogin = false
      state.username = ''
    },
  },
})

export const { SignIn, SignOut } = userSlice.actions

export default userSlice.reducer

export const selectCurrentUser = (state) => state.user
