import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
    reducerPath: 'posts',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    endpoints: (build) => ({
        getUsers: build.query({
            query: () => 'users'
        }),
        getPosts: build.query({
            query: () => 'posts'
        }),
        getPhotos: build.query({
            query: () => 'photos'
        })
    })
})

export const { useGetUsersQuery, useGetPostsQuery, useGetPhotosQuery } = postsApi