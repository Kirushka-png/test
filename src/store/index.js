import { configureStore } from '@reduxjs/toolkit'
import { postsApi } from 'API/posts'
import userReducer from './UserSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postsApi.middleware)
})