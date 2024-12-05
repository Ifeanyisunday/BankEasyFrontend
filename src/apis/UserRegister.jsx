import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const userRegister = createApi({
    reducerPath: 'register',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8080/api/customer'}),
    endpoints: (builder) => ({
        addUser: builder.mutation({
            query: (userData) => ({
                url: '/register',
                method: 'POST',
                body: userData,
                // headers: { 'Content-Type': 'application/json'},
            }),
        }),
        deposit: builder.mutation({
            query: (userData) => ({
              url: '/deposit',
              method: 'POST',
              body: userData, 
            }),
        }),
        withdraw: builder.mutation({
            query: (userData) => ({
              url: '/withdraw',
              method: 'POST',
              body: userData, 
            }),
        }),
        transfer: builder.mutation({
            query: (userData) => ({
              url: '/transfer',
              method: 'POST',
              body: userData, 
            }),
        }),
        logout: builder.mutation({
            query: (userData) => ({
              url: '/logout',
              method: 'POST',
              body: userData, 
            }),
        }),
        login: builder.mutation({
            query: (userData) => ({
              url: '/login',
              method: 'POST',
              body: userData, 
            }),
        }),
    }),
});

export const { useAddUserMutation, 
    useDepositMutation, 
    useWithdrawMutation,
    useTransferMutation,
    useLogoutMutation,
    useLoginMutation } = userRegister;