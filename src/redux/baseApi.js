import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  tagTypes: ['user', 'blog', 'comments', 'avatar', 'views'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://mern-blog-backend-henna.vercel.app/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
