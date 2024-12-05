import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
import React from 'react'

const baseUrl = process.env.REACT_REGISTER_URL

export const Auth = createApi({
    reducerPath: "Authentication",
    baseQuery: fetchBaseQuery({baseUrl: `${baseUrl}`}),
    endpoints:(builder) => ({
        getLogin:builder.query({
            query:() => (`/login`)
        }),
        getLogout:builder.query({
            query:() => (`/logout`)
        })
    })
})
 
export const { useGetLoginQuery, useGetLogoutQuery } = Auth