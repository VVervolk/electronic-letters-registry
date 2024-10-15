import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const toastOptions = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
};

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8888/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  keepUnusedDataFor: 5,
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: 'users',
        method: 'GET',
      }),
    }),
    signUp: builder.mutation({
      query: (credentials) => ({
        url: 'users/signup',
        method: 'POST',
        body: credentials,
      }),
    }),
    logIn: builder.mutation({
      query: (credentials) => ({
        url: 'auth/login',
        method: 'POST',
        body: credentials,
      }),
      transformErrorResponse: () => {
        toast.error('Схоже помилка в поштовій скриньці або паролі!', toastOptions);
      },
    }),
    logOut: builder.mutation({
      query: () => ({
        url: 'auth/logout',
        method: 'POST',
      }),
      transformErrorResponse: () => {
        toast.error('Схоже щось пішло не так!', toastOptions);
      },
    }),
    getCurrentUser: builder.query({
      query: () => ({
        url: 'auth/current',
        method: 'GET',
      }),
      transformErrorResponse: () => {
        toast.error('Oops, something went wrong!', toastOptions);
      },
    }),
    getContacts: builder.query({
      query: () => ({
        url: 'contacts',
        method: 'GET',
      }),
      transformErrorResponse: () => {
        toast.error('Oops, something went wrong!', toastOptions);
      },
    }),
    addContact: builder.mutation({
      query: (credentials) => ({
        url: 'contacts',
        method: 'POST',
        body: credentials,
      }),
      transformErrorResponse: () => {
        toast.error('Oops, something went wrong!', toastOptions);
      },
    }),
    deleteContact: builder.mutation({
      query: (contactId) => ({
        url: `contacts/${contactId}`,
        method: 'DELETE',
      }),
    }),
    updateContact: builder.mutation({
      query: (credentials) => ({
        url: `contacts/${credentials.id}`,
        method: 'PATCH',
        body: { name: credentials.name, number: credentials.number },
      }),
    }),
  }),
});

export const {
  useSignUpMutation,
  useLogInMutation,
  useLogOutMutation,
  useAddContactMutation,
  useDeleteContactMutation,
  useUpdateContactMutation,
} = contactsApi;

export const { useGetContactsQuery, useGetCurrentUserQuery, useGetUsersQuery } = contactsApi;
