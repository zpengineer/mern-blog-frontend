import { baseApi } from 'redux/baseApi';

export const userApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getAuthor: builder.query({
      query: id => ({ url: `api/users/author/${id}` }),
      providesTags: ['user'],
    }),
    follow: builder.mutation({
      query: authorId => ({
        url: `api/users/follow/${authorId}`,
        method: 'PATCH',
      }),
      invalidatesTags: ['user'],
    }),
    unFollow: builder.mutation({
      query: authorId => ({
        url: `api/users/unfollow/${authorId}`,
        method: 'PATCH',
      }),
      invalidatesTags: ['user'],
    }),
    updateAvatar: builder.mutation({
      query: data => ({
        url: `api/users/avatars`,
        method: 'PATCH',
        body: data,
      }),

      invalidatesTags: ['avatar'],
    }),
  }),
});

export const {
  useFollowMutation,
  useUnFollowMutation,
  useGetAuthorQuery,
  useUpdateAvatarMutation,
} = userApi;
