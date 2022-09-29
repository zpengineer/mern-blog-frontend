import { baseApi } from 'redux/baseApi';

export const commentsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getPostComments: builder.query({
      query: postId => `api/comments/${postId}`,
      providesTags: ['comments'],
    }),
    getAllComments: builder.query({
      query: () => 'api/comments',
      providesTags: ['comments'],
    }),
    addComment: builder.mutation({
      query: ({ content, postId }) => ({
        url: `api/comments/${postId}`,
        method: 'POST',
        body: { content },
      }),
      invalidatesTags: ['comments'],
    }),
  }),
});

export const {
  useGetAllCommentsQuery,
  useGetPostCommentsQuery,
  useAddCommentMutation,
} = commentsApi;
