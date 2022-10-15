import { baseApi } from 'redux/baseApi';

export const commentsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getPostComments: builder.query({
      query: postId => `api/comments/${postId}`,
      providesTags: ['comments'],
    }),
    getAllComments: builder.query({
      query: () => 'api/comments',
      providesTags: ['comments', 'blog', 'avatar'],
    }),
    addComment: builder.mutation({
      query: ({ content, postId }) => ({
        url: `api/comments/${postId}`,
        method: 'POST',
        body: { content },
      }),
      invalidatesTags: ['comments'],
    }),
    likeComment: builder.mutation({
      query: postId => ({
        url: `api/comments/like/${postId}`,
        method: 'PATCH',
      }),
      invalidatesTags: ['comments'],
    }),
    dislikeComment: builder.mutation({
      query: postId => ({
        url: `api/comments/dislike/${postId}`,
        method: 'PATCH',
      }),
      invalidatesTags: ['comments'],
    }),
    deleteComment: builder.mutation({
      query: ({ id, postId }) => ({
        url: `api/comments/${id}`,
        method: 'DELETE',
        body: { postId },
      }),
      invalidatesTags: ['comments', 'blog'],
    }),
  }),
});

export const {
  useGetAllCommentsQuery,
  useGetPostCommentsQuery,
  useAddCommentMutation,
  useLikeCommentMutation,
  useDislikeCommentMutation,
  useDeleteCommentMutation,
} = commentsApi;
