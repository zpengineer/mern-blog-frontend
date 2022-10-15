import { baseApi } from 'redux/baseApi';

export const postsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    relevantPosts: builder.query({
      query: () => 'api/posts',
      providesTags: ['blog', 'avatar'],
    }),
    popularPosts: builder.query({
      query: () => 'api/posts/popular',
      providesTags: ['blog', 'avatar'],
    }),
    subscriptionPosts: builder.query({
      query: () => 'api/posts/subscription',
      providesTags: ['blog', 'avatar'],
    }),
    getOnePost: builder.query({
      query: id => ({ url: `api/posts/${id}` }),
      providesTags: ['blog'],
    }),
    getAllTags: builder.query({
      query: () => 'api/posts/tags',
      providesTags: ['blog'],
    }),
    getAllPostsByTag: builder.query({
      query: tag => `api/posts/tags/${tag}`,
      providesTags: ['blog'],
    }),
    searchPost: builder.query({
      query: value => `api/posts/search/?query=${value}`,
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
    updatePost: builder.mutation({
      query(data) {
        const { postId, post } = data;
        return {
          url: `api/posts/${postId}`,
          method: 'PUT',
          body: post,
        };
      },
      invalidatesTags: ['blog'],
    }),
    likePost: builder.mutation({
      query: id => ({
        url: `api/posts/like/${id}`,
        method: 'PATCH',
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
  useUpdatePostMutation,
  useSearchPostQuery,
  useSubscriptionPostsQuery,
  useLikePostMutation,
} = postsApi;
