import { baseApi } from 'redux/baseApi';

export const postsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    relevantPosts: builder.query({
      query: () => 'api/posts',
      providesTags: ['blog'],
    }),
    popularPosts: builder.query({
      query: () => 'api/posts/popular',
      providesTags: ['blog'],
    }),
    getOnePost: builder.query({
      query: id => ({ url: `api/posts/${id}` }),
    }),
    getAllTags: builder.query({
      query: () => 'api/posts/tags',
      providesTags: ['blog'],
    }),
    getAllPostsByTag: builder.query({
      query: tag => `api/posts/tags/${tag}`,
      providesTags: ['blog'],
    }),
    addPost: builder.mutation({
      query: post => ({
        url: 'api/posts',
        method: 'POST',
        body: post,
      }),
      invalidatesTags: ['blog'],
    }),
    deletePost: builder.mutation({
      query: id => ({
        url: `api/posts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['blog'],
    }),
    addComment: builder.mutation({
      query: ({ content, postId }) => ({
        url: `api/posts/${postId}/comment`,
        method: 'POST',
        body: { content },
      }),
      invalidatesTags: ['blog'],
    }),
  }),
});

export const {
  useRelevantPostsQuery,
  usePopularPostsQuery,
  useGetOnePostQuery,
  useAddPostMutation,
  useDeletePostMutation,
  useGetAllTagsQuery,
  useGetAllPostsByTagQuery,
  useAddCommentMutation,
} = postsApi;
